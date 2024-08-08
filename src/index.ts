import telegramBot from "./tg/interface";
import Message from "./tg/models/message";

const chat_id = 1457255865;

/*
telegramBot.messages.sendPhoto(Message.fromText("hello",chat_id), "https://www.pexels.com/it-it/foto/amore-persone-donna-ragazza-27579564/").then((message) => {
    console.log(message);
});
*/

telegramBot.chats.chatPhoto(chat_id).then((r) => {
    console.log(r.photo, r.active_usernames);
});