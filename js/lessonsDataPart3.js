// CppMastery Lessons Database - Part 3
// Chapters 6, 7, 8, 9, 10 (OOP), 11 (STL), 12 (Complexity Analysis)

const LESSONS_PART3 = {
  // Chapter 6: Recursion Masterclass & Call Stack
  "les-06-04": {
    id: "les-06-04",
    chapterId: "ch-06",
    title: "Recursion Masterclass: Call Stack, Base Case & Recurrence",
    order: 4,
    whyNeeded: "Recursion computer science ka sabse magical tool hai. Trees, Graphs, aur Dynamic Programming bina recursion ke solve hi nahi ho sakte. Function jab khud ko call karta hai toh Call Stack mein kya hota hai? Seekhiye.",
    learningObjectives: [
      "Recursion ki core philosophy: Badi problem ko chhoti sub-problem mein todna",
      "The Base Case: Recursion ko rukne ka signal (warna Stack Overflow!)",
      "RAM Call Stack visualization: Function frames kaise push aur pop hote hain"
    ],
    prerequisites: ["les-06-01", "les-06-02"],
    explanationHinglish: `### Recursion kya hai? (Russian Doll / Matryoshka Analogy)

Jab ek function apne hi code ke andar **khud ko dobara call karta hai**, toh use **Recursion** kehte hain!

Sochiye Russian doll: Aap ek doll kholte hain, uske andar ek chhoti doll nikalti hai. Use kholte hain toh aur chhoti doll nikalti hai. Aakhiri mein ek aisi doll aati hai jo khul nahi sakti (**The Base Case**)!

---

### Har Recursive Function ke 3 Golden Rules:
1. **The Base Case (Rukne ka Rule 🛑)**:
   - "Mujhe kab rukna hai?"
   - Agar aapne base case nahi likha, toh function khud ko infinite times call karta rahega jab tak RAM bhar na jaye aur program crash na ho jaye (**Stack Overflow Crash!**).
2. **Recursive Call (Chhota Kaam 🔄)**:
   - Apne se ek kadam chhoti sub-problem ko call karna: $f(n) \\rightarrow f(n - 1)$.
3. **Calculation (Result Jodna ➕)**:
   - Return aate waqt result calculate karna: $n + f(n - 1)$ ya $n \\times f(n - 1)$.

---

### Factorial Example: $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1$
$$f(n) = n \\times f(n - 1), \\quad \\text{Base Case: } f(1) = 1$$

\`\`\`cpp
int fact(int n) {
    if (n <= 1) return 1; // 1. Base Case
    return n * fact(n - 1); // 2. Recursive Relation
}
\`\`\``,

    visualMentalModel: `+-------------------------------------------------------------+
| RAM CALL STACK (Push on Call, Pop on Return)                |
|                                                             |
| Step 1: fact(3) calls fact(2)                               |
| Step 2: fact(2) calls fact(1)                               |
|                                                             |
| Top of Stack: [ fact(1) returns 1 ]    <--- BASE CASE!      |
|               [ fact(2) = 2 * 1 = 2 ]                       |
| Base of Stack:[ fact(3) = 3 * 2 = 6 ]                       |
| Result: 6                                                   |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Factorial Call Stack Unwinding Stepper",
      codeLines: [
        "int fact(int n) {",
        "    if (n <= 1) return 1;",
        "    return n * fact(n - 1);",
        "}",
        "int ans = fact(3);"
      ],
      steps: [
        {
          lineIndex: 4,
          explanation: "main() calls fact(3). Stack mein frame push hua: fact(3).",
          variables: { "Call Stack": "[fact(3)]", n: "3" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "fact(3) calls fact(2). Stack mein naya frame push hua: fact(2).",
          variables: { "Call Stack": "[fact(3) -> fact(2)]", n: "2" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "fact(2) calls fact(1). Stack mein naya frame push hua: fact(1).",
          variables: { "Call Stack": "[fact(3) -> fact(2) -> fact(1)]", n: "1" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "BASE CASE HIT! n <= 1 is TRUE! fact(1) returns 1 and pops off stack!",
          variables: { "Call Stack": "[fact(3) -> fact(2)]", returned: "1" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "fact(2) returns 2 * 1 = 2 and pops off stack!",
          variables: { "Call Stack": "[fact(3)]", returned: "2" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "fact(3) returns 3 * 2 = 6 and pops off stack! Final Answer = 6!",
          variables: { ans: "6", "Call Stack": "[] (Empty)" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
void printCount(int n) {
    if (n == 0) return;
    std::cout << n << ' ';
    printCount(n - 1);
}
int main() {
    printCount(3);
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["3 2 1 ", "1 2 3 ", "3 2 1 0 ", "Infinite loop"],
        correctIndex: 0,
        explanation: "Pehle 3 print hua, phir function ne 2 ko call kiya, 2 print hua, 1 print hua. n=0 aane par base case return ho gaya!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Head Recursion vs Tail Recursion mein kya farak hai?",
        revealedContent: "Tail Recursion mein recursive call function ka bilkul aakhiri statement hota hai: return solve(n-1); Compiler isko normal loop mein convert karke memory bacha sakta hai (Tail Call Optimization). Head recursion mein recursive call pehle hoti hai aur calculation return aate waqt hoti hai."
      }
    ],

    codeExamples: [
      {
        title: "Fibonacci Series with Recursion",
        code: `#include <iostream>

int fib(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

int main() {
    std::cout << "Fibonacci(6): " << fib(6) << '\\n';
    return 0;
}`,
        output: "Fibonacci(6): 8",
        explanation: "0, 1, 1, 2, 3, 5, 8. fib(6) = 8."
      }
    ],
    analogy: "Recursion jaise ek mirror ke aage dusra mirror rakhna hai: Anant reflections bante hain jab tak aap beech mein hath (Base Case) na rakh dein.",
    commonErrors: [
      {
        error: "Missing or incorrect Base Case",
        cause: "Base condition galat hone par function ruk nahi pata.",
        fix: "Hamesha sabse pehle socho: 'Smallest possible input kya hai jiska answer mujhe pehle se pata hai?'"
      }
    ],
    keyTakeaways: [
      "Har recursive function mein Base Case mandatory hai.",
      "Call stack functions ki history yaad rakhta hai.",
      "Base case na hone par Stack Overflow crash hota hai."
    ],
    quiz: [
      {
        question: "Agar recursive function mein base case na ho toh kya hoga?",
        options: ["Code fast chalega", "Stack Overflow crash hoga", "Output 0 aayega", "Memory clean ho jayegi"],
        correctIndex: 1,
        explanation: "Infinite recursive calls RAM call stack ki memory limit ko exceed kar dengi, jisse Segmentation Fault / Stack Overflow error aayega."
      }
    ],
    relatedQuestionIds: ["q-04-01", "q-07-01"]
  },

  // Chapter 7: Searching - Linear vs Binary Search
  "les-07-02": {
    id: "les-07-02",
    chapterId: "ch-07",
    title: "Searching Algorithms: Linear Search vs Binary Search (O(log N))",
    order: 2,
    whyNeeded: "Agar 1 Crore (10 Million) phone numbers mein se ek number dhoondhna ho, toh Linear search 1 Crore steps lega (Bohot slow!). Lekin Binary Search sirf 24 steps mein answer dhoondh lega! Yeh speed difference programming ki duniya ko chalata hai.",
    learningObjectives: [
      "Linear Search: Unsorted data par ek-ek karke check karna (O(N))",
      "Binary Search: Sorted data ko aadha-aadha divide karke search karna (O(log N))",
      "Mid calculation overflow bug (low + (high - low) / 2) samjhein"
    ],
    prerequisites: ["les-07-01"],
    explanationHinglish: `### Linear Search vs Binary Search (Dictionary Analogy)

Sochiye aapko Dictionary mein shabd **"Mango"** dhoondhna hai:
- **Linear Search**: Aap page 1 se shuru karte hain aur har ek word padhte hain: "A, Aa, Ab...". Agar "Mango" page 500 par hai, toh 500 pages palatne padenge! ($O(N)$ time).
- **Binary Search**: Aap dictionary ko theek **beech mein se kholte hain**. Beech mein nikla letter "M". "Mango" mil gaya! Agar "Zebra" hota toh aap direct right half mein dekhte, left half ko dekhte hi nahi!

---

### Binary Search ki Shart (Pre-condition ⚠️)
Binary search **sirf aur sirf SORTED data par chalta hai**!

### The Binary Search Algorithm:
1. \`low = 0\`, \`high = n - 1\`
2. Jab tak \`low <= high\`:
   - \`mid = low + (high - low) / 2\` (Overflow safe formula!)
   - Agar \`arr[mid] == target\`: **Element mil gaya!** 🎉
   - Agar \`arr[mid] < target\`: Target right side mein hai $\\rightarrow$ \`low = mid + 1\`
   - Agar \`arr[mid] > target\`: Target left side mein hai $\\rightarrow$ \`high = mid - 1\``,

    visualMentalModel: `+-------------------------------------------------------------+
| Binary Search Halving the Search Space                      |
|                                                             |
| Array: [ 2,  5,  8, 12, 16, 23, 38, 56, 72, 91 ]            |
|          ^              ^                   ^               |
|         low            mid                 high             |
|                                                             |
| Target = 23. arr[mid] is 16.                                |
| 16 < 23 ===> Target right mein hai!                         |
| Discard entire left half! low = mid + 1                     |
| In just 1 step, 50% search space eliminated!                |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Binary Search Halving Stepper",
      codeLines: [
        "int arr[] = {2, 5, 8, 12, 16, 23, 38}; int target = 23;",
        "int low = 0, high = 6;",
        "int mid = low + (high - low) / 2; // mid = 3 (val: 12)",
        "low = mid + 1; // 12 < 23, search in right half",
        "mid = low + (high - low) / 2; // mid = 5 (val: 23, FOUND!)"
      ],
      steps: [
        {
          lineIndex: 1,
          explanation: "Step 1: low = 0 (val: 2), high = 6 (val: 38). Target = 23.",
          variables: { low: "0", high: "6", mid: "-" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Step 2: mid = (0 + 6) / 2 = 3. arr[3] is 12.",
          variables: { mid: "3", "arr[mid]": "12" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "Step 3: 12 < 23 (target bada hai). low = mid + 1 = 4. Left half discarded!",
          variables: { low: "4", high: "6" },
          output: ""
        },
        {
          lineIndex: 4,
          explanation: "Step 4: mid = 4 + (6 - 4)/2 = 5. arr[5] is 23 == TARGET! Match found in just 2 steps!",
          variables: { mid: "5", "arr[mid]": "23 (FOUND)" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
#include <vector>
#include <algorithm>
int main() {
    std::vector<int> v = {10, 20, 30, 40, 50};
    bool found = std::binary_search(v.begin(), v.end(), 30);
    std::cout << (found ? "YES" : "NO");
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["YES", "NO", "2", "30"],
        correctIndex: 0,
        explanation: "std::binary_search STL function bool return karta hai: Agar element mil gaya toh true (YES)."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 (low + high) / 2 mein kya bug hai aur low + (high - low) / 2 kyun likhte hain?",
        revealedContent: "Agar low aur high dono bohot bade integers hain (jaise 1.5 * 10^9), toh unka sum (low + high) = 3 * 10^9 ban jayega jo 32-bit int ki limit (2 * 10^9) se bahar nikal kar negative overflow ho jayega! 'low + (high - low) / 2' bina kisi sum overflow ke bilkul safe rehta hai."
      }
    ],

    codeExamples: [
      {
        title: "Standard Iterative Binary Search",
        code: `#include <iostream>
#include <vector>

int binarySearch(const std::vector<int>& arr, int target) {
    int low = 0, high = static_cast<int>(arr.size()) - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1; // Not found
}

int main() {
    std::vector<int> nums = {3, 9, 14, 21, 35, 42, 60};
    int idx = binarySearch(nums, 35);
    std::cout << "35 found at index: " << idx << '\\n';
    return 0;
}`,
        output: "35 found at index: 4",
        explanation: "Returns index 4 in O(log N) logarithmic time."
      }
    ],
    analogy: "Binary Search jaise 'Higher or Lower' number guessing game hai: Har guess ke baad aadhe options eliminate ho jate hain.",
    commonErrors: [
      {
        error: "Running binary search on unsorted array",
        cause: "Array pehle sort nahi kiya.",
        fix: "Pehle std::sort(arr.begin(), arr.end()) karein."
      }
    ],
    keyTakeaways: [
      "Binary search O(log N) time leta hai jo 10^9 elements ko bhi ~30 steps mein dhund leta hai.",
      "Sirf sorted array par kaam karta hai.",
      "Overflow se bachne ke liye low + (high - low)/2 use karein."
    ],
    quiz: [
      {
        question: "1024 elements ke sorted array mein Binary Search worst case mein kitne comparisons karega?",
        options: ["1024", "512", "10", "100"],
        correctIndex: 2,
        explanation: "log2(1024) = 10. Sirf 10 steps mein element dhoondh liya jayega!"
      }
    ],
    relatedQuestionIds: ["q-07-01", "q-14-01"]
  },

  // Chapter 8: Strings in Modern C++ (std::string)
  "les-08-02": {
    id: "les-08-02",
    chapterId: "ch-08",
    title: "Modern C++ std::string: Methods, Capacity & Substrings",
    order: 2,
    whyNeeded: "C language ke char arrays bohot dard dete the (buffer overflow, \\0 null byte crash). Modern C++ ki 'std::string' class dynamic memory manage karti hai aur concatenate (+), substring, find, reverse sab aasan bana deti hai.",
    learningObjectives: [
      "std::string ka memory layout aur dynamic resizing",
      "Essential methods: length(), substr(), find(), push_back(), pop_back()",
      "Passing strings by const reference (&) to avoid expensive copies"
    ],
    prerequisites: ["les-07-01"],
    explanationHinglish: `### std::string: Dynamic Text Magic

C++ mein text handle karne ke liye \`#include <string>\` use hota hai:

\`\`\`cpp
std::string name = "Antigravity";
name += " Engine"; // Concatenation (+ operator direct chalta hai!)
std::cout << name; // "Antigravity Engine"
\`\`\`

---

### Top 6 Essential string Methods for Interviews:
1. **\`s.length()\` / \`s.size()\`**: String mein kitne characters hain ($O(1)$ time).
2. **\`s.substr(start, length)\`**: Chhota tukda kaatna:
   \`"Hello World".substr(0, 5)\` $\\rightarrow$ \`"Hello"\`.
3. **\`s.find("search_text")\`**: Word dhoondhta hai. Agar na mile toh \`std::string::npos\` return karta hai.
4. **\`s.push_back('!')\`**: Aakhiri mein single character jodna ($O(1)$).
5. **\`s.pop_back()\`**: Aakhiri character delete karna ($O(1)$).
6. **\`std::reverse(s.begin(), s.end())\`**: Pura string ulta kar dena ($O(N)$).

---

### Performance Secret: Pass by const reference ⚡
Badi strings ko functions mein pass karte waqt hamesha **\`const std::string &s\`** likhein:
\`\`\`cpp
void process(const std::string &s) // FAST! Zero memory copying!
void process(std::string s)        // SLOW! Pura text RAM mein duplicate copy hota hai!
\`\`\``,

    visualMentalModel: `+-------------------------------------------------------------+
| std::string Dynamic Heap Buffer                             |
|                                                             |
| Stack Object: [ Pointer to Heap | Size: 5 | Capacity: 15 ]  |
|                     |                                       |
|                     v                                       |
| Heap Memory:  [ 'H' | 'e' | 'l' | 'l' | 'o' | '\\0' ]       |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "String Mutation Stepper",
      codeLines: [
        "std::string s = \"Code\";",
        "s += \"r\";",
        "s.pop_back();",
        "s += \"++\";"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: s = \"Code\" allocate hua (Length: 4).",
          variables: { s: "\"Code\"", length: "4" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: 'r' append hua -> \"Coder\" (Length: 5).",
          variables: { s: "\"Coder\"", length: "5" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: pop_back() ne aakhiri 'r' remove kiya -> \"Code\" (Length: 4).",
          variables: { s: "\"Code\"", length: "4" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "Line 4: \"++\" jud gaya -> \"Code++\" (Length: 6).",
          variables: { s: "\"Code++\"", length: "6" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
#include <string>
int main() {
    std::string s = "ABCDE";
    std::cout << s.substr(1, 3);
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["BCD", "BC", "ABC", "CDE"],
        correctIndex: 0,
        explanation: "substr(startIndex, length): Index 1 ('B') se shuru karke 3 characters lega: 'B', 'C', 'D'."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Small String Optimization (SSO) kya hota hai?",
        revealedContent: "Modern C++ mein agar string chhoti ho (typically <= 15 ya 22 characters), toh compiler uske liye Heap memory allocate nahi karta! Woh string object ke andar hi stack par store ho jati hai. Isse heap allocation ka overhead zero ho jata hai!"
      }
    ],

    codeExamples: [
      {
        title: "Reversing Words in a Sentence",
        code: `#include <iostream>
#include <string>
#include <algorithm>

int main() {
    std::string word = "radar";
    std::string rev = word;
    std::reverse(rev.begin(), rev.end());
    
    std::cout << word << " is palindrome? " << std::boolalpha << (word == rev) << '\\n';
    return 0;
}`,
        output: "radar is palindrome? true",
        explanation: "std::reverse inverts string characters in-place."
      }
    ],
    analogy: "std::string jaise ek flexible elastic ribbon hai: jitna chahe lamba kheecho (characters add karo), automatically adjust ho jati hai.",
    commonErrors: [
      {
        error: "Confusing substr parameters with Python slice",
        cause: "C++ mein substr(1, 3) ka matlab index 1 se lekar 3 length hai, na ki index 1 se index 3!",
        fix: "Yaad rakhein: substr(start, length)."
      }
    ],
    keyTakeaways: [
      "std::string automatically memory allocate aur free karti hai.",
      "String indexing 0-based hoti hai: s[0].",
      "Functions mein performance ke liye const std::string& use karein."
    ],
    quiz: [
      {
        question: "std::string s = \"Antigravity\"; s.size() kya return karega?",
        options: ["11", "12", "10", "4"],
        correctIndex: 0,
        explanation: "'Antigravity' mein total 11 characters hain."
      }
    ],
    relatedQuestionIds: ["q-08-01", "q-04-01"]
  },

  // Chapter 10: OOP - Classes, Objects & Access Specifiers
  "les-10-01": {
    id: "les-10-01",
    chapterId: "ch-10",
    title: "Classes, Objects & Access Specifiers (public, private, protected)",
    order: 1,
    whyNeeded: "Real-world software (jaise Banking app, Car racing game) mein hazaron variables hote hain. Agar sab khule aam ghoomenge toh koi bhi balance ko -500 kar dega! OOP data aur functions ko ek secure capsule mein bandhta hai.",
    learningObjectives: [
      "Class (Blueprint) vs Object (Real Instance) ka real-world model",
      "Encapsulation aur Access Specifiers: public vs private vs protected",
      "Getter aur Setter methods se secure data access"
    ],
    prerequisites: ["les-06-01"],
    explanationHinglish: `### Class vs Object (Makaan ka Naksha vs Asli Makaan)

- **Class (The Blueprint / Naksha)**:
  - Ek architectural drawing hai. Naksha khud koi jagah nahi gherata. Yeh sirf batata hai ki makaan mein kitne kamre honge aur darwaze kahan honge.
- **Object (The Real House / Asli Instance)**:
  - Us nakshe se banaya gaya asli ghar! Yeh RAM memory gherata hai. Ek nakshe se aap 100 makaan bana sakte hain!

\`\`\`cpp
class Hero {
public:
    std::string name;
    int health;
    void attack() {
        std::cout << name << " attacks for 50 damage!\\n";
    }
};

int main() {
    Hero ironMan; // Object creation!
    ironMan.name = "Tony Stark";
    ironMan.health = 100;
    ironMan.attack();
}
\`\`\`

---

### Access Specifiers (Suraksha Ke Pehredaar 🛡️):
1. **\`public\` (Khula Bazar)**:
   - Koi bhi bahar se directly access kar sakta hai: \`ironMan.health = 100;\`.
2. **\`private\` (Ghar ki Tijori 🔒)**:
   - Sirf class ke apne functions hi ise touch kar sakte hain! Class ke bahar se direct access mana hai.
   - **Kyun chahiye?** Taaki koi galti se \`bankAccount.balance = -99999;\` na kar sake!
3. **\`protected\` (Parivaar ki Virasat)**:
   - Apne bache (Inherited derived classes) access kar sakte hain, baaki bahar wale nahi.`,

    visualMentalModel: `+-------------------------------------------------------------+
| Capsule (Class)                                             |
|                                                             |
| +---------------------------------------------------------+ |
| | PRIVATE (Hidden Data):                                  | |
| |   int bankBalance = 50000;                              | |
| +---------------------------------------------------------+ |
| | PUBLIC (Controlled Gatekeepers):                        | |
| |   void deposit(int amt)   ---> [Validates amt > 0]      | |
| |   int getBalance()        ---> [Safe read-only access]  | |
| +---------------------------------------------------------+ |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Object Instantiation & Method Call",
      codeLines: [
        "class BankAccount {",
        "private: int balance = 1000;",
        "public: void deposit(int amt) { balance += amt; }",
        "        int getBalance() { return balance; }",
        "};",
        "BankAccount myAcc; myAcc.deposit(500);"
      ],
      steps: [
        {
          lineIndex: 5,
          explanation: "myAcc object RAM mein bana. balance = 1000 initialize hua.",
          variables: { "myAcc.balance (private)": "1000" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "deposit(500) method call hua. balance 1000 + 500 = 1500 hua.",
          variables: { "myAcc.balance (private)": "1500" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
class Counter {
    int count = 0; // Notice: No access specifier!
public:
    void inc() { count++; }
    void print() { std::cout << count; }
};
int main() {
    Counter c;
    c.inc();
    c.print();
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["1", "0", "Compile Error", "Garbage"],
        correctIndex: 0,
        explanation: "Class mein by default members 'private' hote hain. Lekin inc() aur print() public methods hain jo private count ko access kar sakte hain, isliye output 1 aayega."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 'struct' aur 'class' mein C++ mein kya farak hai?",
        revealedContent: "C++ mein struct aur class lagbhag 100% same hain, sirf ek farak hai: struct mein by default sab kuch 'public' hota hai, jabki class mein by default sab kuch 'private' hota hai!"
      }
    ],

    codeExamples: [
      {
        title: "Encapsulation with Getters and Setters",
        code: `#include <iostream>

class Student {
private:
    int marks; // Secure data
public:
    void setMarks(int m) {
        if (m >= 0 && m <= 100) marks = m; // Validation!
        else std::cout << "Invalid marks!\\n";
    }
    int getMarks() const {
        return marks;
    }
};

int main() {
    Student s;
    s.setMarks(95);
    std::cout << "Student Marks: " << s.getMarks() << '\\n';
    return 0;
}`,
        output: "Student Marks: 95",
        explanation: "Private variable is safely accessed through validated methods."
      }
    ],
    analogy: "Class jaise car ka engine aur dashboard hai: Engine ke andar ke pistons private hain (aap unhe haath nahi laga sakte), accelerator pedal public hai (aap car chala sakte hain).",
    commonErrors: [
      {
        error: "Directly accessing private member",
        cause: "main() mein myAcc.balance = 500; likhna jab balance private ho.",
        fix: "Public setter method banayein: myAcc.setBalance(500);"
      }
    ],
    keyTakeaways: [
      "Class blueprint hai, object memory instance hai.",
      "C++ class mein by default sab private hota hai.",
      "Data hiding (encapsulation) security aur bug reduction ke liye core rule hai."
    ],
    quiz: [
      {
        question: "C++ class mein agar koi access specifier na likha ho, toh members by default kya hote hain?",
        options: ["public", "private", "protected", "global"],
        correctIndex: 1,
        explanation: "Classes default to private access, whereas structs default to public."
      }
    ],
    relatedQuestionIds: ["q-01-01", "q-07-01"]
  },

  // Chapter 11: STL vector & dynamic arrays
  "les-11-02": {
    id: "les-11-02",
    chapterId: "ch-11",
    title: "std::vector & std::pair: Dynamic Arrays Masterclass",
    order: 2,
    whyNeeded: "C++ ka normal array fixed size ka hota hai (int arr[10]). Agar 11th element daalna ho toh program crash! 'std::vector' ek aisa array hai jo khud ka size automatically double kar leta hai jab woh bhar jata hai.",
    learningObjectives: [
      "std::vector dynamic array internal doubling capacity mechanism",
      "size() vs capacity() ka gehra farak",
      "std::pair<T1, T2> se coordinate pairs aur graph edges store karna"
    ],
    prerequisites: ["les-07-01"],
    explanationHinglish: `### std::vector: Auto-Resizing Dynamic Array

Vector C++ Standard Library ka sabse popular container hai:
\`\`\`cpp
#include <vector>
std::vector<int> v; // Size 0 se shuru hota hai
v.push_back(10);    // Aakhiri mein 10 daala
v.push_back(20);    // Aakhiri mein 20 daala
\`\`\`

---

### Size vs Capacity (Under the Hood Secret 🔍)
- **\`size()\`**: Abhi vector mein kitne elements sach mein baithe hain.
- **\`capacity()\`**: Vector ke paas kitne elements rakhne ki jagah hai bina nayi RAM mange.

**Doubling Strategy**:
Jab capacity bhar jaati hai aur aap \`push_back()\` karte hain:
1. Vector Heap memory mein **current capacity se 2 Guna (2x)** badi nayi memory dhoondhta hai.
2. Purane elements ko nayi jagah copy karta hai.
3. Purani memory delete kar deta hai!
Is geometric doubling ki wajah se \`push_back()\` ka Amortized Time Complexity **$O(1)$ constant** rehta hai!

---

### std::pair (Do Data Types Ka Joda)
\`\`\`cpp
std::pair<int, std::string> p = {1, "First Rank"};
std::cout << p.first << " -> " << p.second;
\`\`\`
Coordinates \`(x, y)\`, weighted edges \`(node, weight)\` ke liye pair sabse best hai.`,

    visualMentalModel: `+-------------------------------------------------------------+
| Vector Capacity Doubling                                    |
|                                                             |
| Push 1: [ 10 ]               Size = 1, Capacity = 1         |
| Push 2: [ 10 | 20 ]          Size = 2, Capacity = 2 (x2)    |
| Push 3: [ 10 | 20 | 30 | _ ] Size = 3, Capacity = 4 (x2)    |
| Push 4: [ 10 | 20 | 30 | 40] Size = 4, Capacity = 4         |
| Push 5: Doubled to Capacity = 8!                            |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Vector push_back & Size Tracking",
      codeLines: [
        "std::vector<int> v;",
        "v.push_back(10);",
        "v.push_back(20);",
        "v.pop_back();"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Line 1: Empty vector bana (size = 0).",
          variables: { size: "0", elements: "[]" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Line 2: 10 append hua -> [10].",
          variables: { size: "1", elements: "[10]" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: 20 append hua -> [10, 20].",
          variables: { size: "2", elements: "[10, 20]" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "Line 4: pop_back() ne aakhiri element (20) hata diya -> [10].",
          variables: { size: "1", elements: "[10]" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
#include <vector>
int main() {
    std::vector<int> v(3, 5); // 3 elements, all initialized to 5
    v.push_back(10);
    std::cout << v.size() << ' ' << v[0] << ' ' << v[3];
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["4 5 10", "3 5 10", "4 10 5", "Error"],
        correctIndex: 0,
        explanation: "v(3, 5) creates [5, 5, 5]. push_back(10) adds 10 at the end -> [5, 5, 5, 10]. Size is 4, v[0] is 5, v[3] is 10."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 vector::reserve() function kyun use karna chahiye?",
        revealedContent: "Agar aapko pehle se pata hai ki 10 lakh elements aane wale hain, toh 'v.reserve(1000000)' likhein. Isse vector pehle hi ek baar mein 10 lakh ki capacity allocate kar lega aur beech-beech mein bar-bar double karne aur copy karne ka time bach jayega!"
      }
    ],

    codeExamples: [
      {
        title: "Sorting Vector of Pairs",
        code: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<std::pair<int, std::string>> students = {
        {88, "Rahul"},
        {95, "Priya"},
        {72, "Amit"}
    };
    
    std::sort(students.rbegin(), students.rend()); // Sort descending by marks
    for (const auto& s : students) {
        std::cout << s.first << " -> " << s.second << '\\n';
    }
    return 0;
}`,
        output: "95 -> Priya\n88 -> Rahul\n72 -> Amit",
        explanation: "Pairs automatically sort by their first element by default."
      }
    ],
    analogy: "Vector jaise airport ka expand hone wala luggage bag hai: jab saman badhta hai toh zip khol kar bag bada ho jata hai.",
    commonErrors: [
      {
        error: "Accessing out of bounds index with v[i]",
        cause: "v[10] access karna jab size sirf 5 ho.",
        fix: "v.at(i) use karein jo boundary check karke out_of_range exception throw karta hai."
      }
    ],
    keyTakeaways: [
      "vector auto-resizing contiguous memory array hai.",
      "push_back() amortized O(1) time leta hai.",
      "size() elements count batata hai, capacity() total allocated slots batata hai."
    ],
    quiz: [
      {
        question: "std::vector mein aakhiri element ko O(1) time mein remove karne ke liye kaun sa method use hota hai?",
        options: ["v.remove_last()", "v.pop_back()", "v.delete()", "v.erase_end()"],
        correctIndex: 1,
        explanation: "v.pop_back() removes the last element in O(1) constant time without reallocating memory."
      }
    ],
    relatedQuestionIds: ["q-07-01", "q-11-01"]
  },

  // Chapter 12: Big-O Time & Space Complexity
  "les-12-01": {
    id: "les-12-01",
    chapterId: "ch-12",
    title: "Asymptotic Notations: Big-O (Worst), Omega (Best), Theta (Average)",
    order: 1,
    whyNeeded: "Aapka code fast laptop par 1 second mein chal gaya, lekin user ke saste mobile par 10 second le raha hai! Code ki efficiency seconds mein nahi naapi jaati, balki 'Input size N badhne par operations kitne guna badhenge' se naapi jaati hai.",
    learningObjectives: [
      "Seconds vs Number of Operations ka fundamental concept",
      "Big-O (O) - Upper Bound (Worst Case) analysis",
      "Common Complexity Growth Rates: O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N)"
    ],
    prerequisites: ["les-04-01"],
    explanationHinglish: `### Time Complexity Seconds Mein Kyun Nahi Naapte?

Agar hum kahein "Mera code 2 seconds leta hai":
- Supercomputer par: 0.001 second lega!
- Purane phone par: 10 seconds lega!
- Background mein Chrome chal raha hai toh alag time aayega!

Isliye Computer Science mein hum **Steps / Operations Count** naapte hain as a function of **Input Size $N$**.

---

### The Big-3 Asymptotic Notations:
1. **Big-O ($O$) - The Upper Bound (Worst Case ⛈️)**:
   - "Bure se bura kitna time lag sakta hai?"
   - Interviews mein 99% time sirf Big-O pucha jata hai, kyunki hume worst-case safety guarantee chahiye.
2. **Big-Omega ($\\Omega$) - The Lower Bound (Best Case ☀️)**:
   - "Kismat achhi rahi toh kitna fast ho sakta hai?" (Linear search mein target pehle hi index par mil jaye $\\rightarrow \\Omega(1)$).
3. **Big-Theta ($\\Theta$) - The Tight Bound (Average Case ⛅)**:
   - Upper aur Lower bound dono jab exact match karte hain.

---

### Growth Rate Speed Chart (Fastest to Slowest):
$$O(1) < O(\\log N) < O(N) < O(N \\log N) < O(N^2) < O(2^N) < O(N!)$$

- **$O(1)$ (Instant)**: Array index access \`arr[5]\`, Bitwise operations.
- **$O(\\log N)$ (Blazing Fast)**: Binary Search ($10^6$ items in 20 steps!).
- **$O(N)$ (Linear)**: Single loop 1 to $N$.
- **$O(N \\log N)$ (Optimal Sorting)**: Merge Sort, Quick Sort, std::sort.
- **$O(N^2)$ (Quadratic/Slow)**: Nested loops, Bubble sort (TLE for $N > 10^4$).
- **$O(2^N)$ (Disaster)**: Recursive Fibonacci without memoization.`,

    visualMentalModel: `+-------------------------------------------------------------+
| Growth Rates Curve Comparison                               |
|                                                             |
| Operations                                                  |
|     ^                                                       |
|     |                                     / O(N^2) (Slow!)  |
|     |                                   /                   |
|     |                                 /                     |
|     |                              /   O(N) (Linear)        |
|     |                           /                           |
|     |      -------------------   O(log N) (Fast!)           |
|     |      ===================   O(1) (Instant!)            |
|     +----------------------------------------> Input Size N |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Operation Counting for Different Loops",
      codeLines: [
        "// O(1) Constant Time:",
        "int first = arr[0];",
        "// O(N) Linear Time:",
        "for (int i = 0; i < n; ++i) { sum += arr[i]; }",
        "// O(N^2) Quadratic Time:",
        "for (int i = 0; i < n; ++i) for (int j = 0; j < n; ++j) { ... }"
      ],
      steps: [
        {
          lineIndex: 1,
          explanation: "arr[0] direct address calculation karta hai. N = 10 ho ya 10 Crore, exactly 1 step lega: O(1).",
          variables: { "N = 1000": "1 Step", "Time Complexity": "O(1)" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "Single loop N steps chalta hai. Agar N 10 guna badhega, toh steps bhi 10 guna badhenge: O(N).",
          variables: { "N = 1000": "1000 Steps", "Time Complexity": "O(N)" },
          output: ""
        },
        {
          lineIndex: 5,
          explanation: "Nested loops: Har outer loop ke liye inner loop N baar chalta hai. N * N = N^2 steps! O(N^2).",
          variables: { "N = 1000": "1,000,000 Steps", "Time Complexity": "O(N^2)" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `// Code Snippet:
for (int i = 1; i <= n; i *= 2) {
    std::cout << i << " ";
}`,
        question: "Is loop ki Time Complexity kya hogi?",
        options: ["O(log N)", "O(N)", "O(N^2)", "O(1)"],
        correctIndex: 0,
        explanation: "i *= 2 har step par double ho raha hai (1, 2, 4, 8, 16...). Total steps log2(N) honge, isliye time complexity O(log N) hai!"
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 1 Second Time Limit Rule in Competitive Programming:",
        revealedContent: "Online Judge platforms (LeetCode, Codeforces) par 1 second mein lagbhag 10^8 (10 Crore) operations execute ho sakte hain! Agar N = 10^5 hai aur aapne O(N^2) solution likha (10^10 ops), toh pakka 'Time Limit Exceeded (TLE)' aayega!"
      }
    ],

    codeExamples: [
      {
        title: "Constant Time O(1) vs Linear Time O(N)",
        code: `#include <iostream>

// O(N) approach: Loop from 1 to N
long long sumLinear(long long n) {
    long long total = 0;
    for (long long i = 1; i <= n; ++i) total += i;
    return total;
}

// O(1) approach: Gauss Formula n * (n + 1) / 2
long long sumConstant(long long n) {
    return n * (n + 1) / 2;
}

int main() {
    std::cout << "O(1) Sum of 100: " << sumConstant(100) << '\\n';
    return 0;
}`,
        output: "O(1) Sum of 100: 5050",
        explanation: "Mathematical formula achieves in 1 step what a loop achieves in N steps."
      }
    ],
    analogy: "O(1) jaise ghar ki light ka switch dabana hai: chahe ghar kitna bhi bada ho, light turant jalti hai. O(N) jaise har kamre mein chalkar jaakar fan check karna hai.",
    commonErrors: [
      {
        error: "Ignoring constants during asymptotic analysis",
        cause: "O(2N + 5) likhna.",
        fix: "Constants drop ho jate hain: O(2N + 5) becomes simply O(N)."
      }
    ],
    keyTakeaways: [
      "Time complexity operations count batati hai, seconds nahi.",
      "Big-O worst-case upper bound hota hai.",
      "Competitive programming mein 1 second ~= 10^8 operations limit hoti hai."
    ],
    quiz: [
      {
        question: "Agar do independent loops sequence mein chal rahe hain: pehla loop N baar aur dusra loop M baar, toh overall complexity kya hogi?",
        options: ["O(N * M)", "O(N + M)", "O(max(N, M))", "O(N^2)"],
        correctIndex: 1,
        explanation: "Kyunki loops nested nahi hain balki ek ke baad ek hain, isliye complexities add hoti hain: O(N + M)."
      }
    ],
    relatedQuestionIds: ["q-07-01", "q-14-01"]
  }
};

// Merge into master LESSONS_DATA
if (typeof LESSONS_DATA !== 'undefined') {
  Object.assign(LESSONS_DATA, LESSONS_PART3);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS_PART3 };
}
