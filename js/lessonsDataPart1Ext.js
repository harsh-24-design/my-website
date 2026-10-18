// CppMastery Lessons Database - Part 1 Extension (Chapters 1 to 4 remaining lessons)
// Conversational Hinglish, Step-by-Step Visualizers, Predict-the-Output & Quizzes

const LESSONS_PART1_EXT = {
  // Chapter 1: Structure of main()
  "les-01-02": {
    id: "les-01-02",
    chapterId: "ch-01",
    title: "Structure of a C++ Program & Anatomy of main()",
    order: 2,
    whyNeeded: "Har building ka ek main gate hota hai jahan se entry hoti hai. C++ mein 'main()' function wahi main gate hai jahan se computer aapka code chalana shuru karta hai.",
    learningObjectives: [
      "main() function ka anatomy aur curly braces {} ka role samjhein",
      "return 0 ka real-world meaning aur OS communication samjhein",
      "Namespaces aur std:: kya hota hai simple analogy ke sath seekhein"
    ],
    prerequisites: ["les-01-01"],
    explanationHinglish: `### C++ Program ka Kankal (Skeleton Structure)

Jab bhi aap koi C++ program dekhte hain, woh aamtaur par aisa dikhta hai:

\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Hello C++!";
    return 0;
}
\`\`\`

Aaiye iske har ek hisse ka post-mortem karein:

1. **\`#include <iostream>\` (Header File)**:
   - Jaise car chalane se pehle petrol aur chaabi chahiye, waise hi C++ mein screen par kuch likhne ke liye Input-Output library chahiye.
   - \`iostream\` ka matlab: **I**nput **O**utput **Stream**.

2. **\`int main()\` (Entry Point Gate)**:
   - \`int\` ka matlab: Yeh function aakhiri mein ek integer number return karega.
   - \`main()\`: Yeh function ka naam hai. Operating System (Windows/Linux) sirf isi naam ko pehchanta hai. Agar aapne naam badal kar \`start()\` kar diya, toh compiler kahega: "Bhai, entry point kahan hai?".

3. **Curly Braces \`{ ... }\` (Ghar ki Chaardiwari)**:
   - Jo bhi code \`{\` aur \`}\` ke beech mein hoga, wahi \`main\` function ka hissa mana jayega.

4. **\`std::cout << "Hello C++!";\` (Screen par bolna)**:
   - \`cout\` ka matlab: **C**onsole **Out**put.
   - \`<<\` ko **Insertion Operator** kehte hain. Yeh data ko screen ki taraf fekta hai.
   - \`;\` (Semicolon): English mein jaise full-stop (.) hota hai, waise C++ mein har statement ke aakhiri mein semicolon hona zaroori hai.

5. **\`return 0;\` (All is Well Signal)**:
   - Operating System ko yeh batata hai ki program bina kisi crash ke safalta-poorvak khatam ho gaya.`,

    visualMentalModel: `+-------------------------------------------------------------+
| Operating System                                            |
|    |                                                        |
|    v  (Calls main entry point)                              |
| +---------------------------------------------------------+ |
| | int main() {                                            | |
| |    std::cout << "Hello";  ---> [Prints to Monitor]      | |
| |    return 0;              ---> [Signals SUCCESS to OS]  | |
| | }                                                       | |
| +---------------------------------------------------------+ |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "How main() Interacts with the Operating System",
      codeLines: [
        "#include <iostream>",
        "int main() {",
        "    std::cout << \"System Initialized\" << '\\n';",
        "    return 0;",
        "}"
      ],
      steps: [
        {
          lineIndex: 1,
          explanation: "Step 1: OS ne main() ko invoke kiya aur call stack frame allot hua.",
          variables: { function: "main()", status: "Active" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Step 2: cout buffer ne screen stream par text push kiya.",
          variables: { stdout: "System Initialized" },
          output: "System Initialized\n"
        },
        {
          lineIndex: 3,
          explanation: "Step 3: return 0 ne OS ko Exit Code 0 return kiya (Zero errors).",
          variables: { exitCode: "0" },
          output: "System Initialized\n"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    std::cout << "Step A" << ' ';
    std::cout << "Step B";
    return 0;
}`,
        question: "Is program ka output kya hoga?",
        options: ["Step A Step B", "Step A\nStep B", "Step B Step A", "Compilation Error"],
        correctIndex: 0,
        explanation: "Kyunki humne newline ('\\n') nahi diya, isliye 'Step A ' ke theek baad 'Step B' ek hi line mein print hoga."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 'using namespace std;' lagana safe hai ya harmful?",
        revealedContent: "Beginners ke liye convenient hai taaki bar-bar 'std::' na likhna pade. Lekin bade professional projects mein isse 'Name Collision' ho sakta hai, kyunki standard library ke kayi functions (jaise count, max) aapke apne variables ke sath takra sakte hain. Industry standard yeh hai ki 'std::' explicitly likha jaye ya sirf 'using std::cout;' likha jaye."
      }
    ],

    codeExamples: [
      {
        title: "Standard main() Template with Newlines",
        code: `#include <iostream>

int main() {
    std::cout << "Line 1: Namaste Duniya!\\n";
    std::cout << "Line 2: C++ is blazingly fast!\\n";
    return 0;
}`,
        output: "Line 1: Namaste Duniya!\nLine 2: C++ is blazingly fast!",
        explanation: "'\\n' cursor ko nayi line par bhejta hai."
      }
    ],
    analogy: "main() jaise train ka engine hai. Dabbey chahe kitne bhi ho (baaki functions), engine chalega tabhi train chalegi.",
    commonErrors: [
      {
        error: "Missing Semicolon ';'",
        cause: "Statement ke baad semicolon bhool jana.",
        fix: "Har executable statement ke baad semicolon ';' lagayein."
      },
      {
        error: "Capital 'Main()' instead of 'main()'",
        cause: "C++ case-sensitive hai.",
        fix: "Hamesha lowercase 'main()' likhein."
      }
    ],
    keyTakeaways: [
      "Execution hamesha main() se start aur end hota hai.",
      "return 0 ka matlab: Program successfully complete hua.",
      "Semicolon ';' statement terminator hota hai."
    ],
    quiz: [
      {
        question: "C++ program mein execution kahan se shuru hota hai?",
        options: ["first line se", "main() function se", "#include se", "last line se"],
        correctIndex: 1,
        explanation: "Operating System program ko chalate waqt sabse pehle main() function ko call karta hai."
      },
      {
        question: "return 0 ka kya significance hai?",
        options: ["Program mein 0 values hain", "OS ko signal dena ki program bina error ke safal raha", "Screen par 0 print karna", "Variable ko 0 banana"],
        correctIndex: 1,
        explanation: "Exit code 0 batata hai: 'Execution completed with 0 errors'."
      }
    ],
    relatedQuestionIds: ["q-01-01", "q-01-02"]
  },

  // Chapter 1: cin, cout & Fast I/O
  "les-01-03": {
    id: "les-01-03",
    chapterId: "ch-01",
    title: "Console Input & Output (cin, cout & Fast I/O)",
    order: 3,
    whyNeeded: "Aapka program user se baatein kaise karega? Keyboard se data lene ke liye 'cin' aur screen par dikhane ke liye 'cout' use hota hai.",
    learningObjectives: [
      "cin aur extraction operator (>>) ka mechanics samjhein",
      "cout aur insertion operator (<<) ko format karna seekhein",
      "Fast I/O trick seekhein jo competitive programming mein Time Limit Exceeded (TLE) se bachati hai"
    ],
    prerequisites: ["les-01-02"],
    explanationHinglish: `### User se Input lena (cin) aur Output dena (cout)

C++ mein input aur output streams (dhara) ki tarah kaam karte hain:

- **\`cout << val\` (Insertion)**: Arrows screen ki taraf point kar rahe hain (<-). Value screen par ja rahi hai.
- **\`cin >> val\` (Extraction)**: Arrows variable ki taraf point kar rahe hain (->). Keyboard se aane wala data variable mein ghus raha hai!

\`\`\`cpp
int age;
std::cin >> age; // User ne 21 type kiya aur Enter dabaya -> age = 21 ban gaya!
\`\`\`

---

### Fast I/O Trick (Competitive Programming & DSA Goldmine ⚡)

Competitive programming mein jab 10 lakh numbers input lene hote hain, toh C++ ka standard \`cin\` slow ho sakta hai kyunki woh C language ke \`scanf/printf\` ke sath synchronize (taal-mel) karta rehta hai.

Isko band karne ke liye 2 lines likhi jaati hain:
\`\`\`cpp
std::ios_base::sync_with_stdio(false);
std::cin.tie(NULL);
\`\`\`
- \`sync_with_stdio(false)\`: C aur C++ ke buffers ka synchronization tod deta hai, jisse speed 5x se 10x badh jaati hai!
- \`cin.tie(NULL)\`: Har \`cin\` se pehle \`cout\` ko zabardasti flush hone se rokta hai.
- **Bonus**: \`std::endl\` ki jagah \`'\\n'\` use karein kyunki \`endl\` baar-baar buffer flush karke time barbaad karta hai!`,

    visualMentalModel: `+-------------------------------------------------------------+
| Keyboard ---> [cin >> extraction] ---> [RAM: variable age]  |
|                                                             |
| Screen   <--- [cout << insertion] <--- [RAM: variable age]  |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Interactive Input/Output Flow",
      codeLines: [
        "int a, b;",
        "std::cin >> a >> b; // Input: 10 20",
        "int sum = a + b;",
        "std::cout << \"Sum: \" << sum;"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Step 1: RAM mein a aur b ke liye boxes bane (abhi garbage value hai).",
          variables: { a: "garbage", b: "garbage", sum: "-" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Step 2: cin ne keyboard buffer se 10 ko 'a' mein aur 20 ko 'b' mein daala.",
          variables: { a: "10", b: "20", sum: "-" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Step 3: CPU ne a + b (10 + 20 = 30) calculate kiya aur sum box mein store kiya.",
          variables: { a: "10", b: "20", sum: "30" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "Step 4: cout ne screen par 'Sum: 30' print kiya.",
          variables: { a: "10", b: "20", sum: "30" },
          output: "Sum: 30"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int x = 5;
    std::cout << x << " + " << x << " = " << x + x;
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["5 + 5 = 10", "x + x = 10", "10", "5 + 5 = 55"],
        correctIndex: 0,
        explanation: "Quotes ke andar ' + ' aur ' = ' literal text hain, jabki bina quotes ke x ki value (5) aur x + x (10) evaluate hote hain."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 std::endl aur '\\n' mein speed ka kya farak hai?",
        revealedContent: "'\\n' sirf nayi line par cursor move karta hai. Jabki 'std::endl' nayi line par le jane ke sath-sath buffer ko screen par forcefully 'flush' karta hai. 10^5 iterations mein 'endl' use karne se code 10 guna slow ho jata hai!"
      }
    ],

    codeExamples: [
      {
        title: "Reading Multiple Inputs in Single Line",
        code: `#include <iostream>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    int length, width;
    // Enter length and width separated by space: 5 8
    if (std::cin >> length >> width) {
        int area = length * width;
        std::cout << "Area: " << area << '\\n';
    }
    return 0;
}`,
        output: "Area: 40",
        explanation: "cin chaining allows reading multiple values separated by spaces or newlines."
      }
    ],
    analogy: "cin jaise vacuum cleaner hai jo keyboard se data kheenchta hai, aur cout loudspeaker hai jo screen par awaz nikaalta hai.",
    commonErrors: [
      {
        error: "Confusing >> and << operators",
        cause: "cout ke sath >> ya cin ke sath << laga dena.",
        fix: "Yaad rakhein: cout << (bahar bhejna), cin >> (andar laana)."
      }
    ],
    keyTakeaways: [
      "cin extraction operator (>>) use karta hai.",
      "cout insertion operator (<<) use karta hai.",
      "Competitive programming mein Fast I/O aur '\\n' hamesha use karein."
    ],
    quiz: [
      {
        question: "Fast I/O ke liye kaun si statement use hoti hai?",
        options: ["std::ios_base::sync_with_stdio(false);", "cin.speed_up();", "compiler.fast();", "optimize::cin();"],
        correctIndex: 0,
        explanation: "sync_with_stdio(false) C aur C++ stream buffers ke beech sync todkar execution super fast karta hai."
      }
    ],
    relatedQuestionIds: ["q-01-01", "q-01-02"]
  },

  // Chapter 1: Data Types & Memory Sizes
  "les-01-05": {
    id: "les-01-05",
    chapterId: "ch-01",
    title: "Primitive Data Types & Memory Sizes (int, float, char, bool)",
    order: 5,
    whyNeeded: "Har data alag size ka hota hai. Roll number ke liye chhota dabba chahiye, lekin bank balance ke liye bada dabba! Galat dabba chunne se memory waste hoti hai ya data overflow ho jata hai.",
    learningObjectives: [
      "Primitive types: int, long long, float, double, char, bool ki memory sizes samjhein",
      "sizeof operator se machine memory check karna seekhein",
      "Integer overflow kya hota hai aur -2147483648 kyun aata hai"
    ],
    prerequisites: ["les-01-04"],
    explanationHinglish: `### C++ Primitive Data Types (Memory ke Dabbe)

