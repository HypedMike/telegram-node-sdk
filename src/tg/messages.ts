import { tg_fetch } from "./declarations";
import Message from "./models/message";

export interface TelegramMessages {
    sendMessage: (message: Message) => Promise<Message>;
    sendPhoto: (message: Message, photo_url: string) => Promise<Message>;
    sendAudio: (message: Message, audio_url: string) => Promise<Message>;
    sendDocument: (message: Message, document_url: string) => Promise<Message>;
    sendVideo: (message: Message, video_url: string) => Promise<Message>;
}

const sendMessage = async (message: Message) => {
    const response = await tg_fetch('sendMessage', [
        { key: 'chat_id', value: message.chat.id },
        { key: 'text', value: message.text },
    ]);

    return Message.fromJSON(response);
}

const sendPhoto = async (message: Message, photo_url: string) => {
    const response = await tg_fetch('sendPhoto', [
        { key: 'chat_id', value: message.chat.id },
        { key: 'photo', value: photo_url },
    ]);

    return Message.fromJSON(response);
}

const sendAudio = async (message: Message, audio_url: string) => {
    const response = await tg_fetch('sendAudio', [
        { key: 'chat_id', value: message.chat.id },
        { key: 'audio', value: audio_url },
    ]);

    return Message.fromJSON(response);
}

const sendDocument = async (message: Message, document_url: string) => {
    const response = await tg_fetch('sendDocument', [
        { key: 'chat_id', value: message.chat.id },
        { key: 'document', value: document_url },
    ]);

    return Message.fromJSON(response);
}

const sendVideo = async (message: Message, video_url: string) => {
    const response = await tg_fetch('sendVideo', [
        { key: 'chat_id', value: message.chat.id },
        { key: 'video', value: video_url },
    ]);

    return Message.fromJSON(response);
}

export const telegramMessages: TelegramMessages = {
    sendMessage,
    sendPhoto,
    sendAudio,
    sendDocument,
    sendVideo,
}

