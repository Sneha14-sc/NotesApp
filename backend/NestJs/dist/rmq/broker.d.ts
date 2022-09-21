import ResponseModel from './responseModel';
export declare class Broker {
    private static instance;
    private queueURLMap;
    private channel;
    private rabbitmqURL;
    private topicNames;
    private constructor();
    static getInstance(): Broker;
    init_broker(): Promise<void>;
    PublicMessageToTopic(topicName: string, message: any): ResponseModel<{}>;
    listenToService(topicName: any, serviceName: any, callBack: any): Promise<void>;
    listenToServices(serviceName: any, callback: any): void;
}
