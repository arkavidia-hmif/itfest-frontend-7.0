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
  [question: string]: {
    [key: string]: {
      text: string;
      choice: string[];
    };
  };
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