Computer memory (RAM) bytes mein naapi jaati hai ($1 \\text{ Byte} = 8 \\text{ bits}$):

| Data Type | Size in Memory | Range | Kya Store Karta Hai? |
|---|---|---|---|
| **\`bool\`** | 1 Byte | \`true\` (1) ya \`false\` (0) | Boolean flags (Yes/No) |
| **\`char\`** | 1 Byte | -128 se 127 (ASCII characters) | Single characters: \`'A'\`, \`'9'\`, \`'$'\` |
| **\`int\`** | 4 Bytes (32 bits) | $-2 \\times 10^9$ se $+2 \\times 10^9$ | Normal integers: \`42\`, \`-500\` |
| **\`long long\`** | 8 Bytes (64 bits) | $-9 \\times 10^{18}$ se $+9 \\times 10^{18}$ | Bohot bade numbers: Bank balances, timestamps |
| **\`float\`** | 4 Bytes | ~7 decimal digits precision | Decimals: \`3.14f\` |
| **\`double\`** | 8 Bytes | ~15-17 decimal digits precision | High precision decimals: Scientific math |

---

### Integer Overflow (Khatarnaak Bug 💥)

Agar ek 4-byte \`int\` ki maximum limit $2,147,483,647$ hai, aur aapne usme $+1$ add kar diya, toh kya hoga?
Computer crash nahi hoga, balki woh **ghoom kar negative number** ban jayega:
$$2147483647 + 1 = -2147483648$$
Jaise car ka odometer 999999 ke baad wapas 000000 ho jata hai!
Is problem se bachne ke liye Competitive Programming mein hamesha **\`long long\`** use karte hain!`,

    visualMentalModel: `+-------------------------------------------------------------+
| Memory Size Visualizer                                      |
|                                                             |
| bool:      [ 1 Byte ]                                       |
| char:      [ 1 Byte ]                                       |
| int:       [ 4 Bytes: [][][][] ]                            |
| long long: [ 8 Bytes: [][][][][][][][] ]                    |
| double:    [ 8 Bytes: [][][][][][][][] ]                    |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "sizeof Operator in Action",
      codeLines: [
        "int age = 25;",
        "char grade = 'A';",
        "double pi = 3.1415926535;",
        "std::cout << sizeof(age) << ' ' << sizeof(grade) << ' ' << sizeof(pi);"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: age variable 4 bytes allocate karta hai.",
          variables: { age: "25", "sizeof(age)": "4 Bytes" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: grade variable 1 byte allocate karta hai (ASCII 65).",
          variables: { grade: "'A'", "sizeof(grade)": "1 Byte" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: pi variable 8 bytes allocate karta hai.",
          variables: { pi: "3.141593", "sizeof(pi)": "8 Bytes" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "Line 4: Screen par bytes print hue: 4 1 8.",
          variables: { output: "4 1 8" },
          output: "4 1 8"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    char ch = 'A';
    ch = ch + 1;
    std::cout << ch;
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["B", "A1", "66", "Error"],
        correctIndex: 0,
        explanation: "'A' ka ASCII code 65 hota hai. 65 + 1 = 66, jo 'B' ka ASCII code hai!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 float vs double: Kab kaun sa use karein?",
        revealedContent: "C++ mein by default koi bhi decimal number (jaise 3.14) 'double' mana jata hai. 'float' sirf 7 digits tak accurate hota hai jabki 'double' 15 digits tak accurate hota hai. Isliye competitive programming aur finance mein hamesha 'double' use karein taaki precision error na aaye."
      }
    ],

    codeExamples: [
      {
        title: "Preventing Overflow using long long",
        code: `#include <iostream>

