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
}
