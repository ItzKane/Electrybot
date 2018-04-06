module.exports.run = async (client, message, arg, config) => {

  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  let infoText = arg.slice(1).join(" ");
  const embed = new Discord.RichEmbed()
  .setTitle("Info")
  .setColor("#0284ff")
  .setDescription(infoText)
  .setFooter("© 2018 ElectryHost | All Rights Reserved", "https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_960_720.png")
  .setTimestamp()
message.channel.send("Message created!")
message.guild.channels.get(config.infoChannelID).send({embed});
}

module.exports.config = {
  command: "info"
}
