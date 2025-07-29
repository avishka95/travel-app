export default class CustomError<C extends string> extends Error {
  message: string;
  statusCode: number;
  code?: C;

  constructor(message: string, status: number, code?: C) {
    super();
    this.message = message;
    this.statusCode = status;
    this.code = code;
  }
}
