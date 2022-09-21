"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseModel {
    constructor(statusCode, status, method, message, data = null) {
        this.socketID = null;
        this.requestId = null;
        this.statusCode = statusCode;
        this.status = status;
        this.method = method;
        this.message = message;
        this.data = data;
    }
}
exports.default = ResponseModel;
//# sourceMappingURL=responseModel.js.map