import {Client, Message} from "discord.js";

export class HelloBot {
    public run(): Promise<string> {
        let client = new Client();
        client.on('ready', () => {
            console.log('Starting bot...')
        });

        client.on('message', async (message: Message) => {
            if (message.author !== client.user) {
                if (message.content.startsWith("hello bot")) {
                    await message.channel.send("Hello!");
                    await message.author.send("Du hast mich kontaktiert")
                }
            }
        });

        return client.login(process.env['DISCORD_TOKEN']);
    }
}
