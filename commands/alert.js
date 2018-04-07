module.exports.run = async (client, message, cont) => {
  const sconfig = require("./config.json");
  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  let alertTekst = cont.join(" ");
  const embed = new Discord.RichEmbed()
  .setTitle("Alert")
  .setColor("#ff0000")
  .setDescription(alertTekst)
  .setFooter("Alert created by: " + message.author.tag, "https://gamemaster2030.github.io/Electryhost.png")
  .setTimestamp()
message.channel.send("Alert created!")
message.guild.channels.get(sconfig.alertChannelID).send({embed});
}

module.exports.config = {
  command: "alert"
}
