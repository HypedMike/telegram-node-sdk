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
    chatInviteLink: (chatId: number) => Promise<string>;
    chatAdministratorRights: (chatId: number) => Promise<string>;
    chatMember: (chatId: number) => Promise<string>;
    chatMemberOwner: (chatId: number) => Promise<string>;
    chatJoinRequest: (chatId: number) => Promise<string>;
    chatPermissions: (chatId: number) => Promise<string>;
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
    console.log('Getting chat invite link:', chatId);
    return 'chatInviteLink';
}

const chatAdministratorRights = async (chatId: number) => {
    console.log('Getting chat administrator rights:', chatId);
    return 'chatAdministratorRights';
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

export const telegramChat: TelegramChat = {
    chatPhoto,
    chatInviteLink,
    chatAdministratorRights,
    chatMember,
    chatMemberOwner,
    chatJoinRequest,
    chatPermissions,
}