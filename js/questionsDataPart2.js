// CppMastery Curated Question Bank - Part 2 (Expanded Collection across all topics)
// Beginner, Easy, Medium, Hard, Interview Level | Coding, Conceptual, Predict Output, Debugging

const QUESTIONS_PART2 = [
  // Chapter 1: Fundamentals - Fast I/O & Overflow
  {
    id: "q-01-03",
    title: "Large Multiplication & 64-bit Overflow Prevention",
    difficulty: "Beginner",
    topic: "C++ Fundamentals",
    subtopic: "Data Types & Integer Overflow",
    type: "coding",
    statement: "Given two integers `A` and `B`, compute their product `A * B` without suffering from 32-bit integer overflow.\n\nInput consists of two space-separated integers A and B, which can be up to 10^9 each.",
    inputFormat: "Two space-separated 32-bit integers A and B.",
    outputFormat: "Print the 64-bit product of A and B.",
    constraints: "0 <= A, B <= 10^9",
    sampleTestCases: [
      {
        input: "1000000 1000000",
        output: "1000000000000",
        explanation: "10^6 * 10^6 = 10^12, which requires a 64-bit long long integer."
      },
      {
        input: "5 10",
        output: "50",
        explanation: "Small multiplication."
      }
    ],
    hiddenTestCases: [
      {
        input: "1000000000 1000000000",
        output: "1000000000000000000"
      },
      {
        input: "0 999999999",
        output: "0"
      }
    ],
    starterCode: `#include <iostream>

int main() {
    long long a, b;
    if (std::cin >> a >> b) {
        // Output 64-bit multiplication product
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Standard 32-bit signed int overflows at ~2 * 10^9.",
      "Hint 2: Since A and B are up to 10^9, their product can reach 10^18.",
      "Hint 3: Use 'long long' for both input storage and calculation."
    ],
    algorithmSteps: [
      "Declare variables A and B as 'long long' (64-bit integer).",
      "Read A and B from standard input.",
      "Compute product = A * B.",
      "Print product to console."
    ],
    solutionCode: `#include <iostream>

int main() {
    long long a, b;
    if (std::cin >> a >> b) {
        long long product = a * b;
        std::cout << product << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "4", code: "long long a, b;", explanation: "Allocates 64 bits (8 bytes) each to safely store up to ~9 * 10^18." },
      { line: "6", code: "long long product = a * b;", explanation: "Executes 64-bit multiplication without 32-bit CPU register truncation." }
    ],
    dryRunTable: {
      headers: ["Variable", "Value", "Bit Width"],
      rows: [
        ["a", "10^6", "64-bit"],
        ["b", "10^6", "64-bit"],
        ["product", "10^12", "Fits safely in long long (< 9 * 10^18)"]
      ]
    },
    timeComplexity: "O(1) - Single arithmetic CPU instruction.",
    spaceComplexity: "O(1) - Two 64-bit variables.",
    edgeCases: ["A = 0 or B = 0", "A = 10^9 and B = 10^9"],
    alternativeSolution: "",
    relatedQuestionIds: ["q-01-02", "q-02-01"]
  },

  // Chapter 2: Operators - Swap without Temp (XOR)
  {
    id: "q-02-02",
    title: "Swap Two Numbers In-Place using Bitwise XOR",
    difficulty: "Easy",
    topic: "Operators & Expressions",
    subtopic: "Bitwise Operators & Swapping",
    type: "coding",
    statement: "Given two integers `A` and `B`, swap their values without using any third temporary variable and without using arithmetic addition/subtraction (which could overflow).\n\nOutput the swapped values separated by a space.",
    inputFormat: "Two space-separated integers A and B.",
    outputFormat: "Print the swapped integers: B followed by space and A.",
    constraints: "-10^9 <= A, B <= 10^9",
    sampleTestCases: [
      {
        input: "10 20",
        output: "20 10",
        explanation: "Original A = 10, B = 20. After swap: A = 20, B = 10."
      },
      {
        input: "-5 99",
        output: "99 -5",
        explanation: "Handles negative numbers cleanly."
      }
    ],
    hiddenTestCases: [
      {
        input: "0 0",
        output: "0 0"
      },
      {
        input: "42 42",
        output: "42 42"
      }
    ],
    starterCode: `#include <iostream>

int main() {
    int a, b;
    if (std::cin >> a >> b) {
        // Swap a and b using XOR trick (3 lines)
        
        std::cout << a << " " << b << "\\n";
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Recall the XOR property: x ^ x = 0, and x ^ 0 = x.",
      "Hint 2: Step 1: a = a ^ b stores the combined bits in a.",
      "Hint 3: Step 2: b = a ^ b cancels out original b, giving original a! Step 3: a = a ^ b cancels out new b, giving original b!"
    ],
    algorithmSteps: [
      "Execute a = a ^ b.",
      "Execute b = a ^ b (b now holds original a).",
      "Execute a = a ^ b (a now holds original b).",
      "Print a and b."
    ],
    solutionCode: `#include <iostream>

int main() {
    int a, b;
    if (std::cin >> a >> b) {
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
        std::cout << a << " " << b << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "6", code: "a = a ^ b;", explanation: "Encodes both values into a using bitwise XOR." },
      { line: "7", code: "b = a ^ b;", explanation: "(a ^ b) ^ b = a ^ (b ^ b) = a ^ 0 = a. b becomes original a." },
      { line: "8", code: "a = a ^ b;", explanation: "(a ^ b) ^ a = b ^ (a ^ a) = b ^ 0 = b. a becomes original b." }
    ],
    dryRunTable: {
      headers: ["Step", "Operation", "Variable a", "Variable b"],
      rows: [
        ["Initial", "-", "10 (01010)", "20 (10100)"],
        ["1", "a = a ^ b", "30 (11110)", "20 (10100)"],
        ["2", "b = a ^ b", "30 (11110)", "10 (01010) [Original A!]"],
        ["3", "a = a ^ b", "20 (10100) [Original B!]", "10 (01010)"]
      ]
    },
    timeComplexity: "O(1) - Three single-cycle CPU XOR operations.",
    spaceComplexity: "O(1) - Zero extra auxiliary memory allocated.",
    edgeCases: ["A and B are identical (a ^ b = 0).", "A or B is negative."],
    alternativeSolution: `// Using std::swap:
#include <utility>
std::swap(a, b);`,
    relatedQuestionIds: ["q-02-01", "q-02-03"]
  },

  // Chapter 3: Conditions - Quadrant Identifier
  {
    id: "q-03-02",
    title: "Cartesian Coordinate Quadrant Classifier",
    difficulty: "Beginner",
    topic: "Conditionals & Decision Making",
    subtopic: "Nested if-else & Geometry",
    type: "coding",
    statement: "Given the coordinate point `(X, Y)` on a 2D Cartesian plane, determine where the point lies:\n- `Quadrant 1`: X > 0, Y > 0\n- `Quadrant 2`: X < 0, Y > 0\n- `Quadrant 3`: X < 0, Y < 0\n- `Quadrant 4`: X > 0, Y < 0\n- `Origin`: X == 0, Y == 0\n- `X-Axis`: Y == 0 (and X != 0)\n- `Y-Axis`: X == 0 (and Y != 0)",
    inputFormat: "Two space-separated integers X and Y.",
    outputFormat: "Print exactly one of: `Quadrant 1`, `Quadrant 2`, `Quadrant 3`, `Quadrant 4`, `Origin`, `X-Axis`, or `Y-Axis`.",
    constraints: "-10^4 <= X, Y <= 10^4",
    sampleTestCases: [
      {
        input: "3 5",
        output: "Quadrant 1",
        explanation: "Both coordinates are strictly positive."
      },
      {
        input: "-4 -7",
        output: "Quadrant 3",
        explanation: "Both coordinates are strictly negative."
      },
      {
        input: "0 0",
        output: "Origin",
        explanation: "Both coordinates are zero."
      }
    ],
    hiddenTestCases: [
      {
        input: "-10 0",
        output: "X-Axis"
      },
      {
        input: "0 45",
        output: "Y-Axis"
      },
      {
        input: "8 -3",
        output: "Quadrant 4"
      }
    ],
    starterCode: `#include <iostream>

int main() {
    int x, y;
    if (std::cin >> x >> y) {
        // Classify point coordinates
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Check origin (x == 0 && y == 0) first.",
      "Hint 2: Then check axis boundaries: if x == 0, it lies on the Y-Axis; if y == 0, it lies on the X-Axis.",
      "Hint 3: Finally, use the 4 quadrant sign combinations: (+,+) -> Q1, (-,+) -> Q2, (-,-) -> Q3, (+,-) -> Q4."
    ],
    algorithmSteps: [
      "Input X and Y.",
      "If X == 0 and Y == 0, print 'Origin'.",
      "Else if X == 0, print 'Y-Axis'.",
      "Else if Y == 0, print 'X-Axis'.",
      "Else if X > 0 and Y > 0, print 'Quadrant 1'.",
      "Else if X < 0 and Y > 0, print 'Quadrant 2'.",
      "Else if X < 0 and Y < 0, print 'Quadrant 3'.",
      "Else print 'Quadrant 4'."
    ],
    solutionCode: `#include <iostream>

int main() {
    int x, y;
    if (std::cin >> x >> y) {
        if (x == 0 && y == 0) std::cout << "Origin\\n";
        else if (x == 0) std::cout << "Y-Axis\\n";
        else if (y == 0) std::cout << "X-Axis\\n";
        else if (x > 0 && y > 0) std::cout << "Quadrant 1\\n";
        else if (x < 0 && y > 0) std::cout << "Quadrant 2\\n";
        else if (x < 0 && y < 0) std::cout << "Quadrant 3\\n";
        else std::cout << "Quadrant 4\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "6", code: "if (x == 0 && y == 0)", explanation: "Filters out intersection point origin." },
      { line: "7-8", code: "else if (x == 0) ... else if (y == 0)", explanation: "Filters out 1D axis alignments before quadrant evaluation." }
    ],
    dryRunTable: {
      headers: ["x", "y", "Condition Satisfied", "Output"],
      rows: [
        ["0", "0", "x == 0 && y == 0", "Origin"],
        ["-4", "0", "y == 0", "X-Axis"],
        ["-3", "5", "x < 0 && y > 0", "Quadrant 2"]
      ]
    },
    timeComplexity: "O(1) - Simple branch evaluation.",
    spaceComplexity: "O(1) - Primitive integers only.",
    edgeCases: ["Points on axes", "Point on origin"],
    alternativeSolution: "",
    relatedQuestionIds: ["q-03-01", "q-01-02"]
  },

  // Chapter 4: Loops - Greatest Common Divisor (Euclidean)
  {
    id: "q-04-02",
    title: "GCD & LCM Calculation (Euclidean Algorithm)",
    difficulty: "Easy",
    topic: "Loops & Iteration",
    subtopic: "while loop & Euclidean Math",
    type: "coding",
    statement: "Given two positive integers `A` and `B`, compute their Greatest Common Divisor (GCD) and their Least Common Multiple (LCM) in logarithmic time using the Euclidean Algorithm.\n\nOutput GCD and LCM separated by a space on a single line.",
    inputFormat: "Two space-separated positive integers A and B.",
    outputFormat: "Print GCD followed by space followed by LCM.",
    constraints: "1 <= A, B <= 10^9",
    sampleTestCases: [
      {
        input: "12 18",
        output: "6 36",
        explanation: "GCD(12, 18) = 6. LCM(12, 18) = (12 * 18) / 6 = 36."
      },
      {
        input: "7 13",
        output: "1 91",
        explanation: "Coprime numbers: GCD = 1, LCM = 7 * 13 = 91."
      }
    ],
    hiddenTestCases: [
      {
        input: "100 25",
        output: "25 100"
      },
      {
        input: "1000000000 1000000000",
        output: "1000000000 1000000000"
      }
    ],
    starterCode: `#include <iostream>

long long getGcd(long long a, long long b) {
    // Implement Euclidean algorithm using while loop
    return 1;
}

int main() {
    long long a, b;
    if (std::cin >> a >> b) {
        // Compute GCD and LCM
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Euclidean algorithm states that gcd(a, b) = gcd(b, a % b).",
      "Hint 2: Loop while b != 0: temp = b, b = a % b, a = temp.",
      "Hint 3: Relationship between GCD and LCM: a * b = gcd(a, b) * lcm(a, b). So LCM = (a / gcd) * b (divide first to prevent overflow!)."
    ],
    algorithmSteps: [
      "Store original copies of A and B as long long.",
      "While B != 0: rem = A % B, A = B, B = rem.",
      "GCD is the final value of A.",
      "Calculate LCM = (originalA / GCD) * originalB.",
      "Print GCD and LCM."
    ],
    solutionCode: `#include <iostream>

long long getGcd(long long a, long long b) {
    while (b != 0) {
        long long rem = a % b;
        a = b;
        b = rem;
    }
    return a;
}

int main() {
    long long a, b;
    if (std::cin >> a >> b) {
        long long gcdVal = getGcd(a, b);
        long long lcmVal = (a / gcdVal) * b; // Divide first to avoid integer overflow
        std::cout << gcdVal << " " << lcmVal << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "4-8", code: "while (b != 0) { rem = a % b; a = b; b = rem; }", explanation: "Repeatedly reduces problem by modulo in O(log(min(A, B))) time." },
      { line: "16", code: "long long lcmVal = (a / gcdVal) * b;", explanation: "Divides before multiplying to eliminate 64-bit overflow hazard." }
    ],
    dryRunTable: {
      headers: ["Step", "a", "b", "rem = a % b", "Next (a, b)"],
      rows: [
        ["1", "18", "12", "18 % 12 = 6", "(12, 6)"],
        ["2", "12", "6", "12 % 6 = 0", "(6, 0)"],
        ["End", "6", "0", "-", "GCD is 6!"]
      ]
    },
    timeComplexity: "O(log(min(A, B))) - Numbers decrease exponentially.",
    spaceComplexity: "O(1) - Iterative pointer variables.",
    edgeCases: ["A == B", "One number is 1", "Large numbers up to 10^9"],
    alternativeSolution: `// Using std::gcd (C++17 <numeric>):
#include <numeric>
long long g = std::gcd(a, b);`,
    relatedQuestionIds: ["q-04-01", "q-01-03"]
  },

  // Chapter 5: Patterns - Diamond Pattern
  {
    id: "q-05-02",
    title: "Full Star Diamond Pattern",
    difficulty: "Easy",
    topic: "Pattern Printing",
    subtopic: "Symmetric Coordinate Loops",
    type: "coding",
    statement: "Given an integer `N`, print a symmetric full star diamond pattern of height `2N - 1`.\n\nFor N = 3:\n```\n  *\n ***\n*****\n ***\n  *\n```",
    inputFormat: "A single integer N.",
    outputFormat: "Print the diamond pattern.",
    constraints: "1 <= N <= 25",
    sampleTestCases: [
      {
        input: "3",
        output: "  *\n ***\n*****\n ***\n  *",
        explanation: "Top pyramid of 3 rows followed by inverted pyramid of 2 rows."
      },
      {
        input: "1",
        output: "*",
        explanation: "Height 1 diamond is a single star."
      }
    ],
    hiddenTestCases: [
      {
        input: "2",
        output: " *\n***\n *"
      }
    ],
    starterCode: `#include <iostream>

int main() {
    int n;
    if (std::cin >> n) {
        // Print full diamond pattern
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Split the diamond into two halves: Top half (rows 1 to n) and Bottom half (rows n - 1 down to 1).",
      "Hint 2: For row i in top half, print (n - i) spaces, followed by (2*i - 1) stars.",
      "Hint 3: For row i in bottom half, print (n - i) spaces, followed by (2*i - 1) stars."
    ],
    algorithmSteps: [
      "Read integer N.",
      "Upper pyramid: Loop i from 1 to N: print (N - i) spaces, then (2*i - 1) stars, then newline.",
      "Lower inverted pyramid: Loop i from N - 1 down to 1: print (N - i) spaces, then (2*i - 1) stars, then newline."
    ],
    solutionCode: `#include <iostream>

int main() {
    int n;
    if (std::cin >> n) {
        // Upper pyramid
        for (int i = 1; i <= n; ++i) {
            for (int s = 0; s < n - i; ++s) std::cout << " ";
            for (int st = 0; st < 2 * i - 1; ++st) std::cout << "*";
            std::cout << "\\n";
        }
        // Lower inverted pyramid
        for (int i = n - 1; i >= 1; --i) {
            for (int s = 0; s < n - i; ++s) std::cout << " ";
            for (int st = 0; st < 2 * i - 1; ++st) std::cout << "*";
            std::cout << "\\n";
        }
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "7", code: "for (int s = 0; s < n - i; ++s) cout << ' ';", explanation: "Indents current row to form symmetric triangle apex." },
      { line: "8", code: "for (int st = 0; st < 2 * i - 1; ++st) cout << '*';", explanation: "Generates odd sequence of stars (1, 3, 5, 7...)." }
    ],
    dryRunTable: {
      headers: ["Row i", "Spaces (N - i)", "Stars (2i - 1)", "Row Content"],
      rows: [
        ["1", "3 - 1 = 2", "2*1 - 1 = 1", "  *"],
        ["2", "3 - 2 = 1", "2*2 - 1 = 3", " ***"],
        ["3 (Mid)", "3 - 3 = 0", "2*3 - 1 = 5", "*****"],
        ["2 (Lower)", "3 - 2 = 1", "2*2 - 1 = 3", " ***"],
        ["1 (Lower)", "3 - 1 = 2", "2*1 - 1 = 1", "  *"]
      ]
    },
    timeComplexity: "O(N^2) - Total characters printed is ~4N^2.",
    spaceComplexity: "O(1) - Constant auxiliary space.",
    edgeCases: ["N = 1 (single star)", "N = 2"],
    alternativeSolution: "",
    relatedQuestionIds: ["q-05-01", "q-04-01"]
  },

  // Chapter 7: Arrays - Second Largest Element
  {
    id: "q-07-02",
    title: "Find Second Largest Element in Array (Single Pass)",
    difficulty: "Easy",
    topic: "Arrays & Sorting",
    subtopic: "Linear Scan & Invariant Tracking",
    type: "coding",
    statement: "Given an array `arr` of `N` integers, find the second largest distinct element in the array in a single linear pass $O(N)$. If no second largest distinct element exists (e.g. all elements are identical or array size is 1), print `-1`.",
    inputFormat: "Line 1: An integer N.\nLine 2: N space-separated integers.",
    outputFormat: "Print the second largest distinct element or -1.",
    constraints: "1 <= N <= 10^5\n-10^9 <= arr[i] <= 10^9",
    sampleTestCases: [
      {
        input: "6\n12 35 1 10 34 1",
        output: "34",
        explanation: "Largest is 35, second largest distinct is 34."
      },
      {
        input: "3\n10 10 10",
        output: "-1",
        explanation: "All elements are equal, no second distinct largest exists."
      }
    ],
    hiddenTestCases: [
      {
        input: "2\n5 20",
        output: "5"
      },
      {
        input: "1\n100",
        output: "-1"
      }
    ],
    starterCode: `#include <iostream>
#include <vector>

int main() {
    int n;
    if (std::cin >> n) {
        std::vector<long long> arr(n);
        for (int i = 0; i < n; ++i) std::cin >> arr[i];
        
        // Find second largest in single pass
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Track two variables: largest and secondLargest, initialized to a very small sentinel (or -1e18).",
      "Hint 2: When you encounter x > largest: secondLargest becomes old largest, and largest becomes x.",
      "Hint 3: When you encounter largest > x > secondLargest: update only secondLargest."
    ],
    algorithmSteps: [
      "If N < 2, return -1.",
      "Initialize largest = -2e18 and secondLargest = -2e18.",
      "For each element x in array:",
      "  If x > largest: secondLargest = largest, largest = x.",
      "  Else if x < largest and x > secondLargest: secondLargest = x.",
      "If secondLargest is still the sentinel, print -1, else print secondLargest."
    ],
    solutionCode: `#include <iostream>
#include <vector>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    int n;
    if (std::cin >> n) {
        if (n < 2) {
            std::cout << -1 << "\\n";
            return 0;
        }

        const long long INF = 2e18;
        long long largest = -INF;
        long long secondLargest = -INF;

        for (int i = 0; i < n; ++i) {
            long long x;
            std::cin >> x;

            if (x > largest) {
                secondLargest = largest;
                largest = x;
            } else if (x < largest && x > secondLargest) {
                secondLargest = x;
            }
        }

        if (secondLargest == -INF) {
            std::cout << -1 << "\\n";
        } else {
            std::cout << secondLargest << "\\n";
        }
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "19-21", code: "if (x > largest) { secondLargest = largest; largest = x; }", explanation: "Displaces existing largest to second place when new maximum is found." },
      { line: "22-23", code: "else if (x < largest && x > secondLargest)", explanation: "Ensures distinctness and updates runner-up." }
    ],
    dryRunTable: {
      headers: ["Element x", "Condition", "largest", "secondLargest"],
      rows: [
        ["12", "x > largest", "12", "-INF"],
        ["35", "x > largest", "35", "12"],
        ["1", "Ignored", "35", "12"],
        ["34", "largest > x > second", "35", "34"]
      ]
    },
    timeComplexity: "O(N) - Single pass through the array without sorting.",
    spaceComplexity: "O(1) - Only two tracking variables.",
    edgeCases: ["Array of all duplicates.", "N = 1.", "Negative numbers."],
    alternativeSolution: "",
    relatedQuestionIds: ["q-07-01", "q-14-01"]
  },

  // Chapter 8: Strings - Valid Anagram
  {
    id: "q-08-02",
    title: "Valid Anagram (Character Frequency Hash)",
    difficulty: "Easy",
    topic: "Strings & Character Sequences",
    subtopic: "Frequency Array & Hash Map",
    type: "coding",
    statement: "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    inputFormat: "Two space-separated strings s and t.",
    outputFormat: "Print `true` or `false`.",
    constraints: "1 <= s.length(), t.length() <= 10^5\ns and t consist of lowercase English letters.",
    sampleTestCases: [
      {
        input: "anagram nagaram",
        output: "true",
        explanation: "Both strings contain 3 'a's, 1 'n', 1 'g', 1 'r', 1 'm'."
      },
      {
        input: "rat car",
        output: "false",
        explanation: "'rat' has 't', 'car' has 'c'."
      }
    ],
    hiddenTestCases: [
      {
        input: "a ab",
        output: "false"
      },
      {
        input: "silent listen",
        output: "true"
      }
    ],
    starterCode: `#include <iostream>
#include <string>
#include <vector>

int main() {
    std::string s, t;
    if (std::cin >> s >> t) {
        // Check if s and t are valid anagrams in O(N)
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: If s.length() != t.length(), they can never be anagrams.",
      "Hint 2: Since there are only 26 lowercase English letters, use a fixed size integer array of 26 counters.",
      "Hint 3: Increment counts for string s, decrement counts for string t. If all 26 counters end up at 0, they are anagrams!"
    ],
    algorithmSteps: [
      "If s.length() != t.length(), output 'false' immediately.",
      "Create an array count of size 26 initialized to 0.",
      "For each character c in s: count[c - 'a']++.",
      "For each character c in t: count[c - 'a']--.",
      "Verify all 26 entries in count are 0. If any != 0, print 'false'.",
      "Print 'true'."
    ],
    solutionCode: `#include <iostream>
#include <string>
#include <vector>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    std::string s, t;
    if (std::cin >> s >> t) {
        if (s.length() != t.length()) {
            std::cout << "false\\n";
            return 0;
        }

        std::vector<int> freq(26, 0);
        for (size_t i = 0; i < s.length(); ++i) {
            freq[s[i] - 'a']++;
            freq[t[i] - 'a']--;
        }

        for (int c : freq) {
            if (c != 0) {
                std::cout << "false\\n";
                return 0;
            }
        }

        std::cout << "true\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "15", code: "freq[s[i] - 'a']++; freq[t[i] - 'a']--;", explanation: "Simultaneously increments for s and cancels out for t." },
      { line: "18-22", code: "if (c != 0) return false;", explanation: "Any non-zero count proves mismatch." }
    ],
    dryRunTable: {
      headers: ["Char from s", "Char from t", "Net freq balance"],
      rows: [
        ["'r'", "'c'", "freq['r'] = +1, freq['c'] = -1"],
        ["'a'", "'a'", "freq['a'] = 0 (Neutral)"],
        ["'t'", "'r'", "freq['r'] = 0, freq['t'] = +1"],
        ["Result", "-", "freq['c'] = -1 != 0 -> FALSE!"]
      ]
    },
    timeComplexity: "O(N) - Single linear pass over strings of length N.",
    spaceComplexity: "O(1) - Constant auxiliary array of size 26.",
    edgeCases: ["Different string lengths", "Single character identical vs different"],
    alternativeSolution: `// Sorting approach: std::sort(s.begin(), s.end()); std::sort(t.begin(), t.end()); return s == t; O(N log N).`,
    relatedQuestionIds: ["q-08-01", "q-11-01"]
  },

  // Chapter 14: Dynamic Programming - Climbing Stairs
  {
    id: "q-14-03",
    title: "Climbing Stairs (Dynamic Programming 101)",
    difficulty: "Easy",
    topic: "Problem-Solving Patterns",
    subtopic: "Dynamic Programming (Tabulation)",
    type: "coding",
    statement: "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?",
    inputFormat: "A single integer n.",
    outputFormat: "Print the total number of distinct ways.",
    constraints: "1 <= n <= 45",
    sampleTestCases: [
      {
        input: "2",
        output: "2",
        explanation: "1 step + 1 step, OR 2 steps. Total: 2 ways."
      },
      {
        input: "3",
        output: "3",
        explanation: "1+1+1, 1+2, 2+1. Total: 3 ways."
      }
    ],
    hiddenTestCases: [
      {
        input: "1",
        output: "1"
      },
      {
        input: "5",
        output: "8"
      }
    ],
    starterCode: `#include <iostream>

int main() {
    int n;
    if (std::cin >> n) {
        // Solve in O(N) time and O(1) space using DP Fibonacci transition
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: To reach step n, you could have come from step (n - 1) by taking 1 step, or from step (n - 2) by taking 2 steps.",
      "Hint 2: Therefore: ways(n) = ways(n - 1) + ways(n - 2). This is the Fibonacci sequence!",
      "Hint 3: Base cases: ways(1) = 1, ways(2) = 2. Use two rolling variables to compute in O(1) space."
    ],
    algorithmSteps: [
      "If n <= 2, return n.",
      "Initialize prev2 = 1 (ways for step 1), prev1 = 2 (ways for step 2).",
      "Loop i from 3 to n: current = prev1 + prev2, prev2 = prev1, prev1 = current.",
      "Print prev1."
    ],
    solutionCode: `#include <iostream>

int main() {
    int n;
    if (std::cin >> n) {
        if (n <= 2) {
            std::cout << n << "\\n";
            return 0;
        }

        long long prev2 = 1;
        long long prev1 = 2;
        long long curr = 0;

        for (int i = 3; i <= n; ++i) {
            curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }

        std::cout << curr << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "5-8", code: "if (n <= 2) { cout << n; }", explanation: "Base cases: 1 way for 1 step, 2 ways for 2 steps." },
      { line: "15", code: "curr = prev1 + prev2;", explanation: "DP recurrence relation: ways(i) = ways(i-1) + ways(i-2)." }
    ],
    dryRunTable: {
      headers: ["Step i", "prev2 (i - 2)", "prev1 (i - 1)", "curr = prev1 + prev2"],
      rows: [
        ["3", "1", "2", "3"],
        ["4", "2", "3", "5"],
        ["5", "3", "5", "8"]
      ]
    },
    timeComplexity: "O(N) - Linear iteration up to N.",
    spaceComplexity: "O(1) - Only two rolling accumulator variables.",
    edgeCases: ["n = 1", "n = 2"],
    alternativeSolution: "",
    relatedQuestionIds: ["q-04-01", "q-14-02"]
  }
];

// Append to master QUESTIONS_DATA
if (typeof QUESTIONS_DATA !== 'undefined') {
  QUESTIONS_DATA.push(...QUESTIONS_PART2);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS_PART2 };
}
