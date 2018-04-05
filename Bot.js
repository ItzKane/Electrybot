const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const weather = require("weather-js");
const webhooksend = require("quick.hook")
client.commands = new Discord.Collection();

function loadCmds() {
  fs.readdir('./commands/', (err, files) => {
    if(err) console.error(err);

    var jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if (jsfiles.length <= 0) {
      return console.console.log("No commands found...");
    }
    else {
      console.log(jsfiles.length + " commands found!");
    }

    jsfiles.forEach((f, i) => {
      delete require.cache[require.resolve(`./commands/${f}`)];
      const cmds = require(`./commands/${f}`);
      console.log(`Command ${f} loading...`);
      client.commands.set(cmds.config.command, cmds);
    })
  });
}
client.on("ready", () => {
  console.log("I'm  started!");
  client.user.setPresence({ game: { name: config.game, type: 0 } });
  loadCmds();
});

client.on("message", (message) => {
  var cont = message.content.slice(config.prefix.length).split(" ");
  var arg = cont.slice(1);
  if (!message.content.startsWith(config.prefix) || message.author.bot || message.author.id == config.ownerID || message.author.id == config.smikkelbeerID) return;
  var cmd = client.commands.get(cont[0]);
  if (cmd) cmd.run(client, message, arg)

  if (message.content.startsWith(config.prefix + "test")) {
    message.channel.send("I'm working!");
  } else
  if (message.content.startsWith(config.prefix + "setprefix")) {
    let newPrefix = message.content.split(" ").slice(1,2)[0];
    config.prefix = newPrefix;
    message.channel.send("Prefix changed to:" + "'" + newPrefix + "'" + "!");
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }else
if (message.content.startsWith(config.prefix + "help")) {
  const embed = new Discord.RichEmbed()
    .setAuthor("Commands")
    .setColor("#00ff00")
    .setDescription("The prefix for this server is: `" + config.prefix + "`")
    //.addField("The prefix for this server is:" + config.prefix)
    .addField(config.prefix + "weather <location>", "Get the weather of a location!")
    .addField(config.prefix + "report <@user>", "Report an user to staff!")
    .setTimestamp()
    .setFooter("© 2018 Electry Development | All Rights Reserved")

  message.channel.send({embed});

}else
if (message.content.startsWith(config.prefix + "shelp")) {
const embed = new Discord.RichEmbed()
  .setAuthor("Staff Commands")
  .setColor("#00ff00")
  .setDescription("The prefix for this server is: `" + config.prefix + "`")
  .addField(config.prefix + "alert", 'Send a alert in <#428209599003492352>!')
  .addField(config.prefix + "info", 'Send info in <#428509528858951681>!')
  .addField(config.prefix + "ban <@user> <reason>", "Ban an user")
  .addField(config.prefix + "kick <@user> <reason>", "Kick an user")
  .addField(config.prefix + "warn <@user> <reason>", "Warn an user")
  .setTimestamp()
  .setFooter("© 2018 Electry Development | All Rights Reserved")

message.channel.send({embed});

}else
  if(message.content.startsWith(config.prefix + "restart")) {
      const embed = new Discord.RichEmbed()
      .setColor("0x77C2AE")
      .setTitle("Restarting bot...")
      .setFooter("Copyright 2018 Discord Bot Development.")
    webhooksend(message.channel, embed, {
      name: 'Restart',
      icon: 'https://gamemaster2030.github.io/Bolt.png'
    })
    client.user.setStatus('invisible');
    loadCmds();
    function myFunc() {
      client.user.setStatus('online');
      const rEmbed = new Discord.RichEmbed()
      .setColor("0x77C2AE")
      .setTitle("Restarted bot.")
      .setFooter("Copyright 2018 Discord Bot Development.")
    webhooksend(message.channel, rEmbed, {
      name: 'Restart',
      icon: 'https://gamemaster2030.github.io/Bolt.png'
    })
    }
    setTimeout(myFunc, 10000)
    }else
      if(message.content.startsWith(config.prefix + "shutdown")) {
        const rEmbed = new Discord.RichEmbed()
          .setColor("0x77C2AE")
          .setTitle("Shutting down bot.")
          .setFooter("Copyright 2018 Discord Bot Development.")
        webhooksend(message.channel, rEmbed, {
          name: 'Shutdown',
          icon: 'https://gamemaster2030.github.io/shutdown.png'
        })
        client.user.setStatus('invisible');
        client.destroy();
}
});

client.login(config.token);
