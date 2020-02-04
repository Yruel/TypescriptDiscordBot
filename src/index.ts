import {Bot} from "./bot";
import {RouletteBot} from "./roulette-bot";

// const bot = new Bot();
const bot = new RouletteBot();
bot.run().then(() => {
    console.log('Logged in');
});
