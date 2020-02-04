import {Client, Message} from "discord.js";

export class RouletteBot {
    public run(): Promise<string> {
        let client = new Client();
        client.on('ready', () => {
            console.log('Starting bot...')
        });

        client.on('message', (message: Message) => {
            if (message.author !== client.user) {

                if (message.content.startsWith('$help')) {
                    message.channel.send('Für Roulette: $roulette BID eingeben, wobei BID = \nblack \nred \nnumber');
                }
                if (message.content.startsWith("$roulette")) {
                    const bid = message.content.split(' ')[1];
                    if(bid) {
                        let bid_param = -3;
                        if (bid.toLowerCase() === 'black') {
                            bid_param = -1
                        } else if (bid.toLowerCase() === 'red') {
                            bid_param = -2;
                        } else {
                            bid_param = parseInt(bid);
                            if (bid_param !== 0 && !bid_param) {
                                bid_param = -3;
                            }
                        }

                        if (bid_param === -3) {
                            message.channel.send('Ungültige Eingabe!');
                            return;
                        } else {
                            const result = Math.floor(Math.random() * Math.floor(37));
                            let won: boolean;
                            if (bid_param == -1) {
                                won = result % 2 === 0 && result !== 0
                            } else if (bid_param === -2) {
                                won = result % 2 === 1 && result !== 0
                            } else {
                                won = result === bid_param
                            }

                            if(won) {
                                message.channel.send('Du hast gewonnen!');
                            } else {
                                message.channel.send(`Leider verloren...! Die Zahl war ${result}`);
                            }
                        }
                    } else {
                        message.channel.send('Bitte gib deine Auswahl ein!');
                    }
                }
            }
        });

        return client.login(process.env['DISCORD_TOKEN']);
    }
}
