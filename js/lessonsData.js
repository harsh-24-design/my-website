// CppMastery Lessons Database - Conversational Hinglish, Step-by-Step Visualizers, Predict-the-Output & Quizzes
const LESSONS_DATA = {
  // Chapter 1: Fundamentals
  "les-01-01": {
    id: "les-01-01",
    chapterId: "ch-01",
    title: "Introduction to C++ & Compilation Pipeline",
    order: 1,
    whyNeeded: "Computer sirf 0 aur 1 (binary) samajhta hai. C++ ek aisi language hai jo insaan ke samajhne layag English jaise words ko computer ke super-fast machine code mein badal deti hai.",
    learningObjectives: [
      "Understand what C++ is in simple language and why it is used in games and rockets",
      "Learn the 4 steps of how your code becomes an actual running program",
      "Understand technical terms: Source Code, Preprocessor, Compiler, Assembler, Linker"
    ],
    prerequisites: ["Koi coding background nahi chahiye! Bas curiosity honi chahiye."],
    explanationHinglish: `### Namaste! C++ kya hai aur hum ise kyun seekh rahe hain?

Sochiye aapko ek super-fast robot ko instruct karna hai. Robot bohot taqatwar hai, lekin use sirf ek hi bhasha aati hai: **Machine Language (0s aur 1s)**. 

Agar hum 0 aur 1 mein instructions likhne bethenge, toh pagal ho jayenge! Isliye 1979 mein **Bjarne Stroustrup** ne **C++** banayi.

> 💡 **Simple Definition**: C++ ek aisi programming language hai jisme hum English jaise readable shabdo mein code likhte hain, aur ek special software jise **Compiler** kehte hain, use direct computer ke processor ke machine language mein convert kar deta hai.

---

### Kyun C++ itni tezi se chalti hai? (Real Life Analogy)
- **Python / Java**: Jaise ek tourist jise har jagah ek **Translator (Interpreter / Garbage Collector)** ki zaroorat padti hai. Isliye har step par thodi rukawat hoti hai.
- **C++**: Jaise ek professional formula-1 driver jo car ke har engine part ko directly control karta hai. Beech mein koi rukawat nahi hoti! Isiliye **Unreal Engine Games (PUBG, GTA)**, **Operating Systems (Windows, macOS)**, aur **High-Frequency Trading** C++ mein bante hain.

---

### Code kaise run hota hai? (The 4-Step Pipeline)

Jab aap apna code likhkar Run button dabate hain, toh parde ke peeche 4 karamchari (stages) kaam karte hain:

\`\`\`
[1. Source Code (.cpp)] 
       │
       ▼ (Preprocessor expands #include)
[2. Expanded Code (.i)] 
       │
       ▼ (Compiler converts to assembly)
[3. Assembly Code (.s)] 
       │
       ▼ (Assembler converts to 0s and 1s)
[4. Object Code (.o)] 
       │
       ▼ (Linker links standard library)
[5. Final Executable (.exe)]
\`\`\`

1. **Preprocessor (The Setup Guy)**: Yeh sabhi \`#\` se start hone wale lines ko dekhta hai. Jaise \`#include <iostream>\` ka matlab: "iostream file ka pura code yahan copy-paste kar do".
2. **Compiler (The Grammar Teacher)**: Yeh aapke code mein syntax galtiyan dhoondhta hai. Agar sab sahi hai, toh use processor ke specific **Assembly Language** mein convert karta hai.
3. **Assembler (The Binary Creator)**: Yeh assembly instructions ko machine readable **0s aur 1s (Object code)** mein convert karta hai.
4. **Linker (The Team Connector)**: Aapka code + C++ library ke built-in features (jaise \`cout\`) ko ek sath jodkar final **.exe** file banata hai.`,
    
    visualMentalModel: `+-------------------------------------------------------------+
| RAM Memory & Execution Pipeline                             |
|                                                             |
| [main.cpp] ---> [Preprocessor] ---> [Compiler]              |
|                                         |                   |
|                                         v                   |
| [Final .exe] <--- [Linker] <--- [Assembler]                 |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "How C++ Program Executes Line-by-Line",
      codeLines: [
        "#include <iostream>",
        "int main() {",
        "    std::cout << \"Namaste Duniya!\" << std::endl;",
        "    return 0;",
        "}"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: Preprocessor ne <iostream> library ko shamil kiya taaki hum screen par text print kar sakein.",
          variables: { status: "Library Loaded" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: OS ne main() function ko dhoonda aur program ka execution yahan se start kiya.",
          variables: { status: "Entering main()" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: std::cout ne 'Namaste Duniya!' ko monitor screen ki taraf bheja, aur std::endl ne agle line par cursor move kar diya.",
          variables: { status: "Printing Output" },
          output: "Namaste Duniya!"
        },
        {
          lineIndex: 3,
          explanation: "Line 4: 'return 0;' ne Operating System ko bataya: 'Program bina kisi error ke successfully finish ho gaya!'",
          variables: { exitCode: "0 (Success)" },
          output: "Namaste Duniya!"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    std::cout << "3 + 2";
    return 0;
}`,
        question: "Sochiye aur guess kijiye: Screen par kya print hoga?",
        options: ["5", "3 + 2", "32", "Compilation Error"],
        correctIndex: 1,
        explanation: "Dhyan se dekhiye! '3 + 2' double quotes (\" \") ke andar likha hai. Quotes ke andar jo bhi hota hai, C++ use as-it-is text maanta hai, calculate nahi karta!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "🔍 Click to Reveal: Agar main() ke end mein return 0 na likhein toh kya hoga?",
        revealedContent: "C++ standard ke hisaab se, sirf main() function ke liye compiler automatically aakhiri mein 'return 0;' add kar deta hai agar aap likhna bhool jayein. Lekin hamesha explicitly likhna achhi habit maana jata hai!"
      }
    ],

    codeExamples: [
      {
        title: "Pehla Program (Hello World)",
        code: `#include <iostream>

int main() {
    std::cout << "Namaste C++! I am learning step by step." << std::endl;
    return 0;
}`,
        output: "Namaste C++! I am learning step by step.",
        explanation: "std::cout screen par text print karta hai. std::endl agli line par le jata hai."
      }
    ],
    analogy: "Source code ek Hindi/English recipe ki tarah hai. Compiler ek chef ki tarah hai jo us recipe ko robot ke switches (0 aur 1) mein badalta hai taaki robot khana bana sake.",
    commonErrors: [
      {
        error: "fatal error: iostream: No such file or directory",
        cause: "C++ compiler install nahi hai ya PATH set nahi hai.",
        fix: "GCC/MinGW compiler install karein aur PATH variable mein bin folder add karein."
      },
      {
        error: "error: 'cout' was not declared in this scope",
        cause: "std::cout ki jagah bina 'std::' ke cout likh diya bina using namespace std ke.",
        fix: "Top par 'using namespace std;' likhein ya hamesha 'std::cout' use karein."
      }
    ],
    keyTakeaways: [
      "C++ compiled language hai, isliye yeh Python aur JavaScript se kayi guna tez hoti hai.",
      "Execution hamesha 'int main()' se shuru hota hai.",
      "Quotes (\" \") ke andar text print hota hai, bina quotes ke mathematical calculations hoti hain."
    ],
    quiz: [
      {
        question: "Compilation pipeline ka kaun sa hissa #include directives ko expand karta hai?",
        options: ["Compiler", "Linker", "Preprocessor", "Assembler"],
        correctIndex: 2,
        explanation: "Preprocessor (# se start hone wale sabhi statements) ko compile hone se pehle process karta hai."
      },
      {
        question: "Operating System ko program successful hone ka signal kaun sa return code deta hai?",
        options: ["return 1;", "return -1;", "return 0;", "return 100;"],
        correctIndex: 2,
        explanation: "Exit code 0 universal convention hai jiska matlab hai: 'No error occurred'."
      },
      {
        question: "C++ case-sensitive hai ya case-insensitive?",
        options: ["Case-sensitive (main and Main are different)", "Case-insensitive (main and Main are same)"],
        correctIndex: 0,
        explanation: "C++ case-sensitive hai, isiliye 'main' aur 'Main' do alag shabad maane jaate hain."
      }
    ],
    relatedQuestionIds: ["q-01-01", "q-01-02"]
  },

  // Chapter 1: Variables & Data Types
  "les-01-04": {
    id: "les-01-04",
    chapterId: "ch-01",
    title: "Variables, Identifiers & Memory Storage",
    order: 4,
    whyNeeded: "Game khelte waqt aapka score, player ki health, aur coins ko computer ko yaad rakhna padta hai. Memory mein data save karne ke liye hum Variables use karte hain.",
    learningObjectives: [
      "Understand what a variable really is inside computer RAM",
      "Learn declaration vs initialization vs assignment",
      "Understand why uninitialized variables give random garbage values"
    ],
    prerequisites: ["les-01-01"],
    explanationHinglish: `### Variable kya hota hai? (Kitchen Masala Box Analogy)

Sochiye aapke kitchen mein bohot saare dabbe (containers) hain. 
Aap ek dabbe par label lagate hain: **"Sugar"**, aur uske andar 1kg cheeni daal dete hain.

Computer ki RAM mein bhi theek aisa hi hota hai!
\`\`\`cpp
int score = 100;
\`\`\`

Yahan 3 cheezein hui:
1. **Dabbe ka Size (Data Type \`int\`)**: Computer ne RAM mein 4 bytes ka box reserve kiya.
2. **Dabbe ka Label (Variable Name / Identifier \`score\`)**: Us box ka naam rakh diya 'score'.
3. **Dabbe ka Saman (Value \`100\`)**: Us box ke andar 100 value store kar di.

---

### Declaration vs Initialization (Important Difference)
- **Declaration**: Sirf dabba banana bina saman daale:
  \`int age;\` ⚠️ **Khatra!** Is dabbe mein abhi RAM ka purana bacha hua kooda (**Garbage Value**) hai!
- **Initialization**: Dabba banate waqt hi pehli value daalna:
  \`int age = 20;\` ✅ **Safe & Best Practice!**
- **Assignment**: Baad mein us dabbe ki value badalna:
  \`age = 21;\`

---

### Variable Naming Rules (Identifiers Rules)
1. ✅ English letters (\`a-z\`, \`A-Z\`), numbers (\`0-9\`), aur underscore (\`_\`) use kar sakte hain.
2. ❌ **Number se start nahi ho sakta**: \`1player\` galat hai, \`player1\` sahi hai!
3. ❌ **Spaces aur special symbols mana hain**: \`my score\` ya \`user-name\` galat hai, \`my_score\` ya \`userName\` sahi hai.
4. ❌ **Reserved keywords use nahi kar sakte**: \`int int = 5;\` nahi likh sakte kyunki \`int\` C++ ka apna reserved word hai.`,

    visualMentalModel: `+-----------------------------------------------------------+
| RAM (Random Access Memory)                                |
|                                                           |
| Address: 0x7ffd5e   [ Label: score ]                      |
|                     +---------------+                     |
|                     | Value:  100   | (4 bytes int)       |
|                     +---------------+                     |
+-----------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Variable Lifecycle in Memory",
      codeLines: [
        "int score = 50;",
        "score = score + 20;",
        "score = 100;"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: RAM mein 'score' box bana aur usme 50 store hua.",
          variables: { score: "50" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: Computer ne purani value (50) nikali, usme 20 joda (50 + 20 = 70), aur wapas box mein daal diya.",
          variables: { score: "70" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: Computer ne purani value hata kar nayi value 100 overwrite kar di.",
          variables: { score: "100" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int x = 10;
    int y = x;
    x = 20;
    std::cout << y;
    return 0;
}`,
        question: "Sochiye: Screen par y ki value kya print hogi?",
        options: ["10", "20", "Garbage value", "Error"],
        correctIndex: 0,
        explanation: "Sahi jawab! 'int y = x;' ne x ki us waqt ki value (10) copy karke y mein daali. Baad mein jab x = 20 hua, toh y par koi asar nahi pada kyunki y ka apna alag independent box hai!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "🔍 Click to Reveal: Agar hum variable ko initialize na karein toh kya print hoga?",
        revealedContent: "Garbage Value! C++ local variables ko automatically 0 se initialize nahi karta. RAM mein us memory location par jo bhi purana binary data pada tha (jaise 32767 ya -858993460), wahi print ho jayega!"
      }
    ],

    codeExamples: [
      {
        title: "Variable Declaration and Value Overwriting",
        code: `#include <iostream>

int main() {
    int lives = 3;
    std::cout << "Starting lives: " << lives << "\\n";

    // Player lost a life
    lives = lives - 1;
    std::cout << "Lives remaining: " << lives << "\\n";
    return 0;
}`,
        output: "Starting lives: 3\nLives remaining: 2",
        explanation: "lives variable ki value dynamically change ho rahi hai."
      }
    ],
    analogy: "Variable ek whiteboard ki tarah hai. Aap purana number mita kar naya number likh sakte hain.",
    commonErrors: [
      {
        error: "Using uninitialized variables",
        cause: "int sum; bina initial value ke sum += 5 likh diya.",
        fix: "Hamesha int sum = 0; se initialize karein."
      }
    ],
    keyTakeaways: [
      "Variable memory mein ek named container hota hai.",
      "Hamesha variables ko initialize karein taaki garbage values se bachein.",
      "Variable names number se shuru nahi ho sakte."
    ],
    quiz: [
      {
        question: "Kaun sa variable name C++ ke rules ke hisaab se INVALID hai?",
        options: ["_playerScore", "total_marks", "2ndRound", "finalAmount"],
        correctIndex: 2,
        explanation: "Variable names digits (0-9) se start nahi ho sakte."
      },
      {
        question: "int a = 5; int b = a; b = 10; ke baad a ki value kya hogi?",
        options: ["10", "5", "15", "0"],
        correctIndex: 1,
        explanation: "a aur b do alag alag memory boxes hain. b ko change karne se a change nahi hota."
      }
    ],
    relatedQuestionIds: ["q-01-02", "q-01-03"]
  },

  // Chapter 2: Operators (Pre vs Post Increment - Requested in prompt)
  "les-02-01": {
    id: "les-02-01",
    chapterId: "ch-02",
    title: "Arithmetic & Assignment Operators (Increment & Decrement Deep Dive)",
    order: 1,
    whyNeeded: "Loops mein counting badhana ho ya score calculate karna ho, increment operators (++) sabse zyada use hote hain. Iska funda crystal clear hona interview ke liye sabse zaroori hai.",
    learningObjectives: [
      "Understand basic arithmetic operators: +, -, *, /, % (modulo)",
      "Master Pre-increment (++x) vs Post-increment (x++) with exact timing difference",
      "Step-by-step visual tracking of how variable values change in memory"
    ],
    prerequisites: ["les-01-04"],
    explanationHinglish: `### 1. Basic Arithmetic Operators
- \`+\` (Jodna / Addition)
- \`-\` (Ghatana / Subtraction)
- \`*\` (Guna / Multiplication)
- \`/\` (Bhaag / Division): **Dhyan dein!** Agar dono integers hain toh decimal part truncate (gayab) ho jata hai ($7 / 2 = 3$).
- \`%\` (Modulo / Remainder): Division ke baad bacha hua sheshphal nikaalta hai ($7 \\% 2 = 1$). Modulo sirf integers par kaam karta hai!

---

### 2. Pre-increment (\`++x\`) vs Post-increment (\`x++\`)
Yeh har C++ beginner ka sabse confusing topic hota hai. Isko simple Hindi mein yaad rakhiye:

#### A. Pre-increment (\`++x\`):
> **"++x mein variable ki value pehle 1 badhti hai, phir updated value use hoti hai."**
- **Sequence**: Pehle Increment $\\rightarrow$ Phir Assignment/Use.
- **Example**:
  \`\`\`cpp
  int x = 5;
  int y = ++x; // Step 1: x pehle 5 se 6 bana.
               // Step 2: y ko nayi value 6 mili.
  // Result: x = 6, y = 6
  \`\`\`

#### B. Post-increment (\`x++\`):
> **"x++ mein current expression mein purani value use hoti hai, phir variable ki value 1 badhti hai."**
- **Sequence**: Pehle Purani Value Use $\\rightarrow$ Phir Increment.
- **Example**:
  \`\`\`cpp
  int x = 5;
  int y = x++; // Step 1: y ko x ki purani value (5) mili.
               // Step 2: x badhkar 6 ho gaya.
  // Result: x = 6, y = 5
  \`\`\`

---

### Comparison Table:
| Operator | Syntax | Meaning | Memory Execution Order |
|---|---|---|---|
| **Pre-Increment** | \`++x\` | Pehle badhao, phir use karo | 1. \`x = x + 1\` <br> 2. Expression uses \`x\` |
| **Post-Increment** | \`x++\` | Pehle use karo, phir badhao | 1. Expression uses purani \`x\` <br> 2. \`x = x + 1\` |
| **Pre-Decrement** | \`--x\` | Pehle 1 ghatao, phir use karo | 1. \`x = x - 1\` <br> 2. Expression uses \`x\` |
| **Post-Decrement** | \`x--\` | Pehle use karo, phir 1 ghatao | 1. Expression uses purani \`x\` <br> 2. \`x = x - 1\` |`,

    visualMentalModel: `+-----------------------------------------------------------+
| PRE-INCREMENT (++x)                                       |
|  [x: 5] ---Step 1 (Increment)---> [x: 6]                  |
|                                     |                     |
|                               Step 2 (Assign)             |
|                                     v                     |
|                                  [y: 6]                   |
|                                                           |
| POST-INCREMENT (x++)                                      |
|  [x: 5] ---Step 1 (Assign purani value)---> [y: 5]        |
|    |                                                      |
|  Step 2 (Increment)                                       |
|    v                                                      |
|  [x: 6]                                                   |
+-----------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Variable Tracker: Pre vs Post Increment Step-by-Step",
      codeLines: [
        "int a = 5;",
        "int b = ++a; // Pre-increment",
        "int c = 10;",
        "int d = c++; // Post-increment",
        "cout << a << ' ' << b << ' ' << c << ' ' << d;"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: a ki value memory mein 5 initialize hui.",
          variables: { a: "5", b: "-", c: "-", d: "-" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2 (++a): PRE-INCREMENT! a pehle 5 se 6 hua, phir b ko 6 mila.",
          variables: { a: "6", b: "6", c: "-", d: "-" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: c ki value 10 initialize hui.",
          variables: { a: "6", b: "6", c: "10", d: "-" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "Line 4 (c++): POST-INCREMENT! d ko c ki purani value (10) mili, phir c badhkar 11 hua.",
          variables: { a: "6", b: "6", c: "11", d: "10" },
          output: ""
        },
        {
          lineIndex: 4,
          explanation: "Line 5: Output print hua: a=6, b=6, c=11, d=10.",
          variables: { a: "6", b: "6", c: "11", d: "10" },
          output: "6 6 11 10"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int p = 4;
    int q = p++ * 2;
    std::cout << p << " " << q;
    return 0;
}`,
        question: "Dhyan se dekhiye: p aur q ki final value kya print hogi?",
        options: ["5 8", "5 10", "4 8", "4 10"],
        correctIndex: 0,
        explanation: "Sahi pakde hain! p++ post-increment hai, toh calculation mein p ki purani value 4 use hui (4 * 2 = 8, so q = 8). Multiplication hone ke turant baad p badhkar 5 ho gaya!"
      },
      {
        code: `#include <iostream>
int main() {
    int x = 7;
    int y = ++x * 2;
    std::cout << x << " " << y;
    return 0;
}`,
        question: "Is baar PRE-INCREMENT (++x) hai! Output kya hoga?",
        options: ["8 16", "7 14", "8 14", "7 16"],
        correctIndex: 0,
        explanation: "Ekdum sahi! ++x pre-increment hai, toh x pehle 7 se 8 bana, phir (8 * 2 = 16) hokar y ko 16 mila!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Real Life Analogy: Pre vs Post Increment",
        revealedContent: "Prepaid vs Postpaid Mobile SIM! Prepaid (++x): Pehle balance recharge karo, tabhi call lagegi. Postpaid (x++): Pehle baatein kar lo (value use karo), bill baad mein badhega!"
      }
    ],

    codeExamples: [
      {
        title: "Pre-Increment Example (++x)",
        code: `#include <iostream>

int main() {
    int x = 10;
    std::cout << "Original x: " << x << "\\n";
    std::cout << "Using ++x: " << ++x << "\\n"; // Pehle 11 bana, phir 11 print hua
    std::cout << "Final x: " << x << "\\n";
    return 0;
}`,
        output: "Original x: 10\nUsing ++x: 11\nFinal x: 11",
        explanation: "++x ne usi expression ke andar x ko increment karke nayi value print karayi."
      },
      {
        title: "Post-Increment Example (x++)",
        code: `#include <iostream>

int main() {
    int x = 10;
    std::cout << "Original x: " << x << "\\n";
    std::cout << "Using x++: " << x++ << "\\n"; // Purani value 10 print hui
    std::cout << "Final x: " << x << "\\n";    // Baad mein x badhkar 11 hua
    return 0;
}`,
        output: "Original x: 10\nUsing x++: 10\nFinal x: 11",
        explanation: "x++ ne pehle purani value 10 print karayi, line khatam hone ke baad x 11 hua."
      }
    ],
    analogy: "Pre-increment = Pehle payment badhao, phir ticket lo. Post-increment = Pehle purani ticket use karke movie dekho, agle din ticket ka daam badhega.",
    commonErrors: [
      {
        error: "Undefined behavior in: i = i++ + ++i",
        cause: "Ek hi expression mein ek variable ko do baar modify karna.",
        fix: "Kabhi bhi ek line mein variable ko multiple baar ++ na karein. Alag alag lines mein likhein."
      }
    ],
    keyTakeaways: [
      "++x: Pehle increment hota hai, phir expression mein use hota hai.",
      "x++: Pehle purani value use hoti hai, phir increment hota hai.",
      "Modulo % hamesha remainder deta hai aur sirf integer types par kaam karta hai."
    ],
    quiz: [
      {
        question: "Agar int a = 5; int b = ++a; ho, toh a aur b ki values kya hongi?",
        options: ["a = 6, b = 6", "a = 6, b = 5", "a = 5, b = 6", "a = 5, b = 5"],
        correctIndex: 0,
        explanation: "Pre-increment (++a) mein a pehle 6 banta hai, phir b ko 6 assign hota hai."
      },
      {
        question: "Agar int a = 5; int b = a++; ho, toh a aur b ki values kya hongi?",
        options: ["a = 6, b = 6", "a = 6, b = 5", "a = 5, b = 6", "a = 5, b = 5"],
        correctIndex: 1,
        explanation: "Post-increment (a++) mein b ko pehle purani value 5 milti hai, uske baad a badhkar 6 hota hai."
      },
      {
        question: "C++ mein 14 % 4 ka result kya aayega?",
        options: ["3.5", "3", "2", "0"],
        correctIndex: 2,
        explanation: "14 ko 4 se divide karne par quotient 3 aata hai aur remainder (sheshphal) 2 bachta hai."
      }
    ],
    relatedQuestionIds: ["q-02-01", "q-02-02"]
  },

  // Chapter 3: Conditionals
  "les-03-01": {
    id: "les-03-01",
    chapterId: "ch-03",
    title: "if and if-else Statements: Conditional Flow",
    order: 1,
    whyNeeded: "Programs ko decisions lene hote hain: Jaise login screen par 'Agar password sahi hai toh dashboard dikhao, varna error message dikhao'.",
    learningObjectives: [
      "Understand how computer makes true/false decisions",
      "Learn if, if-else, and else-if ladder syntax",
      "Understand C++ truthiness: Why any non-zero number is TRUE"
    ],
    prerequisites: ["les-02-01"],
    explanationHinglish: `### Decision Making kya hai?

Real life mein hum har subah sochte hain:
*"Agar barish ho rahi hai $\\rightarrow$ toh raincoat pehno, varna $\\rightarrow$ normal jao."*

Programming mein is branch ko hum **\`if-else\`** kehte hain.

\`\`\`cpp
if (condition) {
    // Agar condition TRUE (sach) hui toh yeh code chalega
} else {
    // Agar condition FALSE (jhooth) hui toh yeh code chalega
}
\`\`\`

---

### The Golden Rule of C++ Truthiness 🌟
C++ mein boolean check bohot simple rule follow karta hai:
- **0 = FALSE**
- **Koi bhi non-zero number (1, 5, -99, 100) = TRUE!**

Isliye agar aap likhein:
\`\`\`cpp
if (5) {
    cout << "Yeh hamesha chalega kyunki 5 non-zero hai!";
}
\`\`\`

---

### The Biggest Beginner Trap: \`=\` vs \`==\` ⚠️
- \`==\` (Double Equal): **Comparison** karta hai ("Kya a barabar hai b ke?").
- \`=\` (Single Equal): **Assignment** karta hai ("b ki value a mein daal do!").

Agar aapne likha:
\`\`\`cpp
int age = 15;
if (age = 18) { // BUG! Single '=' use kiya!
    cout << "Vote de sakte ho!";
}
\`\`\`
Yahan \`age = 18\` ne age ko 18 bana diya, aur expression ki value 18 ho gayi jo ki TRUE hai! Isliye 15 saal ka bacha bhi vote de dega!
**Fix**: Hamesha comparison ke liye \`==\` use karein: \`if (age == 18)\`.`,

    visualMentalModel: `+-----------------------------------------------------------+
| Decision Flowchart                                        |
|                                                           |
|                 [ Is score >= 50 ? ]                      |
|                       /      \\                            |
|               YES    /        \\    NO                     |
|                     v          v                          |
|             ["PASS!"]          ["FAIL!"]                  |
+-----------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "How if-else Branches Execution",
      codeLines: [
        "int marks = 65;",
        "if (marks >= 50) {",
        "    cout << \"Passed!\";",
        "} else {",
        "    cout << \"Try Again!\";",
        "}"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: marks variable bana aur value 65 set hui.",
          variables: { marks: "65" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: Condition check hui: Kya 65 >= 50 hai? YES! Condition TRUE hui.",
          variables: { marks: "65", condition: "TRUE" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: if block execute hua aur 'Passed!' screen par print hua.",
          variables: { marks: "65" },
          output: "Passed!"
        },
        {
          lineIndex: 4,
          explanation: "Line 5: else block ko computer ne skip kar diya kyunki if already chal chuka tha.",
          variables: { marks: "65" },
          output: "Passed!"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int x = 0;
    if (x) {
        std::cout << "Apple";
    } else {
        std::cout << "Mango";
    }
    return 0;
}`,
        question: "Guess kijiye: Screen par Apple print hoga ya Mango?",
        options: ["Apple", "Mango", "Nothing", "Compilation Error"],
        correctIndex: 1,
        explanation: "Mango! Kyunki x ki value 0 hai, aur C++ mein 0 ka matlab FALSE hota hai. Isliye else block chala!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Pro Tip: Yoda Condition kya hoti hai?",
        revealedContent: "Expert developers if (age == 18) ki jagah if (18 == age) likhte hain! Agar galti se single '=' lag jaye (18 = age), toh compiler turant error phek dega kyunki number 18 ko assign nahi kiya ja sakta. Isse bug pakad mein aa jata hai!"
      }
    ],

    codeExamples: [
      {
        title: "Even or Odd Checker",
        code: `#include <iostream>

int main() {
    int num = 14;
    if (num % 2 == 0) {
        std::cout << num << " is EVEN\\n";
    } else {
        std::cout << num << " is ODD\\n";
    }
    return 0;
}`,
        output: "14 is EVEN",
        explanation: "num % 2 remainder check karta hai. Agar remainder 0 hai toh number even hai."
      }
    ],
    analogy: "Traffic light ki tarah sochiye: Green signal (Condition true) toh gaadi chalao, Red signal (Condition false) toh ruk jao.",
    commonErrors: [
      {
        error: "Accidental assignment: if (x = 5)",
        cause: "Using single = instead of ==",
        fix: "Use == for comparison"
      }
    ],
    keyTakeaways: [
      "if (condition) checks boolean truth value.",
      "In C++, 0 is FALSE, and any non-zero number is TRUE.",
      "Always use == for checking equality, never single =."
    ],
    quiz: [
      {
        question: "C++ mein if (-5) ka result kya mana jayega?",
        options: ["TRUE", "FALSE", "Compilation Error", "Undefined"],
        correctIndex: 0,
        explanation: "C++ mein sirf 0 FALSE hota hai. -5 ek non-zero number hai, isliye yeh TRUE maana jayega!"
      },
      {
        question: "Equality check karne ke liye kaun sa operator use hota hai?",
        options: ["=", "==", "===", "!="],
        correctIndex: 1,
        explanation: "C++ mein == operator equality check karta hai."
      }
    ],
    relatedQuestionIds: ["q-03-01", "q-03-02"]
  },

  // Chapter 4: Loops
  "les-04-01": {
    id: "les-04-01",
    chapterId: "ch-04",
    title: "for Loop Architecture: Init, Condition & Update",
    order: 1,
    whyNeeded: "Agar aapko 100 baar 'Hello' print karna ho, toh 100 baar cout likhna waqt ki barbadi hai. Loops repetitive tasks ko 2 lines mein automate karte hain.",
    learningObjectives: [
      "Understand the 3 parts of a for loop: Initialization, Condition, Update",
      "Master the exact step-by-step looping lifecycle in memory",
      "Avoid off-by-one errors (< vs <=)"
    ],
    prerequisites: ["les-03-01"],
    explanationHinglish: `### Loop kya hota hai? (Ground par Lap Lagane ka Mental Model)

Sochiye aapko ground par 5 laps daudne hain:
1. **Starting Point (Initialization)**: Aap starting line par khade hue aur lap counter \`i = 1\` set kiya.
2. **Round Check (Condition)**: Har lap se pehle dekha: *"Kya mere 5 laps se kam hain (\`i <= 5\`)?"*
3. **Daudna (Loop Body)**: Aapne pura ek lap dauda.
4. **Counter Badhana (Update)**: Lap khatam hote hi counter 1 badhaya (\`i++\`).

Jab 5 laps poore ho gaye, toh aap ground se bahar nikal gaye (Loop Terminate)!

\`\`\`cpp
for (int i = 1; i <= 5; ++i) {
    cout << "Lap " << i << "\\n";
}
\`\`\`

---

### Step-by-Step Execution Sequence (Bohot Dhyaan se samjhiye!)
1. **Step 1 (Initialization)**: \`int i = 1;\` $\\rightarrow$ Yeh sirf **ek baar** chalta hai loop ke start mein!
2. **Step 2 (Condition Check)**: \`i <= 5\` check hota hai. Agar TRUE hai toh Step 3 par jao. Agar FALSE hai toh loop ruk jata hai.
3. **Step 3 (Execute Body)**: Curly braces ke andar ka code chalta hai.
4. **Step 4 (Update)**: \`++i\` chalta hai aur \`i\` 1 badh jata hai.
5. **Step 5**: Wapas **Step 2** par jao aur repeat karo!

Notice: **Update statement body ke execute hone ke BAAD chalta hai!**`,

    visualMentalModel: `+-----------------------------------------------------------+
| The for Loop Cycle                                        |
|                                                           |
|   (1) Init [i = 1] (Runs once)                            |
|          |                                                |
|          v                                                |
|   (2) Condition [i <= 5 ?] --(NO)--> [Exit Loop]          |
|          | (YES)                                          |
|          v                                                |
|   (3) Body { cout << i; }                                 |
|          |                                                |
|          v                                                |
|   (4) Update [++i]                                        |
|          |                                                |
|          +-----> Wapas Condition par jao                  |
+-----------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "for Loop Execution Step-by-Step",
      codeLines: [
        "for (int i = 1; i <= 3; ++i) {",
        "    cout << i << ' ';",
        "}",
        "cout << \"Done!\";"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Step 1: Loop shuru hua. i ki value 1 set hui, aur check hua: Kya 1 <= 3 hai? YES!",
          variables: { i: "1" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Step 2: Body chali aur '1 ' print hua.",
          variables: { i: "1" },
          output: "1 "
        },
        {
          lineIndex: 0,
          explanation: "Step 3: ++i chala! i badhkar 2 hua. Check hua: Kya 2 <= 3 hai? YES!",
          variables: { i: "2" },
          output: "1 "
        },
        {
          lineIndex: 1,
          explanation: "Step 4: Body chali aur '2 ' print hua.",
          variables: { i: "2" },
          output: "1 2 "
        },
        {
          lineIndex: 0,
          explanation: "Step 5: ++i chala! i badhkar 3 hua. Check hua: Kya 3 <= 3 hai? YES!",
          variables: { i: "3" },
          output: "1 2 "
        },
        {
          lineIndex: 1,
          explanation: "Step 6: Body chali aur '3 ' print hua.",
          variables: { i: "3" },
          output: "1 2 3 "
        },
        {
          lineIndex: 0,
          explanation: "Step 7: ++i chala! i badhkar 4 hua. Check hua: Kya 4 <= 3 hai? NO! Loop terminate!",
          variables: { i: "4" },
          output: "1 2 3 "
        },
        {
          lineIndex: 3,
          explanation: "Step 8: Loop se bahar aakar 'Done!' print hua.",
          variables: { i: "4" },
          output: "1 2 3 Done!"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    for (int i = 0; i < 3; i++) {
        std::cout << i;
    }
    return 0;
}`,
        question: "Is loop ka output kya hoga?",
        options: ["012", "0123", "123", "Infinite Loop"],
        correctIndex: 0,
        explanation: "012! i ki values 0, 1, 2 hongi. Jab i = 3 hoga toh 3 < 3 FALSE ho jayega aur loop band ho jayega."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "⚠️ Deadly Bug: for loop ke header ke aage semicolon (;) lagane se kya hota hai?",
        revealedContent: "Agar aap likhein: for (int i=0; i<5; i++); { cout << i; } toh semicolon for loop ko wahi empty khatam kar deta hai! Loop 5 baar khali ghoomega, aur body sirf aakhiri mein ek baar chalegi!"
      }
    ],

    codeExamples: [
      {
        title: "Sum of First N Numbers",
        code: `#include <iostream>

int main() {
    int n = 5;
    int sum = 0;
    for (int i = 1; i <= n; ++i) {
        sum += i;
    }
    std::cout << "Sum: " << sum << "\\n";
    return 0;
}`,
        output: "Sum: 15",
        explanation: "Loop 1 se 5 tak numbers ko sum mein jodta hai (1+2+3+4+5 = 15)."
      }
    ],
    analogy: "Alarm clock ki tarah: Har subah bajti hai, check karti hai 'kya 7 baje hain?', snooze dabao (update) aur repeat karo.",
    commonErrors: [
      {
        error: "for (int i = 0; i <= n; i++) off-by-one trap",
        cause: "i <= n use karne se loop n+1 times chal jata hai.",
        fix: "Array indexing ke liye hamesha i < n use karein (0 se n-1)."
      }
    ],
    keyTakeaways: [
      "Initialization runs once at the beginning.",
      "Condition is checked before every iteration.",
      "Update happens after the body executes."
    ],
    quiz: [
      {
        question: "for (int i = 1; i < 5; i++) loop body kitni baar chalegi?",
        options: ["4 times", "5 times", "6 times", "Infinite"],
        correctIndex: 0,
        explanation: "i takes values 1, 2, 3, 4. Total 4 iterations."
      },
      {
        question: "Loop ke andar update (++i) kab execute hota hai?",
        options: ["Body execute hone se pehle", "Body execute hone ke baad", "Condition check se pehle", "Sirf ek baar start mein"],
        correctIndex: 1,
        explanation: "Update hamesha curly braces ke andar ka code chalne ke baad execute hota hai."
      }
    ],
    relatedQuestionIds: ["q-04-01", "q-05-01"]
  },

  // Chapter 6: Functions & Pass by Reference
  "les-06-02": {
    id: "les-06-02",
    chapterId: "ch-06",
    title: "Pass by Value vs Pass by Reference (&) & Const References",
    order: 2,
    whyNeeded: "Jab hum kisi function ko data bhejte hain, toh kya hum original variable bhej rahe hain ya uski photocopy? Agar photocopy mein change karenge toh original par koi asar nahi padega! Pass by reference original variable ko directly modify karne ki power deta hai.",
    learningObjectives: [
      "Understand what Call Stack and Scope mean",
      "Learn Pass by Value: Why changes inside function don't affect caller",
      "Learn Pass by Reference (&): How to modify original caller variables (like swap)"
    ],
    prerequisites: ["les-01-04"],
    explanationHinglish: `### Pass by Value vs Pass by Reference (Photocopy Analogy)

#### 1. Pass by Value (Default Behavior):
Jab aap function mein normal variable pass karte hain (\`void update(int x)\`):
- Function ko original variable nahi, balki us variable ki **Photocopy (Duplicate copy)** milti hai.
- Agar function photocopy par kuch bhi likhe ya mitaye, toh aapke ghar par rakhe original document par **0% asar** padega!

\`\`\`cpp
void changeValue(int num) {
    num = 99; // Sirf duplicate copy 99 hui!
}
int main() {
    int a = 10;
    changeValue(a);
    cout << a; // Abhi bhi 10 hi print hoga!
}
\`\`\`

---

#### 2. Pass by Reference (\`&\` Ampersand Magic):
Jab aap parameter ke aage **\`&\`** symbol laga dete hain (\`void update(int &x)\`):
- Ab koi nayi copy nahi banti!
- \`x\` directly main function ke variable \`a\` ka **NICKNAME (Alias)** ban jata hai!
- Function ke andar jo bhi change hoga, woh seedhe **original memory location** par reflect hoga!

\`\`\`cpp
void changeValue(int &num) { // Notice the '&' symbol!
    num = 99; // Original memory par 99 overwrite hua!
}
int main() {
    int a = 10;
    changeValue(a);
    cout << a; // Now prints 99!
}
\`\`\`

---

### Comparison Table:
| Feature | Pass by Value (\`int x\`) | Pass by Reference (\`int &x\`) |
|---|---|---|
| **Memory** | Nayi duplicate copy banti hai | Same memory address share hota hai |
| **Performance** | Bade data (vectors) par slow copy | Super fast (Zero copy overhead) |
| **Original Modification** | ❌ Original safe rehta hai | ✅ Original change ho jata hai |
| **Use Case** | Read-only calculations | Swapping, in-place sorting, large objects |`,

    visualMentalModel: `+-----------------------------------------------------------+
| PASS BY VALUE:                                            |
|  [main::a = 10] --(Copy value 10)--> [func::num = 10]     |
|                                             |             |
|                                       (num = 99)           |
|                                             v             |
|  [main::a = 10] (Unchanged!)         [func::num = 99]     |
|                                                           |
| PASS BY REFERENCE (&):                                    |
|  [Memory Address: 0x1000]                                 |
|  Names: 'a' (in main) AND 'num' (in func)                 |
|  num = 99  ====> Directly changes 0x1000 to 99!           |
+-----------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Pass by Reference Swap Visualizer",
      codeLines: [
        "void swap(int &x, int &y) {",
        "    int temp = x;",
        "    x = y;",
        "    y = temp;",
        "}",
        "int main() {",
        "    int a = 10, b = 20;",
        "    swap(a, b);",
        "}"
      ],
      steps: [
        {
          lineIndex: 6,
          explanation: "main() shuru hua: a = 10, b = 20 RAM mein bane.",
          variables: { a: "10", b: "20" },
          output: ""
        },
        {
          lineIndex: 0,
          explanation: "swap(a, b) call hua. Reference '&' hone ki wajah se x ban gaya a ka nickname, aur y ban gaya b ka nickname!",
          variables: { a: "10", b: "20", "x (&a)": "10", "y (&b)": "20" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "temp = x: temp variable mein 10 save hua.",
          variables: { a: "10", b: "20", temp: "10" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "x = y: x ne y ki value (20) le li. Kyunki x direct 'a' se juda hai, 'a' bhi 20 ban gaya!",
          variables: { a: "20", b: "20", temp: "10" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "y = temp: y ne temp (10) le liya. Isse 'b' 10 ban gaya! Successfully Swapped!",
          variables: { a: "20", b: "10", temp: "10" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
void multiply(int a) {
    a = a * 2;
}
int main() {
    int val = 5;
    multiply(val);
    std::cout << val;
    return 0;
}`,
        question: "val ki final value kya print hogi?",
        options: ["10", "5", "0", "Compilation Error"],
        correctIndex: 1,
        explanation: "5! multiply function mein 'int a' pass by value hai. Function ke andar duplicate 'a' 10 bana, lekin main() ka 'val' abhi bhi 5 hi raha!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Const Reference kya hota hai? (const int &x)",
        revealedContent: "Interview Favorite! Jab aap bada data (jaise 10,000 elements ka vector) pass karte hain, toh pass-by-value bohot memory khata hai. Pass-by-reference tezi lata hai, lekin function galti se data badal na de, isliye hum 'const vector<int>& v' lagate hain: Speed of Reference + Safety of Value!"
      }
    ],

    codeExamples: [
      {
        title: "Classic Swap using Pass by Reference",
        code: `#include <iostream>

void swapNumbers(int &first, int &second) {
    int temp = first;
    first = second;
    second = temp;
}

int main() {
    int a = 10, b = 20;
    std::cout << "Before swap: a = " << a << ", b = " << b << "\\n";
    swapNumbers(a, b);
    std::cout << "After swap:  a = " << a << ", b = " << b << "\\n";
    return 0;
}`,
        output: "Before swap: a = 10, b = 20\nAfter swap:  a = 20, b = 10",
        explanation: "Reference '&' ki wajah se function ne main() ke original variables ko swap kar diya."
      }
    ],
    analogy: "Pass by Value = Dost ko homework ka photo bhejna (woh apne phone mein edit kare toh aapki copy safe rehti hai). Pass by Reference = Google Docs ka 'Can Edit' link bhejna (woh edit karega toh seedhe original document badal jayega!).",
    commonErrors: [
      {
        error: "Missing '&' in swap function",
        cause: "void swap(int a, int b) likhne se values swap nahi hoti.",
        fix: "Parameters mein '&' lagayein: void swap(int &a, int &b)"
      }
    ],
    keyTakeaways: [
      "Pass by value creates a separate duplicate copy in memory.",
      "Pass by reference (&) gives an alias to the original variable, avoiding memory copy.",
      "Use 'const &' when passing large collections for zero-overhead read-only access."
    ],
    quiz: [
      {
        question: "C++ mein pass-by-reference create karne ke liye kaun sa symbol use hota hai?",
        options: ["*", "&", "#", "->"],
        correctIndex: 1,
        explanation: "The ampersand symbol '&' denotes a reference in C++ parameter lists."
      },
      {
        question: "Agar void f(int x) { x = 100; } ko main() se call karein jahan int n = 5; hai, toh n kya hoga?",
        options: ["100", "5", "0", "Garbage"],
        correctIndex: 1,
        explanation: "n is passed by value, so the caller's variable remains unchanged at 5."
      }
    ],
    relatedQuestionIds: ["q-01-02", "q-02-01"]
  },

  // Chapter 7: Arrays
  "les-07-01": {
    id: "les-07-01",
    chapterId: "ch-07",
    title: "1D Arrays: Contiguous Memory Layout & Bounds Checking",
    order: 1,
    whyNeeded: "Agar aapko class ke 50 students ke marks store karne ho, toh 50 alag variables (m1, m2, ..., m50) banana pagalpan hai. Array ek sath ek line mein 50 dabbe reserve kar leta hai.",
    learningObjectives: [
      "Understand what contiguous memory means in RAM",
      "Understand why array indexing is 0-based (Base address offset formula)",
      "Understand the danger of Buffer Overflow and Segmentation Fault"
    ],
    prerequisites: ["les-04-01"],
    explanationHinglish: `### Array kya hota hai? (Train ke Coaches ka Mental Model)

Sochiye ek express train hai jisme 5 consecutive dabbas (coaches) ek dusre se jude hain:
\`[ Coach 0 | Coach 1 | Coach 2 | Coach 3 | Coach 4 ]\`

C++ mein **Array** same data type ke elements ka ek continuous collection hota hai jo memory mein **ek sath chipak kar** store hota hai.

\`\`\`cpp
int marks[5] = {90, 85, 78, 92, 88};
\`\`\`

---

### Indexing 0 se shuru kyun hoti hai? (Address Formula 📐)
Bohot log sochte hain: "1 se shuru kyun nahi kiya?"
Iska jawab hardware memory architecture mein chhipa hai!

RAM mein index darasal **Base Address se Dooriyan (Offset)** hota hai!
$$\\text{Address of arr}[i] = \\text{Base Address} + (i \\times \\text{sizeof}(\\text{type}))$$

Agar pehla element address \`1000\` par hai:
- \`marks[0]\` $\\rightarrow 1000 + (0 \\times 4) = 1000$ (0 dooriyan, seedhe pehla element!)
- \`marks[1]\` $\\rightarrow 1000 + (1 \\times 4) = 1004$ (1 element aage)
- \`marks[2]\` $\\rightarrow 1000 + (2 \\times 4) = 1008$ (2 elements aage)

Is formula ki wajah se computer kisi bhi index \`arr[i]\` ko **$O(1)$ instant speed** mein access kar leta hai!

---

### Segmentation Fault (Khatarnaak Galti ⚠️)
Agar aapka array 5 elements ka hai (\`arr[5]\`), toh valid indices sirf \`0, 1, 2, 3, 4\` hain.
Agar aapne galti se likh diya:
\`\`\`cpp
cout << arr[10]; // Crash!
\`\`\`
C++ boundary check nahi karta! Yeh kisi dusre software ya OS ke memory block mein ghus jata hai, jisse Operating System aapke program ko maar deta hai (**Segmentation Fault / Crash**)!`,

    visualMentalModel: `+-----------------------------------------------------------+
| RAM Memory Layout for int arr[4] = {10, 20, 30, 40}        |
|                                                           |
| Address:  1000     1004     1008     1012                 |
|          +--------+--------+--------+--------+            |
| Value:   |   10   |   20   |   30   |   40   |            |
|          +--------+--------+--------+--------+            |
| Index:      [0]      [1]      [2]      [3]                |
+-----------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Array Traversal and Index Access",
      codeLines: [
        "int arr[3] = {10, 20, 30};",
        "int sum = 0;",
        "sum += arr[0];",
        "sum += arr[1];",
        "sum += arr[2];"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: RAM mein 3 contiguous boxes bane: arr[0]=10, arr[1]=20, arr[2]=30.",
          variables: { "arr[0]": "10", "arr[1]": "20", "arr[2]": "30", sum: "0" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: arr[0] (10) sum mein joda gaya. sum ab 10 hua.",
          variables: { sum: "10" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "Line 4: arr[1] (20) sum mein joda gaya. sum ab 30 hua.",
          variables: { sum: "30" },
          output: ""
        },
        {
          lineIndex: 4,
          explanation: "Line 5: arr[2] (30) sum mein joda gaya. sum ab 60 hua.",
          variables: { sum: "60" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int nums[3] = {5, 10, 15};
    nums[1] = nums[2] + 2;
    std::cout << nums[1];
    return 0;
}`,
        question: "nums[1] ki nayi value kya print hogi?",
        options: ["17", "12", "10", "15"],
        correctIndex: 0,
        explanation: "nums[2] ki value 15 hai. 15 + 2 = 17, jo nums[1] par overwrite ho gayi!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "🔍 Click to Reveal: Array ka size kaise calculate karte hain?",
        revealedContent: "C++ mein formula hota hai: sizeof(arr) / sizeof(arr[0]). sizeof(arr) pura array kitne bytes le raha hai woh batata hai, aur sizeof(arr[0]) ek single element ka size batata hai. 20 bytes / 4 bytes = 5 elements!"
      }
    ],

    codeExamples: [
      {
        title: "Array Traversal using Loop",
        code: `#include <iostream>

int main() {
    int scores[4] = {85, 92, 78, 95};
    for (int i = 0; i < 4; ++i) {
        std::cout << "Student " << i << " score: " << scores[i] << "\\n";
    }
    return 0;
}`,
        output: "Student 0 score: 85\nStudent 1 score: 92\nStudent 2 score: 78\nStudent 3 score: 95",
        explanation: "Loop index 0 se 3 tak iterate karke sabhi elements access karta hai."
      }
    ],
    analogy: "Hotel ke floor par continuous rooms (Room 101, 102, 103, 104) ki tarah. Pehle room ka address pata hai toh agle room par jana instant hai.",
    commonErrors: [
      {
        error: "Array index out of bounds",
        cause: "Size N array mein i <= N tak loop chala dena.",
        fix: "Last valid index hamesha N - 1 hota hai. Hamesha i < N use karein."
      }
    ],
    keyTakeaways: [
      "Arrays store homogeneous elements in continuous memory locations.",
      "Accessing any element by index is instantaneous O(1) time.",
      "Valid index range for size N is strictly 0 to N-1."
    ],
    quiz: [
      {
        question: "Agar array ka size 8 hai, toh aakhiri valid index kya hoga?",
        options: ["8", "7", "0", "9"],
        correctIndex: 1,
        explanation: "0-based indexing ke hisaab se size 8 array ke indices 0 se 7 tak hote hain."
      },
      {
        question: "arr[i] ko access karne ki time complexity kya hoti hai?",
        options: ["O(N)", "O(1)", "O(log N)", "O(N^2)"],
        correctIndex: 1,
        explanation: "Hardware memory formula seedhe address calculate karta hai, isliye constant time O(1) lagta hai."
      }
    ],
    relatedQuestionIds: ["q-07-01", "q-14-01"]
  },

  // Chapter 9: Pointers
  "les-09-01": {
    id: "les-09-01",
    chapterId: "ch-09",
    title: "Memory Architecture: Address-of (&) and Dereference (*) Operators",
    order: 1,
    whyNeeded: "C++ ko fast aur powerful banata hai hardware memory par direct control. Pointers aapko computer RAM ke physical addresses par seedhe kaam karne ki shakti dete hain.",
    learningObjectives: [
      "Understand what a memory address in RAM looks like (Hexadecimal)",
      "Learn the Address-of operator (&) to find where a variable lives",
      "Learn the Dereference operator (*) to read and change values at that address"
    ],
    prerequisites: ["les-01-04"],
    explanationHinglish: `### Pointers se darna band kijiye! (Ghar ke GPS Address ka Mental Model)

Maan lijiye aapke dost ke ghar mein 1 peti aam rakhe hain (Value = Mangoes).
Dost ke ghar ka ek GPS Address hai: **"Plot No. 42, Sector 5"** (Address).

Aapne ek diary li aur us diary mein dost ke ghar ka address likh liya.
Aapki diary ek **POINTER** hai!

> 💡 **Simple Definition**: 
> - Ek normal variable value store karta hai (jaise \`int x = 10\`).
> - Ek **Pointer** kisi dusre variable ka **RAM Address** store karta hai!

---

### The Two Golden Operators:
1. **Address-of Operator (\`&\`)**:
   Kisi variable ke aage \`&\` lagane se uska physical memory address milta hai:
   \`\`\`cpp
   int score = 50;
   cout << &score; // Outputs: 0x7ffd5e8f49ac (RAM ka hexadecimal address)
   \`\`\`

2. **Dereference Operator (\`*\`)**:
   Kisi pointer ke aage \`*\` lagane ka matlab: *"Is address par jao aur andar rakhi hui cheez nikaalo ya badlo!"*
   \`\`\`cpp
   int score = 50;
   int* ptr = &score; // ptr ne score ka address store kiya

   cout << *ptr;      // Outputs 50 (andar rakhi value padhi)
   *ptr = 90;         // Address par jakar value 90 kar di!
   cout << score;     // Now outputs 90!
   \`\`\`

---

### Pointer ka Size kya hota hai? (Interview Trick Question)
Kya \`char*\` chhota hota hai aur \`double*\` bada? **BILKUL NAHI!**
Pointer sirf address store karta hai. Address ka size variable ke type par nahi, balki aapke processor ke architecture par depend karta hai:
- 32-bit Architecture: All pointers are **4 bytes**.
- 64-bit Architecture: All pointers are **8 bytes**.`,

    visualMentalModel: `+-----------------------------------------------------------+
| Memory Architecture: Address vs Value                     |
|                                                           |
| Variable: score                                           |
| Address:  0x1000                                          |
| Value:    50                                              |
|                                                           |
| Pointer:  ptr                                             |
| Address:  0x2000                                          |
| Value:    0x1000  --------(Points to score)------------>  |
|                                                           |
| *ptr = 90  ====> Overwrites value inside 0x1000 to 90!    |
+-----------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Pointer Creation & Dereferencing Stepper",
      codeLines: [
        "int target = 42;",
        "int* ptr = &target;",
        "*ptr = 99;",
        "cout << target;"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: RAM address 0x1000 par 'target' variable bana, value 42 rakhi gayi.",
          variables: { target: "42", "&target": "0x1000" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: 'ptr' naam ka pointer bana. Usme target ka memory address (0x1000) save hua.",
          variables: { target: "42", ptr: "0x1000", "*ptr": "42" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3 (*ptr = 99): Computer address 0x1000 par gaya aur value 42 ko mita kar 99 likh diya!",
          variables: { target: "99", ptr: "0x1000", "*ptr": "99" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "Line 4: target print hua, jo ab 99 ban chuka hai!",
          variables: { target: "99" },
          output: "99"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int a = 10;
    int* p = &a;
    *p = *p + 5;
    std::cout << a;
    return 0;
}`,
        question: "a ki value kya print hogi?",
        options: ["15", "10", "5", "Address of a"],
        correctIndex: 0,
        explanation: "*p ne a ki value (10) uthayi, usme 5 joda (15), aur wapas a mein store kar diya. So a = 15!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "⚠️ Deadly Bug: Wild Pointer kya hota hai?",
        revealedContent: "Agar aap likhein: int* ptr; bina kisi variable ka address diye *ptr = 5; likh dein, toh ptr mein koi random garbage address hota hai. Computer kisi unknown memory par 5 write karega aur pura program crash ho jayega (Segmentation Fault)! Hamesha int* ptr = nullptr; initialize karein!"
      }
    ],

    codeExamples: [
      {
        title: "Pointers and Memory Manipulation",
        code: `#include <iostream>

int main() {
    int val = 100;
    int* p = &val;

    std::cout << "val ki value:    " << val << "\\n";
    std::cout << "val ka address:  " << &val << "\\n";
    std::cout << "p mein address:  " << p << "\\n";
    std::cout << "*p dereferenced: " << *p << "\\n";

    *p = 500; // Directly changing val via pointer
    std::cout << "New val:         " << val << "\\n";
    return 0;
}`,
        output: "val ki value:    100\nval ka address:  0x...\np mein address:  0x...\n*p dereferenced: 100\nNew val:         500",
        explanation: "Pointers allow indirect modification of variables using their address."
      }
    ],
    analogy: "Aapke paas locker ka chabi number (Address) hai. Dereferencing (*) ka matlab hai locker khol kar andar rakhe paise nikaalna.",
    commonErrors: [
      {
        error: "Dereferencing uninitialized pointer",
        cause: "int* p; *p = 10; without pointing to a valid address.",
        fix: "Initialize pointers to nullptr or a valid variable: int* p = &x;"
      }
    ],
    keyTakeaways: [
      "A pointer is a variable that holds the memory address of another variable.",
      "& extracts address; * dereferences to access or modify value at address.",
      "All pointers on a 64-bit OS take 8 bytes, regardless of data type."
    ],
    quiz: [
      {
        question: "Kisi variable ka memory address lene ke liye kaun sa operator use hota hai?",
        options: ["*", "&", "#", "->"],
        correctIndex: 1,
        explanation: "The address-of operator '&' returns the hexadecimal memory address of a variable."
      },
      {
        question: "Agar int x = 20; int* p = &x; hai, toh *p kya return karega?",
        options: ["x ka address", "20", "Garbage", "Error"],
        correctIndex: 1,
        explanation: "*p dereference karta hai aur memory location par rakhi value (20) return karta hai."
      }
    ],
    relatedQuestionIds: ["q-09-01", "q-01-02"]
  },

  // Chapter 14: Two Pointers Pattern
  "les-14-01": {
    id: "les-14-01",
    chapterId: "ch-14",
    title: "Two Pointers Pattern: Opposing Ends & Fast-Slow Pointers",
    order: 1,
    whyNeeded: "Coding interviews mein nested loops O(N^2) time lete hain aur 'Time Limit Exceeded' ho jate hain. Two Pointers aisi technique hai jo problem ko single pass O(N) linear time mein solve karti hai.",
    learningObjectives: [
      "Understand why Opposing Pointers require a Sorted Array",
      "Learn how to reduce O(N^2) brute force to blazing fast O(N)",
      "Master step-by-step convergence logic of Left and Right pointers"
    ],
    prerequisites: ["les-07-01"],
    explanationHinglish: `### Two Pointers Technique kya hai? (Tug of War Analogy)

Brute force tarike mein hum do nested loops lagate hain:
Pehle element ke liye baaki sab check karo, phir dusre ke liye sab check karo ($O(N^2)$ slow time!).

Two Pointers mein hum do pointers rakhte hain:
- Ek pointer \`left = 0\` (start) par khada hota hai.
- Dusra pointer \`right = n - 1\` (aakhiri) par khada hota hai.
- Dono condition ke hisaab se ek dusre ki taraf aage badhte hain!

---

### Classic Problem: Two Sum in Sorted Array
Maan lijiye sorted array hai: \`[1, 3, 5, 8, 11]\` aur hume do numbers dhoondhne hain jinka **Sum = 13** ho:

1. **Step 1**: \`left = 0\` (val: 1), \`right = 4\` (val: 11).
   - Current Sum = $1 + 11 = 12$.
   - Target 13 hai, sum chhota hai!
   - Array sorted hai, sum badhane ke liye kya karenge? **\`left++\`** karenge!
2. **Step 2**: \`left = 1\` (val: 3), \`right = 4\` (val: 11).
   - Current Sum = $3 + 11 = 14$.
   - Target 13 hai, sum bada ho gaya!
   - Sum kam karne ke liye kya karenge? **\`right--\`** karenge!
3. **Step 3**: \`left = 1\` (val: 3), \`right = 3\` (val: 8).
   - Current Sum = $3 + 8 = 11$.
   - Sum chhota hai $\\rightarrow$ **\`left++\`**!
4. **Step 4**: \`left = 2\` (val: 5), \`right = 3\` (val: 8).
   - Current Sum = $5 + 8 = 13$! **TARGET MIL GAYA!** 🎉

Sirf 4 steps mein kaam ho gaya! Time Complexity: **$O(N)$** instead of $O(N^2)$!`,

    visualMentalModel: `+-----------------------------------------------------------+
| Two Pointers Convergence on Sorted Array                  |
|                                                           |
| Array:  [  1,   3,   5,   8,  11 ]    (Target = 13)       |
|            ^                   ^                          |
|          left                 right                       |
|                                                           |
| Sum = 1 + 11 = 12 (< 13)  ====> left++                    |
| Sum = 3 + 11 = 14 (> 13)  ====> right--                   |
| Sum = 3 + 8  = 11 (< 13)  ====> left++                    |
| Sum = 5 + 8  = 13 (== 13) ====> MATCH FOUND! (O(N) Time!) |
+-----------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Two Sum Two-Pointer Convergence Stepper",
      codeLines: [
        "int left = 0, right = 4; // nums = [1, 3, 5, 8, 11], target = 13",
        "while (left < right) {",
        "    int sum = nums[left] + nums[right];",
        "    if (sum == target) return true;",
        "    else if (sum < target) left++;",
        "    else right--;",
        "}"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Init: left = 0 (val: 1), right = 4 (val: 11). Target = 13.",
          variables: { left: "0", right: "4", sum: "-" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Step 1: sum = 1 + 11 = 12. 12 < 13 hai, sum chhota hai!",
          variables: { left: "0", right: "4", sum: "12" },
          output: ""
        },
        {
          lineIndex: 4,
          explanation: "left++ chala! left ab index 1 (val: 3) par aa gaya.",
          variables: { left: "1", right: "4", sum: "12" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Step 2: sum = 3 + 11 = 14. 14 > 13 hai, sum bada hai!",
          variables: { left: "1", right: "4", sum: "14" },
          output: ""
        },
        {
          lineIndex: 5,
          explanation: "right-- chala! right ab index 3 (val: 8) par aa gaya.",
          variables: { left: "1", right: "3", sum: "14" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Step 3: sum = 3 + 8 = 11. 11 < 13 hai, sum chhota hai!",
          variables: { left: "1", right: "3", sum: "11" },
          output: ""
        },
        {
          lineIndex: 4,
          explanation: "left++ chala! left ab index 2 (val: 5) par aa gaya.",
          variables: { left: "2", right: "3", sum: "11" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Step 4: sum = 5 + 8 = 13! EXACT MATCH! Target Found in O(N)!",
          variables: { left: "2", right: "3", sum: "13" },
          output: "Match Found: (5, 8)"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
int main() {
    int arr[] = {2, 4, 6, 8};
    int left = 0, right = 3;
    while (left < right) {
        if (arr[left] + arr[right] == 10) {
            std::cout << arr[left] << " " << arr[right];
            break;
        }
        left++;
    }
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["2 8", "4 6", "10", "Nothing"],
        correctIndex: 0,
        explanation: "Pehle hi check par: arr[0] (2) + arr[3] (8) = 10 mil gaya! Screen par '2 8' print ho gaya."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Two Pointers unsorted array par kyun nahi chalta?",
        revealedContent: "Kyunki agar array sorted nahi hoga, toh hume pata hi nahi chalega ki sum badhane ke liye kaun sa pointer aage karein aur sum kam karne ke liye kaun sa pointer peeche karein! Sorting guarantee karti hai ki right aage jane se value badhegi aur left peeche aane se value ghatege."
      }
    ],

    codeExamples: [
      {
        title: "Two Sum in Sorted Array (O(N) Time)",
        code: `#include <iostream>
#include <vector>

bool twoSum(const std::vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) {
            std::cout << "Pair found: " << nums[left] << " + " << nums[right] << " = " << target << "\\n";
            return true;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

int main() {
    std::vector<int> sorted = {1, 3, 5, 8, 11};
    twoSum(sorted, 13);
    return 0;
}`,
        output: "Pair found: 5 + 8 = 13",
        explanation: "Two pointers technique eliminates nested loops."
      }
    ],
    analogy: "Aap aur aapka dost ek lambi line ke do ends par khade hain. Agar dono milkar aage badhenge toh aadhe samay mein mil jayenge bajaye iske ki ek akela banda poori line ghoome.",
    commonErrors: [
      {
        error: "Using two pointers without sorting",
        cause: "Array sorted nahi hai aur direct left/right pointer chala diya.",
        fix: "Pehle array ko sort karein: std::sort(arr.begin(), arr.end())"
      }
    ],
    keyTakeaways: [
      "Two pointers reduces O(N^2) searches to O(N) linear time.",
      "Requires sorted input for opposing end pointer decisions.",
      "Fast and slow pointers are used for cycle detection."
    ],
    quiz: [
      {
        question: "Sorted array mein Two Sum find karne ke liye Two Pointers ki time complexity kya hoti hai?",
        options: ["O(N^2)", "O(N)", "O(log N)", "O(1)"],
        correctIndex: 1,
        explanation: "Each pointer moves at most N steps, resulting in a single pass O(N) linear time."
      },
      {
        question: "Agar current sum target se bada hai, toh opposing two pointers mein kya karte hain?",
        options: ["left++", "right--", "left--", "right++"],
        correctIndex: 1,
        explanation: "Sum kam karne ke liye right pointer ko left ki taraf (right--) move karte hain."
      }
    ],
    relatedQuestionIds: ["q-14-01", "q-07-01"]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS_DATA };
}
