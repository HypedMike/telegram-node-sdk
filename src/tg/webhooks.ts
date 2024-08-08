import { tg_fetch } from "./declarations";
import Update from "./models/update";
import { WebhookInfo } from "./models/webhookinfo";

export interface TelegramWebhook {
    /**
     * 
     * @param url 
     * @param drop deletes all the pending updates
     * @returns 
     * 
     * Use this method to specify a URL and receive incoming updates via an outgoing webhook. 
     * Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, 
     * containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.
     * If you'd like to make sure that the webhook was set by you, you can specify secret data 
     * in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.
     */
    setWebhook: (url: string, drop?: boolean) => Promise<Update>;

    /**
     * 
     * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
     */
    getWeebhookInfo: () => Promise<WebhookInfo>;

    /**
     * 
     * Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.
     */
    getUpdates: () => Promise<Update>;
}


const setWebhook = async (url: string, drop?: boolean) => {
    const response = await tg_fetch('setWebhook', [
        {
            key: 'url',
            value: url
        },
        {
            key: 'drop_pending_updates',
            value: drop ? 'true' : 'false'
        }
    ]);

    return Update.fromJSON(response);
}


const getWeebhookInfo = async () => {
    const response = await tg_fetch('getWebhookInfo', []);

    return WebhookInfo.fromJSON(response);
}


const getUpdates = async () => {
    const response = await tg_fetch('getUpdates', []);

    return Update.fromJSON(response);
}

export const telegramWebhook: TelegramWebhook = {
    setWebhook,
    getWeebhookInfo,
    getUpdates,
}