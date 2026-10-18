import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="h-16 border-b border-[#1e293b] bg-[#060910] px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3 font-bold text-lg">
          <span className="text-[#38bdf8]">CppMastery</span>
          <span className="bg-[#38bdf8]/10 text-[#38bdf8] text-xs px-2 py-0.5 rounded font-mono border border-[#38bdf8]/30">C++20</span>
        </div>
        <nav className="flex items-center gap-2">
          <Link href="/" className="px-3 py-1.5 rounded text-sm font-semibold bg-[#38bdf8] text-[#060910]">Dashboard</Link>
          <Link href="/learn/ch-01/les-01-01" className="px-3 py-1.5 rounded text-sm text-[#94a3b8] hover:text-white">Curriculum</Link>
          <Link href="/practice/q-01-01" className="px-3 py-1.5 rounded text-sm text-[#94a3b8] hover:text-white">Problem Workspace</Link>
          <Link href="/compiler" className="px-3 py-1.5 rounded text-sm text-[#94a3b8] hover:text-white">Compiler Playground</Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 p-8 max-w-6xl mx-auto w-full">
        <div className="bg-gradient-to-br from-[#0f1524] to-[#111827] border border-[#1e293b] rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Master C++ & DSA Step by Step 🚀</h1>
            <p className="text-[#94a3b8] max-w-2xl text-base leading-relaxed">
              From language fundamentals and memory architecture to advanced Data Structures, algorithms, and FAANG interview preparation. Features comprehensive Hinglish explanations, dry runs, and a real GCC online compiler.
            </p>
          </div>
          <Link
            href="/learn/ch-01/les-01-01"
            className="bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#060910] font-bold px-6 py-3 rounded-lg text-sm whitespace-nowrap transition-colors"
          >
            Start Learning Lesson 1 &rarr;
          </Link>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#0f1524] border border-[#1e293b] rounded-xl p-5">
            <span className="text-xs uppercase text-[#64748b] font-bold tracking-wider">Chapters</span>
            <div className="text-2xl font-extrabold mt-1 text-white">16 Chapters</div>
            <span className="text-xs text-[#94a3b8]">Complete roadmap</span>
          </div>
          <div className="bg-[#0f1524] border border-[#1e293b] rounded-xl p-5">
            <span className="text-xs uppercase text-[#64748b] font-bold tracking-wider">Curated Lessons</span>
            <div className="text-2xl font-extrabold mt-1 text-white">72+ Lessons</div>
            <span className="text-xs text-[#94a3b8]">With Hinglish explanations</span>
          </div>
          <div className="bg-[#0f1524] border border-[#1e293b] rounded-xl p-5">
            <span className="text-xs uppercase text-[#64748b] font-bold tracking-wider">Compiler Engine</span>
            <div className="text-2xl font-extrabold mt-1 text-[#10b981]">GCC 10.2.0</div>
            <span className="text-xs text-[#94a3b8]">Linux container execution</span>
          </div>
          <div className="bg-[#0f1524] border border-[#1e293b] rounded-xl p-5">
            <span className="text-xs uppercase text-[#64748b] font-bold tracking-wider">Interview DSA</span>
            <div className="text-2xl font-extrabold mt-1 text-[#f59e0b]">Top 50 Prep</div>
            <span className="text-xs text-[#94a3b8]">Dry runs & complex analysis</span>
          </div>
        </div>

        {/* Quick Launch Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/learn/ch-01/les-01-01" className="bg-[#0f1524] hover:bg-[#151d32] border border-[#1e293b] rounded-xl p-6 transition-all">
            <h3 className="font-bold text-lg mb-2 text-[#38bdf8]">1. Foundations of C++</h3>
            <p className="text-sm text-[#94a3b8] mb-4">Syntax, variables, RAM memory model, operators, fast I/O, and type casting.</p>
            <span className="text-xs font-semibold text-[#38bdf8]">Explore Chapter &rarr;</span>
          </Link>
          <Link href="/practice/q-14-01" className="bg-[#0f1524] hover:bg-[#151d32] border border-[#1e293b] rounded-xl p-6 transition-all">
            <h3 className="font-bold text-lg mb-2 text-[#e879f9]">2. DSA Patterns</h3>
            <p className="text-sm text-[#94a3b8] mb-4">Two Pointers, Sliding Window, Binary Search, Trees, Graphs, and Dynamic Programming.</p>
            <span className="text-xs font-semibold text-[#e879f9]">Solve Problems &rarr;</span>
          </Link>
          <Link href="/compiler" className="bg-[#0f1524] hover:bg-[#151d32] border border-[#1e293b] rounded-xl p-6 transition-all">
            <h3 className="font-bold text-lg mb-2 text-[#10b981]">3. Online C++ Compiler</h3>
            <p className="text-sm text-[#94a3b8] mb-4">Live C++ scratchpad with custom stdin input, test case verification, and Hinglish debugger.</p>
            <span className="text-xs font-semibold text-[#10b981]">Open Compiler &rarr;</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
