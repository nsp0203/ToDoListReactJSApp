class ResponseHandler {
  constructor(code, message, data) {
    this.code = code;
    this.message = message;
    this.data = data;
  }

  isSuccess() {
    return this.code === 200;
  }
}

export default ResponseHandler;
