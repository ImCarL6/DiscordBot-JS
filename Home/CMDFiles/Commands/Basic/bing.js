module.exports = {
    name: 'bing',
    run: async (client, message, args, Discord) => {
        const ping = new Discord.MessageEmbed()
            .setColor('RED')
            .setTimestamp()
            .setTitle('Chilling! ᨐ ∫')
            .setImage('https://c.tenor.com/-olKpbFHbNEAAAAd/cena.gif');
        message.channel.sendEmbed(ping)
    }
}