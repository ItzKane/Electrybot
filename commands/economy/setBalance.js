module.exports.run = async (client, message, cont) => {
  const Discord = require("discord.js");
  const eco = require("discord-eco");
  const modRole = message.guild.roles.find("name", "🔍 | Medewerker");
  if (!modRole)
    return console.error("Staff role don't exist!");

  if (!message.member.roles.has(modRole.id))
    return message.reply("You can't use this command.");

  let member = message.mentions.members.first();
  eco.updateBalance(member.id, cont.slice(1)).then((i) => {
    message.channel.send("Balance updated!")
});
}
module.exports.config = {
  command: "setBal"
}
