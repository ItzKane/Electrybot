module.exports.run = async (client, message, cont) => {
  const sconfig = require("./config.json");
  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  let infoText = cont.slice(1).join(" ");
  const embed = new Discord.RichEmbed()
  .setTitle("Info")
  .setColor("#0284ff")
  .setDescription(infoText)
  .setFooter("© 2018 ElectryHost | All Rights Reserved", "https://gamemaster2030.github.io/Electryhost.png")
  .setTimestamp()
message.channel.send("Message created!")
message.guild.channels.get(sconfig.infoChannelID).send({embed});
}

module.exports.config = {
  command: "info"
}
