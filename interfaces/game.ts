export interface QuizResponse {
  [key: string]: string;
}
export interface QuizData {
  [key: string]: {
    text: string;
    choice: string[];
  };
}
export interface QuizAPIResponseData {
  type: number;
  question: QuizData;
}
export interface CrosswordData {
  crosswordType: "quick";
  dimensions: { cols: number; rows: number };
  entries: {
    id: string;
    number: number;
    humanNumber: string;
    clue: string;
    direction: string;
    length: number;
    position: { x: number; y: number };
    group?: string[];
    separatorLocations?: { [key: string]: string };
  }[];
}

export interface CrosswordAPIResponseData {
  id: number;
  name: string;
  difficulty: number;
  type: number;
  problem: CrosswordData;
}