int main() {
    int a = 1000000;
    int b = 1000000;
    
    // WRONG: int * int overflows before assigning to long long!
    // long long wrongAns = a * b; 

    // CORRECT: Cast one operand to long long first
    long long correctAns = static_cast<long long>(a) * b;
    std::cout << "Product: " << correctAns << '\\n';
    return 0;
}`,
        output: "Product: 1000000000000",
        explanation: "10^6 * 10^6 = 10^12 which exceeds 32-bit int limit (~2 * 10^9)."
      }
    ],
    analogy: "int ek 2-liter ki balti hai. Agar usme 10-liter paani (bada number) daaloge toh paani overflow hokar beh jayega. long long ek 100-liter ki tanki hai.",
    commonErrors: [
      {
        error: "Integer Overflow in Multiplication",
        cause: "int variables ko multiply karne par result int mein hi calculate hota hai aur overflow ho jata hai.",
        fix: "Operands ko 1LL se multiply karein: 1LL * a * b."
      }
    ],
    keyTakeaways: [
      "Standard int 4 bytes ka hota hai aur 2 * 10^9 tak store karta hai.",
      "10^9 se bade calculations ke liye 'long long' use karein.",
      "sizeof operator bytes mein size return karta hai."
    ],
    quiz: [
      {
        question: "Standard 64-bit systems mein 'int' kitne bytes ka hota hai?",
        options: ["2 Bytes", "4 Bytes", "8 Bytes", "16 Bytes"],
        correctIndex: 1,
        explanation: "Standard C++ compilers mein int 4 bytes (32 bits) ka hota hai."
      },
      {
        question: "char data type memory mein kitne bytes leta hai?",
        options: ["1 Byte", "2 Bytes", "4 Bytes", "8 Bytes"],
        correctIndex: 0,
        explanation: "char exactly 1 Byte (8 bits) leta hai jisme 256 alag characters store ho sakte hain."
      }
    ],
    relatedQuestionIds: ["q-01-02", "q-02-01"]
  },

  // Chapter 1: Constants & constexpr
  "les-01-06": {
    id: "les-01-06",
    chapterId: "ch-01",
    title: "Constants (const vs #define vs constexpr)",
    order: 6,
    whyNeeded: "Kuch values aisi hoti hain jo program mein kabhi badalni nahi chahiye, jaise Speed of Light ya PI = 3.14159. Agar galti se koi coder unhe modify kar de, toh pura software bigad sakta hai.",
    learningObjectives: [
      "const keyword se variables ko Read-Only banana",
      "Kyun #define macros dangerous hain aur Modern C++ mein const/constexpr prefer hota hai",
      "constexpr ka compile-time evaluation magic samjhein"
    ],
    prerequisites: ["les-01-04"],
    explanationHinglish: `### Constants: Jiski Value Kabhi Na Badle

