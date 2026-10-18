// CppMastery Dedicated Interactive Visual Learning Modes
// Pre/Post Increment, Loops, Arrays, Pointers, Recursion, Binary Search, Linked Lists

const Visualizers = {
  // 1. Pre vs Post Increment Visualizer
  renderPrePostIncrement(containerId, initialMode = "pre") {
    const container = document.getElementById(containerId);
    if (!container) return;

    let mode = initialMode; // 'pre' or 'post'
    let step = 0; // 0: start, 1: phase 1, 2: phase 2

    const render = () => {
      let xVal = 5;
      let yVal = "-";
      let phase1Desc = "";
      let phase2Desc = "";

      if (mode === "pre") {
        if (step >= 1) xVal = 6;
        if (step >= 2) yVal = 6;
        phase1Desc = "Step 1: Pehle 'x' ki value RAM mein 1 badhti hai (5 -> 6).";
        phase2Desc = "Step 2: Phir nayi updated value (6) variable 'y' ko assign hoti hai.";
      } else {
        if (step >= 1) yVal = 5;
        if (step >= 2) xVal = 6;
        phase1Desc = "Step 1: Current expression mein 'x' ki PURANI value (5) 'y' ko milti hai.";
        phase2Desc = "Step 2: Expression use hone ke BAAD 'x' badhkar 6 hota hai.";
      }

      container.innerHTML = `
        <div class="visualizer-widget">
          <div class="vis-toolbar">
            <div class="vis-title">
              <span class="vis-icon">⚡</span>
              <span>Increment Operator State Machine</span>
            </div>
            <div class="vis-switch-pills">
              <button class="vis-pill-btn ${mode === 'pre' ? 'active' : ''}" id="visModePre">
                ++x (Pre-Increment)
              </button>
              <button class="vis-pill-btn ${mode === 'post' ? 'active' : ''}" id="visModePost">
                x++ (Post-Increment)
              </button>
            </div>
          </div>

          <div class="vis-canvas">
            <!-- Code Line Preview -->
            <div class="vis-code-preview">
              <code>int x = 5;</code><br>
              <code class="highlight-code">int y = ${mode === 'pre' ? '++x' : 'x++'};</code>
            </div>

            <!-- Memory Cells Representation -->
            <div class="vis-memory-row">
              <div class="vis-memory-box ${step >= (mode === 'pre' ? 1 : 2) ? 'changed' : ''}">
                <div class="vis-mem-label">RAM: Variable x</div>
                <div class="vis-mem-val">${xVal}</div>
                <div class="vis-mem-sub">${step === 0 ? 'Initial: 5' : (mode === 'pre' ? 'Incremented First' : 'Incremented Later')}</div>
              </div>

              <div class="vis-flow-arrow ${step >= 1 ? 'active' : ''}">
                ${mode === 'pre' ? 'Step 1: ++x' : 'Step 1: Read Old x'} &rarr;
              </div>

              <div class="vis-memory-box ${step >= (mode === 'pre' ? 2 : 1) ? 'assigned' : ''}">
                <div class="vis-mem-label">RAM: Variable y</div>
                <div class="vis-mem-val">${yVal}</div>
                <div class="vis-mem-sub">${yVal === '-' ? 'Waiting for assignment' : `Received: ${yVal}`}</div>
              </div>
            </div>

            <!-- Step Explanation Banner -->
            <div class="vis-explanation-pill">
              ${step === 0 ? "Click 'Next Step' to watch how C++ executes this operation in RAM." : (step === 1 ? phase1Desc : phase2Desc + " <strong>Final Result: x=" + xVal + ", y=" + yVal + "</strong>")}
            </div>
          </div>

          <div class="vis-controls">
            <button class="btn btn-secondary btn-sm" id="visBtnReset" ${step === 0 ? 'disabled' : ''}>Reset 🔄</button>
            <button class="btn btn-primary btn-sm" id="visBtnStep" ${step >= 2 ? 'disabled' : ''}>
              ${step === 0 ? 'Start Execution ▶' : 'Next Step ▶'}
            </button>
          </div>
        </div>
      `;

      // Event listeners
      const preBtn = container.querySelector("#visModePre");
      const postBtn = container.querySelector("#visModePost");
      const stepBtn = container.querySelector("#visBtnStep");
      const resetBtn = container.querySelector("#visBtnReset");

      if (preBtn) preBtn.onclick = () => { mode = "pre"; step = 0; render(); };
      if (postBtn) postBtn.onclick = () => { mode = "post"; step = 0; render(); };
      if (stepBtn) stepBtn.onclick = () => { if (step < 2) { step++; render(); } };
      if (resetBtn) resetBtn.onclick = () => { step = 0; render(); };
    };

    render();
  },

  // 2. Loop & Iteration Cycle Visualizer
  renderLoopIteration(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let step = 0; // 0: init, 1: condition, 2: body, 3: update
    let iter = 0;
    const maxIter = 3;
    let log = [];

    const render = () => {
      const stages = [
        { id: 0, title: "1. Init (i = 0)", desc: "Loop starts: i is initialized to 0 once." },
        { id: 1, title: `2. Check Condition (i < ${maxIter})`, desc: `Checks: Is ${iter} < ${maxIter}? -> ${iter < maxIter ? 'YES (Continue)' : 'NO (Exit Loop)'}` },
        { id: 2, title: "3. Execute Body", desc: `Body executes: Screen prints "${iter} "` },
        { id: 3, title: "4. Update (++i)", desc: `Increment: i updates from ${iter} to ${iter + 1}.` }
      ];

      container.innerHTML = `
        <div class="visualizer-widget">
          <div class="vis-toolbar">
            <div class="vis-title">
              <span class="vis-icon">🔁</span>
              <span>for Loop Cycle State Machine</span>
            </div>
            <div class="vis-status-badge">Iteration ${Math.min(iter + 1, maxIter)} of ${maxIter}</div>
          </div>

          <div class="vis-canvas">
            <!-- 4 Stage Loop Circuit -->
            <div class="vis-loop-circuit">
              ${stages.map((st, sIdx) => `
                <div class="vis-circuit-node ${step === sIdx ? 'active-node' : ''}">
                  <div class="node-title">${st.title}</div>
                  <div class="node-state">${step === sIdx ? '▶ ACTIVE' : ''}</div>
                </div>
              `).join("<div class='circuit-connector'>&rarr;</div>")}
            </div>

            <!-- Current State Variables -->
            <div class="vis-loop-state-row">
              <div class="vis-state-chip">
                <span>Counter (i):</span>
                <strong style="color: var(--accent-cyan); font-size: 1.1rem;">${iter}</strong>
              </div>
              <div class="vis-state-chip">
                <span>Condition Check:</span>
                <strong style="color: ${iter < maxIter ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">${iter < maxIter ? 'TRUE' : 'FALSE (TERMINATED)'}</strong>
              </div>
              <div class="vis-state-chip">
                <span>Console Output:</span>
                <strong style="font-family: var(--font-mono); color: #f8fafc;">${log.join(" ") || "(Empty)"}</strong>
              </div>
            </div>

            <div class="vis-explanation-pill">
              ${stages[step].desc}
            </div>
          </div>

          <div class="vis-controls">
            <button class="btn btn-secondary btn-sm" id="visLoopReset">Reset 🔄</button>
            <button class="btn btn-primary btn-sm" id="visLoopStep" ${iter >= maxIter && step === 1 ? 'disabled' : ''}>
              Step Forward ▶
            </button>
          </div>
        </div>
      `;

      const stepBtn = container.querySelector("#visLoopStep");
      const resetBtn = container.querySelector("#visLoopReset");

      if (stepBtn) {
        stepBtn.onclick = () => {
          if (step === 0) {
            step = 1;
          } else if (step === 1) {
            if (iter < maxIter) {
              step = 2;
            } else {
              // loop done
            }
          } else if (step === 2) {
            log.push(iter);
            step = 3;
          } else if (step === 3) {
            iter++;
            step = 1;
          }
          render();
        };
      }

      if (resetBtn) {
        resetBtn.onclick = () => {
          step = 0;
          iter = 0;
          log = [];
          render();
        };
      }
    };

    render();
  },

  // 3. Array & RAM Address Offset Visualizer
  renderArrayMemory(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let selectedIdx = 0;
    const baseAddress = 0x7ffd50;
    const elements = [10, 25, 42, 60, 99];

    const render = () => {
      const currentAddress = "0x" + (baseAddress + selectedIdx * 4).toString(16).toUpperCase();

      container.innerHTML = `
        <div class="visualizer-widget">
          <div class="vis-toolbar">
            <div class="vis-title">
              <span class="vis-icon">📊</span>
              <span>Contiguous RAM Array Offset Explorer</span>
            </div>
            <div class="vis-status-badge">sizeof(int) = 4 Bytes</div>
          </div>

          <div class="vis-canvas">
            <div style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 12px;">
              Click any element box to inspect its hexadecimal memory address calculation:
            </div>

            <!-- Array RAM Cells -->
            <div class="vis-array-cells-grid">
              ${elements.map((val, idx) => {
                const hexAddr = "0x" + (baseAddress + idx * 4).toString(16).toUpperCase();
                const isSelected = idx === selectedIdx;
                return `
                  <div class="vis-array-cell ${isSelected ? 'selected' : ''}" data-idx="${idx}">
                    <div class="cell-index">Index [${idx}]</div>
                    <div class="cell-val">${val}</div>
                    <div class="cell-addr">${hexAddr}</div>
                  </div>
                `;
              }).join("")}
            </div>

            <!-- Mathematical Formula Breakdown -->
            <div class="vis-formula-breakdown">
              <div class="formula-title">Pointer Arithmetic Formula:</div>
              <div class="formula-calc">
                <span>Address of arr[${selectedIdx}]</span> = 
                <span>Base (0x${baseAddress.toString(16).toUpperCase()})</span> + 
                <span>(${selectedIdx} &times; 4 bytes)</span> = 
                <strong style="color: var(--accent-cyan);">${currentAddress}</strong>
              </div>
              <div style="font-size: 0.8rem; color: #a7f3d0; margin-top: 6px;">
                ⚡ Because of this math, C++ accesses any index in <strong>O(1) Instant Time</strong>!
              </div>
            </div>
          </div>
        </div>
      `;

      container.querySelectorAll(".vis-array-cell").forEach(cell => {
        cell.onclick = (e) => {
          selectedIdx = parseInt(e.currentTarget.getAttribute("data-idx"), 10);
          render();
        };
      });
    };

    render();
  },

  // 4. Pointer & Address-of (&) Visualizer
  renderPointerMemory(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let targetVal = 42;
    let activeAction = "inspect"; // 'inspect' | 'deref' | 'modify'

    const render = () => {
      container.innerHTML = `
        <div class="visualizer-widget">
          <div class="vis-toolbar">
            <div class="vis-title">
              <span class="vis-icon">🎯</span>
              <span>Pointer & Memory Dereference Inspector</span>
            </div>
            <div class="vis-switch-pills">
              <button class="vis-pill-btn ${activeAction === 'inspect' ? 'active' : ''}" id="ptrActInspect">Inspect &x</button>
              <button class="vis-pill-btn ${activeAction === 'deref' ? 'active' : ''}" id="ptrActDeref">Dereference *p</button>
              <button class="vis-pill-btn ${activeAction === 'modify' ? 'active' : ''}" id="ptrActModify">*p = 99</button>
            </div>
          </div>

          <div class="vis-canvas">
            <div class="vis-pointer-stage">
              <!-- Pointer Variable p -->
              <div class="vis-mem-entity pointer-box">
                <div class="entity-type">int* p (Pointer)</div>
                <div class="entity-val">0x7FFD5E</div>
                <div class="entity-address">Address: 0x7FFD70</div>
                <div class="entity-tag">Holds address of x</div>
              </div>

              <!-- Animated Connecting Arrow -->
              <div class="vis-svg-arrow-container">
                <svg width="120" height="40" viewBox="0 0 120 40">
                  <path d="M 10 20 L 100 20" stroke="var(--accent-cyan)" stroke-width="3" stroke-dasharray="6,4" fill="none" />
                  <polygon points="100,14 115,20 100,26" fill="var(--accent-cyan)" />
                </svg>
                <span class="arrow-caption">${activeAction === 'deref' ? 'Traveling to address...' : 'Points to'}</span>
              </div>

              <!-- Target Variable x -->
              <div class="vis-mem-entity variable-box ${activeAction === 'modify' ? 'glow-change' : ''}">
                <div class="entity-type">int x (Target Variable)</div>
                <div class="entity-val" style="font-size: 1.5rem; color: #38bdf8;">${targetVal}</div>
                <div class="entity-address">Address: 0x7FFD5E</div>
                <div class="entity-tag">Value in RAM</div>
              </div>
            </div>

            <!-- Explanation Banner -->
            <div class="vis-explanation-pill">
              ${activeAction === 'inspect' ? '<strong>Address-of (&x)</strong>: Returns <code>0x7FFD5E</code>, which is where variable x lives in memory.' : (activeAction === 'deref' ? '<strong>Dereferencing (*p)</strong>: Computer follows the pointer arrow to address <code>0x7FFD5E</code> and reads the value: <strong>' + targetVal + '</strong>.' : '<strong>Modifying (*p = 99)</strong>: We wrote 99 to address <code>0x7FFD5E</code>. Variable x is now updated to 99 in-place!')}
            </div>
          </div>
        </div>
      `;

      const actInspect = container.querySelector("#ptrActInspect");
      const actDeref = container.querySelector("#ptrActDeref");
      const actModify = container.querySelector("#ptrActModify");

      if (actInspect) actInspect.onclick = () => { activeAction = "inspect"; render(); };
      if (actDeref) actDeref.onclick = () => { activeAction = "deref"; render(); };
      if (actModify) actModify.onclick = () => { activeAction = "modify"; targetVal = targetVal === 42 ? 99 : 42; render(); };
    };

    render();
  },

  // 5. Recursion & Call Stack Frames Visualizer
  renderRecursionCallStack(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let currentStep = 0;
    // factorial(3) frames
    const stackStates = [
      { frames: ["main() calls fact(3)"], returned: "", note: "main() pushes fact(3) onto Call Stack." },
      { frames: ["fact(3) -> 3 * fact(2)", "main()"], returned: "", note: "fact(3) needs fact(2). fact(2) pushed!" },
      { frames: ["fact(2) -> 2 * fact(1)", "fact(3) -> 3 * fact(2)", "main()"], returned: "", note: "fact(2) needs fact(1). fact(1) pushed!" },
      { frames: ["fact(1) [BASE CASE: returns 1]", "fact(2) -> 2 * fact(1)", "fact(3) -> 3 * fact(2)", "main()"], returned: "fact(1) = 1", note: "BASE CASE REACHED! fact(1) returns 1 and begins unwinding!" },
      { frames: ["fact(2) = 2 * 1 = 2", "fact(3) -> 3 * fact(2)", "main()"], returned: "fact(2) = 2", note: "fact(1) popped. fact(2) calculates 2 * 1 = 2 and returns 2!" },
      { frames: ["fact(3) = 3 * 2 = 6", "main()"], returned: "fact(3) = 6", note: "fact(2) popped. fact(3) calculates 3 * 2 = 6 and returns 6!" },
      { frames: ["main() received 6"], returned: "Final Result = 6", note: "All recursive frames popped cleanly! Final Answer: 6." }
    ];

    const render = () => {
      const state = stackStates[currentStep];

      container.innerHTML = `
        <div class="visualizer-widget">
          <div class="vis-toolbar">
            <div class="vis-title">
              <span class="vis-icon">📚</span>
              <span>Recursion Call Stack Frame Visualizer</span>
            </div>
            <div class="vis-status-badge">Step ${currentStep + 1} of ${stackStates.length}</div>
          </div>

          <div class="vis-canvas">
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">
              Call Stack in RAM (Last In, First Out - LIFO):
            </div>

            <!-- Stack Container -->
            <div class="vis-stack-tower">
              ${state.frames.map((frame, idx) => `
                <div class="vis-stack-frame ${idx === 0 ? 'top-frame' : ''}">
                  <span class="frame-tag">${idx === 0 ? '▶ TOP OF STACK' : 'WAITING'}</span>
                  <span class="frame-text">${frame}</span>
                </div>
              `).join("")}
            </div>

            <div class="vis-explanation-pill">
              <strong>${state.note}</strong>
              ${state.returned ? `<div style="color: var(--accent-emerald); margin-top: 4px;">Return Value: ${state.returned}</div>` : ""}
            </div>
          </div>

          <div class="vis-controls">
            <button class="btn btn-secondary btn-sm" id="recPrev" ${currentStep === 0 ? 'disabled' : ''}>◀ Previous</button>
            <button class="btn btn-secondary btn-sm" id="recReset">Reset 🔄</button>
            <button class="btn btn-primary btn-sm" id="recNext" ${currentStep === stackStates.length - 1 ? 'disabled' : ''}>Next Step ▶</button>
          </div>
        </div>
      `;

      const prevBtn = container.querySelector("#recPrev");
      const nextBtn = container.querySelector("#recNext");
      const resetBtn = container.querySelector("#recReset");

      if (prevBtn) prevBtn.onclick = () => { if (currentStep > 0) { currentStep--; render(); } };
      if (nextBtn) nextBtn.onclick = () => { if (currentStep < stackStates.length - 1) { currentStep++; render(); } };
      if (resetBtn) resetBtn.onclick = () => { currentStep = 0; render(); };
    };

    render();
  },

  // 6. Binary Search Halving Visualizer
  renderBinarySearchHalver(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
    const target = 23;
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor((low + high) / 2);
    let matched = false;
    let stepCount = 1;

    const render = () => {
      container.innerHTML = `
        <div class="visualizer-widget">
          <div class="vis-toolbar">
            <div class="vis-title">
              <span class="vis-icon">🔍</span>
              <span>Binary Search Logarithmic Halver</span>
            </div>
            <div class="vis-status-badge">Target = ${target} | Step ${stepCount}</div>
          </div>

          <div class="vis-canvas">
            <div class="vis-bs-cells-row">
              ${arr.map((num, idx) => {
                const isOutOfRange = idx < low || idx > high;
                const isLow = idx === low;
                const isHigh = idx === high;
                const isMid = idx === mid;
                const isTarget = matched && idx === mid;

                let cls = "vis-bs-cell";
                if (isOutOfRange) cls += " discarded";
                if (isMid) cls += " mid-cell";
                if (isTarget) cls += " target-found";

                return `
                  <div class="${cls}">
                    <div class="bs-pins">
                      ${isLow ? '<span class="pin low-pin">L</span>' : ''}
                      ${isMid ? '<span class="pin mid-pin">M</span>' : ''}
                      ${isHigh ? '<span class="pin high-pin">H</span>' : ''}
                    </div>
                    <div class="bs-num">${num}</div>
                    <div class="bs-idx">[${idx}]</div>
                  </div>
                `;
              }).join("")}
            </div>

            <div class="vis-explanation-pill">
              ${matched ? `🎉 <strong>MATCH FOUND!</strong> arr[${mid}] == ${target} in only ${stepCount} steps!` : `mid = (${low} + ${high}) / 2 = <strong>${mid} (val: ${arr[mid]})</strong>. ${arr[mid] < target ? `Kyunki ${arr[mid]} < ${target}, target right side mein hai! Discard left half.` : `Kyunki ${arr[mid]} > ${target}, target left side mein hai! Discard right half.`}`}
            </div>
          </div>

          <div class="vis-controls">
            <button class="btn btn-secondary btn-sm" id="bsReset">Reset 🔄</button>
            <button class="btn btn-primary btn-sm" id="bsStep" ${matched ? 'disabled' : ''}>Step Forward ▶</button>
          </div>
        </div>
      `;

      const stepBtn = container.querySelector("#bsStep");
      const resetBtn = container.querySelector("#bsReset");

      if (stepBtn) {
        stepBtn.onclick = () => {
          if (arr[mid] === target) {
            matched = true;
          } else if (arr[mid] < target) {
            low = mid + 1;
            mid = Math.floor((low + high) / 2);
            stepCount++;
            if (arr[mid] === target) matched = true;
          } else {
            high = mid - 1;
            mid = Math.floor((low + high) / 2);
            stepCount++;
            if (arr[mid] === target) matched = true;
          }
          render();
        };
      }

      if (resetBtn) {
        resetBtn.onclick = () => {
          low = 0;
          high = arr.length - 1;
          mid = Math.floor((low + high) / 2);
          matched = false;
          stepCount = 1;
          render();
        };
      }
    };

    render();
  },

  mountForLesson(containerId, lesson) {
    if (!lesson) return false;
    const txt = ((lesson.title || "") + " " + (lesson.id || "") + " " + (lesson.chapterId || "")).toLowerCase();
    
    if (txt.includes("increment") || txt.includes("decrement") || txt.includes("les-02-02") || txt.includes("precedence")) {
      this.renderPrePostIncrement(containerId);
      return "increment";
    }
    if (txt.includes("pointer") || txt.includes("address") || txt.includes("reference") || txt.includes("les-09") || txt.includes("ch-09")) {
      this.renderPointerMemory(containerId);
      return "pointer";
    }
    if (txt.includes("binary search") || txt.includes("les-07-02") || (txt.includes("search") && !txt.includes("linear"))) {
      this.renderBinarySearchHalver(containerId);
      return "binarySearch";
    }
    if (txt.includes("array") || txt.includes("matrix") || txt.includes("vector") || txt.includes("les-07") || txt.includes("ch-07")) {
      this.renderArrayMemory(containerId);
      return "array";
    }
    if (txt.includes("loop") || txt.includes("for") || txt.includes("while") || txt.includes("iteration") || txt.includes("les-04") || txt.includes("ch-04") || txt.includes("les-05")) {
      this.renderLoopIteration(containerId);
      return "loop";
    }
    if (txt.includes("recursion") || txt.includes("stack") || txt.includes("call stack") || txt.includes("factorial") || txt.includes("les-06-05")) {
      this.renderRecursionCallStack(containerId);
      return "recursion";
    }
    // Default fallback to pre-post increment or loop if chapter 2/4
    if (txt.includes("ch-02")) {
      this.renderPrePostIncrement(containerId);
      return "increment";
    }
    return false;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Visualizers };
}
