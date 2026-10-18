# CppMastery - Complete Interactive C++ & DSA Learning Platform

> A production-ready, responsive, professional learning platform for mastering modern C++ (C++17/C++20) from ground zero to advanced Data Structures, Algorithms, and FAANG technical interview preparation. Feels like an interactive personal 1-on-1 C++ tutor, not a static textbook!

---

## 🌟 Key Interactive Enhancements

### 1. Conversational Hinglish Explanations (Zero-Jargon Basics)
- Every concept is explained from the absolute ground up in natural, conversational Hinglish.
- **Why Needed** sections highlight the real-world purpose of every feature before diving into syntax.
- **Explicit Comparison Models**: Pre vs Post Increment (`++x` vs `x++`) explained with real-life prepaid vs postpaid mobile analogies, visual memory flowcharts, and separate code demonstrations.
- Technical terminology (`lvalue`, `rvalue`, `scope`, `dereference`, `stack`, `heap`) is clearly explained in simple terms before being used.

### 2. Interactive Step-by-Step Code Execution Visualizer
- Integrated directly inside lessons!
- Highlights the currently active line of code.
- Displays a **Live Variable Memory Inspector** showing exact variable states in RAM after every line.
- Features **Next Step ▶**, **Previous Step ◀**, and **Reset 🔄** controls.
- Provides friendly, conversational explanations after every operation.

### 3. Interactive "Predict-the-Output" Challenges
- Exercises with instant verification and detailed feedback before moving to code examples.
- Tests common tricky areas (e.g., pre/post increment combinations, integer division truncation, logical short-circuiting).

### 4. Interactive Topic Quizzes with Scoring & Retries
- Each topic features a comprehensive quiz covering Multiple-Choice, Output Prediction, Debugging, and True/False questions.
- Answers are withheld until an option is selected.
- Provides instant color-coded feedback and detailed explanations for why options are right or wrong.
- Computes percentage score (e.g. `Score: 3/3 (100%) - Perfect Score! 🌟`) and allows infinite retries.
- Persists quiz scores per lesson in `StorageService` and surfaces them in the Revision Hub.

### 5. Modern 3-Column Desktop Layout
- **Left Column**: Collapsible 16-chapter syllabus explorer with completion checkmarks.
- **Center Column**: Main interactive learning arena with clear spacing, formatted code blocks, and bottom Prev/Next navigation.
- **Right Column (Sticky Rail)**:
  - **Topic Mastery Card**: Live completion status and Quiz score badge.
  - **Quick Jump Navigator**: One-click jump to Theory, Visualizer, Code Walkthroughs, Analogy, and Quiz.
  - **Core Concept Pills**: Relevant topic tags.
  - **Quick Action**: "Open Scratchpad ⚡".

---

