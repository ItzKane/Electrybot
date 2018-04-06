
module.exports.run = async (client, message, arg, config) => {

  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  let infoText = arg.slice(1).join(" ");
  message.guild.members.get(client.user.id).setNickname(alertText);
  const embed = new Discord.RichEmbed()
  .setTitle("Info")
  .setColor("#0284ff")
  .setDescription("Nickname changed to: " + infoText)
  .setFooter("© 2018 Electry Development | All Rights Reserved")
  .setTimestamp()
message.channel.send({embed});
}

module.exports.config = {
  command: "nick"
}
