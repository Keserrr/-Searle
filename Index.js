'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
var prefix = '?'


client.login("Njg3NDcyOTIzMTgzMDIyMTA2.XmmTQw.aTvLejTF8Roh39M2DUoUiSUxjJU");

  client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
    }
  });

  client.on('message', message => {
    if (message.content === 'avatar') {
      message.reply(message.author.displayAvatarURL());
    }
  });


//Modération
client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!exclure')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Parce que')
            .then(() => {
              message.reply(`Succès, le membre ${user.tag} a etait exclu ! `);
            })
            .catch(err => {
              message.reply("je n'est pas pu exclure le membre !");
              console.error(err);
            });
        } else {
          message.reply("Ce membre n'est pas sur le serveur!");
        }
      } else {
        message.reply("Merci de mentionner le membre a exclure !");
      }
    }
  });


//arrivant
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });

  client.on('message', message => {
    if (message.content === '!rip') {
      const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
      message.channel.send(attachment);
    }
  });

  client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '!Join') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('**__tu dois rejoindre un canal vocal__**!');
      }
    }
  });

client.on('ready' , function(){
  console.log(`Cannecté a ${client.user.tag}!`);
  client.user.setActivity("❄-Code", {type : "WATCHING"})
});
