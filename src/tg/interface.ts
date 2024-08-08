import { telegramChat, TelegramChat } from './chats';
import { telegramMessages, TelegramMessages } from './messages';
import { telegramWebhook, TelegramWebhook } from './webhooks';

/**
 * Telegram bot interface
 * 
 * This interface is a collection of all the Telegram bot features
 */
interface TelegramBot {
    /**
    * manage everything related to sending messages
    */
    messages: TelegramMessages;

    /**
     * manage everything related to webhooks
     */
    webhook: TelegramWebhook;

    /**
     * manage everything related to chats
     */
    chats: TelegramChat;
}

const telegramBot: TelegramBot = {
    messages: telegramMessages,
    webhook: telegramWebhook,
    chats: telegramChat
}

export default telegramBot;