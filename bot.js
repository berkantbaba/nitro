const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('** :trident: Lonely Kingdom :trident: PROJESI**https://discord.gg/HZgGstd\n**COVER**https://ibb.co/iXrjoo');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{

});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN);"NDQwOTI0MTgyMDg0MDU5MTM3.Dgptkw.8Jblowzi59Ou1Q6UDK42YCMeuyQ"
