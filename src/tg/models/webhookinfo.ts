/*
url	String	Webhook URL, may be empty if webhook is not set up
has_custom_certificate	Boolean	True, if a custom certificate was provided for webhook certificate checks
pending_update_count	Integer	Number of updates awaiting delivery
ip_address	String	Optional. Currently used webhook IP address
last_error_date	Integer	Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
last_error_message	String	Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
last_synchronization_error_date	Integer	Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters
max_connections	Integer	Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
allowed_updates	Array of String	Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member
*/

export class WebhookInfo {
    /**
     * Webhook URL, may be empty if webhook is not set up
     */
    url: string;

    /**
     * True, if a custom certificate was provided for webhook certificate checks
     */
    has_custom_certificate: boolean;

    /**
     * Number of updates awaiting delivery
     */
    pending_update_count: number;

    /**
     * Optional. Currently used webhook IP address
     */
    ip_address?: string;

    /**
     * Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
     */
    last_error_date?: number;

    /**
     * Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
     */
    last_error_message?: string;

    /**
     * Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters
     */
    last_synchronization_error_date?: number;

    /**
     * Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
     */
    max_connections?: number;

    /**
     * Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member
     */
    allowed_updates?: string[];

    constructor({
        url,
        has_custom_certificate,
        pending_update_count,
        ip_address,
        last_error_date,
        last_error_message,
        last_synchronization_error_date,
        max_connections,
        allowed_updates
    }: {
        url: string,
        has_custom_certificate: boolean,
        pending_update_count: number,
        ip_address?: string,
        last_error_date?: number,
        last_error_message?: string,
        last_synchronization_error_date?: number,
        max_connections?: number,
        allowed_updates?: string[]
    }) {
        this.url = url;
        this.has_custom_certificate = has_custom_certificate;
        this.pending_update_count = pending_update_count;
        this.ip_address = ip_address;
        this.last_error_date = last_error_date;
        this.last_error_message = last_error_message;
        this.last_synchronization_error_date = last_synchronization_error_date;
        this.max_connections = max_connections;
        this.allowed_updates = allowed_updates;
    }

    static fromJSON(data: any): WebhookInfo {
        return new WebhookInfo({
            url: data.url,
            has_custom_certificate: data.has_custom_certificate,
            pending_update_count: data.pending_update_count,
            ip_address: data.ip_address,
            last_error_date: data.last_error_date,
            last_error_message: data.last_error_message,
            last_synchronization_error_date: data.last_synchronization_error_date,
            max_connections: data.max_connections,
            allowed_updates: data.allowed_updates
        });
    }

    toJSON() {
        return {
            url: this.url,
            has_custom_certificate: this.has_custom_certificate,
            pending_update_count: this.pending_update_count,
            ip_address: this.ip_address,
            last_error_date: this.last_error_date,
            last_error_message: this.last_error_message,
            last_synchronization_error_date: this.last_synchronization_error_date,
            max_connections: this.max_connections,
            allowed_updates: this.allowed_updates
        }
    }
}