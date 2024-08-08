# telegram-node-sdk

This is an unofficial telegram interface for node.js. It is a work in progress.

I'm trying to make it as typed as possible so that you can use it just with intellisense without even reading the docs!
 
## How to use it

Just set these two environment variables:

```bash
export BOT_TOKEN=your_bot_token
export BOT_API_URL=telegram api url
```

## Example

Send a message to a chat:

```typescript
telegramBot.sendMessage({
    chat_id: 123456789,
    text: 'Hello world!'
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.error(error);
});
```