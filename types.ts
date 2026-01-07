export interface PlanItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'popular' | 'basic' | 'intensive' | 'standard';
  icon: string; // Icon name reference
}

export interface UserProgress {
  courseId: string;
  courseName: string;
  status: 'available' | 'in-progress' | 'completed';
  progressPercent?: number;
  totalQuestions: number;
  answeredQuestions?: number;
  timeLeft?: string;
  imageUrl: string;
  badges?: { text: string; color: string }[];
  lastScore?: number; // New field for history
}

export interface Question {
  id: number;
  text: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  subject: string;
}

export interface QuizResult {
  date: string;
  score: number; // PAES scale 100-1000
  correctCount: number;
  totalQuestions: number;
  timeSpent: string;
  answers: Record<number, string>; // questionId -> selectedOptionId
}