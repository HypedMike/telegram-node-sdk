import Message from "./message";

class Update {
    id: number;
    message: Message;

    constructor(id: number, message: Message) {
        this.id = id;
        this.message = message;
    }

    toJSON() {
        return {
            id: this.id,
            message: this.message.toJSON(),
        }
    }

    static fromJSON(json: any) {
        return new Update(json.update_id, Message.fromJSON(json.message));
    }
}

export default Update;