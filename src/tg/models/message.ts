import Chat from "./chat";
import ChatPhoto from "./chat_photo";
import User from "./user";

class Message {
    id: number;
    from: User;
    chat: Chat;
    date: number;
    text: string;
    photo?: ChatPhoto[];

    constructor(id: number = 0, from: User, chat: Chat, date: number, text: string, photo?: ChatPhoto[]) {
        this.id = id;
        this.from = from;
        this.chat = chat;
        this.date = date;
        this.text = text;
        this.photo = photo;
    }

    static fromText(text: string, chat_id: number) {
        return new Message(0, User.bot(), new Chat(chat_id), Date.now(), text); 
    }

    toJSON() {
        return {
            id: this.id,
            from: this.from.toJSON(),
            chat: this.chat.toJSON(),
            date: this.date,
            text: this.text,
            photo: this.photo ? this.photo.map(p => p.toJSON()) : undefined
        }
    }

    static fromJSON(json: any) {
        return new Message(json.message_id, User.fromJSON(json.from), Chat.fromJSON(json.chat), json.date, json.text, json.photo ? ChatPhoto.fromArrayJSON(json.photo) : undefined);
    }

    static fromArrayJSON(json: any) {
        return json.map((m: any) => Message.fromJSON(m));
    }
}

export default Message;