Jab aap kisi variable ke aage **\`const\`** laga dete hain, toh woh **Read-Only** ban jata hai:

\`\`\`cpp
const double PI = 3.14159;
PI = 3.14; // COMPILER ERROR! "assignment of read-only variable"
\`\`\`

---

### The Evolution: #define vs const vs constexpr

1. **\`#define PI 3.14\` (The Old C Way ❌)**:
   - Yeh preprocessor text substitution karta hai.
   - Iska koi data type nahi hota, aur koi scope nahi hota.
   - Debug karte waqt error dhoondhna mushkil hota hai.

2. **\`const double PI = 3.14;\` (The Safe C++ Way ✅)**:
   - Proper data type checking hoti hai.
   - Scope ke rules follow karta hai.

3. **\`constexpr int MAX_USERS = 1000;\` (Modern C++ Superpower 🚀)**:
   - Yeh value **Compile Time par hi calculate ho jati hai**!
   - Program run hote waqt zero second lagta hai.`,

    visualMentalModel: `+-------------------------------------------------------------+
| RAM Memory Permissions                                      |
|                                                             |
| Normal Variable: [ score ] ---> [ Read ✅ / Write ✅ ]      |
| Const Variable:  [ PI ]    ---> [ Read ✅ / Write ❌ (Locked)]
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Const Read-Only Enforcement",
      codeLines: [
        "int normalVar = 10;",
        "const int lockedVar = 50;",
        "normalVar = 20; // Allowed",
        "// lockedVar = 100; // Compile Error if uncommented"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: normalVar 10 par initialize hua (Mutable memory).",
          variables: { normalVar: "10", lockedVar: "-" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: lockedVar 50 par initialize hua aur lock ho gaya (Read-Only).",
          variables: { normalVar: "10", lockedVar: "50 (CONST)" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: normalVar badal kar 20 ho gaya (Allowed!).",
          variables: { normalVar: "20", lockedVar: "50 (CONST)" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    const int x = 10;
    int y = x + 5;
    std::cout << y;
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["15", "10", "Compile Error", "Garbage Value"],
        correctIndex: 0,
        explanation: "Const variable ki value padhna (read karna) bilkul allowed hai. Sirf usko modify (x = 20) karna mana hai."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 constexpr aur const mein kya farak hai?",
        revealedContent: "'const' ka matlab hai: 'Ek baar value set hone ke baad modify nahi ho sakti' (par value runtime par bhi calculate ho sakti hai, jaise user input se). 'constexpr' ka matlab hai: 'Yeh value pakka compile time par hi pata honi chahiye'. Isliye constexpr zyada strict aur fast hota hai!"
      }
    ],

    codeExamples: [
      {
        title: "Using constexpr for Compile-Time Computation",
        code: `#include <iostream>