## 📚 Complete 16-Chapter Curriculum
1. **C++ Fundamentals & Environment**: Compiler pipeline (Preprocessing, Compilation, Assembly, Linking), standard boilerplate anatomy of `main()`, Fast I/O (`ios_base::sync_with_stdio`), variables, data types, RAM layout, constants (`const`, `constexpr`, `#define`), and `static_cast`.
2. **Operators & Expressions**: Arithmetic, pre vs post-increment deep dive (`++x` vs `x++`), relational, short-circuit logical evaluation, bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`), and operator precedence.
3. **Conditionals & Decision Making**: `if`, `if-else`, nested conditionals, `else-if` ladder, `switch-case` with fallthrough rules, and the `==` vs `=` assignment trap.
4. **Loops & Iteration**: `for`, `while`, `do-while`, nested loops, loop counters, off-by-one errors, and `break` / `continue`.
5. **Pattern Printing & Number Problems**: Coordinate geometry mental model, inverted hollow pyramids, butterflies, digit extraction, primes, and Euclidean GCD.
6. **Functions & Recursion Foundations**: Pass-by-value vs pass-by-reference (`&`), `const &` optimizations, call stack mechanics, base cases, and recurrence relations.
7. **Arrays, Multidimensional Arrays & Sorting**: Contiguous memory, base address offset formulas, Linear & Binary Search, Bubble, Selection, Insertion, Merge Sort, and Quick Sort.
8. **Strings & Character Sequences**: C-style strings (`\0` null terminator) vs modern `std::string`, substring methods, and anagram algorithms.
9. **Pointers, References & Dynamic Memory**: Address-of (`&`), dereference (`*`), pointer arithmetic, heap vs stack memory, `new`, `delete`, memory leaks, and `nullptr`.
10. **Object-Oriented Programming (OOP)**: Classes, constructors, destructors, encapsulation, inheritance types, runtime polymorphism (`virtual` functions, VTable/VPTR), and pure virtual interfaces.
11. **Standard Template Library (STL)**: `std::vector`, `std::pair`, `std::stack`, `std::queue`, `std::priority_queue`, `std::set`, `std::map`, `std::unordered_map`, and STL algorithms (`std::sort`, `std::lower_bound`).
12. **Time & Space Complexity**: Big-O, Omega, Theta, loop step-counting, and Master Theorem.
13. **Data Structures Mastery (DSA)**: Linked lists, stacks, queues, binary trees, binary search trees (BST), heaps, and graph BFS/DFS.
14. **Algorithm Problem-Solving Patterns**: Two Pointers, Sliding Window, Prefix Sum, Binary Search on Answer, Greedy, Backtracking, Dynamic Programming (1D & 2D DP), and Graph algorithms.
15. **Modern C++ & Advanced Features**: Templates, exception safety (`try`/`catch`), file I/O (`ifstream`/`ofstream`), lambdas, Smart Pointers (`unique_ptr`, `shared_ptr`, `weak_ptr`), and Move semantics (`std::move`).
16. **System Projects & Interview Prep**: Full Banking System project, Custom Vector implementation, Top 50 C++ interview questions, and technical whiteboard round strategies.

---

### 💻 Fully Functional C++ Online Compiler & Workspace
- **Real Execution**: Integrated with the public Piston Linux GCC (v10.2.0) API and Judge0 CE for true compilation and execution. Zero fake outputs!
- **Custom Stdin**: Test interactive code that takes keyboard input via `std::cin`.
- **Multiple Test Cases**: Validates student solutions against multiple test cases, reporting Passed, Wrong Answer, Compilation Error, or Runtime Error.
- **Hinglish Compiler Debugger**: Automatically translates cryptic GCC errors (e.g. `was not declared in this scope`, `segmentation fault`, `expected ';' before`, `control reaches end of non-void function`) into easy-to-understand Hinglish explanations and fix tips!
- **Progressive Hints**: 3-step progressive hints (Hint 1 -> Hint 2 -> Hint 3) so students can think before revealing.
- **Step-by-Step Algorithms & Dry Runs**: Execution tables showing iteration-by-iteration variable states.
- **Automatic Code Drafts**: Saves code drafts in `localStorage` per problem so progress is never lost.

---

### 📊 Dashboard & Progress Persistence
- **Learning Streak**: Daily streak tracking based on active coding dates.
- **Problem & Lesson Tracking**: Completed lessons, attempted questions, and solved questions.
- **Chapter Completion Rings**: Real-time visual progress percentage across all 16 chapters.
- **Bookmarks & Revision Hub**: Star lessons or problems to review later, plus an automatic Revision Queue for questions with failed attempts and a dedicated Topic Quizzes & Scores scorecard!
- **JSON Backup**: Export and Import full progress data with one click.

---

## 🚀 How to Run the Platform

### Option A: Instant Zero-Install Run (Recommended for Immediate Use)
Because the platform includes a self-contained web application, you can run it immediately without installing any build tools:

1. Navigate to the project directory:
   `c:\Users\Deepak\OneDrive\Desktop\New folder\`
2. Double-click **`index.html`** to open it directly in Google Chrome, Microsoft Edge, Firefox, or Brave.
   *Or serve via any lightweight local server (e.g., VS Code Live Server or `python -m http.server 8000`).*
3. You will immediately have access to all 16 chapters, deep lessons, question bank, Monaco-style editor, and live GCC compiler execution!

---

### Option B: Next.js + TypeScript Fullstack Application
The project also contains a complete modern Next.js 14 App Router project in the `next-app/` folder:

```bash
cd next-app

# 1. Install dependencies
npm install

# 2. Configure Environment variables (Optional for Judge0, Piston works out-of-the-box)
cp .env.example .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the Next.js application.

---

## 🔒 Security & Compiler Configuration

