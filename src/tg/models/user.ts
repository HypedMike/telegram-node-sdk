class User {
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
    language_code: string;

    constructor(id: number, is_bot: boolean, first_name: string, username: string, language_code: string) {
        this.id = id;
        this.is_bot = is_bot;
        this.first_name = first_name;
        this.username = username;
        this.language_code = language_code;
    }

    toJSON() {
        return {
            id: this.id,
            is_bot: this.is_bot,
            first_name: this.first_name,
            username: this.username,
            language_code: this.language_code,
        }
    }

    static bot() {
        return new User(0, true, "Bot", "", "");
    }

    static fromJSON(json: any) {
        return new User(json.id, json.is_bot, json.first_name, json.username, json.language_code);
    }
}

export default User;