import {TimeBot} from "./time-bot";
import {RouletteBot} from "./roulette-bot";
import {HelloBot} from "./hello-bot";

const bot = new HelloBot();
// const bot = new TimeBot();
// const bot = new RouletteBot();
bot.run().then(() => {
    console.log('Logged in');
});
