class ChatPhoto {
    private smallFileId: string;
    private smallFileUniqueId: string;
    private bigFileId: string;
    private bigFileUniqueId: string;

    constructor(smallFileId: string, smallFileUniqueId: string, bigFileId: string, bigFileUniqueId: string) {
        this.smallFileId = smallFileId;
        this.smallFileUniqueId = smallFileUniqueId;
        this.bigFileId = bigFileId;
        this.bigFileUniqueId = bigFileUniqueId;
    }

    public toJSON(): any {
        return {
            small_file_id: this.smallFileId,
            small_file_unique_id: this.smallFileUniqueId,
            big_file_id: this.bigFileId,
            big_file_unique_id: this.bigFileUniqueId
        };
    }

    public static fromJSON(json: any): ChatPhoto {
        return new ChatPhoto(
            json.small_file_id,
            json.small_file_unique_id,
            json.big_file_id,
            json.big_file_unique_id
        );
    }

    public static fromArrayJSON(json: any): ChatPhoto[] {
        return json.map((cp: any) => ChatPhoto.fromJSON(cp));
    }
}

export default ChatPhoto;