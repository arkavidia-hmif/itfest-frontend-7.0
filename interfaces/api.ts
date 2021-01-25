export class ApiError<E> extends Error {
  public code: E;
  public msg: string;

  constructor(code: E, message?: string) {
    super(message || "");
    this.code = code;
    this.msg = message || "";
  }
}

export enum StandardError {
  ERROR,
}

export interface ApiResponse<T> {
  status: number;
  code: string;
  data: T
}