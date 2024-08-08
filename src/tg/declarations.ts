import Message from "./models/message";
import { BOT_API_URL, BOT_TOKEN } from "./constants"
import { Type } from "typescript";

const telegram_url = (path: string = "") => {
    return `${BOT_API_URL}${BOT_TOKEN}${path != "" ? "/" + path : ""}`;
}

/**
 * 
 * @param path this corresponds to the path of the API endpoint and to the name of the function most of times
 * @param query this is an array of objects with key and value to be used as query parameters
 * @param method this is the HTTP method to be used, by default is GET
 * @returns a json object with the response from the API. You can find all the possible types inside `models`
 */
async function tg_fetch(path: string, query?: {
    key: string,
    value: string | number
}[], method: string = "GET"): Promise<any> {

    // Build query string
    let queryfy = "";
    if (query) {
        queryfy = "?";
        query.forEach((q, i) => {
            queryfy += `${q.key}=${q.value}`;
            if (i < query.length - 1) {
                queryfy += "&";
            }
        });
    }

    // Fetch data
    const fetched = await fetch(telegram_url(path) + queryfy, {
        method,
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const response = await fetched.json();

    if (!response.ok) {
        throw new Error(response.description);
    }

    return response.result;
}

export {telegram_url, tg_fetch};