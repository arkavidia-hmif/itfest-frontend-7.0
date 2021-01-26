export interface QuizResponse {
  [key: string]: number;
}
export interface QuizData {
  [key: string]: {
    text: string;
    choice: string[];
  };
}
