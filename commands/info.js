module.exports.run = async (client, message, cont) => {
  const sconfig = require("./config.json");
  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  let infoText = cont.join(" ");
  const embed = new Discord.RichEmbed()
  .setTitle("<:info:431901827265593344> Info")
  .setColor("#0284ff")
  .setDescription(infoText)
  .setFooter("© 2018 ElectryHost | All Rights Reserved", "https://gamemaster2030.github.io/Electryhost.png")
  .setTimestamp()
message.channel.send("Info message created!")
message.guild.channels.get(sconfig.infoChannelID).send({embed});
}

module.exports.config = {
  command: "info"
}
