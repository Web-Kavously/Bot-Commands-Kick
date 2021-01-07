const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Je Suis Prêt A Kick Tout Le Monde 💥!');
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`La Personne à Bien étais Exclus ${user.tag}`);
          })
          .catch(err => {
            message.reply('Impossible de bannir cette personne 😂!');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("Ta Pas Mentionne La Personne Que Tu Veux Kick 😂!");
    }
  }
});
client.login('Token');