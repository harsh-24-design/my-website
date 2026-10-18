// CppMastery Curated Question Bank - Part 3
// Diverse Problem Types: Predict Output, Find the Error / Debugging, Conceptual, Hard Interview Problems

const QUESTIONS_PART3 = [
  // Predict the Output: Tricky Increment Sequence
  {
    id: "q-02-04",
    title: "Predict Output: Complex Pre & Post Increment Expressions",
    difficulty: "Easy",
    topic: "Operators & Expressions",
    subtopic: "Increment & Decrement Precedence",
    type: "predict_output",
    statement: "Analyze the following C++ code carefully and predict the exact console output:\n\n```cpp\n#include <iostream>\nint main() {\n    int a = 5;\n    int b = ++a; // Line 1\n    int c = a++; // Line 2\n    std::cout << a << \" \" << b << \" \" << c << std::endl;\n    return 0;\n}\n```",
    inputFormat: "No input required.",
    outputFormat: "Print the values of a, b, and c separated by single spaces.",
    constraints: "None",
    sampleTestCases: [
      {
        input: "",
        output: "7 6 6",
        explanation: "Step 1: ++a increments a from 5 to 6, then assigns 6 to b (a=6, b=6). Step 2: a++ assigns current a (6) to c, then increments a from 6 to 7 (a=7, c=6). Final: 7 6 6."
      }
    ],
    hiddenTestCases: [
      {
        input: "",
        output: "7 6 6"
      }
    ],
    starterCode: `#include <iostream>

int main() {
    int a = 5;
    int b = ++a;
    int c = a++;
    std::cout << a << " " << b << " " << c << std::endl;
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Recall: '++a' is PRE-increment: it increments first, then yields the new value.",
      "Hint 2: 'a++' is POST-increment: it yields the current value first, then increments the variable.",
      "Hint 3: Track the state of variable 'a' after each line in a table."
    ],
    algorithmSteps: [
      "Initialize a = 5.",
      "Execute b = ++a: a becomes 6, b is assigned 6.",
      "Execute c = a++: c is assigned current value of a (6), then a becomes 7.",
      "Print a (7), b (6), and c (6)."
    ],
    solutionCode: `#include <iostream>

int main() {
    int a = 5;
    int b = ++a; // a becomes 6, b gets 6
    int c = a++; // c gets 6, a becomes 7
    std::cout << a << " " << b << " " << c << "\\n";
    return 0;
}`,
    lineByLineExplanation: [
      { line: "5", code: "int b = ++a;", explanation: "Pre-increment: a is updated to 6 before being assigned to b." },
      { line: "6", code: "int c = a++;", explanation: "Post-increment: expression uses old value of a (6), then a increments to 7." }
    ],
    dryRunTable: {
      headers: ["Step", "Code Executed", "Value of a", "Value of b", "Value of c"],
      rows: [
        ["Start", "int a = 5", "5", "Undefined", "Undefined"],
        ["Line 1", "int b = ++a", "6", "6", "Undefined"],
        ["Line 2", "int c = a++", "7", "6", "6"]
      ]
    },
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    edgeCases: [],
    alternativeSolution: "",
    relatedQuestionIds: ["q-02-01", "q-01-02"]
  },

  // Find the Error / Debugging: Off-By-One Array Crash
  {
    id: "q-07-03",
    title: "Find the Error: Array Bounds Off-by-One Segmentation Fault",
    difficulty: "Easy",
    topic: "Arrays & Sorting",
    subtopic: "Bounds Checking & Debugging",
    type: "find_error",
    statement: "A student wrote the following program to compute the sum of an array of size `N`, but the program crashes with a `Segmentation Fault` or prints garbage values. Find the error and write the corrected program.\n\n```cpp\n// Buggy Code:\n#include <iostream>\nint main() {\n    int n = 5;\n    int arr[5] = {10, 20, 30, 40, 50};\n    int sum = 0;\n    for (int i = 0; i <= n; ++i) { // BUG HERE!\n        sum += arr[i];\n    }\n    std::cout << sum << std::endl;\n    return 0;\n}\n```",
    inputFormat: "Line 1: N\nLine 2: N space-separated integers",
    outputFormat: "Print the total sum.",
    constraints: "1 <= N <= 10^5",
    sampleTestCases: [
      {
        input: "5\n10 20 30 40 50",
        output: "150",
        explanation: "10 + 20 + 30 + 40 + 50 = 150."
      }
    ],
    hiddenTestCases: [
      {
        input: "1\n42",
        output: "42"
      },
      {
        input: "3\n1 2 3",
        output: "6"
      }
    ],
    starterCode: `#include <iostream>
#include <vector>

int main() {
    int n;
    if (std::cin >> n) {
        std::vector<int> arr(n);
        for (int i = 0; i < n; ++i) std::cin >> arr[i];

        // Correct the off-by-one loop condition
        long long sum = 0;
        for (int i = 0; i < n; ++i) {
            sum += arr[i];
        }
        std::cout << sum << "\\n";
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Look at the loop condition: 'i <= n'. What is the index of the last element in an array of size n?",
      "Hint 2: In C++, an array of size N has valid indices 0, 1, 2, ..., N-1. Index N does NOT exist!",
      "Hint 3: Change 'i <= n' to 'i < n' to avoid accessing unassigned memory beyond the array boundary."
    ],
    algorithmSteps: [
      "Recognize the off-by-one error: 'i <= n' attempts to access arr[5] in an array of size 5.",
      "Fix the termination condition to 'i < n'.",
      "Accumulate sum using long long to prevent overflow.",
      "Output the computed sum."
    ],
    solutionCode: `#include <iostream>
#include <vector>

int main() {
    int n;
    if (std::cin >> n) {
        long long sum = 0;
        for (int i = 0; i < n; ++i) { // Fixed: i < n instead of i <= n
            long long x;
            std::cin >> x;
            sum += x;
        }
        std::cout << sum << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "7", code: "for (int i = 0; i < n; ++i)", explanation: "Strict inequality '<' ensures indices remain within [0, n - 1]." }
    ],
    dryRunTable: {
      headers: ["Iteration", "Index i", "Valid Index?", "Action"],
      rows: [
        ["0", "0", "Yes (0 < 5)", "Add arr[0]"],
        ["4", "4", "Yes (4 < 5)", "Add arr[4] (Last element)"],
        ["5 (Buggy)", "5", "NO! (5 is out of bounds)", "Crashes or adds random RAM garbage!"]
      ]
    },
    timeComplexity: "O(N) - Linear pass.",
    spaceComplexity: "O(1) - Single accumulator.",
    edgeCases: ["n = 1"],
    alternativeSolution: "",
    relatedQuestionIds: ["q-07-01", "q-01-02"]
  },

  // Hard / Interview Level: Reverse Singly Linked List
  {
    id: "q-13-01",
    title: "Reverse a Singly Linked List (In-Place)",
    difficulty: "Medium",
    topic: "Data Structures Mastery (DSA)",
    subtopic: "Singly Linked List & Pointer Reversal",
    type: "coding",
    statement: "Given the head of a singly linked list with `N` nodes, reverse the list in-place in $O(N)$ time and strictly $O(1)$ auxiliary space, and output the reversed values.",
    inputFormat: "Line 1: N (number of nodes).\nLine 2: N space-separated integers representing node values.",
    outputFormat: "Print the reversed values separated by spaces.",
    constraints: "0 <= N <= 10^5\n-10^9 <= val <= 10^9",
    sampleTestCases: [
      {
        input: "5\n1 2 3 4 5",
        output: "5 4 3 2 1",
        explanation: "1 -> 2 -> 3 -> 4 -> 5 reversed becomes 5 -> 4 -> 3 -> 2 -> 1."
      },
      {
        input: "2\n1 2",
        output: "2 1",
        explanation: "1 -> 2 reversed is 2 -> 1."
      }
    ],
    hiddenTestCases: [
      {
        input: "0\n",
        output: ""
      },
      {
        input: "1\n99",
        output: "99"
      }
    ],
    starterCode: `#include <iostream>

struct Node {
    long long val;
    Node* next;
    Node(long long v) : val(v), next(nullptr) {}
};

Node* reverseList(Node* head) {
    // Reverse linked list in-place using 3 pointers: prev, curr, nextNode
    return nullptr;
}

int main() {
    int n;
    if (std::cin >> n) {
        if (n == 0) return 0;
        long long firstVal;
        std::cin >> firstVal;
        Node* head = new Node(firstVal);
        Node* tail = head;
        for (int i = 1; i < n; ++i) {
            long long v;
            std::cin >> v;
            tail->next = new Node(v);
            tail = tail->next;
        }

        head = reverseList(head);

        Node* cur = head;
        while (cur) {
            std::cout << cur->val << (cur->next ? " " : "\\n");
            cur = cur->next;
        }
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: You need three pointers: prev (initially nullptr), curr (initially head), and nextNode.",
      "Hint 2: Before changing curr->next, save curr->next in nextNode so you don't lose the rest of the list.",
      "Hint 3: Point curr->next backwards to prev. Then shift prev = curr, and curr = nextNode."
    ],
    algorithmSteps: [
      "Set Node* prev = nullptr and Node* curr = head.",
      "While curr != nullptr:",
      "  Node* nextNode = curr->next (save next).",
      "  curr->next = prev (reverse arrow).",
      "  prev = curr (advance prev).",
      "  curr = nextNode (advance curr).",
      "Return prev as the new head."
    ],
    solutionCode: `#include <iostream>

struct Node {
    long long val;
    Node* next;
    Node(long long v) : val(v), next(nullptr) {}
};

Node* reverseList(Node* head) {
    Node* prev = nullptr;
    Node* curr = head;
    while (curr != nullptr) {
        Node* nextNode = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    int n;
    if (std::cin >> n) {
        if (n <= 0) return 0;
        long long v;
        std::cin >> v;
        Node* head = new Node(v);
        Node* tail = head;

        for (int i = 1; i < n; ++i) {
            std::cin >> v;
            tail->next = new Node(v);
            tail = tail->next;
        }

        head = reverseList(head);

        Node* cur = head;
        while (cur) {
            std::cout << cur->val << (cur->next ? " " : "\\n");
            Node* temp = cur;
            cur = cur->next;
            delete temp; // Clean up heap memory
        }
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "13", code: "Node* nextNode = curr->next;", explanation: "Caches reference to forward node before link is severed." },
      { line: "14", code: "curr->next = prev;", explanation: "Reverses link direction towards previously visited node." },
      { line: "15-16", code: "prev = curr; curr = nextNode;", explanation: "Advances both pointers one node to the right." }
    ],
    dryRunTable: {
      headers: ["Step", "prev", "curr", "nextNode", "curr->next points to"],
      rows: [
        ["Initial", "nullptr", "[1]", "-", "-"],
        ["1", "[1]", "[2]", "[2]", "nullptr"],
        ["2", "[2]", "[3]", "[3]", "[1]"],
        ["3", "[3]", "nullptr", "nullptr", "[2] (Loop ends, prev is [3])"]
      ]
    },
    timeComplexity: "O(N) - Visits each of the N nodes exactly once.",
    spaceComplexity: "O(1) - Three pointer variables only.",
    edgeCases: ["Empty list (head = nullptr)", "Single node (n = 1)"],
    alternativeSolution: `// Recursive reversal: Node* newHead = reverseList(head->next); head->next->next = head; head->next = nullptr; return newHead; (Uses O(N) call stack).`,
    relatedQuestionIds: ["q-07-01", "q-14-01"]
  },

  // Hard / Interview Level: Trapping Rain Water (Two Pointers)
  {
    id: "q-14-04",
    title: "Trapping Rain Water (Two Pointers Hard)",
    difficulty: "Hard",
    topic: "Problem-Solving Patterns",
    subtopic: "Two Pointers Extreme Optimization",
    type: "coding",
    statement: "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.\n\nSolve in $O(N)$ time and $O(1)$ auxiliary space.",
    inputFormat: "Line 1: An integer N.\nLine 2: N space-separated integers representing bar heights.",
    outputFormat: "Print the total trapped water units.",
    constraints: "1 <= N <= 10^5\n0 <= height[i] <= 10^5",
    sampleTestCases: [
      {
        input: "12\n0 1 0 2 1 0 1 3 2 1 2 1",
        output: "6",
        explanation: "The elevation map traps a total of 6 units of rain water."
      },
      {
        input: "6\n4 2 0 3 2 5",
        output: "9",
        explanation: "Traps 9 units between boundaries."
      }
    ],
    hiddenTestCases: [
      {
        input: "3\n2 0 2",
        output: "2"
      },
      {
        input: "3\n3 2 1",
        output: "0"
      }
    ],
    starterCode: `#include <iostream>
#include <vector>

int main() {
    int n;
    if (std::cin >> n) {
        std::vector<int> height(n);
        for (int i = 0; i < n; ++i) std::cin >> height[i];

        // Solve Trapping Rain Water in O(N) time and O(1) space
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Water trapped at any bar i is: min(max_left, max_right) - height[i].",
      "Hint 2: Instead of storing prefix and suffix maximum arrays (which take O(N) space), maintain leftMax and rightMax with two pointers at the ends.",
      "Hint 3: If height[left] <= height[right]: we know rightMax is at least height[right] >= height[left], so leftMax is the deciding bottleneck! Update leftMax and add water, then left++."
    ],
    algorithmSteps: [
      "If N <= 2, return 0 (no water can be trapped).",
      "Initialize left = 0, right = N - 1, leftMax = 0, rightMax = 0, and totalWater = 0.",
      "While left < right:",
      "  If height[left] < height[right]:",
      "    If height[left] >= leftMax: leftMax = height[left].",
      "    Else: totalWater += (leftMax - height[left]).",
      "    left++.",
      "  Else:",
      "    If height[right] >= rightMax: rightMax = height[right].",
      "    Else: totalWater += (rightMax - height[right]).",
      "    right--.",
      "Print totalWater."
    ],
    solutionCode: `#include <iostream>
#include <vector>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    int n;
    if (std::cin >> n) {
        if (n <= 2) {
            std::cout << 0 << "\\n";
            return 0;
        }

        std::vector<int> height(n);
        for (int i = 0; i < n; ++i) {
            std::cin >> height[i];
        }

        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        long long totalWater = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    totalWater += (leftMax - height[left]);
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    totalWater += (rightMax - height[right]);
                }
                right--;
            }
        }

        std::cout << totalWater << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "26-32", code: "if (height[left] < height[right])", explanation: "Identifies left boundary as the guaranteed bottleneck." },
      { line: "30", code: "totalWater += (leftMax - height[left]);", explanation: "Adds trapped column height bounded by leftMax." }
    ],
    dryRunTable: {
      headers: ["left", "right", "height[l]", "height[r]", "leftMax", "rightMax", "Water Added"],
      rows: [
        ["0", "11", "0", "1", "0", "1", "0 (leftMax updated to 0)"],
        ["1", "11", "1", "1", "1", "1", "0 (rightMax updated to 1)"],
        ["1", "10", "1", "2", "1", "1", "0 (leftMax updated to 1)"],
        ["2", "10", "0", "2", "1", "2", "leftMax - h[2] = 1 - 0 = +1"]
      ]
    },
    timeComplexity: "O(N) - Each pointer moves towards the other, processing array in a single pass.",
    spaceComplexity: "O(1) - Constant auxiliary space (no prefix arrays).",
    edgeCases: ["Descending or ascending array (no dips -> 0 water).", "Flat array."],
    alternativeSolution: `// Using prefix and suffix max arrays (O(N) time and O(N) space).`,
    relatedQuestionIds: ["q-14-01", "q-07-01"]
  }
];

// Append to master QUESTIONS_DATA
if (typeof QUESTIONS_DATA !== 'undefined') {
  QUESTIONS_DATA.push(...QUESTIONS_PART3);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS_PART3 };
}