### Piston C++ Backend (Default, Active)
- **Endpoint**: `https://emkc.org/api/v2/piston/execute`
- **Compiler**: GCC 10.2.0 on Linux sandbox
- **Setup Required**: **Zero setup required**. Runs out-of-the-box for all users.
- **Capabilities**: Supports `cin`, `cout`, `<bits/stdc++.h>`, STL containers, algorithms, and multi-file code.

### Judge0 Integration (Optional)
If you prefer your own Judge0 CE or self-hosted instance:
1. Open `next-app/.env.example` and rename to `next-app/.env.local`.
2. Set:
   ```env
   COMPILER_BACKEND=judge0
   JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
   JUDGE0_RAPIDAPI_KEY=your_key_here
   ```
3. Secret keys remain strictly on the server-side Next.js route (`/api/compile`) and are never exposed to the client browser.

---

## 📂 Project Directory Structure

```
c:\Users\Deepak\OneDrive\Desktop\New folder\
├── index.html                  # Instant interactive web learning platform
├── README.md                   # Complete documentation, setup & verification guide
├── css/
│   └── styles.css              # Dark developer-tool theme, typography, split IDE layout
├── js/
│   ├── chaptersData.js         # 16 complete chapters with metadata and syllabus roadmap
│   ├── lessonsData.js          # Core Hinglish lessons, visual models & quizzes
│   ├── lessonsDataPart1Ext.js  # Chapter 1 extended lessons (main anatomy, cin/cout, data types, const, static_cast)
│   ├── lessonsDataPart2.js     # Chapters 2, 3, 4 extensions & Chapter 5 Pattern Printing masterclass
│   ├── lessonsDataPart3.js     # Chapters 6, 7, 8, 10 (OOP), 11 (STL), 12 (Complexity Analysis)
│   ├── lessonsDataPart4.js     # Chapters 13 (DSA), 14 (Sliding Window), 15 (Smart Pointers), 16 (Interviews)
│   ├── questionsData.js        # Core curated question bank with progressive hints & dry runs
│   ├── questionsDataPart2.js   # Expanded questions: Bitwise swap, Euclid GCD, Diamonds, Anagrams, DP
│   ├── questionsDataPart3.js   # Predict output, find error debugging, Linked list reversal, Trapping rain water
│   ├── compilerService.js      # Live C++ execution engine (Piston GCC) with Hinglish error debugger & offline fallback
│   ├── storage.js              # LocalStorage persistence, streak tracking, bookmarks, quiz scores, revision
│   └── app.js                  # Dynamic lesson generator, stepper controller, search modal, IDE split views
└── next-app/                   # Fullstack Next.js 14 + TypeScript + Tailwind project
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── next.config.js
    ├── .env.example
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx            # Next.js Dashboard
    │   ├── globals.css
    │   └── api/
    │       └── compile/
    │           └── route.ts    # Secure backend execution proxy for Judge0 / Piston
    └── lib/
        └── types.ts            # TypeScript interfaces for curriculum & execution
```

---

## 🧪 Verification & Acceptance Checklist

| Feature | Status | Verification Method |
|---|---|---|
| 16 Complete Chapters | ✅ Implemented | Explore syllabus in sidebar and dashboard |
| In-depth Hinglish Lessons | ✅ Implemented | Open Lesson 1.1, 1.2, 1.3, 2.1, 2.3, 7.1, 9.1, 11.2, 14.1 |
| Real GCC Online Compiler | ✅ Implemented | Click "Run Code" on any problem or scratchpad |
| Custom Stdin Support | ✅ Implemented | Tested with `cin >> a >> b` on sample inputs |
| Test-Case Evaluator | ✅ Implemented | Click "Submit Code" to verify Passed/Failed test status |
| Hinglish Error Explainer | ✅ Implemented | Triggers on syntax error, missing semicolon, or segfault |
| Progressive Hints | ✅ Implemented | Unfolds Hint 1, Hint 2, and Hint 3 sequentially |
| Line-by-Line & Dry Runs | ✅ Implemented | Step-by-step table on problem solution view |
| Daily Streak & Progress | ✅ Implemented | Persisted in LocalStorage across page reloads |
| Global Search (`Ctrl+K`) | ✅ Implemented | Press `Ctrl+K` to search across all lessons & questions |
| Revision Hub | ✅ Implemented | Starred lessons, bookmarked questions, and failed retry queue |
