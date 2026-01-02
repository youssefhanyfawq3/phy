export interface Chapter {
  id: string;
  title: string;
  description: string;
  content: ContentSection[];
  visualization?: 'pendulum' | 'elasticity' | 'atom' | 'waves';
  experimentType?: 'pendulum_lab' | 'spring_lab';
}

export interface ContentSection {
  heading: string;
  body?: string;
  formulas?: string[];
  listItems?: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation?: string;
}

export enum GameState {
  START,
  PLAYING,
  FINISHED
}