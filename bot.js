const Discord = require("discord.js");
const client = new Discord.Client();
const cron = require('cron');

client.on('ready', () => {
    console.log('I am ready!');
  });

client.on('message', (message) => {
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
}); // You don't need to add anything to the message event listener

let scheduledMessage = new cron.CronJob('0 19 * * 0', () => {
  // This runs every day at 10:30:00, you can do anything you want
  let channel = yourGuild.channels.get('id');
  channel.send('@Developer denkt an das DailyScrum!');
});

// When you want to start it, use:
scheduledMessage.start()
// You could also make a command to pause and resume the job

client.login(process.env.BOT_TOKEN);