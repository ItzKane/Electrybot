module.exports.run = async (client, message, arg, config) => {

  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
      const modRole = message.guild.roles.find("name", "");
  if (!modRole)
    return console.log("Staff role don't exist!");

  if (!message.member.roles.has(modRole.id))
    return message.reply("You can't use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to warn");

  let reason = arg.slice(1).join(" ");

  let warnMember = message.mentions.members.first();

    const logEmbed = new Discord.RichEmbed()
      .setColor("0x77C2AE")
      .setTitle("Warned user")
      .setDescription(warnMember + " has been warned!")
      .addField("Warned by: ", message.author.tag)
      .addField("Reason:", reason)
    webhooksend(message.guild.channels.get(config.modLog), logEmbed, {
      name: "Logs",
      icon: "https://gamemaster2030.github.io/Logs.png"
    })


    warnMember.send("<:alert:430032794043809792> You've have been warned in **ElectryHost** for: " + reason);
}

module.exports.config = {
  command: "warn"
}
