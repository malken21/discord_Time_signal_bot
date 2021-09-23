const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const cron = require('node-cron');

const Config = require("./Config.json")
client.login(Config.TOKEN);

cron.schedule(Config.time, () => {
  const message_list = Config.messages;
  client.guilds.cache.get(Config.server_name).channels.cache.find(ch => ch.name === Config.channel_name).send(message_list[Math.floor( Math.random()*message_list.length)])
})

client.on('ready', () => {
  const time = new Date()
  console.log(`${time}\nlogin!!(${client.user.tag})`);
});
