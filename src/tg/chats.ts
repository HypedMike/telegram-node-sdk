import { tg_fetch } from "./declarations";
import ChatPhoto from "./models/chat_photo";

export interface TelegramChat {

    /**
     * 
     * @param chatId 
     * @returns the chat profile picture
     */
    chatPhoto: (chatId: number) => Promise<{
        id: number;
        first_name: string;
        username: string;
        type: string;
        active_usernames: string[];
        bio: string;
        photo: ChatPhoto;
        max_reaction_count: number;
        accent_color_id: number;
    }>;

    /**
     * 
     * @param chatId 
     * @returns invite link
     * 
     * rapresenting the chat invite link
     */
    chatInviteLink: (chatId: number) => Promise<string>;
    chatAdministratorRights: (chatId: number) => Promise<string>;
    chatMember: (chatId: number) => Promise<string>;
    chatMemberOwner: (chatId: number) => Promise<string>;
    chatJoinRequest: (chatId: number) => Promise<string>;
    chatPermissions: (chatId: number) => Promise<string>;

    // chat settings

    /**
     * 
     * @param chatId 
     * @param photo 
     * @returns `true` on success
     * 
     * Use this method to set a new profile photo for the chat. 
     * Photos can't be changed for private chats. 
     * The bot must be an administrator in the chat for this to work and 
     * must have the appropriate administrator rights.
     */
    setChatPhoto: (chatId: number, photo: File) => Promise<boolean>;

    /**
     * 
     * @param chatId 
     * @param title 
     * @returns boolean
     * 
     * Use this method to change the title of a chat. 
     * Titles can't be changed for private chats. 
     * The bot must be an administrator in the chat 
     * for this to work and must have the appropriate administrator rights.
     */
    setChatTitle: (chatId: number, title: string) => Promise<boolean>;

    /**
     * Use this method to delete a chat photo. Photos can't be changed for private chats. 
     * The bot must be an administrator in the chat for this to work and 
     * must have the appropriate administrator rights.
     */
    deleteChatPhoto: (chatId: number) => Promise<boolean>;
}

const chatPhoto: (chatId: number) => Promise<{
    id: number;
    first_name: string;
    username: string;
    type: string;
    active_usernames: string[];
    bio: string;
    photo: ChatPhoto;
    max_reaction_count: number;
    accent_color_id: number;
}> = async (chatId: number) => {
    const response = await tg_fetch('getChat', [
        { key: 'chat_id', value: chatId },
    ]);

    return response;
}

const chatInviteLink = async (chatId: number) => {
    const response = await tg_fetch('chatInviteLink', [
        { key: 'chat_id', value: chatId },
    ]);

    return response as string;
}

const chatAdministratorRights = async (chatId: number) => {
    const response = await tg_fetch('chatAdministratorRights', [
        { key: 'chat_id', value: chatId },
    ]);

    return response as string;
}

const chatMember = async (chatId: number) => {
    console.log('Getting chat member:', chatId);
    return 'chatMember';
}

const chatMemberOwner = async (chatId: number) => {
    console.log('Getting chat member owner:', chatId);
    return 'chatMemberOwner';
}

const chatJoinRequest = async (chatId: number) => {
    console.log('Getting chat join request:', chatId);
    return 'chatJoinRequest';
}

const chatPermissions = async (chatId: number) => {
    console.log('Getting chat permissions:', chatId);
    return 'chatPermissions';
}

const setChatPhoto = async (chatId: number, photo: File) => {
    const fd = new FormData();
    fd.append('photo', photo);

    const response = await tg_fetch('setChatPhoto', [
        { key: 'chat_id', value: chatId },
    ], "POST", fd)

    return response as boolean;
}

const setChatTitle = async (chatId: number, title: string) => {
    const response = await tg_fetch('setChatTitle', [
        { key: 'chat_id', value: chatId },
        { key: 'title', value: title },
    ]);

    return response as boolean;
}

const deleteChatPhoto = async (chatId: number) => {
    const response = await tg_fetch('deleteChatPhoto', [
        { key: 'chat_id', value: chatId },
    ]);

    return response as boolean;
}

export const telegramChat: TelegramChat = {
    chatPhoto,
    chatInviteLink,
    chatAdministratorRights,
    chatMember,
    chatMemberOwner,
    chatJoinRequest,
    chatPermissions,
    setChatPhoto,
    setChatTitle,
    deleteChatPhoto
}