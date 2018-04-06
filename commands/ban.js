module.exports.run = async (client, message, arg, config) => {

  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  const modRole = message.guild.roles.find("name", "[Server staff]");
if (!modRole)
return console.log("Staff role don't exist!");

if (!message.member.roles.has(modRole.id))
return message.reply("You can't use this command.");

if (message.mentions.members.size === 0)
return message.reply("Please mention a user to ban");

if (!message.guild.me.hasPermission("BAN_MEMBERS"))
return message.send("You don't have the permission to ban!");

let banMember = message.mentions.members.first();

const embed = new Discord.RichEmbed()
  .setColor("0x77C2AE")
  .setTitle("Banned user")
  .setDescription(banMember + " has been banned from the Discord server!")
  .setFooter("Banned by: " + message.author.tag)
webhooksend(message.channel), embed, {
  name: 'Moderation',
  icon: 'https://i.imgur.com/X9eAmHm.png'
})

const logEmbed = new Discord.RichEmbed()
  .setColor("0x77C2AE")
  .setTitle("Banned user")
  .setDescription(banMember + " has been kicked from the Discord server!")
  .setFooter("Banned by: " + message.author.tag)
webhooksend(message.guild.channels.get(config.modLog), logEmbed, {
  name: "Logs",
  icon: "https://gamemaster2030.github.io/Logs.png"
})

banMember.ban();


    warnMember.send("<:alert:430032794043809792> You've have been banned in **Electry Development** for: " + reason);
}

module.exports.config = {
  command: "ban"
}
