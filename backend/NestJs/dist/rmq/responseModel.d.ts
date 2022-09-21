export default class ResponseModel<TDto extends {}> {
    statusCode: number;
    status: 'SUCCESS' | 'FAILED';
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    message: string;
    data: TDto;
    socketID: string;
    requestId: string;
    serviceName: string;
    constructor(statusCode: number, status: 'SUCCESS' | 'FAILED', method: 'GET' | 'POST' | 'PUT' | 'DELETE', message: string, data?: TDto);
}
