export interface LessonMeta {
  id: string;
  title: string;
  readTime: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  badge: string;
  estimatedHours: number;
  description: string;
  lessons: LessonMeta[];
}

export interface CodeExample {
  title: string;
  code: string;
  output: string;
  explanation: string;
}

export interface CommonError {
  error: string;
  cause: string;
  fix: string;
  exampleCode?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonDetail {
  id: string;
  chapterId: string;
  title: string;
  order: number;
  learningObjectives: string[];
  prerequisites: string[];
  explanationHinglish: string;
  syntaxRules?: string;
  codeExamples: CodeExample[];
  analogy?: string;
  commonErrors?: CommonError[];
  keyTakeaways: string[];
  quiz?: QuizQuestion[];
  relatedQuestionIds?: string[];
}

export interface TestCase {
  input: string;
  output: string;
  explanation?: string;
}

export interface DryRunTable {
  headers: string[];
  rows: string[][];
}

export interface Question {
  id: string;
  title: string;
  difficulty: "Beginner" | "Easy" | "Medium" | "Hard" | "Interview";
  topic: string;
  subtopic: string;
  type: "coding" | "output" | "debugging" | "conceptual" | "mcq" | "edge-case";
  statement: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string;
  sampleTestCases: TestCase[];
  hiddenTestCases: TestCase[];
  starterCode: string;
  progressiveHints: string[];
  algorithmSteps: string[];
  solutionCode: string;
  dryRunTable?: DryRunTable;
  timeComplexity: string;
  spaceComplexity: string;
  edgeCases?: string[];
  alternativeSolution?: string;
  relatedQuestionIds?: string[];
}

export interface ExecutionResult {
  success: boolean;
  status: "Accepted" | "Wrong Answer" | "Compilation Error" | "Runtime Error" | "Time Limit Exceeded" | "Error";
  stdout: string;
  stderr: string;
  executionTimeMs?: number;
  memoryKb?: number;
  hinglishError?: {
    title: string;
    explanation: string;
    fix: string;
  } | null;
}
