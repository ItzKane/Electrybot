module.exports.run = async (client, message, cont) => {
  const Discord = require("discord.js");
  const eco = require("discord-eco");
  eco.fetchBalance(message.author.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts it into 'i'.
    const embed = new Discord.RichEmbed()
      .setTitle("**Balance**")
      .setColor("#e8b51e")
      .addField("Bankholder:", message.author.username, true)
      .addBlankField(true, true)
      .addField("Money:", i.money, true)
      .setFooter("© 2018 ElectryHost | All Rights Reserved")
  message.channel.send(embed);
  });
}

module.exports.config = {
  command: "balance"
}
