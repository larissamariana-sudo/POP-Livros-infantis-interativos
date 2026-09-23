export type AgeGroup = '3-6' | '7-10';

export type Language = 'pt' | 'es' | 'en' | 'it';

export type ActionType = 
  | 'dragon-fire' 
  | 'river-flow' 
  | 'fruit-fall' 
  | 'chest-open' 
  | 'creature-jump' 
  | 'flower-bloom' 
  | 'star-sparkle' 
  | 'secret-path'
  | 'rocket-launch'
  | 'bell-ring'
  | 'cookie-bite'
  | 'light-glow'
  | 'animal-pet'
  | 'wave-jump'
  | 'ball-kick'
  | 'water-drink'
  | 'pet-hug';

export type SoundType = 'fire' | 'water' | 'plop' | 'magic' | 'creature' | 'fanfare' | 'pop' | 'bell';

export interface InteractiveElement {
  id: string;
  name: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  width: number; // percentage
  height: number; // percentage
  actionType: ActionType;
  label: string; // e.g. "Acordar o Dragão Pipoca"
  hint: string;
  hasTriggered: boolean;
  sound: SoundType;
  icon?: string;
  triggeredIcon?: string;
  eventResult?: {
    narrativeNote: string;
    unlocksChoiceId?: string;
    autoAdvanceSceneId?: string;
  };
}

export interface StoryChoice {
  id: string;
  text: string;
  description?: string;
  icon?: string;
  targetSceneId: string;
  requiresEventId?: string; // Optional: choice is only unlocked if a specific scene element was clicked
  lockHint?: string;
}

export type SceneryType = 
  | 'enchanted-forest' 
  | 'dragon-cave' 
  | 'crystal-caves'
  | 'starlit-river' 
  | 'sky-islands' 
  | 'coral-reef' 
  | 'ancient-ruins'
  | 'desert-ruins'
  | 'space-galaxy'
  | 'candy-land'
  | 'cozy-farm'
  | 'cherry-blossom'
  | 'pyramid-desert'
  | 'snowy-aurora'
  | 'toy-workshop'
  | 'cosmic-train'
  | 'shadow-castle'
  | 'autumn-park'
  | 'dino-island'
  | 'sunny-beach'
  | 'grandparents-house'
  | 'pillow-fort'
  | 'pet-shelter'
  | 'amusement-park'
  | 'zoo-safari'
  | 'sports-field'
  | 'school-classroom'
  | 'lake-fishing'
  | 'magic-academy';

export interface Scene {
  id: string;
  chapterNumber: number;
  title: string;
  text: string;
  sceneryType: SceneryType;
  interactiveElements: InteractiveElement[];
  choices: StoryChoice[];
  discoveryCountMax: number;
  characterDialogue?: {
    speaker: string;
    avatar: string;
    text: string;
  };
}

export interface BookTranslation {
  title: string;
  subtitle: string;
  tagline: string;
  characters?: {
    name?: string;
    role?: string;
  }[];
  scenes?: Record<string, {
    title?: string;
    text?: string;
    dialogue?: string;
    speaker?: string;
    choices?: Record<string, {
      text: string;
      description?: string;
    }>;
    elements?: Record<string, {
      name?: string;
      label?: string;
      hint?: string;
      narrativeNote?: string;
    }>;
  }>;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  coverEmoji: string;
  ageGroup: AgeGroup;
  themeCategory?: 'family' | 'pets' | 'adventure' | 'sports' | 'nature' | 'fantasy' | 'school' | 'mystery';
  themeColor: string; // e.g., "from-amber-400 to-orange-500"
  tagline: string;
  totalChapters: number;
  scenes: Record<string, Scene>;
  initialSceneId: string;
  characters: {
    name: string;
    role: string;
    avatar: string;
  }[];
  translations?: Partial<Record<Language, BookTranslation>>;
}

export interface ReadingHistoryItem {
  sceneId: string;
  choiceMadeId?: string;
  choiceText?: string;
  timestamp: number;
}
