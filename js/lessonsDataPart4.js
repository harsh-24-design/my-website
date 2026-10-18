// CppMastery Lessons Database - Part 4
// Chapters 13 (DSA), 14 (Patterns), 15 (Modern C++ & Smart Pointers), 16 (Capstone & Interviews)

const LESSONS_PART4 = {
  // Chapter 13: Singly Linked List from Scratch
  "les-13-01": {
    id: "les-13-01",
    chapterId: "ch-13",
    title: "Singly Linked List: Insertion, Deletion, Reversal & Cycle Detection",
    order: 1,
    whyNeeded: "Array ko memory mein ek sath lamba khali space (contiguous memory) chahiye hota hai. Agar RAM mein tukdo-tukdo mein memory bachi hai, toh array fail ho jata hai! Linked List alag-alag bikhre hue memory blocks ko pointers se jod kar kaam karti hai.",
    learningObjectives: [
      "Node structure: Data aur 'next' pointer ka anatomy",
      "Head pointer aur nullptr ka termination role",
      "Linked List reversal algorithm in-place (prev, curr, next pointers)",
      "Floyd's Cycle Finding Algorithm (Tortoise and Hare fast-slow pointers)"
    ],
    prerequisites: ["les-09-01", "les-10-01"],
    explanationHinglish: `### Linked List kya hai? (Treasure Hunt Analogy)

Treasure hunt game mein kya hota hai?
Aapko pehla clue milta hai (**Head**). Us par likha hota hai: "Agla clue kitchen mein hai".
Kitchen mein jakar clue padhte hain: "Agla clue bedroom mein hai".
Aakhiri clue par likha hota hai: "Khazana mil gaya! Agla koi clue nahi hai" (**nullptr**)!

Linked list theek wahi hai:
Har **Node** ke paas 2 cheezein hoti hain:
1. **\`data\`**: Asli value (jaise \`int data = 10;\`).
2. **\`next\` pointer**: Agle node ka memory address (\`Node* next;\`).

\`\`\`cpp
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};
\`\`\`

---

### Array vs Linked List Comparison:
| Feature | Array | Linked List |
|---|---|---|
| **Memory** | Contiguous (Ek sath judwa) | Non-contiguous (Heap mein bikhra hua) |
| **Index Access \`arr[i]\`** | **$O(1)$ Instant** | **$O(N)$ Slow** (Head se traverse karna padega) |
| **Beginning Insertion** | $O(N)$ (Sabhi elements shift karne padenge) | **$O(1)$ Instant** (Sirf new node ka next head par point karo) |
| **Memory Waste** | Pre-allocated unused slots | Har node par pointer ka extra overhead |

---

### In-Place List Reversal (Top Interview Question ⭐)
Teen pointers rakh kar list ko ulta karte hain:
\`\`\`cpp
Node* reverseList(Node* head) {
    Node* prev = nullptr;
    Node* curr = head;
    while (curr != nullptr) {
        Node* nextNode = curr->next; // 1. Agle ko yaad rakho
        curr->next = prev;           // 2. Teer (arrow) ko peeche ghuma do
        prev = curr;                 // 3. prev ko aage badhao
        curr = nextNode;             // 4. curr ko aage badhao
    }
    return prev; // Naya head ban gaya!
}
\`\`\``,

    visualMentalModel: `+-------------------------------------------------------------+
| Singly Linked List in Heap Memory                           |
|                                                             |
| [HEAD] ---> [ Data: 10 | Next ] ---> [ Data: 20 | Next ]    |
|                                                     |       |
|                                                     v       |
|                                      [ Data: 30 | nullptr ] |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Linked List In-Place Pointer Reversal",
      codeLines: [
        "Node* nextNode = curr->next;",
        "curr->next = prev;",
        "prev = curr;",
        "curr = nextNode;"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Step 1: nextNode ne aage wale node ka reference save kiya taaki aage ka rasta na bhoolein.",
          variables: { prev: "nullptr", curr: "[Node 10]", nextNode: "[Node 20]" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Step 2: curr->next = prev. Node 10 ka pointer peeche nullptr par ghoom gaya!",
          variables: { "curr->next": "nullptr" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Step 3: prev badhkar Node 10 ban gaya.",
          variables: { prev: "[Node 10]" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "Step 4: curr badhkar Node 20 par chala gaya. Ek link reverse ho gaya!",
          variables: { curr: "[Node 20]" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};
int main() {
    Node* a = new Node(10);
    Node* b = new Node(20);
    a->next = b;
    std::cout << a->next->data;
    delete a; delete b;
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["20", "10", "Address", "Compile Error"],
        correctIndex: 0,
        explanation: "a->next pointer 'b' par point kar raha hai, isliye a->next->data b ki value (20) return karega."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Floyd's Tortoise and Hare Cycle Detection kya hai?",
        revealedContent: "Do pointers banate hain: Slow pointer (1 step chalta hai) aur Fast pointer (2 steps chalta hai). Agar list mein cycle (gol-chakkar) hai, toh circular race track ki tarah Fast pointer ghoom kar peeche se aakar Slow pointer ko pakad lega (fast == slow)! Time: O(N), Space: O(1)!"
      }
    ],

    codeExamples: [
      {
        title: "Complete Singly Linked List Traversal",
        code: `#include <iostream>

struct Node {
    int val;
    Node* next;
    Node(int v) : val(v), next(nullptr) {}
};

void printList(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        std::cout << temp->val << " -> ";
        temp = temp->next;
    }
    std::cout << "nullptr\\n";
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    
    printList(head);
    return 0;
}`,
        output: "1 -> 2 -> 3 -> nullptr",
        explanation: "Linear traversal visits nodes until nullptr is encountered."
      }
    ],
    analogy: "Linked list jaise bacho ki train hai: har bacha agle bache ke kandhe par hath rakhta hai. Koi bhi bacha bich mein se hath chhod kar naye dost ko pakad sakta hai (O(1) insertion!).",
    commonErrors: [
      {
        error: "Dereferencing nullptr during traversal",
        cause: "while (temp->next != nullptr) likhna jab temp khud hi nullptr ho.",
        fix: "Hamesha check karein: while (temp != nullptr)"
      }
    ],
    keyTakeaways: [
      "Nodes heap memory mein bikhri rehti hain aur pointers se judti hain.",
      "Head pehla node hota hai, nullptr list ka aakhiri hota hai.",
      "Reversal O(N) time aur O(1) space mein 3 pointers se hoti hai."
    ],
    quiz: [
      {
        question: "Linked list ke beginning (head) par naya node insert karne ki Time Complexity kya hoti hai?",
        options: ["O(N)", "O(1)", "O(log N)", "O(N^2)"],
        correctIndex: 1,
        explanation: "O(1) constant time! Naye node ka next purane head par point karein aur head ko naya node bana dein. Koi element shift nahi karna padta."
      }
    ],
    relatedQuestionIds: ["q-14-01", "q-07-01"]
  },

  // Chapter 14: Sliding Window Pattern
  "les-14-02": {
    id: "les-14-02",
    chapterId: "ch-14",
    title: "Sliding Window Pattern: Fixed Window & Dynamic Expanding Windows",
    order: 2,
    whyNeeded: "Jab sawaal mein pucha jaye: 'Find the maximum sum subarray of size K' ya 'Longest substring with non-repeating characters', toh do nested loops O(N^2) time lete hain. Sliding Window window ko aage khiska kar wahi kaam blazing-fast O(N) linear time mein kar deta hai.",
    learningObjectives: [
      "Sliding Window ka core concept: Purana element subtract karo, naya element add karo",
      "Fixed Window (size K) vs Dynamic Expanding Window (condition based)",
      "O(N * K) brute force ko O(N) linear time mein badalna"
    ],
    prerequisites: ["les-14-01"],
    explanationHinglish: `### Sliding Window Technique (Train ki Khidki Analogy)

Sochiye aap train ki khidki se bahar dekh rahe hain. Khidki ka size fixed hai (maan lijiye 3 khambey ek sath dikhte hain).
Jab train aage badhti hai:
- Piche wala khamba khidki se bahar nikal jata hai (**Subtract purana element**).
- Aage wala naya khamba khidki ke andar aa jata hai (**Add naya element**).
- Jo beech ke khambey the, unhe dobara count karne ki koi zaroorat nahi padi!

---

### Classic Problem: Max Sum Subarray of Size K = 3
Array: \`[2, 1, 5, 1, 3, 2]\`

#### Brute Force ($O(N \\times K)$):
Har index par jao aur agle 3 elements ko jodkar sum nikalo. Bar-bar wahi elements add hote hain!

#### Sliding Window ($O(N)$):
1. **Pehle K elements ka sum nikalo**: $2 + 1 + 5 = 8$ (Window sum = 8).
2. **Window aage khiskao**:
   - Piche se 2 bahar nikaalo: $8 - 2 = 6$.
   - Aage se 1 andar laao: $6 + 1 = 7$ (Naya sum = 7).
3. **Window aur aage khiskao**:
   - Piche se 1 bahar: $7 - 1 = 6$.
   - Aage se 3 andar: $6 + 3 = 9$ (Max sum update = 9!).
Har step par sirf **1 subtraction aur 1 addition**! Total time: **$O(N)$**!`,

    visualMentalModel: `+-------------------------------------------------------------+
| Sliding Window Movement (K = 3)                             |
|                                                             |
| Step 1: [ 2   1   5 ] 1   3   2   Sum = 8                   |
|           -2        +1                                      |
| Step 2:   2 [ 1   5   1 ] 3   2   Sum = 8 - 2 + 1 = 7       |
|               -1        +3                                  |
| Step 3:   2   1 [ 5   1   3 ] 2   Sum = 7 - 1 + 3 = 9 (MAX!)|
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Fixed Size Sliding Window Stepper",
      codeLines: [
        "int windowSum = arr[0] + arr[1] + arr[2]; // Sum = 8",
        "int maxSum = windowSum;",
        "for (int i = 3; i < 6; ++i) {",
        "    windowSum += arr[i] - arr[i - 3];",
        "    maxSum = std::max(maxSum, windowSum);",
        "}"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Initial window [2, 1, 5]: windowSum = 8, maxSum = 8.",
          variables: { windowSum: "8", maxSum: "8", i: "start" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "i = 3: arr[3] (1) add hua aur arr[0] (2) subtract hua: 8 + 1 - 2 = 7.",
          variables: { windowSum: "7", maxSum: "8", i: "3" },
          output: ""
        },
        {
          lineIndex: 3,
          explanation: "i = 4: arr[4] (3) add hua aur arr[1] (1) subtract hua: 7 + 3 - 1 = 9. maxSum updated to 9!",
          variables: { windowSum: "9", maxSum: "9", i: "4" },
          output: ""
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
#include <vector>
int main() {
    std::vector<int> a = {1, 2, 3, 4};
    int w = a[0] + a[1]; // 3
    w = w - a[0] + a[2]; // 3 - 1 + 3 = 5
    std::cout << w;
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["5", "6", "4", "3"],
        correctIndex: 0,
        explanation: "Old element a[0] (1) subtracted, new element a[2] (3) added: 3 - 1 + 3 = 5."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 Dynamic Sliding Window mein right aur left kab move hote hain?",
        revealedContent: "Right pointer hamesha aage badhta hai aur window ko expand karke naye elements shamil karta hai. Jab window ke andar condition violate ho jaye (jaise duplicate character aa jaye), tab Left pointer aage badhkar window ko shrink (chhota) karta hai jab tak condition dobara valid na ho jaye!"
      }
    ],

    codeExamples: [
      {
        title: "Max Sum Subarray of Size K",
        code: `#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>

int maxSubarraySumK(const std::vector<int>& arr, int k) {
    int n = arr.size();
    if (n < k) return -1;
    
    int windowSum = 0;
    for (int i = 0; i < k; ++i) windowSum += arr[i];
    int maxSum = windowSum;
    
    for (int i = k; i < n; ++i) {
        windowSum += arr[i] - arr[i - k];
        maxSum = std::max(maxSum, windowSum);
    }
    return maxSum;
}

int main() {
    std::vector<int> nums = {2, 1, 5, 1, 3, 2};
    std::cout << "Max Sum (K=3): " << maxSubarraySumK(nums, 3) << '\\n';
    return 0;
}`,
        output: "Max Sum (K=3): 9",
        explanation: "Linear single pass calculates optimal sum."
      }
    ],
    analogy: "Sliding window jaise calculator ki screen hai jisme purana number left se bahar nikalta hai aur naya number right se enter hota hai.",
    commonErrors: [
      {
        error: "Incorrect index offset in subtraction",
        cause: "windowSum += arr[i] - arr[i - k + 1] likh dena.",
        fix: "Exact offset arr[i - k] hota hai."
      }
    ],
    keyTakeaways: [
      "Sliding window contiguous subarrays ya substrings ke liye best hai.",
      "Reduces O(N * K) brute force down to O(N) linear time.",
      "Fixed window size K rehta hai, Dynamic window shrink-expand hoti hai."
    ],
    quiz: [
      {
        question: "Sliding window technique ka main benefit kya hai?",
        options: ["Space complexity O(N) badhana", "Nested loops ko single linear pass O(N) mein convert karna", "Array ko sort karna", "Recursive tree banana"],
        correctIndex: 1,
        explanation: "By avoiding repeated recalculations of overlapping window elements, time complexity is reduced from quadratic to linear."
      }
    ],
    relatedQuestionIds: ["q-14-01", "q-07-01"]
  },

  // Chapter 15: Smart Pointers & RAII in Modern C++
  "les-15-05": {
    id: "les-15-05",
    chapterId: "ch-15",
    title: "Smart Pointers & RAII: unique_ptr, shared_ptr & weak_ptr",
    order: 5,
    whyNeeded: "C++ developers ka sabse bura sapna: 'new' lagakar memory allocate ki, lekin 'delete' karna bhool gaye! Memory leak ho gayi aur server 2 din baad crash ho gaya! Modern C++ ke Smart Pointers automatic garbage collection jaisa comfort dete hain bina kisi speed loss ke.",
    learningObjectives: [
      "RAII (Resource Acquisition Is Initialization) philosophy",
      "std::unique_ptr: Exclusive ownership (Zero overhead)",
      "std::shared_ptr: Shared reference-counted ownership",
      "std::weak_ptr se circular reference leak todna"
    ],
    prerequisites: ["les-09-04", "les-10-02"],
    explanationHinglish: `### RAII aur Smart Pointers: Memory Leaks Ka Anth!

Purane C++ mein:
\`\`\`cpp
int* ptr = new int(50);
// Agar beech mein koi exception aa gayi ya 'delete' bhool gaye -> MEMORY LEAK!
delete ptr;
\`\`\`

---

### Modern C++ Solution: Smart Pointers (\`#include <memory>\`)

Smart pointer ek wrapper object hai jo stack par banta hai. Jaise hi function khatam hota hai aur stack frame destroy hota hai, **Smart pointer ka Destructor automatically 'delete' chala deta hai!**

#### 1. \`std::unique_ptr\` (Exclusive Ownership - Sabse Best ✅)
- Is memory location ka **sirf EK hi malik** ho sakta hai.
- Isko copy nahi kiya ja sakta, sirf \`std::move()\` se transfer kiya ja sakta hai.
- **Overhead**: ZERO! Normal raw pointer jitna hi fast hota hai.
\`\`\`cpp
auto uPtr = std::make_unique<int>(100);
// Function exit hote hi memory automatically free ho jayegi! Zero leak!
\`\`\`

#### 2. \`std::shared_ptr\` (Shared Ownership 🤝)
- Ek hi memory ke multiple malik ho sakte hain.
- Yeh ek **Reference Counter** maintain karta hai: "Abhi kitne log mujhe point kar rahe hain?".
- Jab aakhiri shared_ptr bhi scope se bahar chala jata hai (Count = 0), tab memory delete hoti hai.

#### 3. \`std::weak_ptr\` (Non-Owning Observer 👀)
- Reference count ko nahi badhata.
- Cyclic reference (A points to B, B points to A) mein shared_ptr deadlock se bachne ke liye use hota hai.`,

    visualMentalModel: `+-------------------------------------------------------------+
| Smart Pointers Ownership Model                              |
|                                                             |
| unique_ptr: [ Owner A ] =====(Exclusive)=====> [ Heap Object]|
|                                                             |
| shared_ptr: [ Owner 1 ] ----+                               |
|                             v                               |
| [ Owner 2 ] ------------> [ Control Block | Ref Count: 2 ]  |
|                                    |                        |
|                                    v                        |
|                             [ Heap Object ]                 |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "unique_ptr Scope Lifecycle & Auto-Deallocation",
      codeLines: [
        "{",
        "    auto p = std::make_unique<int>(42);",
        "    std::cout << *p << ' ';",
        "} // Scope ends here! p is automatically destroyed & memory freed!",
        "std::cout << \"Done\";"
      ],
      steps: [
        {
          lineIndex: 1,
          explanation: "Line 2: Heap par 42 allocate hua. unique_ptr 'p' ne ownership sambhali.",
          variables: { p: "Points to Heap 42", status: "Active" },
          output: ""
        },
        {
          lineIndex: 2,
          explanation: "Line 3: *p dereference hokar 42 print hua.",
          variables: { "*p": "42" },
          output: "42 "
        },
        {
          lineIndex: 3,
          explanation: "Line 4: Curly brace '}' hit hua! RAII triggered! p ka destructor chala aur heap memory AUTOMATICALLY DELETE ho gayi!",
          variables: { p: "Destroyed & Memory Freed" },
          output: "42 "
        },
        {
          lineIndex: 4,
          explanation: "Line 5: 'Done' print hua. Memory leak: 0 bytes!",
          variables: { status: "Leak-free" },
          output: "42 Done"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
#include <memory>
int main() {
    std::shared_ptr<int> p1 = std::make_shared<int>(10);
    std::shared_ptr<int> p2 = p1; // Shared!
    std::cout << p1.use_count();
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["2", "1", "10", "Error"],
        correctIndex: 0,
        explanation: "p1 aur p2 dono same object ko point kar rahe hain, isliye reference counter (use_count) 2 ho gaya."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 std::make_unique raw 'new' se better kyun hai?",
        revealedContent: "'std::make_unique' exception-safe hota hai aur code ko clean banata hai. Agar function argument mein do 'new' pass kiye jayein aur pehla pass hokar dusra crash ho jaye, toh memory leak ho sakti hai. make_unique compiler ko single atomic allocation guarantee karta hai!"
      }
    ],

    codeExamples: [
      {
        title: "Clean Ownership Transfer using std::move",
        code: `#include <iostream>
#include <memory>

int main() {
    auto p1 = std::make_unique<std::string>("Antigravity");
    // std::unique_ptr<std::string> p2 = p1; // ERROR: Cannot copy unique_ptr!
    
    // Transfer ownership explicitly using std::move:
    std::unique_ptr<std::string> p2 = std::move(p1);
    
    std::cout << "p1 is null? " << std::boolalpha << (p1 == nullptr) << '\\n';
    std::cout << "p2 value: " << *p2 << '\\n';
    return 0;
}`,
        output: "p1 is null? true\np2 value: Antigravity",
        explanation: "std::move transfers exclusive heap ownership to p2, resetting p1 to nullptr."
      }
    ],
    analogy: "Raw pointer jaise bina leash ka kutta hai jo kho sakta hai (memory leak). unique_ptr jaise hath mein pakdi hui strong leash hai: jahan aap jaoge wahan memory sath rahegi, aur kamre se nikalte hi door band ho jayega.",
    commonErrors: [
      {
        error: "Trying to copy a std::unique_ptr",
        cause: "unique_ptr<int> p2 = p1; likhna.",
        fix: "unique_ptr copyable nahi hota, move karein: p2 = std::move(p1);"
      }
    ],
    keyTakeaways: [
      "Modern C++ mein raw 'new' aur 'delete' lagane ki zaroorat nahi hoti.",
      "unique_ptr default smart pointer hona chahiye (zero cost abstraction).",
      "shared_ptr reference count 0 hone par automatically delete karta hai."
    ],
    quiz: [
      {
        question: "Kaun sa smart pointer zero runtime overhead ke sath exclusive ownership deta hai?",
        options: ["std::shared_ptr", "std::unique_ptr", "std::weak_ptr", "std::auto_ptr"],
        correctIndex: 1,
        explanation: "std::unique_ptr has zero memory or runtime overhead compared to a raw pointer, embodying C++'s zero-cost abstraction principle."
      }
    ],
    relatedQuestionIds: ["q-09-01", "q-01-01"]
  },

  // Chapter 16: Top C++ Interview Questions & Capstone
  "les-16-03": {
    id: "les-16-03",
    chapterId: "ch-16",
    title: "Top 50 Most Frequently Asked C++ Interview Questions Breakdown",
    order: 3,
    whyNeeded: "FAANG, Microsoft, aur High-Frequency Trading (HFT) interviews mein C++ ke specific tricky deep-dive questions puche jate hain: Virtual Destructors, VTable internals, Diamond Problem, aur Move Semantics. Inka structured crisp answer prepare karna success ki guarantee deta hai.",
    learningObjectives: [
      "Top 5 most fatal C++ interview trap questions and crisp answers",
      "Kyun base class destructor hamesha 'virtual' hona chahiye",
      "VTable aur VPtr ka internal runtime mechanism",
      "Copy Constructor vs Move Constructor performance breakdown"
    ],
    prerequisites: ["les-10-01", "les-15-05"],
    explanationHinglish: `### Top 5 Interview Trap Questions (FAANG & HFT Special)

#### Sawaal 1: "Base Class ka Destructor Virtual kyun hona chahiye?"
**Hinglish Answer**:
Agar hum base class pointer se derived class ka object delete karte hain (\`Base* ptr = new Derived(); delete ptr;\`), aur agar Base class ka destructor **\`virtual\` nahi hai**, toh compiler sirf Base class ka destructor chalayega!
Derived class ka destructor **kabhi call hi nahi hoga**, jisse Derived class ke resources aur dynamic memory **LEAK ho jayenge**!
Isliye polymorphic base classes mein destructor hamesha \`virtual ~Base() {}\` banayein!

---

#### Sawaal 2: "Virtual Functions parde ke peeche kaise kaam karte hain?"
**Hinglish Answer**:
Compiler do cheezein banata hai:
1. **\`vtable\` (Virtual Table)**: Har class ke liye ek static function pointer array hota hai jisme virtual functions ke memory addresses hote hain.
2. **\`vptr\` (Virtual Pointer)**: Har object ke andar ek chhota hidden 8-byte pointer hota hai jo us class ki vtable ki taraf point karta hai.
Runtime par \`ptr->vptr->vtable[0]()\` call hota hai, isiliye ise **Dynamic Dispatch** kehte hain.

---

#### Sawaal 3: "Diamond Problem kya hai aur C++ use kaise solve karta hai?"
Jab Class B aur Class C dono Class A se inherit karti hain, aur Class D dono B aur C se inherit karti hai:
Class D ke paas Class A ke do copies aa jaate hain (Ambiguity!).
**Solution**: **\`virtual inheritance\`** use karein: \`class B : virtual public A\`. Isse poori hierarchy mein Class A ki sirf EK hi shared copy banti hai!

---

#### Sawaal 4: "Copy vs Move Semantics (std::move) mein kya farak hai?"
- **Copy**: Pura data RAM mein naye memory address par duplicate copy hota hai ($O(N)$ expensive).
- **Move**: Sirf purane object ke internal heap pointer ko naye object mein daal diya jata hai aur purane ko \`nullptr\` kar diya jata hai ($O(1)$ lightning fast!).`,

    visualMentalModel: `+-------------------------------------------------------------+
| Virtual Table (vtable) Dynamic Dispatch                     |
|                                                             |
| Object in RAM: [ vptr (8 bytes) | member variables ]        |
|                    |                                        |
|                    v                                        |
| Class vtable:  [ &Derived::speak() | &Derived::walk() ]     |
|                      |                                      |
|                      v                                      |
|            Calls Derived Function at Runtime!               |
+-------------------------------------------------------------+`,

    stepByStepVisualizer: {
      title: "Virtual Destructor Cleanup Guarantee",
      codeLines: [
        "Base* b = new Derived();",
        "delete b; // Virtual destructor ensures Derived::~Derived() runs first!",
        "// Memory clean!"
      ],
      steps: [
        {
          lineIndex: 0,
          explanation: "Step 1: Base pointer 'b' ne heap par Derived object ka address hold kiya.",
          variables: { b: "Points to Derived object in Heap" },
          output: ""
        },
        {
          lineIndex: 1,
          explanation: "Step 2: delete b! Kyunki Base destructor 'virtual' tha, vtable lookup se Derived destructor chala aur derived heap memory free hui, phir Base destructor chala. ZERO LEAKS!",
          variables: { status: "Fully Deallocated" },
          output: "Derived Destroyed\nBase Destroyed"
        }
      ]
    },

    predictTheOutput: [
      {
        code: `#include <iostream>
class A {
public:
    virtual void show() { std::cout << "A"; }
};
class B : public A {
public:
    void show() override { std::cout << "B"; }
};
int main() {
    A* obj = new B();
    obj->show();
    delete obj;
    return 0;
}`,
        question: "Output kya aayega?",
        options: ["B", "A", "AB", "Compile Error"],
        correctIndex: 0,
        explanation: "Runtime polymorphism! show() virtual function hai, aur object asal mein 'B' ka hai, isliye Derived class B ka show() execute hoga aur 'B' print hoga."
      }
    ],

    clickToRevealCards: [
      {
        prompt: "💡 'override' keyword lagana zaroori hai ya optional?",
        revealedContent: "Technically optional hai, lekin lagana standard industry best practice hai! Kyunki agar aapne spelling galat kar di (jaise void shwo()), toh bina 'override' ke compiler sochega ki yeh naya function hai. 'override' likhne se compiler verify karta hai ki base class mein exact match hai ya nahi!"
      }
    ],

    codeExamples: [
      {
        title: "Virtual Destructor Implementation",
        code: `#include <iostream>

class Base {
public:
    virtual ~Base() {
        std::cout << "Base Destructor Cleaned\\n";
    }
};

class Derived : public Base {
    int* data;
public:
    Derived() { data = new int[100]; }
    ~Derived() override {
        delete[] data;
        std::cout << "Derived Heap Array Cleaned!\\n";
    }
};

int main() {
    Base* p = new Derived();
    delete p; // Cleanly calls both Derived and Base destructors!
    return 0;
}`,
        output: "Derived Heap Array Cleaned!\nBase Destructor Cleaned",
        explanation: "Virtual destructor prevents silent memory leaks in polymorphic hierarchies."
      }
    ],
    analogy: "vtable jaise hotel ka reception phone directory hai: Room service wala reception se room number dekh kar seedhe sahi mehmaan ke kamre mein pahunchta hai.",
    commonErrors: [
      {
        error: "Non-virtual destructor in base class with virtual methods",
        cause: "Base class mein virtual methods hain lekin destructor non-virtual chhod diya.",
        fix: "Hamesha virtual ~Base() = default; ya virtual ~Base() {} likhein."
      }
    ],
    keyTakeaways: [
      "Polymorphic base classes mein destructor hamesha virtual hona chahiye.",
      "vtable aur vptr runtime polymorphism ko possible banate hain.",
      "std::move rvalue reference banakar expensive memory copy ko instant pointer swap mein badal deta hai."
    ],
    quiz: [
      {
        question: "C++ mein base class destructor virtual na hone par derived class object ko base pointer se delete karne par kya hota hai?",
        options: ["Compile error aati hai", "Derived class ka destructor call nahi hota aur memory leak ho sakti hai", "Program fast chalta hai", "Destructor do bar call hota hai"],
        correctIndex: 1,
        explanation: "Without a virtual destructor, the compiler uses static binding and calls only the Base class destructor, skipping Derived destructor cleanup."
      }
    ],
    relatedQuestionIds: ["q-01-01", "q-14-01"]
  }
};

// Merge into master LESSONS_DATA
if (typeof LESSONS_DATA !== 'undefined') {
  Object.assign(LESSONS_DATA, LESSONS_PART4);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS_PART4 };
}