constexpr int square(int x) {
    return x * x;
}

int main() {
    constexpr int side = 5;
    constexpr int area = square(side); // Calculated at compile time!
    std::cout << "Area: " << area << '\\n';
    return 0;
}`,
        output: "Area: 25",
        explanation: "square(5) is evaluated by the compiler before program even starts executing."
      }
    ],
    analogy: "const jaise permanent marker se likha hua notice board hai jise koi mita nahi sakta.",
    commonErrors: [
      {
        error: "Uninitialized const variable",
        cause: "const int x; likh kar chhod dena.",
        fix: "Const variable ko declare karte waqt hi initialize karna mandatory hai: const int x = 10;"
      }
    ],
    keyTakeaways: [
      "const variables read-only hote hain.",
      "Declare karte waqt initialize karna zaroori hai.",
      "constexpr compile-time optimization deta hai."
    ],
    quiz: [
      {
        question: "const variable ke bare mein kaun si baat sahi hai?",
        options: ["Uski value baad mein change ho sakti hai", "Usko initialize karna zaroori nahi hota", "Uski value declare hone ke baad modify nahi ho sakti", "Woh hamesha heap memory mein store hota hai"],
        correctIndex: 2,
        explanation: "const variable read-only hota hai aur initialization ke baad uski value modify nahi ho sakti."
      }
    ],
    relatedQuestionIds: ["q-01-01", "q-01-02"]
  },

  // Chapter 1: Type Conversion & static_cast
  "les-01-07": {
    id: "les-01-07",
    chapterId: "ch-01",
    title: "Type Conversion & Casting (Implicit vs static_cast)",
    order: 7,
    whyNeeded: "Jab aap 5 / 2 divide karte hain, toh maths mein answer 2.5 aana chahiye, lekin C++ 2 de deta hai! Decimal part kyun gayab hua aur use wapas kaise layein? Seekhiye Type Casting se.",
    learningObjectives: [
      "Implicit (Automatic) Type Conversion ke rules",
      "Explicit Casting: C-style (type) vs Modern static_cast<type>",
      "Integer division truncation trap se bachna"
    ],
    prerequisites: ["les-01-05"],
    explanationHinglish: `### Integer Division ka Sabse Bada Trap!

