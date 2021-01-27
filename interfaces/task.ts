export interface TaskParam {
    description: string;
  }
  
export interface ChoiceTaskParam extends TaskParam {
    options: string[];
  }
  
export interface FileTaskParam extends TaskParam {
    fileExtension: Array<string>;
    maxFileSize: string;
  }
  
export interface Task {
    id: number;
    name: string;
    category: string;
    widget: string;
    widgetParameters: ChoiceTaskParam | FileTaskParam | TaskParam;
    isUserTask: boolean;
  }
  
export interface TaskResponse {
    taskId: number;
    response: string;
    status: "awaiting_validation" | "completed" | "rejected";
    reason: string;
    lastSubmittedAt: string;
    userId?: number;
    teamMemberId?: number;
  }