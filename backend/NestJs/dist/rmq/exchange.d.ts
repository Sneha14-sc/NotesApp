declare const Exchange: {
    Topics: {
        TopicName: string;
        Publishers: string[];
        Method: string;
        Subscribers: {
            Service: string;
            OnSuccessTopicsToPush: string[];
            OnFailureTopicsToPush: string[];
            QueueName: string;
        }[];
    }[];
};
export default Exchange;