Sochiye aapne likha:
\`\`\`cpp
int a = 5;
int b = 2;
double result = a / b;
std::cout << result; // Prints 2, NOT 2.5!
\`\`\`

**Aisa kyun hua?**
Kyunki C++ mein rule hai:
$$\\text{int} / \\text{int} = \\text{int}$$
Pehle $5 / 2 = 2$ calculate hua (decimal part cut gaya!). Uske baad woh 2 \`double\` variable mein gaya aur \`2.0\` ban gaya. Nuksan toh pehle hi ho chuka tha!

---

### Solution: Explicit Type Casting

Hum compiler ko batate hain: "Bhai, kam se kam ek number ko double ki tarah treat karo!"

#### Modern C++ Approach: \`static_cast\` (Recommended ✅)
\`\`\`cpp
double result = static_cast<double>(a) / b;
// Ab double / int = double ban gaya! Result = 2.5!
\`\`\`

#### Old C-Style Casting (Not Recommended ❌):
\`\`\`cpp
double result = (double)a / b; // Dangerous in complex pointers
\`\`\`
Modern C++ mein hamesha **\`static_cast<type>(variable)\`** use karein kyunki compiler isme type safety verify karta hai.`,

    visualMentalModel: `+-------------------------------------------------------------+
| Type Promotion Ladder                                       |
|                                                             |
|   double     <--- (Highest priority: float wins)            |
|     ^                                                       |
|   float                                                     |
|     ^                                                       |
|   long long                                                 |
|     ^                                                       |
|    int                                                      |
|     ^                                                       |
|   char/bool  <--- (Promoted to int in arithmetic)           |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Integer Truncation vs static_cast",
      codeLines: [
        "int sum = 25, count = 4;",
        "double wrongAvg = sum / count;",
        "double correctAvg = static_cast<double>(sum) / count;"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: sum = 25 aur count = 4 memory mein initialize hue.",
          variables: { sum: "25", count: "4" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: 25 / 4 = 6 (Truncated!). wrongAvg ko 6.0 mila.",
          variables: { wrongAvg: "6.0" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: static_cast ne 25 ko 25.0 banaya. 25.0 / 4 = 6.25! correctAvg = 6.25.",
          variables: { correctAvg: "6.25" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    char ch = 'A';
    int num = static_cast<int>(ch);
    std::cout << num;
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["65", "A", "0", "Compile Error"],
        correctIndex: 0,
        explanation: "'A' ka ASCII code 65 hota hai. static_cast<int> ne character ko uske numeric integer code mein convert kiya."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 static_cast C-style (double)x se better kyun hai?",
        revealedContent: "'static_cast' compile-time par type compatibility check karta hai. Agar aap galti se kisi incompatible pointer ko cast karne ki koshish karenge, toh static_cast turant compiler error de dega. C-style cast chupchaap invalid memory cast kar deta hai jo runtime par program ko crash kar deta hai!"
      }
    ],

    codeExamples: [
      {
        title: "Exact Average with Two Decimal Precision",
        code: `#include <iostream>
