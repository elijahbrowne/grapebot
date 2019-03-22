const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;
const keep_alive = require('./life_support.js')

client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
})

client.login('').catch(error => {
	// never prints this since Client#login doesn't reject
	console.log('Bot offline');
});

//Sets the RICH to watching grape surgery
client.on('ready', () => {
  client.user.setActivity("Grape surgery", {type: "WATCHING"})
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }


if (receivedMessage.content.includes(client.user.toString())) {
        receivedMessage.channel.send("Hi I'm :grapes:bot if you need help, don't. But I am like the FBI, always listening! say one of my keywords (grape(s), they did surgery on a grape, grapespam, or surgery) and just watch out!")
    }
})
client.on('message', msg => {
  if (msg.content === 'grapes') {
    msg.reply("Did you know that someone performed surgery on a grape?")
  }
})
client.on('message', msg => {
  if (msg.content === 'grape') {
    msg.reply("Speaking of grapes, did you know that someone performed surgery on a grape?")
  }
})
client.on('message', msg => {
  if (msg.content === 'surgery') {
    msg.reply("Back when I was a relvant meme, they performed surgery on grape! Can you believe it? One of these things :grapes: has better healthcare than me.")
  }
})
client.on('message', msg => {
  if (msg.content === 'they did surgery on a grape') {
    msg.reply("Yeah!")
  }
})
client.on('message', msg => {
  if (msg.content === 'grape bot') {
    msg.reply("@me next time. :rage: ")
  }
})
client.on('message', msg => {
  if (msg.content === 'grapebot') {
    msg.reply("@me next time. :rage: ")
  }
})
//grape spam meme
client.on('message', msg => {
  if (msg.content === 'grapespam') {
    var spamCounter = 0
    while (spamCounter < 10){
    msg.reply("They did surgery on a grape")
    spamCounter++}
  }
})
//thx to shadman fo these lines
//it sends a message every 15 hours
client.on("ready", () => {
 client.guilds.forEach((guild) => { //for each guild the bot is in
  let defaultChannel = "general";
  guild.channels.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "general") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
    defaultChannel = channel;
        }
      }
    })
    setInterval (function () {
    defaultChannel.send("They did surgery on a :grapes:") //send it to whatever channel the bot has permissions to send on
    }, 54000000);
  })
});
//thx to shadman for theese.
client.on('message', msg => {
  if (msg.content.startsWith("surgery on grape")) {
    let gif = msg.content.substring(msg.content.indexOf(" ") + 1, msg.content.length);
    let api = "http://api.giphy.com/v1/gifs/search?";
    let apiKey = "&api_key=mHqLnp6WpYlFF5rZ903sU4ghnf9QAQyW";
    let query = "&q=";
    let url = api+apiKey+query+gif;
    let data = ""
    let http = require('http');
    http.get(url, (resp) => {
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        let parsed = (JSON.parse(data));
        msg.reply(parsed.data[(Math.floor(Math.random()*parsed.data.length))].url);
        });
      }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  }
});

client.on("ready", () => {
 client.guilds.forEach((guild) => { //for each guild the bot is in
  let defaultChannel = "general";
  guild.channels.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "general") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
    defaultChannel = channel;
        }
      }
    })
    setInterval (function () {
    defaultChannel.send(":grapes:") //send it to whatever channel the bot has permissions to send on
    }, 18000000);
  })
});

/*client.on("ready", () => {
 client.guilds.forEach((guild) => { //for each guild the bot is in
  let defaultChannel = "general";
  guild.channels.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "general") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
    defaultChannel = channel;
        }
      }
    })
    setInterval (function () {
    defaultChannel.send("They did surgery on a :grapes:") //send it to whatever channel the bot has permissions to send on
    }, 54000000);
  })
});*/



client.login(token)