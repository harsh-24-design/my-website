// CppMastery Lessons Database - Part 2
// Chapters 2, 3, 4 remaining lessons & Chapter 5 (Pattern Printing & Number Problems)

const LESSONS_PART2 = {
  // Chapter 2: Relational & Logical Operators (Short-Circuit)
  "les-02-02": {
    id: "les-02-02",
    chapterId: "ch-02",
    title: "Relational & Logical Operators (Short-Circuit Evaluation)",
    order: 2,
    whyNeeded: "Real-world decision making mein hum conditions check karte hain: 'Agar user logged in hai AUR balance > 0 hai toh purchase allow karo'. Logic gates aur conditions ko jodne ke liye logical operators chahiye.",
    learningObjectives: [
      "Relational operators (==, !=, <, >, <=, >=) ka boolean result",
      "Logical operators: AND (&&), OR (||), NOT (!) ki truth tables",
      "Short-Circuit Evaluation ka secret: Compiler kab dusri condition check hi nahi karta!"
    ],
    prerequisites: ["les-02-01"],
    explanationHinglish: `### 1. Relational Operators (Tulna Karna)

Yeh do values ko compare karte hain aur answer hamesha **\`bool\`** (\`true\` ya \`false\`) dete hain:
- \`==\` (Kya barabar hain?): \`5 == 5\` $\\rightarrow$ \`true\`. ⚠️ **Galti mat karna:** \`=\` assignment hota hai, \`==\` equality check hota hai!
- \`!=\` (Kya barabar nahi hain?): \`5 != 3\` $\\rightarrow$ \`true\`.
- \`<\`, \`>\`, \`<=\`, \`>=\`: Chhota, Bada, Chhota ya barabar, Bada ya barabar.

---

### 2. Logical Operators (Do ya Zyada Shartein Jodna)

| Operator | Name | Kaam | Example |
|---|---|---|---|
| **\`&&\`** | Logical AND | Dono conditions TRUE honi chahiye tabhi result TRUE hoga | \`(age >= 18 && hasVoterID)\` |
| **\`||\`** | Logical OR | Dono mein se KOI BHI EK condition TRUE ho jaye toh result TRUE | \`(hasDebitCard || hasUPI)\` |
| **\`!\`** | Logical NOT | Sach ko jhooth aur jhooth ko sach bana deta hai (Invert) | \`!isLoggedIn\` |

---

### 3. Short-Circuit Evaluation (Bohot Important Interview Concept ⚡)

C++ ka compiler bohot aalsi aur smart hota hai:
1. **\`ConditionA && ConditionB\`**:
   - Agar \`ConditionA\` hi **\`false\`** nikal gayi, toh compiler **\`ConditionB\` ko execute hi nahi karta**! Kyunki AND mein ek bhi false matlab pura result false!
2. **\`ConditionA || ConditionB\`**:
   - Agar \`ConditionA\` hi **\`true\`** nikal gayi, toh compiler **\`ConditionB\` ko touch bhi nahi karta**! Kyunki OR mein pehla true matlab pura result true!

Iska fayda: Null pointer crash se bachna:
\`\`\`cpp
if (ptr != nullptr && ptr->val == 10) // Agar ptr null hai, toh ptr->val execute nahi hoga aur crash bach jayega!
\`\`\``,

    visualMentalModel: `+-------------------------------------------------------------+
| SHORT-CIRCUIT EVALUATION                                    |
|                                                             |
| [false] && [Expression B]  ===> Result: FALSE               |
|    |                                                        |
|    +-----> Expression B is NEVER evaluated! (Short-Circuit) |
|                                                             |
| [true]  || [Expression B]  ===> Result: TRUE                |
|    |                                                        |
|    +-----> Expression B is NEVER evaluated! (Short-Circuit) |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Short-Circuit in Action with Side Effects",
      codeLines: [
        "int a = 0, b = 10;",
        "bool check = (a != 0) && (++b > 10);",
        "std::cout << \"b: \" << b;"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: a = 0 aur b = 10 initialize hue.",
          variables: { a: "0", b: "10", check: "-" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: (a != 0) check hua. 0 != 0 is FALSE! AND operator mein pehla operand FALSE milte hi short-circuit ho gaya! (++b) execute HI NAHI HUA!",
          variables: { a: "0", b: "10", check: "false" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: b ki value abhi bhi 10 hi hai (11 nahi hui!).",
          variables: { a: "0", b: "10" },
          output: "b: 10"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int x = 5;
    bool res = (x == 5) || (++x > 10);
    std::cout << "x = " << x;
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["x = 5", "x = 6", "x = 10", "Compile Error"],
        correctIndex: 0,
        explanation: "Short-circuit! (x == 5) TRUE hai. OR (||) operator mein pehla TRUE milte hi aage ka '++x' run hi nahi hua, isliye x 5 hi raha!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 'if (x = 5)' aur 'if (x == 5)' mein kya farak hai?",
        revealedContent: "'==' equality check karta hai. '=' assignment karta hai! Agar aapne galti se 'if (x = 5)' likh diya, toh yeh x mein 5 assign kar dega aur 5 non-zero hone ke karan condition HAMESHA TRUE ho jayegi! Yeh C++ ka sabse common beginner bug hai."
      }
    ],

    codeExamples: [
      {
        title: "Safe Pointer Check using Short-Circuit",
        code: `#include <iostream>

int main() {
    int* ptr = nullptr;
    // Safe: ptr != nullptr is checked FIRST. ptr->val is never reached if ptr is null.
    if (ptr != nullptr && *ptr > 0) {
        std::cout << "Positive value";
    } else {
        std::cout << "Safe: No crash occurred!";
    }
    return 0;
}`,
        output: "Safe: No crash occurred!",
        explanation: "Short-circuit evaluation prevents null pointer dereferencing crashes."
      }
    ],
    analogy: "Logical AND jaise airport security hai: Agar Passport nahi hai, toh aage Luggage check karne ka koi fayda hi nahi!",
    commonErrors: [
      {
        error: "Writing '=' instead of '=='",
        cause: "Condition mein assignment operator laga dena.",
        fix: "Hamesha '==' lagayein comparison ke liye."
      }
    ],
    keyTakeaways: [
      "&& mein pehla false aane par baaki expression skip ho jata hai.",
      "|| mein pehla true aane par baaki expression skip ho jata hai.",
      "Null checks aur boundary conditions mein short-circuiting life-saver hai."
    ],
    quiz: [
      {
        question: "Short-circuit evaluation ka kya matlab hai?",
        options: ["CPU crash ho jana", "Agar pehle operand se result tay ho jaye toh dusra operand evaluate na karna", "Fast I/O band ho jana", "Wire short circuit hona"],
        correctIndex: 1,
        explanation: "Compiler computation bachane aur crash se bachne ke liye zaroorat na hone par baaki expression evaluate nahi karta."
      }
    ],
    relatedQuestionIds: ["q-02-01", "q-03-01"]
  },

  // Chapter 2: Bitwise Operators & Binary Tricks
  "les-02-03": {
    id: "les-02-03",
    chapterId: "ch-02",
    title: "Bitwise Operators (&, |, ^, ~, <<, >>) & Binary Tricks",
    order: 3,
    whyNeeded: "Computer ke processor ke andar har calculation 0 aur 1 (bits) mein hoti hai. Bitwise operators hardware level par direct CPU registers se baat karte hain aur lightning-fast speed dete hain.",
    learningObjectives: [
      "Bitwise AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), Right Shift (>>)",
      "Left Shift (x << k) se 2^k multiply aur Right Shift (x >> k) se 2^k divide ka magic",
      "Bitwise tricks: Even/Odd check, Swap two numbers without temp, Check power of 2"
    ],
    prerequisites: ["les-02-01"],
    explanationHinglish: `### Bitwise Operators: Bits ke sath Khelna

Har number memory mein binary (0s aur 1s) mein store hota hai:
$5 = 0101_2, \\quad 3 = 0011_2$

1. **Bitwise AND (\`&\`)**:
   - Dono bits 1 honge tabhi 1 aayega ($1 \\& 1 = 1$, baaki sab $0$).
   - $0101 \\& 0011 = 0001$ (Decimal 1).

2. **Bitwise OR (\`|\`)**:
   - Koi bhi ek bit 1 ho toh 1 aayega.
   - $0101 \\mid 0011 = 0111$ (Decimal 7).

3. **Bitwise XOR (\`^\`) (Golden Operator 🌟)**:
   - Dono bits alag-alag honge tabhi 1 aayega ($1 \\oplus 0 = 1, 0 \\oplus 1 = 1$).
   - Same bits par 0 aata hai ($x \\oplus x = 0$ aur $x \\oplus 0 = x$).

4. **Left Shift (\`x << k\`)**:
   - Bits ko left mein $k$ places sarka deta hai aur aakhiri mein 0 bhar deta hai.
   - **Formula**: $x \\times 2^k$ (Example: $5 \\ll 1 = 10, 5 \\ll 2 = 20$).

5. **Right Shift (\`x >> k\`)**:
   - Bits ko right mein $k$ places sarka deta hai.
   - **Formula**: $x / 2^k$ (Example: $20 \\gg 1 = 10, 20 \\gg 2 = 5$).

---

### Top 3 Bitwise Magic Tricks for Interviews:
1. **Even ya Odd check karna**:
   - Normal: \`n % 2 == 0\` (Slow modulo division)
   - Bitwise: \`(n & 1) == 0\` (Super fast! Aakhiri bit 0 hai toh Even, 1 hai toh Odd).
2. **Power of Two check karna**:
   - Formula: \`n > 0 && (n & (n - 1)) == 0\`.
3. **Single unique number dhoondhna**:
   - Sabhi numbers ko XOR kar do, duplicate pairs $x \\oplus x = 0$ cancel ho jayenge!`,

    visualMentalModel: `+-------------------------------------------------------------+
| Binary XOR Magic: Canceling Duplicates                      |
|                                                             |
|   4 ^ 1 ^ 2 ^ 1 ^ 2                                         |
| = (1 ^ 1) ^ (2 ^ 2) ^ 4                                     |
| =    0    ^    0    ^ 4                                     |
| = 4  (Single unique element survives!)                      |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Left Shift Multiplication Stepper",
      codeLines: [
        "int num = 3;      // Binary: 00000011",
        "int shifted = num << 2; // Shift left by 2 positions",
        "std::cout << shifted;   // 3 * 2^2 = 12"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: num = 3 memory mein binary 0000 0011 store hua.",
          variables: { num: "3 (00000011)", shifted: "-" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: 2 bits left shift hue -> 0000 1100 (Decimal 12). 3 * 4 = 12!",
          variables: { num: "3", shifted: "12 (00001100)" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: 12 print hua.",
          variables: { shifted: "12" },
          output: "12"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int a = 7, b = 7;
    std::cout << (a ^ b) << ' ' << (a ^ 0);
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["0 7", "7 7", "14 0", "0 0"],
        correctIndex: 0,
        explanation: "x ^ x hamesha 0 hota hai (7 ^ 7 = 0). x ^ 0 hamesha x hota hai (7 ^ 0 = 7)."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Do numbers ko bina 3rd variable ke swap kaise karein?",
        revealedContent: "XOR trick: a = a ^ b; b = a ^ b; a = a ^ b; Isse dono numbers bina kisi extra variable ke swap ho jate hain aur integer overflow ka bhi koi khatra nahi hota!"
      }
    ],

    codeExamples: [
      {
        title: "Fast Bitwise Even/Odd Checker",
        code: `#include <iostream>

int main() {
    int n = 42;
    if ((n & 1) == 0) {
        std::cout << n << " is EVEN\\n";
    } else {
        std::cout << n << " is ODD\\n";
    }
    return 0;
}`,
        output: "42 is EVEN",
        explanation: "Binary of 42 ends in 0. (42 & 1) produces 0."
      }
    ],
    analogy: "Bitwise operators jaise light ke switch board hain. Har switch ek single bit ko ON (1) ya OFF (0) karta hai.",
    commonErrors: [
      {
        error: "Operator precedence trap with bitwise",
        cause: "if (n & 1 == 0) likhna. '==' ki precedence '&' se zyada hoti hai!",
        fix: "Hamesha parentheses lagayein: if ((n & 1) == 0)"
      }
    ],
    keyTakeaways: [
      "& dono bits 1 hone par 1 deta hai.",
      "^ (XOR) identical numbers ko 0 bana deta hai.",
      "x << k ka matlab x * 2^k, aur x >> k ka matlab x / 2^k hota hai."
    ],
    quiz: [
      {
        question: "Agar hum kisi number n ko (n & (n - 1)) karein aur result 0 aaye, toh n kya hai?",
        options: ["Odd number", "Negative number", "Power of 2", "Prime number"],
        correctIndex: 2,
        explanation: "Powers of two (1, 2, 4, 8, 16...) ke binary mein sirf 1 set bit hoti hai. Subtracting 1 flips all bits, making (n & (n - 1)) = 0."
      }
    ],
    relatedQuestionIds: ["q-02-01", "q-02-03"]
  },

  // Chapter 2: Operator Precedence Table
  "les-02-04": {
    id: "les-02-04",
    chapterId: "ch-02",
    title: "Operator Precedence & Associativity Table",
    order: 4,
    whyNeeded: "Maths mein jaise BODMAS rule hota hai, waise C++ mein jab ek hi line mein multiply, plus, bitwise aur logical operators aate hain, toh computer pehle kisko solve karega? Precedence wahi tay karti hai.",
    learningObjectives: [
      "Operator Precedence hierarchy: Kiska order pehle aata hai",
      "Associativity: Left-to-Right vs Right-to-Left evaluation",
      "Kyun brackets () lagana sabse best practice hai"
    ],
    prerequisites: ["les-02-01", "les-02-02"],
    explanationHinglish: `### Precedence Order (Kaun pehle solve hoga?)

Jab multiple operators sath aate hain:
\`\`\`cpp
int x = 10 + 5 * 2; // Output: 20, NOT 30!
\`\`\`
Kyunki \`*\` ki precedence \`+\` se high hai!

---

### The Golden Hierarchy Table (High to Low):
1. **Bracket / Scope \`()\` \`::\` \`[]\` \`.\` \`->\`**: Sabse highest priority.
2. **Unary Operators \`++\` \`--\` \`!\` \`~\` \`sizeof\`**: Right to Left.
3. **Multiplicative \`*\` \`/\` \`%\`**: Left to Right.
4. **Additive \`+\` \`-\`**: Left to Right.
5. **Shift \`<<\` \`>>\`**: Left to Right.
6. **Relational \`<\` \`<=\` \`>\` \`>=\`**: Left to Right.
7. **Equality \`==\` \`!=\`**: Left to Right.
8. **Bitwise AND \`&\`**: Left to Right.
9. **Bitwise XOR \`^\`**: Left to Right.
10. **Bitwise OR \`|\`**: Left to Right.
11. **Logical AND \`&&\`**: Left to Right.
12. **Logical OR \`||\`**: Left to Right.
13. **Ternary \`? :\`**: Right to Left.
14. **Assignment \`=\` \`+=\` \`-=\`**: Right to Left (Sabse lowest!).

---

### Pro Developer Tip:
Table yaad karne ki zaroorat nahi hai! **Hamesha Brackets \`()\` use karein!** Brackets code ko 100% clear aur bug-free banate hain.`,

    visualMentalModel: `+-------------------------------------------------------------+
| Expression Evaluation Tree                                  |
|                                                             |
|           10 + (5 * 2)                                      |
|                  |                                          |
|                [ 10 ]  <-- Multiply evaluated first         |
|                  |                                          |
|        10 + 10 = [ 20 ]                                     |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Expression Evaluation Step-by-Step",
      codeLines: [
        "int a = 2, b = 3, c = 4;",
        "int res1 = a + b * c;   // 2 + (3 * 4) = 14",
        "int res2 = (a + b) * c; // (2 + 3) * 4 = 20"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: a=2, b=3, c=4 initialize hue.",
          variables: { a: "2", b: "3", c: "4" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: Multiplication pehle hua (3 * 4 = 12), phir Addition (2 + 12 = 14).",
          variables: { res1: "14" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: Brackets ne priority badal di! Pehle 2 + 3 = 5, phir 5 * 4 = 20.",
          variables: { res1: "14", res2: "20" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int a = 1, b = 2, c = 3;
    int ans = a = b = c;
    std::cout << a << ' ' << b << ' ' << c;
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["3 3 3", "1 2 3", "1 1 1", "Compile Error"],
        correctIndex: 0,
        explanation: "Assignment operator '=' Right-to-Left associate karta hai! Pehle b = c (b ban gaya 3), phir a = b (a ban gaya 3). Teeno 3 ban gaye!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Right-to-Left Associativity ka kya matlab hai?",
        revealedContent: "Zyadatar operators Left-to-Right chalte hain (10 - 5 - 2 = (10-5) - 2 = 3). Lekin Assignment (=) aur Unary (++) operators Right-to-Left chalte hain. Isliye 'a = b = c = 5' mein sabse pehle c = 5 assign hota hai, phir b = 5, phir a = 5."
      }
    ],

    codeExamples: [
      {
        title: "Bitwise Precedence Pitfall",
        code: `#include <iostream>

int main() {
    int n = 5;
    // WRONG WITHOUT PARENTHESES:
    // (n & 1 == 1) evaluates (1 == 1) FIRST which is true, then (5 & true) = 1!
    
    // SAFE WITH PARENTHESES:
    if ((n & 1) == 1) {
        std::cout << "5 is odd!\\n";
    }
    return 0;
}`,
        output: "5 is odd!",
        explanation: "Parentheses guarantee that bitwise AND executes before equality check."
      }
    ],
    analogy: "Precedence jaise train ke tickets ka VIP quota hai: VIP passenger (high precedence operator) aam passenger se pehle line mein aage badhta hai.",
    commonErrors: [
      {
        error: "Relying on implicit precedence in complex expressions",
        cause: "Bina brackets ke a + b * c / d & e likhna.",
        fix: "Hamesha brackets () lagayein taaki koi confusion na rahe."
      }
    ],
    keyTakeaways: [
      "Multiplication aur division addition aur subtraction se pehle aate hain.",
      "Equality (==) bitwise operators (&, |) se high precedence rakhti hai.",
      "Brackets () lagana hamesha safest approach hai."
    ],
    quiz: [
      {
        question: "Kaun sa operator Right-to-Left associativity follow karta hai?",
        options: ["Addition (+)", "Assignment (=)", "Division (/)", "Multiplication (*)"],
        correctIndex: 1,
        explanation: "Assignment operators (=, +=, -=) aur ternary (? :) right to left evaluate hote hain."
      }
    ],
    relatedQuestionIds: ["q-02-01", "q-01-02"]
  },

  // Chapter 3: else-if Ladder & Ternary Operator
  "les-03-02": {
    id: "les-03-02",
    chapterId: "ch-03",
    title: "else-if Ladder & Ternary Operator (condition ? expr1 : expr2)",
    order: 2,
    whyNeeded: "Zindagi mein hamesha sirf do options (Ha/Na) nahi hote. Grades A, B, C, D ho sakte hain ya signals Red, Yellow, Green ho sakte hain. Multiple choices ke liye else-if ladder aur quick decisions ke liye ternary operator chahiye.",
    learningObjectives: [
      "else-if ladder ka execution flow: Ek condition match hote hi baaki skip ho jati hain",
      "Ternary operator (? :) ka compact syntax",
      "Ternary operator ko statement vs expression ki tarah use karna"
    ],
    prerequisites: ["les-03-01"],
    explanationHinglish: `### 1. else-if Ladder (Multiple Options)

Jab 2 se zyada raste ho:
\`\`\`cpp
if (marks >= 90) {
    std::cout << "Grade: A";
} else if (marks >= 75) {
    std::cout << "Grade: B";
} else if (marks >= 50) {
    std::cout << "Grade: C";
} else {
    std::cout << "Grade: Fail";
}
\`\`\`
**Kaise chalta hai?**
Upar se niche check hota hai. Jaise hi koi ek condition **TRUE** hoti hai, uska code chalta hai aur **computer seedhe ladder se bahar nikal jata hai!** Niche ki conditions check bhi nahi hoti!

---

### 2. Ternary Operator (\`? :\`) (1-Line Quick Decision)

Agar chhota sa if-else likhna hai, toh 5 lines ki jagah 1 line mein likh sakte hain:
$$\\text{Condition} \\; ? \\; \\text{Value if TRUE} \\; : \\; \\text{Value if FALSE};$$

\`\`\`cpp
// Normal if-else:
int maxVal;
if (a > b) maxVal = a;
else maxVal = b;

// Ternary operator equivalent:
int maxVal = (a > b) ? a : b;
\`\`\`
Yeh bohot readable aur clean hota hai!`,

    visualMentalModel: `+-------------------------------------------------------------+
| else-if Ladder Flow                                         |
|                                                             |
| [marks >= 90 ?] --(YES)--> [Print A] ---> [EXIT LADDER]     |
|       | (NO)                                                |
| [marks >= 75 ?] --(YES)--> [Print B] ---> [EXIT LADDER]     |
|       | (NO)                                                |
| [marks >= 50 ?] --(YES)--> [Print C] ---> [EXIT LADDER]     |
|       | (NO)                                                |
|   [else]       ----------> [Print Fail]-> [EXIT LADDER]     |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Ternary Operator Variable Assignment",
      codeLines: [
        "int score = 85;",
        "std::string status = (score >= 40) ? \"PASSED\" : \"FAILED\";",
        "std::cout << status;"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: score = 85 initialize hua.",
          variables: { score: "85", status: "-" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: (score >= 40) check hua -> 85 >= 40 is TRUE! '?' ke theek baad wala expression ('PASSED') select hua aur status mein assign hua.",
          variables: { score: "85", status: "\"PASSED\"" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: 'PASSED' print hua.",
          variables: { status: "\"PASSED\"" },
          output: "PASSED"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int n = 10;
    std::cout << ((n % 2 == 0) ? "EVEN" : "ODD");
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["EVEN", "ODD", "10", "Compile Error"],
        correctIndex: 0,
        explanation: "10 % 2 == 0 TRUE hai, isliye ternary ne 'EVEN' return kiya jo cout ne print kar diya."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Kya nested ternary operators (a ? b : c ? d : e) likhna achha hai?",
        revealedContent: "Technically valid hai, lekin code readable nahi rehta aur bugs dhoondhna mushkil ho jata hai. Recommendation: Agar 2 se zyada conditions ho, toh ternary ki jagah saaf-suthra 'else-if' ya 'switch-case' use karein."
      }
    ],

    codeExamples: [
      {
        title: "Finding Absolute Value using Ternary",
        code: `#include <iostream>

int main() {
    int x = -15;
    int absVal = (x < 0) ? -x : x;
    std::cout << "Absolute value of " << x << " is " << absVal << '\\n';
    return 0;
}`,
        output: "Absolute value of -15 is 15",
        explanation: "Negative values are inverted by multiplying with -1."
      }
    ],
    analogy: "else-if ladder jaise shopping mall ki alag-alag floors hain: Agar pehli floor par kapde mil gaye toh wahi se khareed kar bahar nikal aate hain, baaki floors nahi ghoomte.",
    commonErrors: [
      {
        error: "Missing parentheses around ternary condition in cout",
        cause: "cout << a > b ? a : b; likhna. '<<' ki precedence '>' se zyada hoti hai!",
        fix: "Hamesha wrap karein: cout << (a > b ? a : b);"
      }
    ],
    keyTakeaways: [
      "else-if ladder pehla match hote hi terminate ho jata hai.",
      "Ternary operator compact single-line decision ke liye perfect hai.",
      "cout ke andar ternary use karte waqt parentheses lagana zaroori hai."
    ],
    quiz: [
      {
        question: "Ternary operator (? :) kitne operands leta hai?",
        options: ["1 Operand", "2 Operands", "3 Operands", "4 Operands"],
        correctIndex: 2,
        explanation: "Ternary 3 operands leta hai: (1) Condition, (2) Value if true, (3) Value if false."
      }
    ],
    relatedQuestionIds: ["q-03-01", "q-01-02"]
  },

  // Chapter 3: switch-case & Fallthrough
  "les-03-04": {
    id: "les-03-04",
    chapterId: "ch-03",
    title: "switch-case Statement, Fallthrough & break Trap",
    order: 4,
    whyNeeded: "Jab aapko ek single variable ki alag-alag fixed values (jaise Day 1=Mon, 2=Tue, 3=Wed) check karni ho, toh 10 bar else-if likhna ganda lagta hai. 'switch' statement clean code aur fast jump-table optimization deti hai.",
    learningObjectives: [
      "switch, case, break aur default ka syntax aur execution",
      "Fallthrough kya hota hai aur 'break' miss karne se kya galti hoti hai",
      "Kyun switch sirf integers aur chars par kaam karta hai (strings/floats par nahi)"
    ],
    prerequisites: ["les-03-01"],
    explanationHinglish: `### switch-case Statement: Direct Jump!

Jab ek variable ke alag-alag constant values check karni ho:

\`\`\`cpp
int day = 3;
switch (day) {
    case 1:
        std::cout << "Monday";
        break;
    case 2:
        std::cout << "Tuesday";
        break;
    case 3:
        std::cout << "Wednesday";
        break;
    default:
        std::cout << "Invalid Day";
}
\`\`\`

---

### Fallthrough & The 'break' Trap ⚠️ (Sabse Bada Bug!)

Agar aap kisi case ke aakhiri mein **\`break;\`** lagana bhool gaye, toh C++ agle case ka code bhi bina condition check kiye chala dega! Isko **Fallthrough** kehte hain.

\`\`\`cpp
int x = 1;
switch (x) {
    case 1:
        std::cout << "One ";
        // Missing break!
    case 2:
        std::cout << "Two ";
        break;
}
// Output: "One Two " (Two bhi print ho gaya kyunki break nahi tha!)
\`\`\`

---

### Important Rules of switch:
1. ✅ Sirf **Integral types** (\`int\`, \`char\`, \`enum\`, \`bool\`) chalte hain.
2. ❌ **\`float\` aur \`double\` mana hain**: \`case 3.14:\` compilation error dega!
3. ❌ **\`std::string\` mana hai**: C++ switch mein strings allowed nahi hain (C++20 tak).`,

    visualMentalModel: `+-------------------------------------------------------------+
| switch Jump Table (Direct O(1) Jump)                        |
|                                                             |
| switch(x) ---> [Jump Table]                                 |
|                     |                                       |
|                     +---> case 1: [Execute] ---> [break] ---> EXIT
|                     +---> case 2: [Execute] ---> (No break) |
|                     |                                | (Falls into next)
|                     +---> case 3: [Execute] <--------+      |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Fallthrough Trap Visualizer",
      codeLines: [
        "int rating = 2;",
        "switch (rating) {",
        "    case 1: std::cout << \"Poor \";",
        "    case 2: std::cout << \"Average \";",
        "    case 3: std::cout << \"Good \"; break;",
        "    default: std::cout << \"None\";",
        "}"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: rating = 2 set hua.",
          variables: { rating: "2" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "Line 4: switch direct case 2 par jump kiya! 'Average ' print hua. Lekin break nahi mila!",
          variables: { rating: "2" },
          output: "Average "
        },
        {
          lineIndex: 4,
          explanation: "Line 5: FALLTHROUGH! Case 3 execute ho gaya aur 'Good ' print hua. Ab break mila toh exit hua!",
          variables: { rating: "2" },
          output: "Average Good "
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    char ch = 'B';
    switch (ch) {
        case 'A': std::cout << "1"; break;
        case 'B': std::cout << "2";
        case 'C': std::cout << "3"; break;
        default: std::cout << "4";
    }
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["2", "23", "234", "123"],
        correctIndex: 1,
        explanation: "Case 'B' match hua aur '2' print hua. Break na hone ki wajah se case 'C' bhi run hua aur '3' print hua, phir break mil gaya. Total output: 23."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Kya intentional fallthrough ka koi useful use-case hai?",
        revealedContent: "Haan! Jaise Vowels check karna: case 'a': case 'e': case 'i': case 'o': case 'u': std::cout << 'Vowel'; break; Yahan humne 5 alag cases ko ek sath group kar diya!"
      }
    ],

    codeExamples: [
      {
        title: "Grouping Cases in switch (Vowel Checker)",
        code: `#include <iostream>

int main() {
    char grade = 'A';
    switch (grade) {
        case 'A':
        case 'B':
            std::cout << "Excellent Performance!\\n";
            break;
        case 'C':
        case 'D':
            std::cout << "Satisfactory Performance.\\n";
            break;
        default:
            std::cout << "Needs Improvement.\\n";
    }
    return 0;
}`,
        output: "Excellent Performance!",
        explanation: "Grade 'A' falls through to 'B' executing common logic."
      }
    ],
    analogy: "switch jaise lift (elevator) ke buttons hain: Button 4 dabaya toh lift seedhe 4th floor par rukti hai, har floor par nahi rukti.",
    commonErrors: [
      {
        error: "Forgetting break statement",
        cause: "Case ke aakhiri mein break bhool jana.",
        fix: "Har case ke end mein break; lagayein jab tak fallthrough jaan-boojh kar na chahiye ho."
      }
    ],
    keyTakeaways: [
      "switch integers aur characters par constant values check karta hai.",
      "break na lagane se fallthrough hota hai.",
      "default case tab chalta hai jab koi bhi case match na ho."
    ],
    quiz: [
      {
        question: "switch statement mein kaun sa data type use NAHI ho sakta?",
        options: ["int", "char", "double", "bool"],
        correctIndex: 2,
        explanation: "Floating point numbers (float, double) switch statement mein allowed nahi hote kyunki unme binary representation ki wajah se exact equality match reliably nahi hoti."
      }
    ],
    relatedQuestionIds: ["q-03-01", "q-01-01"]
  },

  // Chapter 4: while & do-while Loops
  "les-04-02": {
    id: "les-04-02",
    chapterId: "ch-04",
    title: "while & do-while Loops: Entry-Controlled vs Exit-Controlled",
    order: 2,
    whyNeeded: "for loop tab best hota hai jab pehle se pata ho kitni baar ghoomna hai (1 se 10 tak). Lekin jab pata na ho kab tak ghoomna hai (jaise: 'Jab tak user 0 na dabaye tab tak chalte raho'), tab while loop kaam aata hai.",
    learningObjectives: [
      "while loop ka syntax aur entry-controlled condition check",
      "do-while loop ka exit-controlled nature: Kam se kam ek baar zaroor chalna",
      "Interactive menu-driven programs mein do-while ka real-world use"
    ],
    prerequisites: ["les-04-01"],
    explanationHinglish: `### 1. while Loop (Entry-Controlled)

Jab number of iterations pehle se pata na ho:
\`\`\`cpp
while (condition) {
    // Body runs only IF condition is TRUE at the gate!
}
\`\`\`
- Computer pehle gate par condition check karta hai.
- Agar condition pehli hi baar mein **FALSE** hai, toh loop **ek baar bhi nahi chalega (0 times)**!

---

### 2. do-while Loop (Exit-Controlled)

\`\`\`cpp
do {
    // Body runs FIRST, condition is checked LATER!
} while (condition); // Notice the semicolon ';' at the end!
\`\`\`
- Computer bina koi sawal pooche pehle body chala deta hai.
- Aakhiri mein gate par condition check karta hai.
- **Guarantee**: Condition chahe shuru se hi FALSE ho, do-while **kam se kam EK BAAR zaroor chalega (at least once)**!

---

### Comparison:
| Feature | while Loop | do-while Loop |
|---|---|---|
| **Gate Check** | Entry par (Pehle check, phir entry) | Exit par (Pehle entry, baad mein check) |
| **Minimum Executions** | **0 baar** (Agar pehli condition false ho) | **Kam se kam 1 baar** |
| **Ending Semicolon** | \`while (cond) {}\` (No semicolon) | \`do {} while (cond);\` (Semicolon mandatory!) |
| **Best Use Case** | Digit extraction, Array scanning | ATM Pin prompt, Game Menu ("Play again? Y/N") |`,

    visualMentalModel: `+-------------------------------------------------------------+
| while Loop (Entry Check):                                   |
|   [Condition ?] --(FALSE)--> [Exit immediately (0 runs)]    |
|         | (TRUE)                                            |
|         v                                                   |
|      [Body]                                                 |
|                                                             |
| do-while Loop (Exit Check):                                 |
|      [Body (Always runs at least once)]                     |
|         |                                                   |
|         v                                                   |
|   [Condition ?] --(TRUE)--> [Loop again]                    |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "do-while Guarantees 1 Execution even if Condition is False",
      codeLines: [
        "int x = 100;",
        "do {",
        "    std::cout << \"Executed once! \";",
        "} while (x < 10); // Condition is FALSE!"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: x = 100 initialize hua.",
          variables: { x: "100" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: do-while ne bina condition dekhe body chala di! 'Executed once! ' print hua.",
          variables: { x: "100" },
          output: "Executed once! "
        },
        {
          lineIndex: 3,
          explanation: "Line 4: Ab check hua: Kya 100 < 10 hai? NO (False)! Loop ruk gaya.",
          variables: { x: "100" },
          output: "Executed once! "
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int i = 5;
    while (i < 5) {
        std::cout << i << ' ';
        i++;
    }
    std::cout << "Done";
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["5 Done", "Done", "0 1 2 3 4 Done", "Infinite Loop"],
        correctIndex: 1,
        explanation: "Pehle hi check par: 5 < 5 FALSE hai! while loop ki body ek baar bhi nahi chali, seedhe 'Done' print hua."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Digit extraction (jaise reverse number) mein while loop kyun best hai?",
        revealedContent: "Kyunki hume pehle se pata nahi hota ki number kitne digits ka hai (3 digits ka ya 10 digits ka). while (n > 0) loop tab tak chalta rehta hai jab tak n /= 10 hote hote 0 na ban jaye!"
      }
    ],

    codeExamples: [
      {
        title: "Sum of Digits using while Loop",
        code: `#include <iostream>

int main() {
    int n = 456;
    int sum = 0;
    while (n > 0) {
        int lastDigit = n % 10;
        sum += lastDigit;
        n /= 10; // Removes last digit
    }
    std::cout << "Sum of digits: " << sum << '\\n';
    return 0;
}`,
        output: "Sum of digits: 15",
        explanation: "4 + 5 + 6 = 15. Extracts and strips digits one by one."
      }
    ],
    analogy: "while loop jaise cinema hall ka ticket checker hai: Bina ticket andar nahi ghus sakte. do-while jaise amusement park ride hai jisme pehle ride lete hain aur utarte waqt paise dete hain.",
    commonErrors: [
      {
        error: "Missing semicolon after while in do-while",
        cause: "do { ... } while (cond) likh kar semicolon bhool jana.",
        fix: "do-while ke aakhiri mein semicolon mandatory hai: while (cond);"
      }
    ],
    keyTakeaways: [
      "while loop tab use karein jab iteration count unknown ho.",
      "do-while hamesha kam se kam 1 baar run hota hai.",
      "Loop ke andar variable update karna zaroori hai warna infinite loop ban jayega."
    ],
    quiz: [
      {
        question: "Agar condition shuru se hi FALSE ho, toh kaun sa loop kam se kam ek baar execute hoga?",
        options: ["for loop", "while loop", "do-while loop", "koi bhi nahi"],
        correctIndex: 2,
        explanation: "do-while exit-controlled loop hai jo condition check karne se pehle body ko ek baar chala deta hai."
      }
    ],
    relatedQuestionIds: ["q-04-01", "q-01-02"]
  },

  // Chapter 4: Control Jumps: break, continue & Infinite Loop Traps
  "les-04-04": {
    id: "les-04-04",
    chapterId: "ch-04",
    title: "Control Jumps: break, continue & Infinite Loop Traps",
    order: 4,
    whyNeeded: "Loops ko chalte chalte beech mein se rokna (jaise target milte hi search band karna) ya kisi particular step ko skip karna (jaise negative numbers ignore karna) ho, toh break aur continue control jump statements use hote hain.",
    learningObjectives: [
      "break: Loop ko turant permanently terminate kar dena",
      "continue: Current iteration ko beech mein chhod kar agle round par jump karna",
      "Infinite Loop Traps se bachna aur unhe debug karna"
    ],
    prerequisites: ["les-04-01"],
    explanationHinglish: `### break vs continue (Confusion Khatam!)

#### 1. \`break\` (Emergency Brake 🛑)
- Jaise hi computer ko \`break\` milta hai, woh **loop ko turant poora khatam** karke loop ke curly braces ke bahar chala jata hai!
- Example: Linear search mein jaise hi roll number mil gaya, aage ke 1000 bacho ko check karne ki zaroorat nahi $\\rightarrow$ \`break\`!

#### 2. \`continue\` (Skip to Next Lap ⏩)
- \`continue\` loop ko band nahi karta!
- Yeh sirf **current iteration ke bache hue hisse ko skip** karta hai aur seedhe **agle iteration (update statement)** par jump kar jata hai!
- Example: 1 se 10 mein se even numbers skip karke sirf odd numbers print karna.

---

### Infinite Loop Trap (CPU Jam! 🔥)
Agar aapka loop kabhi ruk hi na sake:
\`\`\`cpp
int i = 1;
while (i <= 5) {
    std::cout << i;
    // Galti: i++ likhna bhool gaye! i hamesha 1 hi rahega!
}
\`\`\`
Computer 100% CPU use karega aur browser/app freeze ho jayega!
**Bachaav**: Hamesha check karein ki loop variable update ho raha hai aur termination condition achieve ho sakti hai.`,

    visualMentalModel: `+-------------------------------------------------------------+
| break vs continue Flow                                      |
|                                                             |
| Loop Body:                                                  |
|    |                                                        |
|    +---> if (condition) break;    ===> [JUMPS OUT OF LOOP]  |
|    |                                                        |
|    +---> if (condition) continue; ===> [SKIPS TO NEXT ITER] |
|    |                                                        |
|    +---> Normal Statements                                  |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "continue Skipping Specific Values",
      codeLines: [
        "for (int i = 1; i <= 4; ++i) {",
        "    if (i == 2) continue; // Skip 2!",
        "    std::cout << i << ' ';",
        "}"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "i = 1: i == 2 is false. '1 ' print hua.",
          variables: { i: "1" },
          output: "1 "
        },
        {
          lineIndex: 1,
          explanation: "i = 2: i == 2 is TRUE! continue chala! Line 3 skip ho gayi aur direct ++i par jump hua!",
          variables: { i: "2" },
          output: "1 "
        },
        {
          lineIndex: 0,
          explanation: "i = 3: i == 2 is false. '3 ' print hua.",
          variables: { i: "3" },
          output: "1 3 "
        },
        {
          lineIndex: 0,
          explanation: "i = 4: i == 2 is false. '4 ' print hua. Loop finishes.",
          variables: { i: "4" },
          output: "1 3 4 "
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    for (int i = 1; i <= 5; ++i) {
        if (i == 3) break;
        std::cout << i << ' ';
    }
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["1 2", "1 2 3", "1 2 4 5", "1 2 3 4 5"],
        correctIndex: 0,
        explanation: "i = 3 hote hi break chal gaya aur loop turant terminate ho gaya! Isliye sirf 1 aur 2 print hue."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Nested loops mein break kis loop ko todta hai?",
        revealedContent: "'break' sirf us sabse andar wale (innermost) loop ko todta hai jiske andar woh likha hota hai. Bahar wala outer loop chalta rehta hai! Dono loops se bahar aane ke liye flag variable ya return statement use ki jaati hai."
      }
    ],

    codeExamples: [
      {
        title: "Early Exit from Search Loop",
        code: `#include <iostream>

int main() {
    int target = 42;
    int arr[5] = {10, 25, 42, 60, 99};
    
    for (int i = 0; i < 5; ++i) {
        if (arr[i] == target) {
            std::cout << "Target found at index: " << i << '\\n';
            break; // Stop scanning remaining elements
        }
    }
    return 0;
}`,
        output: "Target found at index: 2",
        explanation: "Loop stops after index 2 without wasting time on remaining elements."
      }
    ],
    analogy: "break jaise emergency alarm bajte hi building se bahar bhaagna hai. continue jaise khane ki thali mein se mirchi ko side mein karke agla niwala lena hai.",
    commonErrors: [
      {
        error: "Infinite loop with continue in while loop",
        cause: "while loop mein counter update (i++) continue ke baad likhna. continue hote hi i++ skip ho jata hai aur i wahi reh jata hai!",
        fix: "continue se pehle counter update karein ya for loop use karein."
      }
    ],
    keyTakeaways: [
      "break loop se turant bahar nikal deta hai.",
      "continue sirf current round skip karke agle round par bhejta hai.",
      "Infinite loops se bachne ke liye termination condition verify karein."
    ],
    quiz: [
      {
        question: "continue statement chalne par kya hota hai?",
        options: ["Loop pura band ho jata hai", "Program exit ho jata hai", "Current iteration ka bacha hua hissa skip hota hai aur agle iteration par jump hota hai", "Variable 0 ban jata hai"],
        correctIndex: 2,
        explanation: "continue skips the remainder of the current iteration and advances the loop counter to the next cycle."
      }
    ],
    relatedQuestionIds: ["q-04-01", "q-07-01"]
  },

  // Chapter 5: Pattern Printing Master Blueprint
  "les-05-01": {
    id: "les-05-01",
    chapterId: "ch-05",
    title: "The Master Blueprint for Pattern Printing (Row & Column Mapping)",
    order: 1,
    whyNeeded: "Pattern printing programming ka ultimate logic builder hai! Agar aap patterns master kar lete hain, toh matrices, 2D arrays, aur nested coordinate systems aasaan lagne lagte hain.",
    learningObjectives: [
      "Pattern Printing ka Universal 4-Step Blueprint",
      "Outer loop (Rows) aur Inner loop (Columns) ka coordinate math",
      "Right-angled triangle aur inverted triangle patterns solve karna"
    ],
    prerequisites: ["les-04-03"],
    explanationHinglish: `### The Master 4-Step Formula (Har Pattern Solve Hoga!)

Duniya ka koi bhi pattern ho, sirf yeh 4 sawaal poochein:

1. **Step 1 (Outer Loop - Rows)**:
   - "Total kitni rows hain?" $\\rightarrow$ Outer loop \`for (int i = 1; i <= n; ++i)\` chalao!
2. **Step 2 (Inner Loop - Leading Spaces)**:
   - "Har row ke start mein kitni spaces chahiye?" $\\rightarrow$ Space loop chalao!
3. **Step 3 (Inner Loop - Characters/Stars)**:
   - "Row \`i\` mein kitne stars ya numbers print karne hain?" (Row number se formula nikalo: Jaise Row 1 par 1 star, Row 2 par 2 stars $\\rightarrow$ \`j <= i\`).
4. **Step 4 (Newline)**:
   - Har row ke aakhiri mein \`std::cout << '\\n';\` lagao!

---

### Example: Right-Angled Star Triangle
\`\`\`
*
**
***
****
\`\`\`
- Row 1: 1 star
- Row 2: 2 stars
- Row \`i\`: \`i\` stars!
Formula: \`for (int j = 1; j <= i; ++j) cout << "*";\``,

    visualMentalModel: `+-------------------------------------------------------------+
| Coordinate Grid for N = 4 Triangle                          |
|                                                             |
| Row i=1: [*]                                                |
| Row i=2: [*][*]                                             |
| Row i=3: [*][*][*]                                          |
| Row i=4: [*][*][*][*]                                       |
|                                                             |
| Outer Loop: i from 1 to N                                   |
| Inner Loop: j from 1 to i                                   |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Nested Loop Star Printing Stepper",
      codeLines: [
        "for (int i = 1; i <= 3; ++i) {",
        "    for (int j = 1; j <= i; ++j) {",
        "        std::cout << \"*\";",
        "    }",
        "    std::cout << '\\n';",
        "}"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Row 1 (i=1): Outer loop shuru hua.",
          variables: { i: "1", j: "-" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "j=1: '*' print hua.",
          variables: { i: "1", j: "1" },
          output: "*"
        },
        {
          lineIndex: 4,
          explanation: "Newline '\\n' trigger hua. Row 1 complete!",
          variables: { i: "1" },
          output: "*\n"
        },
        {
          lineIndex: 0,
          explanation: "Row 2 (i=2): j loop 1 se 2 chalega.",
          variables: { i: "2", j: "-" },
          output: "*\n"
        },
        {
          lineIndex: 2,
          explanation: "j=1 aur j=2 chale: '**' print hua.",
          variables: { i: "2", j: "2" },
          output: "*\n**\n"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    for (int i = 1; i <= 3; ++i) {
        for (int j = 1; j <= i; ++j) {
            std::cout << j;
        }
        std::cout << ' ';
    }
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["1 12 123 ", "1 22 333 ", "123", "111 222 333 "],
        correctIndex: 0,
        explanation: "Inner loop mein hum 'j' print kar rahe hain: Row 1 prints 1, Row 2 prints 12, Row 3 prints 123."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Inverted Star Triangle (4, 3, 2, 1 stars) ka loop kaise likhenge?",
        revealedContent: "Do tarike hain: (1) Outer loop ulta chalao: for (int i = n; i >= 1; --i) aur inner loop j <= i tak chalao. (2) Outer loop seedha chalao aur inner loop (n - i + 1) tak chalao!"
      }
    ],

    codeExamples: [
      {
        title: "Number Pyramid Pattern",
        code: `#include <iostream>

int main() {
    int n = 4;
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= i; ++j) {
            std::cout << i << " ";
        }
        std::cout << "\\n";
    }
    return 0;
}`,
        output: "1 \n2 2 \n3 3 3 \n4 4 4 4 ",
        explanation: "Prints the current row number 'i' repeated 'i' times."
      }
    ],
    analogy: "Pattern printing jaise graph paper par drawing banana hai: x-axis (columns) aur y-axis (rows) ke coordinates match karke dots lagate hain.",
    commonErrors: [
      {
        error: "Missing newline at row end",
        cause: "Inner loop ke bahar std::cout << '\\n' na lagana, jisse sara pattern ek hi lamba horizontal line ban jata hai.",
        fix: "Outer loop ke andar inner loop ke theek baad '\\n' lagayein."
      }
    ],
    keyTakeaways: [
      "Outer loop rows control karta hai.",
      "Inner loop har row ke columns (characters) print karta hai.",
      "Coordinate math se relation dhoondhna pattern printing ki chaabi hai."
    ],
    quiz: [
      {
        question: "Agar n = 5 hai aur hume har row i par (n - i + 1) stars print karne hain, toh Row 1 par kitne stars print honge?",
        options: ["1 star", "5 stars", "4 stars", "0 stars"],
        correctIndex: 1,
        explanation: "Formula mein i = 1 daalne par: 5 - 1 + 1 = 5 stars."
      }
    ],
    relatedQuestionIds: ["q-05-01", "q-04-01"]
  },

  // Chapter 5: Number Theory - Digit Extraction & Palindromes
  "les-05-03": {
    id: "les-05-03",
    chapterId: "ch-05",
    title: "Number Theory 101: Digit Extraction, Reverse & Palindromes",
    order: 3,
    whyNeeded: "Coding interviews mein digit manipulation par bohot questions aate hain: Palindrome Number, Armstrong Number, Happy Number, Reverse Integer. In sabka base ek hi core algorithm hai: Modulo 10 aur Division 10.",
    learningObjectives: [
      "Modulo 10 (%) se aakhiri digit extract karna",
      "Division 10 (/) se aakhiri digit strip (remove) karna",
      "Number ko reverse karke Palindrome check karna"
    ],
    prerequisites: ["les-04-02"],
    explanationHinglish: `### The Golden Digit Extraction Engine

Kayi bhi number $N$ ho:
1. **Aakhiri digit nikaalna**:
   $$\\text{lastDigit} = N \\% 10$$
   Example: $456 \\% 10 = 6$.
2. **Aakhiri digit hatana**:
   $$N = N / 10$$
   Example: $456 / 10 = 45$.
3. **Reversed number banana**:
   $$\\text{rev} = \\text{rev} \\times 10 + \\text{lastDigit}$$

---

### Palindrome Number kya hota hai?
Ek aisa number jo aage aur peeche dono taraf se padhne par **same** ho!
- \`121\` $\\rightarrow$ Reverse \`121\` (PALINDROME! ✅)
- \`123\` $\\rightarrow$ Reverse \`321\` (NOT Palindrome! ❌)
- Negative numbers (jaise \`-121\`) kabhi palindrome nahi hote kyunki reverse karne par \`121-\` banta hai.`,

    visualMentalModel: `+-------------------------------------------------------------+
| Digit Peeling Engine                                        |
|                                                             |
| Original: [ 4 5 6 ]                                         |
|              |                                              |
| Step 1: 456 % 10 = 6  ---> rev = 0 * 10 + 6 = 6;  N = 45    |
| Step 2:  45 % 10 = 5  ---> rev = 6 * 10 + 5 = 65; N = 4     |
| Step 3:   4 % 10 = 4  ---> rev = 65* 10 + 4 = 654;N = 0     |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Step-by-Step Palindrome Verification",
      codeLines: [
        "int n = 121, original = 121, rev = 0;",
        "while (n > 0) {",
        "    rev = rev * 10 + (n % 10);",
        "    n /= 10;",
        "}",
        "bool isPal = (rev == original);"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Init: n = 121, original = 121, rev = 0.",
          variables: { n: "121", rev: "0", original: "121" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Iteration 1: digit = 1, rev = 0 * 10 + 1 = 1, n = 12.",
          variables: { n: "12", rev: "1" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Iteration 2: digit = 2, rev = 1 * 10 + 2 = 12, n = 1.",
          variables: { n: "1", rev: "12" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Iteration 3: digit = 1, rev = 12 * 10 + 1 = 121, n = 0 (Loop ends).",
          variables: { n: "0", rev: "121" },
          output: ""
        },
        {
          lineIndex: 5,
          explanation: "Final: rev (121) == original (121) is TRUE! Number is a Palindrome! 🎉",
          variables: { isPal: "true" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int n = 700;
    int rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    std::cout << rev;
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["7", "007", "700", "0"],
        correctIndex: 0,
        explanation: "700 ke zeros reverse hokar 0 * 10 + 0 = 0 bante hain, aur aakhiri mein 7 jud kar 7 banta hai. Integer mein leading zeros nahi hote, isliye output 7 aayega."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Armstrong Number kya hota hai?",
        revealedContent: "Armstrong number (jaise 153): Har digit ka cube karke jod dein toh wapas wahi number milta hai! 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153!"
      }
    ],

    codeExamples: [
      {
        title: "Clean Palindrome Number Check",
        code: `#include <iostream>

bool isPalindrome(int x) {
    if (x < 0) return false;
    long long original = x, rev = 0;
    while (x > 0) {
        rev = rev * 10 + (x % 10);
        x /= 10;
    }
    return rev == original;
}

int main() {
    std::cout << std::boolalpha << isPalindrome(121) << '\\n';
    std::cout << std::boolalpha << isPalindrome(-121) << '\\n';
    return 0;
}`,
        output: "true\nfalse",
        explanation: "Negative numbers are immediately false due to minus sign."
      }
    ],
    analogy: "Digit extraction jaise kela chhilna hai: Har step par ek chilka (% 10) nikaalte hain aur bacha hua kela (/ 10) aage bhejte hain.",
    commonErrors: [
      {
        error: "Modifying original number without backup",
        cause: "while (n > 0) mein n = 0 ho jata hai. Agar original variable save nahi kiya toh check kisse karoge?",
        fix: "Pehle hi int original = n; backup bana lein."
      }
    ],
    keyTakeaways: [
      "n % 10 rightmost digit deta hai.",
      "n /= 10 rightmost digit remove karta hai.",
      "rev = rev * 10 + rem digits ko reverse order mein construct karta hai."
    ],
    quiz: [
      {
        question: "345 % 10 ka answer kya aayega?",
        options: ["34", "5", "3", "0.5"],
        correctIndex: 1,
        explanation: "Modulo 10 hamesha number ka aakhiri (units place) digit return karta hai: 5."
      }
    ],
    relatedQuestionIds: ["q-04-01", "q-08-01"]
  }
};

// Merge into master LESSONS_DATA
if (typeof LESSONS_DATA !== 'undefined') {
  Object.assign(LESSONS_DATA, LESSONS_PART2);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS_PART2 };
}
