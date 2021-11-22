module.exports = {
    name: 'pet',
    run: async (client, message, args, Discord) => {
        const ping = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('Nyaaaaaa')
            .setImage('https://c.tenor.com/6ZP0BDiWRQMAAAAC/%E3%81%97%E3%81%82%E3%82%93%E3%81%A1%E3%82%83%E3%82%93.gif')
            .setDescription(` (◡ ω ◡) ~~ `);
        message.channel.sendEmbed(ping)
    }
}