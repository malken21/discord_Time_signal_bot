const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const cron = require('node-cron');
const Config = require("./Config.json")
client.login(Config.TOKEN);
cron.schedule(Config.time, () => {
  var random = Math.floor(Math.random()*Config.messages.length);
  client.guilds.cache.get(Config.server_id).channels.cache.get(Config.channel_id).send(Config.messages[random])
  console.log(`\nServerID : ${Config.server_id}\nchannelID : ${Config.channel_id}\nRandom : ${random}\nMessage : ${message}`);
})
client.on('ready', () => {
  console.log(`login!!(${client.user.tag})`);
});