#include <iomanip>

int main() {
    int totalMarks = 295;
    int subjects = 3;
    
    double percentage = static_cast<double>(totalMarks) / subjects;
    std::cout << "Percentage: " << std::fixed << std::setprecision(2) << percentage << "%\\n";
    return 0;
}`,
        output: "Percentage: 98.33%",
        explanation: "static_cast preserves fractional precision."
      }
    ],
    analogy: "int division jaise aadhi roti ko phenk dena hai. static_cast chhuri ki tarah hai jo aadhi roti ko barabari se naap kar rakhta hai.",
    commonErrors: [
      {
        error: "Casting result after division",
        cause: "static_cast<double>(a / b) likhna. Yahan a / b pehle hi truncate ho chuka hota hai!",
        fix: "Operand ko cast karein: static_cast<double>(a) / b."
      }
    ],
    keyTakeaways: [
      "int / int hamesha decimal part truncate kar deta hai.",
      "Accurate average ke liye static_cast<double>(sum) / n karein.",
      "Modern C++ mein C-style casting ki jagah static_cast use karein."
    ],
    quiz: [
      {
        question: "int a = 7, b = 2; double c = a / b; mein c ki value kya hogi?",
        options: ["3.5", "3.0", "3", "Compilation Error"],
        correctIndex: 1,
        explanation: "7 / 2 integer division 3 deta hai, jo double c mein jakar 3.0 banta hai."
      }
    ],
    relatedQuestionIds: ["q-01-02", "q-01-01"]
  }
};

// Merge into master LESSONS_DATA
if (typeof LESSONS_DATA !== 'undefined') {
  Object.assign(LESSONS_DATA, LESSONS_PART1_EXT);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS_PART1_EXT };
}
