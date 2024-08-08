class Chat {
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    toJSON() {
        return {
            id: this.id,
        }
    }

    static fromJSON(json: any) {
        return new Chat(json.id);
    }
}

export default Chat;