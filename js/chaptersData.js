// CppMastery Curriculum - 16 Comprehensive Chapters
const CHAPTERS_DATA = [
  {
    id: "ch-01",
    number: 1,
    title: "C++ Fundamentals & Environment",
    subtitle: "Compiler, Syntax, I/O, Variables, Data Types & Type Conversion",
    icon: "code",
    color: "#38bdf8",
    badge: "Beginner",
    estimatedHours: 4,
    description: "C++ ki duniya mein swagat hai! Seekhiye compiler kaise kaam karta hai, apna pehla program likhiye, Fast I/O, aur memory data types ke fundamentals samjhiye.",
    lessons: [
      { id: "les-01-01", title: "Introduction to C++ & Compilation Pipeline", readTime: "12 min" },
      { id: "les-01-02", title: "Structure of a C++ Program & Anatomy of main()", readTime: "10 min" },
      { id: "les-01-03", title: "Console Input & Output (cin, cout & Fast I/O)", readTime: "14 min" },
      { id: "les-01-04", title: "Variables, Identifiers & Memory Storage", readTime: "15 min" },
      { id: "les-01-05", title: "Primitive Data Types & Memory Sizes (int, float, char, etc.)", readTime: "16 min" },
      { id: "les-01-06", title: "Constants (const vs #define vs constexpr)", readTime: "10 min" },
      { id: "les-01-07", title: "Type Conversion & Casting (Implicit vs static_cast)", readTime: "12 min" }
    ]
  },
  {
    id: "ch-02",
    number: 2,
    title: "Operators & Expressions",
    subtitle: "Arithmetic, Relational, Logical, Bitwise & Precedence",
    icon: "sliders",
    color: "#06b6d4",
    badge: "Beginner",
    estimatedHours: 3.5,
    description: "Understand how computers evaluate mathematical expressions, logic gates, binary bitwise manipulations, and operator associativity order.",
    lessons: [
      { id: "les-02-01", title: "Arithmetic & Assignment Operators (Increment & Decrement deep dive)", readTime: "12 min" },
      { id: "les-02-02", title: "Relational & Logical Operators (Short-Circuit Evaluation)", readTime: "14 min" },
      { id: "les-02-03", title: "Bitwise Operators (&, |, ^, ~, <<, >>) & Binary Tricks", readTime: "18 min" },
      { id: "les-02-04", title: "Operator Precedence & Associativity Table", readTime: "10 min" }
    ]
  },
  {
    id: "ch-03",
    number: 3,
    title: "Conditionals & Decision Making",
    subtitle: "if-else, Nested if, Else-if Ladder & Switch-Case",
    icon: "git-branch",
    color: "#60a5fa",
    badge: "Beginner",
    estimatedHours: 3,
    description: "Decision making ke rules samjhiye - kaise program alag conditions ke hisaab se execution branch karta hai.",
    lessons: [
      { id: "les-03-01", title: "if and if-else Statements: Conditional Flow", readTime: "12 min" },
      { id: "les-03-02", title: "else-if Ladder & Ternary Operator (condition ? expr1 : expr2)", readTime: "12 min" },
      { id: "les-03-03", title: "Nested Conditions & Logical Grouping", readTime: "10 min" },
      { id: "les-03-04", title: "switch-case Statement, Fallthrough & break Trap", readTime: "14 min" }
    ]
  },
  {
    id: "ch-04",
    number: 4,
    title: "Loops & Iteration",
    subtitle: "for, while, do-while, Nested Loops & Jump Statements",
    icon: "repeat",
    color: "#818cf8",
    badge: "Beginner",
    estimatedHours: 4,
    description: "Repetitive tasks ko automate karna seekhiye. Loop counters, termination conditions, nested iterations, aur infinite loops se bachna.",
    lessons: [
      { id: "les-04-01", title: "for Loop Architecture: Init, Condition & Update", readTime: "14 min" },
      { id: "les-04-02", title: "while & do-while Loops: Entry-Controlled vs Exit-Controlled", readTime: "12 min" },
      { id: "les-04-03", title: "Nested Loops & Matrix Iteration Mental Model", readTime: "15 min" },
      { id: "les-04-04", title: "Control Jumps: break, continue & Infinite Loop Traps", readTime: "12 min" }
    ]
  },
  {
    id: "ch-05",
    number: 5,
    title: "Pattern Printing & Number Problems",
    subtitle: "Coordinate Geometry Thinking, Math Algorithms & Logic Building",
    icon: "grid",
    color: "#a78bfa",
    badge: "Easy",
    estimatedHours: 5,
    description: "Logic building ka gold standard! Star patterns, pyramid math, digit extraction, primes, GCD, and Armstrong numbers.",
    lessons: [
      { id: "les-05-01", title: "The Master Blueprint for Pattern Printing (Row & Column Mapping)", readTime: "16 min" },
      { id: "les-05-02", title: "Complex Patterns: Diamonds, Butterflies & Number Pyramids", readTime: "18 min" },
      { id: "les-05-03", title: "Number Theory 101: Digit Extraction, Reverse & Palindromes", readTime: "15 min" },
      { id: "les-05-04", title: "Primes, Sieve of Eratosthenes & Euclidean GCD/LCM", readTime: "16 min" }
    ]
  },
  {
    id: "ch-06",
    number: 6,
    title: "Functions & Recursion Foundations",
    subtitle: "Modular Code, Pass by Value/Reference, Call Stack & Recursion",
    icon: "box",
    color: "#c084fc",
    badge: "Intermediate",
    estimatedHours: 5.5,
    description: "Reusability and Call Stack mechanics. Master pass-by-reference and learn recursion through base cases and recursive relations.",
    lessons: [
      { id: "les-06-01", title: "Functions Architecture, Signatures & Return Types", readTime: "14 min" },
      { id: "les-06-02", title: "Pass by Value vs Pass by Reference (&) & Const References", readTime: "16 min" },
      { id: "les-06-03", title: "Default Arguments, Function Overloading & Inline Functions", readTime: "12 min" },
      { id: "les-06-04", title: "Recursion Masterclass: Call Stack, Base Case & Recurrence", readTime: "20 min" },
      { id: "les-06-05", title: "Classic Recursion: Factorial, Fibonacci & Tower of Hanoi", readTime: "18 min" }
    ]
  },
  {
    id: "ch-07",
    number: 7,
    title: "Arrays, Multidimensional Arrays & Sorting",
    subtitle: "Contiguous Memory, Searching Algorithms & Sorting Benchmarks",
    icon: "layers",
    color: "#38bdf8",
    badge: "Intermediate",
    estimatedHours: 6,
    description: "Data structure ka pehla kadam! Array memory addresses, Linear & Binary Search, Bubble, Selection, Insertion, Merge & Quick sort.",
    lessons: [
      { id: "les-07-01", title: "1D Arrays: Contiguous Memory Layout & Bounds Checking", readTime: "15 min" },
      { id: "les-07-02", title: "Searching Algorithms: Linear Search vs Binary Search (O(log N))", readTime: "18 min" },
      { id: "les-07-03", title: "Elementary Sorting: Bubble, Selection & Insertion Sort", readTime: "20 min" },
      { id: "les-07-04", title: "Divide & Conquer Sorting: Merge Sort & Quick Sort", readTime: "22 min" },
      { id: "les-07-05", title: "2D Arrays & Matrices (Row-Major Storage & Matrix Math)", readTime: "16 min" }
    ]
  },
  {
    id: "ch-08",
    number: 8,
    title: "Strings & Character Sequences",
    subtitle: "C-Style Strings, std::string Class, Substrings & String Algorithms",
    icon: "type",
    color: "#2dd4bf",
    badge: "Intermediate",
    estimatedHours: 4.5,
    description: "Text processing in C++. Null-terminated char arrays vs dynamic std::string, string manipulation methods, and anagrams.",
    lessons: [
      { id: "les-08-01", title: "Character Arrays & C-Style Strings (The \\0 Null Byte)", readTime: "14 min" },
      { id: "les-08-02", title: "Modern C++ std::string: Methods, Capacity & Substrings", readTime: "16 min" },
      { id: "les-08-03", title: "Essential String Algorithms: Palindromes, Anagrams & Reversal", readTime: "18 min" }
    ]
  },
  {
    id: "ch-09",
    number: 9,
    title: "Pointers, References & Dynamic Memory",
    subtitle: "Addresses, Dereferencing, Pointer Arithmetic, Heap vs Stack & new/delete",
    icon: "crosshair",
    color: "#f472b6",
    badge: "Core Mastery",
    estimatedHours: 6,
    description: "C++ ka sabse powerful aur misunderstood feature! Hardware memory addresses, pointer arithmetic, heap allocation, and memory leaks.",
    lessons: [
      { id: "les-09-01", title: "Memory Architecture: Address-of (&) and Dereference (*) Operators", readTime: "16 min" },
      { id: "les-09-02", title: "Pointer Arithmetic, Arrays as Pointers & nullptr Safety", readTime: "16 min" },
      { id: "les-09-03", title: "References vs Pointers: Deep Architectural Comparison", readTime: "14 min" },
      { id: "les-09-04", title: "Dynamic Memory: Stack vs Heap, new, delete & Memory Leaks", readTime: "20 min" }
    ]
  },
  {
    id: "ch-10",
    number: 10,
    title: "Object-Oriented Programming (OOP)",
    subtitle: "Classes, Constructors, Encapsulation, Inheritance, Polymorphism & Virtual Functions",
    icon: "cpu",
    color: "#fb923c",
    badge: "Core Mastery",
    estimatedHours: 7,
    description: "Real-world software engineering paradigms. Encapsulation, inheritance, runtime polymorphism, vtables, and abstract interfaces.",
    lessons: [
      { id: "les-10-01", title: "Classes, Objects & Access Specifiers (public, private, protected)", readTime: "16 min" },
      { id: "les-10-02", title: "Constructors (Default, Parameterized, Copy) & Destructors", readTime: "18 min" },
      { id: "les-10-03", title: "Encapsulation, Getters/Setters & this Pointer", readTime: "14 min" },
      { id: "les-10-04", title: "Inheritance Types & Diamond Problem (virtual Inheritance)", readTime: "20 min" },
      { id: "les-10-05", title: "Polymorphism: Compile-Time vs Runtime (Virtual Functions & VTable)", readTime: "22 min" },
      { id: "les-10-06", title: "Abstract Classes, Pure Virtual Functions & Interfaces", readTime: "16 min" }
    ]
  },
  {
    id: "ch-11",
    number: 11,
    title: "Standard Template Library (STL)",
    subtitle: "Vectors, Iterators, Stacks, Queues, Sets, Maps & STL Algorithms",
    icon: "package",
    color: "#4ade80",
    badge: "Essential",
    estimatedHours: 7.5,
    description: "Competitive programming aur interviews ka secret weapon! std::vector, set, map, unordered_map, priority_queue, and binary search algorithms.",
    lessons: [
      { id: "les-11-01", title: "STL Overview: Containers, Iterators, Algorithms & Functors", readTime: "15 min" },
      { id: "les-11-02", title: "std::vector & std::pair: Dynamic Arrays Masterclass", readTime: "18 min" },
      { id: "les-11-03", title: "Container Adaptors: std::stack, std::queue & std::priority_queue", readTime: "18 min" },
      { id: "les-11-04", title: "Associative Containers: std::set vs std::unordered_set", readTime: "16 min" },
      { id: "les-11-05", title: "Key-Value Maps: std::map (Red-Black Tree) vs std::unordered_map (Hash Table)", readTime: "20 min" },
      { id: "les-11-06", title: "STL Algorithms: sort, lower_bound, upper_bound, reverse & count", readTime: "20 min" }
    ]
  },
  {
    id: "ch-12",
    number: 12,
    title: "Time & Space Complexity Analysis",
    subtitle: "Big-O, Big-Omega, Big-Theta, Loop Analysis & Recurrence Relations",
    icon: "activity",
    color: "#f87171",
    badge: "DSA Theory",
    estimatedHours: 4,
    description: "Code ki efficiency measure karna seekhiye. Asymptotic notations, nested loop counting, space complexity, and Master Theorem.",
    lessons: [
      { id: "les-12-01", title: "Asymptotic Notations: Big-O (Worst), Omega (Best), Theta (Average)", readTime: "14 min" },
      { id: "les-12-02", title: "Calculating Time Complexity: Loops, Step Counting & Common Orders", readTime: "18 min" },
      { id: "les-12-03", title: "Space Complexity & Auxiliary Space (Memory Overhead Analysis)", readTime: "14 min" },
      { id: "les-12-04", title: "Recursive Time Complexity: Recurrence Relations & Recursion Trees", readTime: "18 min" }
    ]
  },
  {
    id: "ch-13",
    number: 13,
    title: "Data Structures Mastery (DSA)",
    subtitle: "Linked Lists, Stacks, Queues, Trees, BST, Heaps & Graphs",
    icon: "share-2",
    color: "#38bdf8",
    badge: "Advanced DSA",
    estimatedHours: 10,
    description: "Build fundamental data structures from scratch in C++. Nodes, pointer manipulation, tree traversals, BST operations, heaps, and graph graphs.",
    lessons: [
      { id: "les-13-01", title: "Singly Linked List: Insertion, Deletion, Reversal & Cycle Detection", readTime: "22 min" },
      { id: "les-13-02", title: "Doubly Linked List & Circular Linked List Implementations", readTime: "18 min" },
      { id: "les-13-03", title: "Stack & Queue Implementation from Scratch using Arrays & Nodes", readTime: "18 min" },
      { id: "les-13-04", title: "Binary Trees: Preorder, Inorder, Postorder & Level-Order BFS", readTime: "22 min" },
      { id: "les-13-05", title: "Binary Search Trees (BST): Search, Insertion, Deletion & Validation", readTime: "24 min" },
      { id: "les-13-06", title: "Heaps: Min-Heap, Max-Heap, Heapify & HeapSort", readTime: "20 min" },
      { id: "les-13-07", title: "Graphs Representation: Adjacency Matrix vs Adjacency List, BFS & DFS", readTime: "24 min" }
    ]
  },
  {
    id: "ch-14",
    number: 14,
    title: "Algorithm Problem-Solving Patterns",
    subtitle: "Two Pointers, Sliding Window, Prefix Sum, DP & Backtracking",
    icon: "zap",
    color: "#e879f9",
    badge: "Interview Prep",
    estimatedHours: 9,
    description: "Top tech companies mein aane wale patterns! Solve 1 pattern to unlock 20+ interview problems.",
    lessons: [
      { id: "les-14-01", title: "Two Pointers Pattern: Opposing Ends & Fast-Slow Pointers", readTime: "20 min" },
      { id: "les-14-02", title: "Sliding Window Pattern: Fixed Window & Dynamic Expanding Windows", readTime: "20 min" },
      { id: "les-14-03", title: "Prefix Sum & Difference Array: Fast Subarray Query Calculations", readTime: "18 min" },
      { id: "les-14-04", title: "Binary Search on Answer Pattern: Monotonic Search Space", readTime: "22 min" },
      { id: "les-14-05", title: "Greedy Strategy: Interval Scheduling & Activity Selection", readTime: "18 min" },
      { id: "les-14-06", title: "Backtracking Pattern: N-Queens, Subsets & Permutations", readTime: "24 min" },
      { id: "les-14-07", title: "Dynamic Programming Blueprint: Memoization vs Tabulation & Knapsack", readTime: "26 min" },
      { id: "les-14-08", title: "Graph Algorithms: Dijkstra Shortest Path & Topological Sort", readTime: "24 min" }
    ]
  },
  {
    id: "ch-15",
    number: 15,
    title: "Modern C++ & Advanced Features",
    subtitle: "Templates, Exceptions, File I/O, Lambdas, Smart Pointers & RAII",
    icon: "shield",
    color: "#34d399",
    badge: "Modern C++",
    estimatedHours: 6.5,
    description: "Industry-grade C++! RAII principles, Smart Pointers (unique_ptr, shared_ptr), Generic Templates, Lambda expressions, and Exception Safety.",
    lessons: [
      { id: "les-15-01", title: "Generic Programming: Function & Class Templates", readTime: "18 min" },
      { id: "les-15-02", title: "Exception Handling: try, catch, throw & Custom Exceptions", readTime: "16 min" },
      { id: "les-15-03", title: "File Handling: ifstream, ofstream, Binary Files & Serialization", readTime: "18 min" },
      { id: "les-15-04", title: "Lambda Expressions: Syntax, Capture Lists & std::function", readTime: "16 min" },
      { id: "les-15-05", title: "Smart Pointers & RAII: unique_ptr, shared_ptr & weak_ptr", readTime: "22 min" },
      { id: "les-15-06", title: "Move Semantics & Rvalue References (std::move & Rule of Five)", readTime: "22 min" }
    ]
  },
  {
    id: "ch-16",
    number: 16,
    title: "System Projects, Coding Challenges & Interview Prep",
    subtitle: "Full Projects, Top 50 Interview Questions & Mock Interview Rounds",
    icon: "award",
    color: "#facc15",
    badge: "Capstone",
    estimatedHours: 8,
    description: "Real-world capstone projects and rigorous interview preparation. Banking management system, Custom Vector implementation, and FAANG C++ interview rounds.",
    lessons: [
      { id: "les-16-01", title: "Capstone Project 1: Bank Account Management System with File Persistence", readTime: "30 min" },
      { id: "les-16-02", title: "Capstone Project 2: Writing a Custom std::vector from Scratch", readTime: "28 min" },
      { id: "les-16-03", title: "Top 50 Most Frequently Asked C++ Interview Questions Breakdown", readTime: "26 min" },
      { id: "les-16-04", title: "Technical Round Strategies: Whiteboard Coding, Dry Running & Optimization", readTime: "20 min" }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CHAPTERS_DATA };
}
