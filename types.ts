
export type IntentType = 'Guiadas' | 'Rápidas' | 'Relajación' | 'Educativas' | 'Decisiones';
export type CategoryType = 'Módulo' | 'Bono';

export interface Session {
  id: string;
  title: string;
  intent: IntentType;
  category: CategoryType;
  audioUrl: string;
  duration: string;
  imageUrl: string;
  isCore: boolean;
  intro: {
    why: string;
    notice: string[];
    how: string;
  };
  moduleName: string;
  isPremium: boolean;
  order: number;
}

export interface UserState {
  lastSessionId: string | null;
  progress: Record<string, number>;
  completed: string[];
  isPremium: boolean;
}
