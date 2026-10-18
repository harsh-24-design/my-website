// CppMastery Curated Question Bank - Detailed problem statements, progressive hints, dry runs & test cases
const QUESTIONS_DATA = [
  // Chapter 1: Fundamentals
  {
    id: "q-01-01",
    title: "Print First Program & Formatting",
    difficulty: "Beginner",
    topic: "C++ Fundamentals",
    subtopic: "Input/Output & Syntax",
    type: "coding",
    statement: "Write a complete C++ program that prints exactly two lines of output:\nLine 1: `Welcome to C++ Mastery!`\nLine 2: `Speed: Zero-Cost Abstractions`\nEnsure there are no extra trailing spaces.",
    inputFormat: "No input is required for this problem.",
    outputFormat: "Print the two specified strings on two separate lines.",
    constraints: "None",
    sampleTestCases: [
      {
        input: "",
        output: "Welcome to C++ Mastery!\nSpeed: Zero-Cost Abstractions",
        explanation: "The program outputs line 1 followed by newline and then line 2."
      }
    ],
    hiddenTestCases: [
      {
        input: "",
        output: "Welcome to C++ Mastery!\nSpeed: Zero-Cost Abstractions"
      }
    ],
    starterCode: `#include <iostream>

int main() {
    // Write your code here to print the 2 lines
    
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Use std::cout along with the insertion operator (<<).",
      "Hint 2: To move to the next line, you can print '\\n' or std::endl.",
      "Hint 3: Make sure the capitalization and punctuation match the problem statement exactly."
    ],
    algorithmSteps: [
      "Include the <iostream> header to access console output streams.",
      "Define the standard main() function returning int.",
      "Use std::cout << \"Welcome to C++ Mastery!\\n\"; to print the first line.",
      "Use std::cout << \"Speed: Zero-Cost Abstractions\\n\"; to print the second line.",
      "Return 0 indicating successful program execution."
    ],
    solutionCode: `#include <iostream>

int main() {
    std::cout << "Welcome to C++ Mastery!" << "\\n";
    std::cout << "Speed: Zero-Cost Abstractions" << "\\n";
    return 0;
}`,
    lineByLineExplanation: [
      { line: "1", code: "#include <iostream>", explanation: "Pre-processor directive to include standard input-output stream library." },
      { line: "3", code: "int main() {", explanation: "Entry point of the C++ program, returning an integer exit status." },
      { line: "4", code: "std::cout << \"Welcome to C++ Mastery!\" << \"\\n\";", explanation: "Prints the first sentence and moves the cursor to the next line." },
      { line: "5", code: "std::cout << \"Speed: Zero-Cost Abstractions\" << \"\\n\";", explanation: "Prints the second sentence." },
      { line: "6", code: "return 0;", explanation: "Signals successful termination to the operating system." }
    ],
    dryRunTable: {
      headers: ["Step", "Action", "Console Output"],
      rows: [
        ["1", "Execute Line 4", "Welcome to C++ Mastery!"],
        ["2", "Newline '\\n'", "[Cursor moves to line 2]"],
        ["3", "Execute Line 5", "Speed: Zero-Cost Abstractions"],
        ["4", "return 0", "Process exits with code 0"]
      ]
    },
    timeComplexity: "O(1) - Constant time console printing.",
    spaceComplexity: "O(1) - No extra auxiliary memory allocated.",
    edgeCases: [
      "Ensure exact character casing ('C++' with capitals).",
      "Avoid leading or trailing blank lines."
    ],
    alternativeSolution: `// Using single cout statement with embedded newline
#include <iostream>
int main() {
    std::cout << "Welcome to C++ Mastery!\\nSpeed: Zero-Cost Abstractions\\n";
    return 0;
}`,
    relatedQuestionIds: ["q-01-02", "q-01-03"]
  },

  {
    id: "q-01-02",
    title: "Sum and Average of Three Numbers",
    difficulty: "Beginner",
    topic: "C++ Fundamentals",
    subtopic: "Variables & Type Conversion",
    type: "coding",
    statement: "Given three integers `a`, `b`, and `c`, compute their sum and their precise decimal average (rounded to 2 decimal places).\n\nInput consists of three space-separated integers.",
    inputFormat: "Three space-separated integers: a, b, c",
    outputFormat: "Line 1: `Sum: <sum>`\nLine 2: `Average: <average>` (with two decimal precision)",
    constraints: "-1000 <= a, b, c <= 1000",
    sampleTestCases: [
      {
        input: "10 20 35",
        output: "Sum: 65\nAverage: 21.67",
        explanation: "Sum is 10 + 20 + 35 = 65. Average is 65 / 3 = 21.6666... formatted to 2 decimals is 21.67."
      },
      {
        input: "5 5 5",
        output: "Sum: 15\nAverage: 5.00",
        explanation: "Sum is 15. Average is 15 / 3 = 5.00."
      }
    ],
    hiddenTestCases: [
      {
        input: "0 0 1",
        output: "Sum: 1\nAverage: 0.33"
      },
      {
        input: "-10 10 5",
        output: "Sum: 5\nAverage: 1.67"
      }
    ],
    starterCode: `#include <iostream>
#include <iomanip>

int main() {
    int a, b, c;
    if (std::cin >> a >> b >> c) {
        // Compute sum and average
        // Tip: Use std::fixed << std::setprecision(2) for decimal output
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Be careful with integer division! If you divide integer sum by 3, the decimal part will be lost.",
      "Hint 2: Cast the sum to double before dividing: static_cast<double>(sum) / 3.0.",
      "Hint 3: Use <iomanip> header and std::fixed << std::setprecision(2) to print exactly 2 decimal places."
    ],
    algorithmSteps: [
      "Read three integers a, b, and c from standard input.",
      "Calculate total sum: sum = a + b + c.",
      "Calculate average using floating point division: avg = static_cast<double>(sum) / 3.0.",
      "Print 'Sum: ' followed by sum.",
      "Use std::fixed and std::setprecision(2) to print 'Average: ' followed by avg."
    ],
    solutionCode: `#include <iostream>
#include <iomanip>

int main() {
    int a, b, c;
    if (std::cin >> a >> b >> c) {
        int sum = a + b + c;
        double avg = static_cast<double>(sum) / 3.0;

        std::cout << "Sum: " << sum << "\\n";
        std::cout << "Average: " << std::fixed << std::setprecision(2) << avg << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "2", code: "#include <iomanip>", explanation: "Required for std::setprecision and std::fixed formatting manipulators." },
      { line: "5", code: "int a, b, c;", explanation: "Declares three 32-bit signed integer variables." },
      { line: "6", code: "if (std::cin >> a >> b >> c) {", explanation: "Safely extracts 3 numbers from input stream." },
      { line: "7", code: "int sum = a + b + c;", explanation: "Computes total sum." },
      { line: "8", code: "double avg = static_cast<double>(sum) / 3.0;", explanation: "Explicitly casts sum to double to prevent integer truncation." },
      { line: "10-11", code: "std::cout << ... << std::fixed << std::setprecision(2)", explanation: "Formats decimal output to exact two decimal digits." }
    ],
    dryRunTable: {
      headers: ["Variable", "Value for input '10 20 35'", "State"],
      rows: [
        ["a, b, c", "10, 20, 35", "Read from input"],
        ["sum", "65", "10 + 20 + 35"],
        ["static_cast<double>(sum)", "65.0", "Converted to floating point"],
        ["avg", "21.666667", "65.0 / 3.0"],
        ["Output Formatter", "21.67", "Rounded to 2 decimals"]
      ]
    },
    timeComplexity: "O(1) - Constant arithmetic operations.",
    spaceComplexity: "O(1) - Primitive variables only.",
    edgeCases: [
      "Negative sums (e.g. -10, -20, -5).",
      "Sums resulting in repeating decimals like 0.3333... should round correctly to 0.33."
    ],
    alternativeSolution: `// Using printf for formatting:
#include <cstdio>
int main() {
    int a, b, c;
    if (scanf("%d %d %d", &a, &b, &c) == 3) {
        int sum = a + b + c;
        printf("Sum: %d\\nAverage: %.2f\\n", sum, (double)sum / 3.0);
    }
    return 0;
}`,
    relatedQuestionIds: ["q-01-01", "q-01-03"]
  },

  // Chapter 2: Operators & Logic
  {
    id: "q-02-01",
    title: "Check Power of Two using Bitwise Operators",
    difficulty: "Easy",
    topic: "Operators & Expressions",
    subtopic: "Bitwise Operators",
    type: "coding",
    statement: "Given an integer `n`, determine whether it is a power of two without using loops or math functions (like `pow` or `log`).\n\nAn integer `n` is a power of two if there exists an integer `x` such that $n == 2^x$.",
    inputFormat: "A single integer n.",
    outputFormat: "Print `YES` if n is a power of two, otherwise print `NO`.",
    constraints: "-2^31 <= n <= 2^31 - 1",
    sampleTestCases: [
      {
        input: "16",
        output: "YES",
        explanation: "16 = 2^4, which is a power of two."
      },
      {
        input: "18",
        output: "NO",
        explanation: "18 cannot be expressed as 2^x for any integer x."
      },
      {
        input: "0",
        output: "NO",
        explanation: "0 is not a power of two."
      }
    ],
    hiddenTestCases: [
      {
        input: "1",
        output: "YES"
      },
      {
        input: "-16",
        output: "NO"
      },
      {
        input: "1073741824",
        output: "YES"
      }
    ],
    starterCode: `#include <iostream>

int main() {
    long long n;
    if (std::cin >> n) {
        // Solve using bitwise trick without any loop
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Look at the binary representation of powers of two: 1 (0001), 2 (0010), 4 (0100), 8 (1000). What do they all have in common?",
      "Hint 2: What happens when you subtract 1 from a power of two? Example: 8 (1000) - 1 = 7 (0111).",
      "Hint 3: Evaluate (n & (n - 1)). What does it yield for powers of two? What about negative numbers and zero?"
    ],
    algorithmSteps: [
      "Check if n is positive: n must be strictly greater than 0.",
      "Apply the bitwise formula: (n & (n - 1)).",
      "If (n > 0) and (n & (n - 1)) == 0, then n has exactly one set bit and is a power of two.",
      "Print 'YES' if true, otherwise print 'NO'."
    ],
    solutionCode: `#include <iostream>

int main() {
    long long n;
    if (std::cin >> n) {
        if (n > 0 && (n & (n - 1)) == 0) {
            std::cout << "YES\\n";
        } else {
            std::cout << "NO\\n";
        }
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "4", code: "long long n;", explanation: "Uses 64-bit integer to prevent overflow during bitwise evaluation." },
      { line: "6", code: "if (n > 0 && (n & (n - 1)) == 0) {", explanation: "Checks positive constraint and verifies that only 1 bit is set." },
      { line: "7", code: "std::cout << \"YES\\n\";", explanation: "Outputs YES if single bit condition holds." }
    ],
    dryRunTable: {
      headers: ["n", "Binary of n", "n - 1", "Binary of (n - 1)", "n & (n - 1)", "Result"],
      rows: [
        ["16", "10000", "15", "01111", "00000 (0)", "YES"],
        ["18", "10010", "17", "10001", "10000 (16)", "NO"],
        ["1", "00001", "0", "00000", "00000 (0)", "YES"],
        ["0", "00000", "-1", "...", "Fails (n > 0)", "NO"]
      ]
    },
    timeComplexity: "O(1) - Single cycle bitwise CPU instruction.",
    spaceComplexity: "O(1) - Auxiliary space is zero.",
    edgeCases: [
      "n <= 0: Negative numbers and 0 must be rejected.",
      "n = 1: 2^0 = 1, must return YES.",
      "n = 2^30: Large power of 2."
    ],
    alternativeSolution: `// Using __builtin_popcountll (GCC Builtin):
#include <iostream>
int main() {
    long long n;
    if (std::cin >> n) {
        if (n > 0 && __builtin_popcountll(n) == 1) std::cout << "YES\\n";
        else std::cout << "NO\\n";
    }
    return 0;
}`,
    relatedQuestionIds: ["q-02-02", "q-02-03"]
  },

  // Chapter 3: Conditions
  {
    id: "q-03-01",
    title: "Leap Year Checker (Gregorian Calendar)",
    difficulty: "Beginner",
    topic: "Conditionals & Decision Making",
    subtopic: "if-else & Logic",
    type: "coding",
    statement: "Given a year `Y`, write a program to determine if it is a Leap Year according to the Gregorian calendar rules:\n1. A year is a leap year if it is divisible by 4, UNLESS\n2. It is divisible by 100, in which case it is NOT a leap year, UNLESS\n3. It is also divisible by 400, in which case it IS a leap year.",
    inputFormat: "A single integer year Y.",
    outputFormat: "Print `LEAP YEAR` or `NOT LEAP YEAR`.",
    constraints: "1 <= Y <= 10^5",
    sampleTestCases: [
      {
        input: "2024",
        output: "LEAP YEAR",
        explanation: "2024 is divisible by 4 and not divisible by 100."
      },
      {
        input: "1900",
        output: "NOT LEAP YEAR",
        explanation: "1900 is divisible by 100 but not divisible by 400, hence not a leap year."
      },
      {
        input: "2000",
        output: "LEAP YEAR",
        explanation: "2000 is divisible by 400, hence it is a leap year."
      }
    ],
    hiddenTestCases: [
      {
        input: "2004",
        output: "LEAP YEAR"
      },
      {
        input: "2100",
        output: "NOT LEAP YEAR"
      }
    ],
    starterCode: `#include <iostream>

int main() {
    int year;
    if (std::cin >> year) {
        // Implement leap year logic
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Check divisibility by 400 first: any century divisible by 400 is definitely a leap year.",
      "Hint 2: If divisible by 100 but not 400, it is NOT a leap year.",
      "Hint 3: Otherwise, check if divisible by 4. Combine into: (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)."
    ],
    algorithmSteps: [
      "Input integer year Y.",
      "Evaluate compound boolean condition: (Y % 400 == 0) || (Y % 4 == 0 && Y % 100 != 0).",
      "If condition evaluates to true, print 'LEAP YEAR'.",
      "Else, print 'NOT LEAP YEAR'."
    ],
    solutionCode: `#include <iostream>

int main() {
    int year;
    if (std::cin >> year) {
        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
            std::cout << "LEAP YEAR\\n";
        } else {
            std::cout << "NOT LEAP YEAR\\n";
        }
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "5", code: "if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))", explanation: "Checks Gregorian rules using short-circuit logical operators." }
    ],
    dryRunTable: {
      headers: ["Year", "year % 400 == 0", "year % 4 == 0", "year % 100 != 0", "Result"],
      rows: [
        ["2024", "False (24)", "True (0)", "True (24 != 0)", "LEAP YEAR"],
        ["1900", "False (300)", "True (0)", "False (100 == 0)", "NOT LEAP YEAR"],
        ["2000", "True (0)", "[Short-circuits]", "[Short-circuits]", "LEAP YEAR"]
      ]
    },
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    edgeCases: ["Century years like 1900, 2000, 2100", "Smallest valid year Y = 4."],
    alternativeSolution: `// Nested if-else structure
#include <iostream>
int main() {
    int y;
    if (std::cin >> y) {
        if (y % 4 == 0) {
            if (y % 100 == 0) {
                if (y % 400 == 0) std::cout << "LEAP YEAR\\n";
                else std::cout << "NOT LEAP YEAR\\n";
            } else std::cout << "LEAP YEAR\\n";
        } else std::cout << "NOT LEAP YEAR\\n";
    }
    return 0;
}`,
    relatedQuestionIds: ["q-03-02", "q-01-02"]
  },

  // Chapter 4: Loops
  {
    id: "q-04-01",
    title: "Reverse Digits of a Number & Handle Negative",
    difficulty: "Easy",
    topic: "Loops & Iteration",
    subtopic: "while loop & digit extraction",
    type: "coding",
    statement: "Given an integer `N`, reverse its digits. If `N` is negative, the minus sign should remain in the front of the reversed number. Trailing zeros in the reversed number should not have leading zeros printed (e.g., `1200` reversed is `21`).",
    inputFormat: "A single integer N.",
    outputFormat: "Print the reversed integer.",
    constraints: "-10^9 <= N <= 10^9",
    sampleTestCases: [
      {
        input: "1234",
        output: "4321",
        explanation: "Reversing digits 1, 2, 3, 4 gives 4321."
      },
      {
        input: "-502",
        output: "-205",
        explanation: "Minus sign is preserved, digits 502 reversed gives 205."
      },
      {
        input: "1200",
        output: "21",
        explanation: "1200 reversed without leading zeros is 21."
      }
    ],
    hiddenTestCases: [
      {
        input: "0",
        output: "0"
      },
      {
        input: "-7",
        output: "-7"
      }
    ],
    starterCode: `#include <iostream>

int main() {
    long long n;
    if (std::cin >> n) {
        // Reverse digits logic using while loop
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Handle the sign separately: if n < 0, remember it is negative and work with abs(n).",
      "Hint 2: To extract the last digit: rem = n % 10. To remove the last digit: n = n / 10.",
      "Hint 3: Build reversed number: rev = rev * 10 + rem."
    ],
    algorithmSteps: [
      "If n == 0, output 0 and exit.",
      "Track whether n is negative (bool isNeg = n < 0).",
      "Take absolute value of n.",
      "Initialize long long rev = 0.",
      "While n > 0: rev = rev * 10 + (n % 10), then n = n / 10.",
      "If isNeg is true, multiply rev by -1.",
      "Print rev."
    ],
    solutionCode: `#include <iostream>
#include <cmath>

int main() {
    long long n;
    if (std::cin >> n) {
        if (n == 0) {
            std::cout << 0 << "\\n";
            return 0;
        }
        bool isNeg = (n < 0);
        long long temp = std::abs(n);
        long long rev = 0;

        while (temp > 0) {
            int digit = temp % 10;
            rev = rev * 10 + digit;
            temp /= 10;
        }

        if (isNeg) {
            rev = -rev;
        }

        std::cout << rev << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "13", code: "int digit = temp % 10;", explanation: "Extracts the rightmost digit using modulo 10." },
      { line: "14", code: "rev = rev * 10 + digit;", explanation: "Shifts existing digits to the left and adds the extracted digit." },
      { line: "15", code: "temp /= 10;", explanation: "Discards the rightmost digit by integer division." }
    ],
    dryRunTable: {
      headers: ["Iteration", "temp", "digit = temp % 10", "rev = rev * 10 + digit", "temp /= 10"],
      rows: [
        ["Start", "1200", "-", "0", "-"],
        ["1", "1200", "0", "0 * 10 + 0 = 0", "120"],
        ["2", "120", "0", "0 * 10 + 0 = 0", "12"],
        ["3", "12", "2", "0 * 10 + 2 = 2", "1"],
        ["4", "1", "1", "2 * 10 + 1 = 21", "0 (Loop Ends)"]
      ]
    },
    timeComplexity: "O(log10(N)) - Loop runs proportional to the number of digits.",
    spaceComplexity: "O(1) - Primitive integers only.",
    edgeCases: ["n = 0", "Trailing zeros like 1000", "Negative numbers like -123"],
    alternativeSolution: `// String reversal approach
#include <iostream>
#include <string>
#include <algorithm>
int main() {
    long long n;
    if (std::cin >> n) {
        bool neg = n < 0;
        std::string s = std::to_string(std::abs(n));
        std::reverse(s.begin(), s.end());
        long long ans = std::stoll(s);
        if (neg) ans = -ans;
        std::cout << ans << "\\n";
    }
    return 0;
}`,
    relatedQuestionIds: ["q-04-02", "q-05-01"]
  },

  // Chapter 5: Patterns
  {
    id: "q-05-01",
    title: "Inverted Hollow Star Pyramid Pattern",
    difficulty: "Easy",
    topic: "Pattern Printing",
    subtopic: "Coordinate Math & Nested Loops",
    type: "coding",
    statement: "Given an integer `N`, print an inverted hollow pyramid of stars of height `N`.\n\nFor N = 4:\n```\n*******\n *   *\n  * *\n   *\n```\n(The top base has 2N - 1 stars. Each subsequent row has spaces and stars as hollow border).",
    inputFormat: "A single integer N.",
    outputFormat: "Print the inverted hollow star pyramid pattern.",
    constraints: "1 <= N <= 50",
    sampleTestCases: [
      {
        input: "3",
        output: "*****\n * *\n  *",
        explanation: "Top row has 2*3 - 1 = 5 stars. Middle row has leading space and hollow stars. Last row has 2 leading spaces and 1 star."
      },
      {
        input: "4",
        output: "*******\n *   *\n  * *\n   *",
        explanation: "Height 4 hollow pyramid pattern."
      }
    ],
    hiddenTestCases: [
      {
        input: "1",
        output: "*"
      },
      {
        input: "2",
        output: "***\n *"
      }
    ],
    starterCode: `#include <iostream>

int main() {
    int n;
    if (std::cin >> n) {
        // Print inverted hollow pyramid
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Row i goes from 0 to n - 1. For each row i, print i leading spaces.",
      "Hint 2: For row 0 (top row), print 2*n - 1 stars completely.",
      "Hint 3: For subsequent rows, the first star is at position 0 and second star is at 2*(n - i) - 2. For the last row, there is only 1 star."
    ],
    algorithmSteps: [
      "Loop i from 0 to n - 1 (current row).",
      "Print i spaces for indentation.",
      "If i == 0: print 2*n - 1 stars.",
      "Else if i == n - 1: print exactly 1 star.",
      "Else: print 1 star, then 2*(n - i) - 3 spaces, then 1 star.",
      "Print newline after each row."
    ],
    solutionCode: `#include <iostream>

int main() {
    int n;
    if (std::cin >> n) {
        for (int i = 0; i < n; ++i) {
            // Print leading spaces
            for (int s = 0; s < i; ++s) {
                std::cout << " ";
            }

            if (i == 0) {
                // Top full base
                for (int st = 0; st < 2 * n - 1; ++st) {
                    std::cout << "*";
                }
            } else if (i == n - 1) {
                // Bottom single vertex
                std::cout << "*";
            } else {
                // Hollow row: Star, Spaces, Star
                std::cout << "*";
                int innerSpaces = 2 * (n - i) - 3;
                for (int sp = 0; sp < innerSpaces; ++sp) {
                    std::cout << " ";
                }
                std::cout << "*";
            }
            std::cout << "\\n";
        }
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "6", code: "for (int s = 0; s < i; ++s)", explanation: "Calculates left padding: row 0 has 0 spaces, row 1 has 1 space, row i has i spaces." },
      { line: "11", code: "for (int st = 0; st < 2 * n - 1; ++st)", explanation: "Top row has full (2N - 1) star width." },
      { line: "19", code: "int innerSpaces = 2 * (n - i) - 3;", explanation: "Computes hollow gap between the boundary stars." }
    ],
    dryRunTable: {
      headers: ["Row i", "Leading Spaces (i)", "Inner Spaces 2*(N-i)-3", "Stars Pattern"],
      rows: [
        ["0", "0", "-", "******* (7 stars)"],
        ["1", "1", "2*(4-1)-3 = 3", "*   *"],
        ["2", "2", "2*(4-2)-3 = 1", "* *"],
        ["3", "3", "-", "* (1 star)"]
      ]
    },
    timeComplexity: "O(N^2) - Total characters printed is proportional to N^2.",
    spaceComplexity: "O(1) - Constant auxiliary space.",
    edgeCases: ["N = 1: Should print single '*'.", "N = 2: Prints '***' then ' *'."],
    alternativeSolution: "",
    relatedQuestionIds: ["q-04-01", "q-05-02"]
  },

  // Chapter 7: Arrays
  {
    id: "q-07-01",
    title: "Find Maximum and Minimum Element in an Array",
    difficulty: "Beginner",
    topic: "Arrays & Sorting",
    subtopic: "Linear Scan & Array Traversal",
    type: "coding",
    statement: "Given an array `arr` of size `N`, find the maximum and minimum elements in the array using the minimum number of comparisons.",
    inputFormat: "Line 1: An integer N.\nLine 2: N space-separated integers.",
    outputFormat: "Print `Min: <min_val>`\nPrint `Max: <max_val>`",
    constraints: "1 <= N <= 10^5\n-10^9 <= arr[i] <= 10^9",
    sampleTestCases: [
      {
        input: "5\n3 5 4 1 9",
        output: "Min: 1\nMax: 9",
        explanation: "1 is the smallest and 9 is the largest."
      },
      {
        input: "1\n42",
        output: "Min: 42\nMax: 42",
        explanation: "Single element is both min and max."
      }
    ],
    hiddenTestCases: [
      {
        input: "4\n-10 -20 -5 -30",
        output: "Min: -30\nMax: -5"
      }
    ],
    starterCode: `#include <iostream>
#include <vector>

int main() {
    int n;
    if (std::cin >> n) {
        std::vector<int> arr(n);
        for (int i = 0; i < n; ++i) {
            std::cin >> arr[i];
        }
        // Find min and max
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Initialize minVal and maxVal with arr[0].",
      "Hint 2: Iterate through the array starting from index 1.",
      "Hint 3: In each iteration, if arr[i] < minVal update minVal; else if arr[i] > maxVal update maxVal."
    ],
    algorithmSteps: [
      "Read array size N.",
      "Read N elements into vector arr.",
      "Set minVal = arr[0] and maxVal = arr[0].",
      "For each element from index 1 to N-1: update minVal with std::min and maxVal with std::max.",
      "Print formatted Min and Max."
    ],
    solutionCode: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n;
    if (std::cin >> n) {
        std::vector<int> arr(n);
        for (int i = 0; i < n; ++i) {
            std::cin >> arr[i];
        }

        int minVal = arr[0];
        int maxVal = arr[0];

        for (int i = 1; i < n; ++i) {
            if (arr[i] < minVal) minVal = arr[i];
            if (arr[i] > maxVal) maxVal = arr[i];
        }

        std::cout << "Min: " << minVal << "\\n";
        std::cout << "Max: " << maxVal << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "12-13", code: "int minVal = arr[0]; int maxVal = arr[0];", explanation: "Initializes both benchmarks to the first element." },
      { line: "15", code: "for (int i = 1; i < n; ++i)", explanation: "Single linear scan from index 1 to n - 1." }
    ],
    dryRunTable: {
      headers: ["Index i", "arr[i]", "minVal", "maxVal"],
      rows: [
        ["0 (Init)", "3", "3", "3"],
        ["1", "5", "3", "5"],
        ["2", "4", "3", "5"],
        ["3", "1", "1", "5"],
        ["4", "9", "1", "9"]
      ]
    },
    timeComplexity: "O(N) - Single pass through the array.",
    spaceComplexity: "O(1) - Only two integer variables for tracking.",
    edgeCases: ["N = 1 (single element).", "All elements equal.", "All negative numbers."],
    alternativeSolution: `// Using std::minmax_element:
#include <iostream>
#include <vector>
#include <algorithm>
int main() {
    int n;
    if (std::cin >> n) {
        std::vector<int> arr(n);
        for (int i = 0; i < n; ++i) std::cin >> arr[i];
        auto [minIt, maxIt] = std::minmax_element(arr.begin(), arr.end());
        std::cout << "Min: " << *minIt << "\\nMax: " << *maxIt << "\\n";
    }
    return 0;
}`,
    relatedQuestionIds: ["q-07-02", "q-14-01"]
  },

  // Chapter 14: Two Pointers Pattern
  {
    id: "q-14-01",
    title: "Two Sum in Sorted Array (Two Pointers)",
    difficulty: "Medium",
    topic: "Problem-Solving Patterns",
    subtopic: "Two Pointers Technique",
    type: "coding",
    statement: "Given a **1-indexed** array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number.\n\nReturn the 1-based indices of the two numbers, `[index1, index2]`, separated by a space.\n\nYou may not use the same element twice. Tests are generated such that there is exactly one solution.",
    inputFormat: "Line 1: N (size of array) and Target.\nLine 2: N space-separated sorted integers.",
    outputFormat: "Print the two 1-based indices separated by a space.",
    constraints: "2 <= N <= 10^5\n-10^9 <= numbers[i] <= 10^9\nnumbers is sorted in non-decreasing order.",
    sampleTestCases: [
      {
        input: "4 9\n2 7 11 15",
        output: "1 2",
        explanation: "The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2."
      },
      {
        input: "3 6\n2 3 4",
        output: "1 3",
        explanation: "The sum of 2 and 4 is 6. Therefore, index1 = 1, index2 = 3."
      }
    ],
    hiddenTestCases: [
      {
        input: "2 -1\n-1 0",
        output: "1 2"
      },
      {
        input: "5 100\n10 20 30 70 90",
        output: "3 4"
      }
    ],
    starterCode: `#include <iostream>
#include <vector>

int main() {
    int n;
    long long target;
    if (std::cin >> n >> target) {
        std::vector<long long> nums(n);
        for (int i = 0; i < n; ++i) std::cin >> nums[i];

        // Solve in O(N) using Two Pointers
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Since the array is sorted, think about placing one pointer at the start (left = 0) and one at the end (right = n - 1).",
      "Hint 2: Calculate sum = nums[left] + nums[right]. If sum == target, you found the answer!",
      "Hint 3: If sum < target, to make the sum bigger, which pointer should move? Increment left! If sum > target, decrement right!"
    ],
    algorithmSteps: [
      "Initialize left = 0 and right = n - 1.",
      "While left < right:",
      "  Calculate sum = nums[left] + nums[right].",
      "  If sum == target: output (left + 1) and (right + 1) (since 1-based indexing), then return.",
      "  If sum < target: increment left++ to increase the sum.",
      "  If sum > target: decrement right-- to decrease the sum."
    ],
    solutionCode: `#include <iostream>
#include <vector>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    int n;
    long long target;
    if (std::cin >> n >> target) {
        std::vector<long long> nums(n);
        for (int i = 0; i < n; ++i) {
            std::cin >> nums[i];
        }

        int left = 0;
        int right = n - 1;

        while (left < right) {
            long long currentSum = nums[left] + nums[right];
            if (currentSum == target) {
                std::cout << (left + 1) << " " << (right + 1) << "\\n";
                return 0;
            } else if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "15-16", code: "int left = 0; int right = n - 1;", explanation: "Sets opposing pointers at boundaries of sorted array." },
      { line: "18", code: "while (left < right)", explanation: "Loops until pointers cross." },
      { line: "20-22", code: "if (currentSum == target) { cout << (left + 1) << ' ' << (right + 1); }", explanation: "Converts 0-based index to 1-based index requested by problem." }
    ],
    dryRunTable: {
      headers: ["Step", "left", "nums[left]", "right", "nums[right]", "sum", "Action"],
      rows: [
        ["1", "0", "2", "3", "15", "17", "17 > 9 -> right--"],
        ["2", "0", "2", "2", "11", "13", "13 > 9 -> right--"],
        ["3", "0", "2", "1", "7", "9", "9 == 9 -> Match! Return 1 2"]
      ]
    },
    timeComplexity: "O(N) - In each iteration, either left increments or right decrements. At most N steps.",
    spaceComplexity: "O(1) - Two pointer variables only.",
    edgeCases: ["Negative numbers.", "Target is negative.", "Array with only 2 elements."],
    alternativeSolution: `// Binary search approach: For each i, binary search (target - nums[i]) in rest of array. O(N log N).`,
    relatedQuestionIds: ["q-07-01", "q-14-02"]
  },

  // Chapter 8: Strings
  {
    id: "q-08-01",
    title: "Valid Palindrome (Alphanumeric & Case-Insensitive)",
    difficulty: "Easy",
    topic: "Strings & Character Sequences",
    subtopic: "std::string & Two Pointers",
    type: "coding",
    statement: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string `s`, print `true` if it is a palindrome, or `false` otherwise.",
    inputFormat: "A single line containing string s (may contain spaces, punctuation).",
    outputFormat: "Print `true` or `false`.",
    constraints: "1 <= s.length() <= 10^5",
    sampleTestCases: [
      {
        input: "A man, a plan, a canal: Panama",
        output: "true",
        explanation: "\"amanaplanacanalpanama\" is a palindrome."
      },
      {
        input: "race a car",
        output: "false",
        explanation: "\"raceacar\" is not a palindrome."
      }
    ],
    hiddenTestCases: [
      {
        input: " ",
        output: "true"
      },
      {
        input: "0P",
        output: "false"
      }
    ],
    starterCode: `#include <iostream>
#include <string>
#include <cctype>

int main() {
    std::string s;
    if (std::getline(std::cin, s)) {
        // Check valid palindrome
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Use std::isalnum(c) to check if a character is alphanumeric (letter or digit).",
      "Hint 2: Use std::tolower(c) to normalize uppercase letters to lowercase.",
      "Hint 3: You can use two pointers: left starting at 0, right starting at s.length() - 1, skipping non-alphanumeric characters on the fly!"
    ],
    algorithmSteps: [
      "Set left = 0 and right = s.length() - 1.",
      "While left < right:",
      "  While left < right and !isalnum(s[left]): left++.",
      "  While left < right and !isalnum(s[right]): right--.",
      "  If tolower(s[left]) != tolower(s[right]): print 'false' and return 0.",
      "  left++, right--.",
      "If loop completes without mismatch, print 'true'."
    ],
    solutionCode: `#include <iostream>
#include <string>
#include <cctype>

int main() {
    std::string s;
    if (std::getline(std::cin, s)) {
        int left = 0;
        int right = static_cast<int>(s.length()) - 1;
        bool isPal = true;

        while (left < right) {
            while (left < right && !std::isalnum(static_cast<unsigned char>(s[left]))) {
                left++;
            }
            while (left < right && !std::isalnum(static_cast<unsigned char>(s[right]))) {
                right--;
            }
            if (std::tolower(static_cast<unsigned char>(s[left])) != 
                std::tolower(static_cast<unsigned char>(s[right]))) {
                isPal = false;
                break;
            }
            left++;
            right--;
        }

        std::cout << (isPal ? "true" : "false") << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "12", code: "while (left < right && !std::isalnum(...)) left++;", explanation: "Skips commas, spaces, and colons from left." },
      { line: "15", code: "while (left < right && !std::isalnum(...)) right--;", explanation: "Skips punctuation from right." },
      { line: "18", code: "if (std::tolower(...) != std::tolower(...))", explanation: "Compares normalized characters." }
    ],
    dryRunTable: {
      headers: ["left char", "right char", "Alphanumeric?", "tolower check", "Verdict"],
      rows: [
        ["'A'", "'a'", "Yes", "'a' == 'a'", "Match, left++, right--"],
        ["' '", "'m'", "No (space)", "Skip space -> left points to 'm'", "Next check"],
        ["'m'", "'m'", "Yes", "'m' == 'm'", "Match, left++, right--"]
      ]
    },
    timeComplexity: "O(N) - In-place two pointer traversal visiting each character at most once.",
    spaceComplexity: "O(1) - Zero extra string copying.",
    edgeCases: ["Empty string or all spaces -> true.", "Single character -> true."],
    alternativeSolution: `// Filtering string first into clean alphanumeric string:
#include <iostream>
#include <string>
#include <algorithm>
int main() {
    std::string s, clean;
    if (std::getline(std::cin, s)) {
        for (char c : s) if (isalnum(c)) clean += tolower(c);
        std::string rev = clean;
        std::reverse(rev.begin(), rev.end());
        std::cout << (clean == rev ? "true" : "false") << "\\n";
    }
    return 0;
}`,
    relatedQuestionIds: ["q-04-01", "q-14-01"]
  },

  // Chapter 11: STL
  {
    id: "q-11-01",
    title: "Frequency Tracker using std::unordered_map",
    difficulty: "Easy",
    topic: "Standard Template Library (STL)",
    subtopic: "std::unordered_map & Hash Table",
    type: "coding",
    statement: "Given an array of `N` integers, count the frequency of each element and output the elements along with their counts in descending order of frequency. If two elements have the same frequency, output the smaller element first.",
    inputFormat: "Line 1: An integer N.\nLine 2: N space-separated integers.",
    outputFormat: "Print each unique element and its frequency in the format `<element>: <count>`, one per line.",
    constraints: "1 <= N <= 10^5\n-10^9 <= arr[i] <= 10^9",
    sampleTestCases: [
      {
        input: "6\n1 2 2 3 1 2",
        output: "2: 3\n1: 2\n3: 1",
        explanation: "2 appears 3 times, 1 appears 2 times, 3 appears 1 time."
      }
    ],
    hiddenTestCases: [
      {
        input: "4\n5 5 5 5",
        output: "5: 4"
      },
      {
        input: "3\n10 20 30",
        output: "10: 1\n20: 1\n30: 1"
      }
    ],
    starterCode: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

int main() {
    int n;
    if (std::cin >> n) {
        // Count frequencies and sort
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Use std::unordered_map<int, int> freq to store element -> count.",
      "Hint 2: Copy the map entries into a std::vector<std::pair<int, int>> for custom sorting.",
      "Hint 3: Sort with a lambda: if a.second != b.second return a.second > b.second (frequency descending); else return a.first < b.first (element ascending)."
    ],
    algorithmSteps: [
      "Read N integers and increment count in unordered_map freq[val]++.",
      "Transfer pair (key, count) to a vector of pairs.",
      "Sort vector using custom comparator: primary descending by count, secondary ascending by key value.",
      "Print each pair in specified format."
    ],
    solutionCode: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    int n;
    if (std::cin >> n) {
        std::unordered_map<int, int> freq;
        for (int i = 0; i < n; ++i) {
            int x;
            std::cin >> x;
            freq[x]++;
        }

        std::vector<std::pair<int, int>> items(freq.begin(), freq.end());

        std::sort(items.begin(), items.end(), [](const std::pair<int, int>& a, const std::pair<int, int>& b) {
            if (a.second != b.second) {
                return a.second > b.second; // higher frequency first
            }
            return a.first < b.first;       // smaller number first on tie
        });

        for (const auto& p : items) {
            std::cout << p.first << ": " << p.second << "\\n";
        }
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "11", code: "std::unordered_map<int, int> freq;", explanation: "O(1) average time hash table." },
      { line: "15", code: "freq[x]++;", explanation: "Inserts key with 0 if absent, then increments counter." },
      { line: "20-25", code: "std::sort(..., [](const auto& a, const auto& b) { ... });", explanation: "Lambda function specifying dual-key comparator." }
    ],
    dryRunTable: {
      headers: ["Element x", "Map State freq", "Pair Vector", "Sorted Vector"],
      rows: [
        ["1", "{1: 1}", "-", "-"],
        ["2", "{1: 1, 2: 1}", "-", "-"],
        ["2", "{1: 1, 2: 2}", "-", "-"],
        ["3", "{1: 1, 2: 2, 3: 1}", "-", "-"],
        ["1", "{1: 2, 2: 2, 3: 1}", "-", "-"],
        ["2", "{1: 2, 2: 3, 3: 1}", "[(1,2), (2,3), (3,1)]", "[(2,3), (1,2), (3,1)]"]
      ]
    },
    timeComplexity: "O(N + K log K) where N is array size and K is number of unique elements.",
    spaceComplexity: "O(K) auxiliary space in hash table and vector.",
    edgeCases: ["All elements unique.", "All elements identical."],
    alternativeSolution: "",
    relatedQuestionIds: ["q-07-01", "q-14-01"]
  },

  // Chapter 2: Bitwise / Operators - Single Number
  {
    id: "q-02-03",
    title: "Find the Single Non-Duplicate Number (XOR Magic)",
    difficulty: "Easy",
    topic: "Operators & Expressions",
    subtopic: "Bitwise XOR Operations",
    type: "coding",
    statement: "Given a non-empty array of integers `nums`, every element appears exactly twice except for one unique element which appears only once. Find that single unique element in linear time $O(N)$ and strictly constant auxiliary space $O(1)$.",
    inputFormat: "Line 1: An integer N (always odd).\nLine 2: N space-separated integers.",
    outputFormat: "Print the single unique element.",
    constraints: "1 <= N <= 10^5\n-10^9 <= nums[i] <= 10^9",
    sampleTestCases: [
      {
        input: "5\n4 1 2 1 2",
        output: "4",
        explanation: "1 and 2 appear twice. 4 appears once."
      },
      {
        input: "3\n2 2 1",
        output: "1",
        explanation: "2 appears twice. 1 appears once."
      }
    ],
    hiddenTestCases: [
      {
        input: "1\n99",
        output: "99"
      },
      {
        input: "7\n5 3 4 3 5 4 8",
        output: "8"
      }
    ],
    starterCode: `#include <iostream>
#include <vector>

int main() {
    int n;
    if (std::cin >> n) {
        // Solve in O(N) time and O(1) space using Bitwise XOR (^)
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: A hash map or sorting works, but hash map uses O(N) space and sorting takes O(N log N) time.",
      "Hint 2: Remember the golden XOR properties: x ^ x = 0 (any number XORed with itself cancels out to 0), and x ^ 0 = x.",
      "Hint 3: XOR is commutative: order doesn't matter. If you XOR all elements together, all pairs cancel out (a ^ a = 0) leaving only the single number!"
    ],
    algorithmSteps: [
      "Initialize ans = 0.",
      "Iterate through all numbers in the array.",
      "Compute ans = ans ^ x for every number.",
      "Print ans (all duplicate pairs cancel to 0)."
    ],
    solutionCode: `#include <iostream>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    int n;
    if (std::cin >> n) {
        long long ans = 0;
        for (int i = 0; i < n; ++i) {
            long long x;
            std::cin >> x;
            ans ^= x; // x ^ x = 0, cancels out duplicates
        }
        std::cout << ans << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "12", code: "ans ^= x;", explanation: "Accumulates XOR sum. Duplicates cancel out to 0, leaving the unique element." }
    ],
    dryRunTable: {
      headers: ["Step", "Input x", "Operation", "ans Value"],
      rows: [
        ["Init", "-", "-", "0"],
        ["1", "4", "0 ^ 4", "4"],
        ["2", "1", "4 ^ 1", "5"],
        ["3", "2", "5 ^ 2", "7"],
        ["4", "1", "7 ^ 1", "6 (1 cancels with previous 1)"],
        ["5", "2", "6 ^ 2", "4 (2 cancels with previous 2)"]
      ]
    },
    timeComplexity: "O(N) - Single pass over input array.",
    spaceComplexity: "O(1) - Single accumulator variable.",
    edgeCases: ["N = 1 (single element).", "Negative numbers in array."],
    alternativeSolution: "// Hash map frequency count: O(N) time but O(N) auxiliary space.",
    relatedQuestionIds: ["q-02-01", "q-07-01"]
  },

  // Chapter 14: Kadane's Algorithm - Maximum Subarray Sum
  {
    id: "q-14-02",
    title: "Maximum Subarray Sum (Kadane's Algorithm)",
    difficulty: "Medium",
    topic: "Problem-Solving Patterns",
    subtopic: "Dynamic Programming & Greedy",
    type: "coding",
    statement: "Given an integer array `nums`, find the subarray with the largest sum, and print its sum.\n\nA subarray is a contiguous non-empty sequence of elements within an array.",
    inputFormat: "Line 1: An integer N.\nLine 2: N space-separated integers.",
    outputFormat: "Print the maximum subarray sum.",
    constraints: "1 <= N <= 10^5\n-10^4 <= nums[i] <= 10^4",
    sampleTestCases: [
      {
        input: "9\n-2 1 -3 4 -1 2 1 -5 4",
        output: "6",
        explanation: "The subarray [4, -1, 2, 1] has the largest sum = 6."
      },
      {
        input: "1\n1",
        output: "1",
        explanation: "Single element array has max sum = 1."
      },
      {
        input: "5\n-5 -2 -8 -1 -4",
        output: "-1",
        explanation: "When all numbers are negative, the largest single negative element is the answer (-1)."
      }
    ],
    hiddenTestCases: [
      {
        input: "5\n5 4 -1 7 8",
        output: "23"
      }
    ],
    starterCode: `#include <iostream>
#include <vector>

int main() {
    int n;
    if (std::cin >> n) {
        // Implement Kadane's Algorithm in O(N) time
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: Brute force checking all subarrays takes O(N^2) or O(N^3) time. Can we decide at each element whether to add it to the existing running sum or start a fresh subarray?",
      "Hint 2: If the running sum becomes negative (currentSum < 0), carrying it forward will only hurt future subarray sums! Reset it to 0.",
      "Hint 3: Watch out for all-negative arrays! Make sure maxSoFar is initialized to nums[0] (or -infinity), not 0."
    ],
    algorithmSteps: [
      "Read N and array elements into nums.",
      "Initialize maxSoFar = nums[0] and currentSum = 0.",
      "For each element x in nums:",
      "  currentSum += x.",
      "  maxSoFar = max(maxSoFar, currentSum).",
      "  If currentSum < 0, reset currentSum = 0 (drop the negative baggage).",
      "Print maxSoFar."
    ],
    solutionCode: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    int n;
    if (std::cin >> n) {
        std::vector<long long> nums(n);
        for (int i = 0; i < n; ++i) {
            std::cin >> nums[i];
        }

        long long maxSoFar = nums[0];
        long long currentSum = 0;

        for (int i = 0; i < n; ++i) {
            currentSum += nums[i];
            if (currentSum > maxSoFar) {
                maxSoFar = currentSum;
            }
            if (currentSum < 0) {
                currentSum = 0; // Reset negative prefix
            }
        }

        std::cout << maxSoFar << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "15", code: "long long maxSoFar = nums[0];", explanation: "Safely handles all-negative array cases." },
      { line: "19-21", code: "if (currentSum > maxSoFar) maxSoFar = currentSum;", explanation: "Updates best sum seen so far." },
      { line: "22-24", code: "if (currentSum < 0) currentSum = 0;", explanation: "Discards negative running sum because it can never contribute to a maximum." }
    ],
    dryRunTable: {
      headers: ["i", "nums[i]", "currentSum", "maxSoFar", "Action"],
      rows: [
        ["0", "-2", "-2", "-2", "currentSum < 0 -> reset to 0"],
        ["1", "1", "1", "1", "maxSoFar updated to 1"],
        ["2", "-3", "-2", "1", "currentSum < 0 -> reset to 0"],
        ["3", "4", "4", "4", "maxSoFar updated to 4"],
        ["4", "-1", "3", "4", "Keep currentSum 3"],
        ["5", "2", "5", "5", "maxSoFar updated to 5"],
        ["6", "1", "6", "6", "maxSoFar updated to 6"]
      ]
    },
    timeComplexity: "O(N) - Linear pass through the array.",
    spaceComplexity: "O(1) - Auxiliary space is constant.",
    edgeCases: ["All negative numbers (e.g. -5, -2, -8).", "Single element array.", "All positive numbers."],
    alternativeSolution: "// Divide and conquer using segment tree / recursion: O(N log N).",
    relatedQuestionIds: ["q-07-01", "q-14-01"]
  },

  // Chapter 13: Stacks - Valid Parentheses
  {
    id: "q-13-01",
    title: "Valid Parentheses String (Stack LIFO)",
    difficulty: "Easy",
    topic: "Data Structures Mastery",
    subtopic: "Stack Data Structure",
    type: "coding",
    statement: "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
    inputFormat: "A single line containing string s.",
    outputFormat: "Print `true` if valid, otherwise print `false`.",
    constraints: "1 <= s.length() <= 10^5\ns consists of parentheses only '()[]{}'.",
    sampleTestCases: [
      {
        input: "()[]{}",
        output: "true",
        explanation: "All brackets open and close in matching pairs."
      },
      {
        input: "(]",
        output: "false",
        explanation: "Opening '(' cannot be closed by square bracket ']'."
      },
      {
        input: "([)]",
        output: "false",
        explanation: "Brackets close in the wrong order."
      }
    ],
    hiddenTestCases: [
      {
        input: "{[]}",
        output: "true"
      },
      {
        input: "[",
        output: "false"
      },
      {
        input: "]",
        output: "false"
      }
    ],
    starterCode: `#include <iostream>
#include <string>
#include <stack>

int main() {
    std::string s;
    if (std::cin >> s) {
        // Validate brackets using std::stack
    }
    return 0;
}`,
    progressiveHints: [
      "Hint 1: A Stack is Last-In-First-Out (LIFO). The most recently opened bracket must be the first one to close!",
      "Hint 2: When you see an opening bracket '(', '{', '[', push it onto the stack.",
      "Hint 3: When you see a closing bracket, check if the stack is empty (if so, invalid!), then check if top of stack matches the expected opening partner. At the end, stack must be empty!"
    ],
    algorithmSteps: [
      "Create empty stack of chars: std::stack<char> st.",
      "Iterate through each character c in string s:",
      "  If c is '(', '{', or '[', push onto stack.",
      "  If c is closing: if stack is empty, return false.",
      "  If top of stack doesn't match c, return false. Otherwise, pop().",
      "After loop, if stack is empty return true, else return false."
    ],
    solutionCode: `#include <iostream>
#include <string>
#include <stack>

bool isValid(const std::string& s) {
    std::stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top();
            st.pop();
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '[')) {
                return false;
            }
        }
    }
    return st.empty();
}

int main() {
    std::string s;
    if (std::cin >> s) {
        std::cout << (isValid(s) ? "true" : "false") << "\\n";
    }
    return 0;
}`,
    lineByLineExplanation: [
      { line: "8", code: "st.push(c);", explanation: "Pushes opening bracket to remember most recent open." },
      { line: "10", code: "if (st.empty()) return false;", explanation: "Handles closing bracket with no matching opening bracket." },
      { line: "19", code: "return st.empty();", explanation: "Ensures all opened brackets were successfully closed." }
    ],
    dryRunTable: {
      headers: ["Char c", "Action", "Stack State st"],
      rows: [
        ["'{'", "Push '{'", "['{']"],
        ["'['", "Push '['", "['{', '[']"],
        ["']'", "Match '[' -> Pop", "['{']"],
        ["'}'", "Match '{' -> Pop", "[] (Empty -> Valid!)"]
      ]
    },
    timeComplexity: "O(N) - Linear pass through string of length N.",
    spaceComplexity: "O(N) - Stack stores at most N opening brackets in worst case.",
    edgeCases: ["Odd string length can never be valid.", "String starts with closing bracket like ']'."],
    alternativeSolution: "",
    relatedQuestionIds: ["q-08-01", "q-11-01"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS_DATA };
}
