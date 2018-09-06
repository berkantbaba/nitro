const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('** :trident: Lonely Kingdom  Suncusuna Dvetlsiniz:trident: **PROJESI** https://discord.gg/zruSq2h\n**COVER**https://gph.is/2vXgvnt /n https://discord.gg/5uUSFS6');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{

});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN);
