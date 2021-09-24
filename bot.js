const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const cron = require('node-cron');
const Config = require("./Config.json")
client.login(Config.TOKEN);
cron.schedule(Config.time, () => {
  const message = Config.messages[Math.floor( Math.random()*Config.messages.length)];
  client.guilds.cache.get(Config.server_id).channels.cache.get(Config.channel_id).send(message)
  console.log(`\nServerID : ${Config.server_id}\nchannelID : ${Config.channel_id}\nMessage : ${message}`);
})
client.on('ready', () => {
  const time = new Date()
  console.log(`${time}\nlogin!!(${client.user.tag})`);
});
