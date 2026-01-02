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

// Add global JSX namespace augmentation for Three.js elements to fix missing type errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      cylinderGeometry: any;
      sphereGeometry: any;
      planeGeometry: any;
      shadowMaterial: any;
      ambientLight: any;
      pointLight: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      gridHelper: any;
      primitive: any;
    }
  }
}