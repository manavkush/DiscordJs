const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {
    console.log("Client is ready");
})

client.login(process.env.DJS_TOKEN);