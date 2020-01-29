import {Bot} from "./bot";

const bot = new Bot();
bot.run().then(() => {
    console.log('Logged in');
});
