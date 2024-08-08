export interface TelegramWebhook {
    setWebhook: (url: string, drop?: boolean) => Promise<void>;
    getWeebhookInfo: () => Promise<void>;
    getUpdates: () => Promise<void>;
}

const setWebhook = async (url: string, drop?: boolean) => {
    console.log('Setting webhook:', url);
}

const getWeebhookInfo = async () => {
    console.log('Getting webhook info');
}

const getUpdates = async () => {
    console.log('Getting updates');
}

export const telegramWebhook: TelegramWebhook = {
    setWebhook,
    getWeebhookInfo,
    getUpdates,
}