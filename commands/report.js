module.exports.run = async (client, message, arg) => {

  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  let reportedUser = message.mentions.members.first();
  if(reportedUser == null)
    return message.channel.send("Usage: " + config.prefix + "report `@User` `Reason`!")
  if(!reportedUser)
    return message.reply("please mention an user!");
  let reportMessage = arg.slice(1).join(" ");
  if(!reportMessage)
    return message.reply("please give up a reason!")
  const embed = new Discord.RichEmbed()
    .setTitle("Report")
    .setColor("#ff0000")
    .addField("Message:", reportMessage, true)
    .addField("User:", "<@" + reportedUser.id + ">", true)
    .setFooter("Report created by: " + message.author.tag, "https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_960_720.png")
    .setTimestamp()
  message.channel.send("Report created!")
  message.guild.channels.get(config.reportChannelID).send({embed});
}

module.exports.config = {
  command: "report"
}
