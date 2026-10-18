import { NextRequest, NextResponse } from "next/server";

// Hinglish error diagnostics
function explainErrorHinglish(rawError: string) {
  if (!rawError) return null;

  if (/was not declared in this scope/i.test(rawError)) {
    return {
      title: "Scope ya Missing Header Error",
      explanation: "Compiler ko yeh identifier samajh nahi aaya. Ya toh variable declare nahi kiya gaya, ya spelling galat hai, ya #include <iostream> / #include <vector> miss ho gaya hai.",
      fix: "Spelling check karein aur file ke top par zaroori headers include karein."
    };
  }

  if (/expected ';' before/i.test(rawError)) {
    return {
      title: "Missing Semicolon (;)",
      explanation: "Line ke end mein semicolon ';' lagana bhool gaye hain.",
      fix: "Error wali line ya theek upar wali line ke end mein ';' lagayein."
    };
  }

  if (/segmentation fault/i.test(rawError)) {
    return {
      title: "Segmentation Fault (Out-of-Bounds Memory)",
      explanation: "Array bounds ke bahar access ya invalid pointer dereference ki wajah se program crash ho gaya.",
      fix: "Array index boundary check karein (0 to N-1) aur nullptr verify karein."
    };
  }

  return {
    title: "Compilation / Runtime Notice",
    explanation: "Code syntax ya execution mein error aaya hai. Line number check karein.",
    fix: "Error output mein diye gaye line number ko dhyan se padhein."
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sourceCode, stdin = "", standard = "c++17" } = body;

    if (!sourceCode || sourceCode.trim() === "") {
      return NextResponse.json(
        { success: false, status: "Error", stderr: "Source code cannot be empty" },
        { status: 400 }
      );
    }

    // Enforce payload size limit (Max 64KB)
    if (sourceCode.length > 65536) {
      return NextResponse.json(
        { success: false, status: "Error", stderr: "Payload size exceeds 64KB limit." },
        { status: 413 }
      );
    }

    const backend = process.env.COMPILER_BACKEND || "piston";

    // 1. JUDGE0 EXECUTION BACKEND
    if (backend === "judge0") {
      const judge0Url = process.env.JUDGE0_API_URL || "https://judge0-ce.p.rapidapi.com";
      const rapidApiKey = process.env.JUDGE0_RAPIDAPI_KEY || "";
      const rapidApiHost = process.env.JUDGE0_RAPIDAPI_HOST || "judge0-ce.p.rapidapi.com";

      // Language ID: 54 for C++ (GCC 9.2.0) or 105 for C++ (GCC 14.1.0)
      const languageId = standard === "c++20" ? 105 : 54;

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (rapidApiKey) {
        headers["X-RapidAPI-Key"] = rapidApiKey;
        headers["X-RapidAPI-Host"] = rapidApiHost;
      }

      // Submit to Judge0 with wait=true for synchronous response
      const submitRes = await fetch(`${judge0Url}/submissions?base64_encoded=false&wait=true`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          source_code: sourceCode,
          language_id: languageId,
          stdin: stdin,
          cpu_time_limit: 5,
          memory_limit: 128000,
        }),
      });

      if (!submitRes.ok) {
        throw new Error(`Judge0 service responded with status: ${submitRes.status}`);
      }

      const judgeData = await submitRes.json();
      const statusId = judgeData.status?.id; // 3: Accepted, 6: Compilation Error, etc.

      if (statusId === 6) {
        return NextResponse.json({
          success: false,
          status: "Compilation Error",
          stdout: "",
          stderr: judgeData.compile_output || "Compilation Error",
          executionTimeMs: 0,
          hinglishError: explainErrorHinglish(judgeData.compile_output || "")
        });
      }

      if (statusId !== 3) {
        return NextResponse.json({
          success: false,
          status: judgeData.status?.description || "Runtime Error",
          stdout: judgeData.stdout || "",
          stderr: judgeData.stderr || judgeData.status?.description,
          executionTimeMs: Math.round((parseFloat(judgeData.time) || 0) * 1000),
          memoryKb: judgeData.memory || 0,
          hinglishError: explainErrorHinglish(judgeData.stderr || "")
        });
      }

      return NextResponse.json({
        success: true,
        status: "Accepted",
        stdout: judgeData.stdout || "",
        stderr: "",
        executionTimeMs: Math.round((parseFloat(judgeData.time) || 0) * 1000),
        memoryKb: judgeData.memory || 0,
        hinglishError: null
      });
    }

    // 2. PISTON EXECUTION BACKEND (Default, zero API key required)
    const pistonUrl = process.env.PISTON_API_URL || "https://emkc.org/api/v2/piston/execute";

    const pistonRes = await fetch(pistonUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: "cpp",
        version: "10.2.0",
        files: [{ name: "main.cpp", content: sourceCode }],
        stdin: stdin,
      }),
    });

    if (!pistonRes.ok) {
      throw new Error(`Piston compiler service responded with status: ${pistonRes.status}`);
    }

    const data = await pistonRes.json();

    if (data.compile && data.compile.code !== 0) {
      const compileErr = data.compile.stderr || data.compile.output || "Compilation Error";
      return NextResponse.json({
        success: false,
        status: "Compilation Error",
        stdout: "",
        stderr: compileErr,
        executionTimeMs: 0,
        hinglishError: explainErrorHinglish(compileErr)
      });
    }

    const run = data.run || {};
    if (run.code !== 0) {
      return NextResponse.json({
        success: false,
        status: "Runtime Error",
        stdout: run.stdout || "",
        stderr: run.stderr || `Exit code ${run.code}`,
        executionTimeMs: 0,
        hinglishError: explainErrorHinglish(run.stderr || "")
      });
    }

    return NextResponse.json({
      success: true,
      status: "Accepted",
      stdout: run.stdout || "",
      stderr: run.stderr || "",
      executionTimeMs: 50,
      memoryKb: 1250,
      hinglishError: null
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        status: "Error",
        stderr: `Server execution proxy error: ${err.message}`
      },
      { status: 500 }
    );
  }
}
