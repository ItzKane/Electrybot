module.exports.run = async (client, message, cont) => {
  const sconfig = require("./config.json");
  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  const modRole = message.guild.roles.find("name", "🔍 | Medewerker");
if (!modRole)
return console.log("Staff role don't exist!");

if (!message.member.roles.has(modRole.id))
return message.reply("You can't use this command.");

if (message.mentions.members.size === 0)
return message.reply("Please mention a user to kick");

if (!message.guild.me.hasPermission("KICK_MEMBERS"))
return message.send("You don't have the permission to kick!");

let kickMember = message.mentions.members.first();

const embed = new Discord.RichEmbed()
  .setColor("0x77C2AE")
  .setTitle("Kicked user")
  .setDescription(kickMember + " has been kicked from the Discord server!")
  .setFooter("Kicked by: " + message.author.tag)
webhooksend(message.channel), embed, {
  name: "Moderation",
  icon: "https://i.imgur.com/X9eAmHm.png"
}

const logEmbed = new Discord.RichEmbed()
  .setColor("0x77C2AE")
  .setTitle("Kicked user")
  .setDescription(kickMember + " has been kicked from the Discord server!")
  .setFooter("Kicked by: " + message.author.tag)
webhooksend(message.guild.channels.get(sconfig.modLog), logEmbed, {
  name: "Logs",
  icon: "https://gamemaster2030.github.io/Logs.png"
})
kickMember.kick();


    warnMember.send("<:alert:430032794043809792> You've have been banned in **Electry Development** for: " + reason);
}

module.exports.config = {
  command: "kick"
}
