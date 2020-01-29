import {Client, Message} from "discord.js";

export class Bot {
    public run(): Promise<string> {
        let client = new Client();
        client.on('ready', () => {
            console.log('Starting bot...')
        });

        client.on('message', (message: Message) => {
            if (message.author !== client.user) {
                if (message.mentions.users.size === 1 && message.mentions.users.some((value) => value === client.user)) {
                    if (message.content.includes("!time")) {
                        message.channel.send('Now it is ' + new Date().toLocaleTimeString());
                    }
                }
            }
        });

        return client.login(process.env['DISCORD_TOKEN']);
    }
}
