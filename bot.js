//vars
const Discord = require("discord.js")
var UserPoints = 0;
var BotPoints = 0;
var cmd;
const commandhelp = "Experimento is an experimental bot made by @TheRealGodSpeedy . Here are the commands: ping - Starts a game of ping-pong with the bot. There is a 10% chance that either you or the bot will miss the hit. userpoints - Shows how many points you have."
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})
const { MessageEmbed } = require('discord.js');
const testembed = new Discord.MessageEmbed()
.setColor("#ffff00")

.setTitle('Commands Help.')
.setDescription(commandhelp)
//Core programming
client.on('messageCreate',async(message)=>{
  if(message.content.slice(0,1) === "'"){
    cmd = message.content.slice(1)
    switch(cmd){
      case "ping":
        switch(Math.floor(Math.random() * 21)){
          case 1:
            message.channel.send("Oops! It looks like the ping-pong ball hit the net, I get a point :-)")
            BotPoints += 1;
            break;
          case 2:
            message.channel.send("Oops! It looks like I missed the hit! You gain a point.. :(")
            UserPoints += 1;
            break;
            default:
              message.channel.send("Pong!");
        }
        break;
        case "userpoints":
          message.channel.send("You have " + String(UserPoints) + " points.");
          break;
          case "cmdhelp":
            message.channel.send({ embeds: [testembed] });
            break;
            case "mention":
              message.reply("You have been mentioned.");
              break;
    }
    cmd = "";
  }
})
//Bot ready systems
client.on('ready',async()=>{
  console.log(client.user.tag + ' is Online!')

})

client.login("OTY2Mzk1NjQzMTU1MzMzMjEx.YmBIFA.miaS9MGhJr_SPO-aoSpXrYNnkcg") 

