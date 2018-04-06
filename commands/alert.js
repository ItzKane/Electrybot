module.exports.run = async (client, message, arg, config) => {
  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  let alertTekst = arg.slice(1).join(" ");
  const embed = new Discord.RichEmbed()
  .setTitle("Alert")
  .setColor("#ff0000")
  .setDescription(alertTekst)
  .setFooter("Alert created by: " + message.author, "https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_960_720.png")
  .setTimestamp()
message.channel.send("Alert created!")
message.guild.channels.get(config.alertChannelID).send({embed});
}

module.exports.config = {
  command: "alert"
}
