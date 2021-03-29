const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('**__∆𝐳𝐚𝐤ï Help __**')
            .setColor('RANDOM')
            .addField('**Administration :lock:**', 'ban , tempban , tempmute', true)
            .addField('**Utility :tools: **', 'clear , info , serveur', true)
            .setFooter('Mon bot perso **By Alex**', '')
)
    },
    name: 'help'
}