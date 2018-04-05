module.exports.run = async (client, message, arg) => {

  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  const modRole = message.guild.roles.find("name", "[Server staff]");
message.reply(" please send the following to <#429638460857647104> : `**botID**` + `**prefix**`!")
}

module.exports.config = {
  command: "imadeveloper"
}
