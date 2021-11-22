var gatinhaCidao = false;
var gatinhaCidaoAux = 0;
var gatinhaCidaoEmoji = "❌";
var gatinhaCidaoTime = "00:00:00";

var gatinhaChaposo = false;
var gatinhaChaposoAux = 0;
var gatinhaChaposoEmoji = "❌";
var gatinhaChaposoTime = "00:00:00";

var gatinhaJean = false;
var gatinhaJeanAux = 0;
var gatinhaJeanEmoji = "❌";
var gatinhaJeanTime = "00:00:00";

var gatinhaSteve = false;
var gatinhaSteveAux = 0;
var gatinhaSteveEmoji = "❌";
var gatinhaSteveTime = "00:00:00";

var gatinhaGuilherme = false;
var gatinhaGuilhermeAux = 0;
var gatinhaGuilhermeEmoji = "❌";
var gatinhaGuilhermeTime = "00:00:00";

var gatinhaSlash = false;
var gatinhaSlashAux = 0;
var gatinhaSlashEmoji = "❌";
var gatinhaSlashTime = "00:00:00";

var idMensagem;
var todasAux = 0;
const hoje = new Date().toLocaleDateString()

const {
  Collection,
  Client,
  Discord,
  MessageEmbed,
  Intents,
} = require("discord.js");
const chalk = require("chalk");
const { DisTube } = require("distube");
const fs = require("fs");
const log = require("./Home/Events/voiceStateUpdate.js");
const SoundCloudPlugin = require("@distube/soundcloud");
const SpotifyPlugin = require("@distube/spotify");
global.HOME = __dirname;
global.config = require(HOME + "/Home/Storage/Vault/Config");
require("dotenv").config();
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
  ],
  partials: ["CHANNEL"],
});
global.HOME = __dirname;
client.config = require(`${HOME}/config.json`);
require("figlet")("DJS", (err, data) => console.log(data));

client.login(process.env.token || client?.config?.token || config?.token);

client.cooldb = require("quick.db");
exports.client = client;

client.commands = new Collection();
client.aliases = new Collection();
client.slashCommands = new Collection();
client.events = new Collection();
client.selectMenus = new Collection();
client.buttonCommands = new Collection();

const distube = new DisTube(client, {
  searchSongs: 10,
  leaveOnEmpty: true,
  emptyCooldown: 0,
  leaveOnFinish: true,
  leaveOnStop: true,
  emitNewSongOnly: true,
});

const { Handler } = require(`${HOME}/Home/Classes/Handler`);
Handler.loadCommands(client); // COMMAND HANDLER
Handler.loadEvents(client); // EVENT HANDLER
Handler.slashCount();
Handler.loadButtons(client); // BUTTON HANDLER
Handler.loadSelectMenus(client); // SELECTMENUS HANDLER
Handler.loadErrorManager(client); // ERRORHANDLER HANDLER

const jean = [
  "https://i.kym-cdn.com/photos/images/original/000/860/671/0a7.gif",
  "https://i.kym-cdn.com/photos/images/original/000/954/450/73f.gif",
  "https://giffiles.alphacoders.com/139/139263.gif",
  "https://64.media.tumblr.com/8b505656f79d6b6051fcfd6afb39feef/tumblr_mlba7nYzhH1rji3a0o1_r1_500.gif",
  "https://64.media.tumblr.com/c9534ccc6ab071c6880448c624bfe266/tumblr_mxnky66xaY1qa94xto1_500.gif",
  "https://64.media.tumblr.com/8f2cf8052517784ec16d08b04c550a82/tumblr_nedx31pIEg1t01xvho1_500.gif",
];

const gifs = [
  "https://i.imgur.com/h5WbhcA.gif",
  "https://i.imgur.com/O5dK6vP.gif",
];

const slash = [
  "https://3.bp.blogspot.com/-X4xM_Hw9O84/WFRbFhR3_cI/AAAAAAAAX6M/lTik0Hy_wAEXhqfwXS406iplla70ZpiagCLcB/s1600/Gifs%2Banimados%2BSlash%2B7.gif",
  "https://1.bp.blogspot.com/-cFLA5bEQdZA/WFRbEaGMN2I/AAAAAAAAX6I/NfmTdavBrkwmgTmIF5mRZ2nlCNZDB4yWACLcB/s1600/Gifs%2Banimados%2BSlash%2B5.gif",
  "https://phoneky.co.uk/thumbs/screensavers/down/fcelebs/slash_1ixbzzrc.gif",
];

const cid = [
  "https://c.tenor.com/kOpbtRgHDRgAAAAC/cyan-loli.gif",
  "https://c.tenor.com/eeR1dUmxtUoAAAAC/show-by-rock-cyan-hijirikawa.gif",
  "https://c.tenor.com/fStXCrRleUoAAAAC/show-by-rock-cyan-hijirikawa.gif",
  "https://i.imgur.com/h5WbhcA.gif",
];

function embedPontoLog(newState, array, index) {
  let embed = new MessageEmbed()
    .setAuthor(
      `${newState.member.displayName}`,
      newState.member.user.avatarURL({
        dynamic: true,
      })
    )
    .setDescription(`${newState.member.user} bateu o ponto hoje`)
    .setColor("#25c059")
    .setImage(array[index])
    .setFooter(`ヾ(〃^∇^)ﾉ`)
    .setTimestamp();

  return embed;
}

function embedPonto() {
  const embed = new MessageEmbed()
    .setColor(0x3498db)
    .setTitle(`Mural dos pontos - ${hoje}`)
    .setDescription("As gatinhas que tomaram chibata nyaaaaaaaaaa ~~.")
    .addFields(
      {
        name: `Cidao`,
        value: `${gatinhaCidaoEmoji} - ${gatinhaCidaoTime}`,
      },
      {
        name: "Guilherme",
        value: `${gatinhaGuilhermeEmoji} - ${gatinhaGuilhermeTime}`,
      },
      {
        name: "Jean",
        value: `${gatinhaJeanEmoji} - ${gatinhaJeanTime}`,
      },
      {
        name: "Slash",
        value: `${gatinhaSlashEmoji} - ${gatinhaSlashTime}`,
      },
      {
        name: "Rafinha",
        value: `${gatinhaChaposoEmoji} - ${gatinhaChaposoTime}`,
      },
      {
        name: "Steve",
        value: `${gatinhaSteveEmoji} - ${gatinhaSteveTime}`,
      }
    )
    .addField("\u200b", "\u200b")
    .setFooter(`(~￣▽￣)~`)
    .setTimestamp();

  return embed;
}

function getTime() {
  let today = new Date();
  let time = today.toLocaleTimeString();

  return time;
}

client.on("ready", () => {

  let canal = client.channels.cache
    .find((channel) => channel.name === "ponto")
    .send({ embeds: [embedPonto()] })
    .then((msg) => {
      idMensagem = msg.id;
    });

  //client.channels.cache.get('912366143174500363').messages.fetch('911656957591580692').then(msg => { msg.edit('a')});
});

client.on("voiceStateUpdate", (oldState, newState) => {
  console.log(idMensagem)
  let newVoice = newState.channelId;
  let oldVoice = oldState.channelId;

  const canalPontoLog = newState.guild.channels.cache.find(
    (channel) => channel.name === "ponto-log"
  );

  const canalLog = newState.guild.channels.cache.find(
    (channel) => channel.name === "log"
  );

  const canalPonto = newState.guild.channels.cache.find(
    (channel) => channel.name === "ponto"
  );

  const canalGatinhas = newState.guild.channels.cache.find(
    (channel) => channel.name === "chat-das-gatinhas"
  );

  if (oldVoice != newVoice) {
    if (oldVoice == null) {
      console.log("Usuário conectado!");

      let embedJoin = new MessageEmbed()
        .setAuthor(
          `${newState.member.displayName}`,
          newState.member.user.avatarURL({
            dynamic: true,
          })
        )
        .setDescription(
          `${newState.member.user} entrou no canal <#${newState.channel.id}>`
        )
        .setColor("#ff8000")
        .setFooter(`(≈ȏ ﻌ ȏ≈)∫`)
        .setTimestamp();

      canalLog.sendEmbed(embedJoin);

      switch (newState.member.id) {
        case "903869852031287356":
          if (gatinhaCidaoAux === 0) {
            gatinhaCidaoAux++;
            gatinhaCidao = true;
            gatinhaCidaoEmoji = "✅";

            gatinhaCidaoTime = getTime();

            client.channels.cache
              .get("912366143174500363")
              .messages.fetch(idMensagem)
              .then((msg) => {
                msg.edit({ embeds: [embedPonto()] });
              });

            canalPontoLog.sendEmbed(
              embedPontoLog(
                newState,
                cid,
                Math.floor(Math.random() * cid.length)
              )
            );
          }
          break;

        case "328673634971287554":
          if (gatinhaChaposoAux === 0) {
            gatinhaChaposoEmoji = "✅";

            gatinhaChaposoTime = getTime();

            client.channels.cache
              .get("912366143174500363")
              .messages.fetch(idMensagem)
              .then((msg) => {
                msg.edit({ embeds: [embedPonto()] });
              });

            canalPontoLog.sendEmbed(
              embedPontoLog(
                newState,
                cid,
                Math.floor(Math.random() * cid.length)
              )
            );
          }

          gatinhaChaposoAux++;
          gatinhaChaposo = true;
          break;

        case "431189456180215808":
          if (gatinhaJeanAux === 0) {
            gatinhaJeanEmoji = "✅";

            gatinhaJeanTime = getTime();

            client.channels.cache
              .get("912366143174500363")
              .messages.fetch(idMensagem)
              .then((msg) => {
                msg.edit({ embeds: [embedPonto()] });
              });

            canalPontoLog.sendEmbed(
              embedPontoLog(
                newState,
                jean,
                Math.floor(Math.random() * jean.length)
              )
            );
          }

          gatinhaJeanAux++;
          gatinhaJean = true;
          break;

        case "368602779842904077":
          if (gatinhaSteveAux === 0) {
            gatinhaSteveEmoji = "✅";

            gatinhaSteveTime = getTime();

            client.channels.cache
              .get("912366143174500363")
              .messages.fetch(idMensagem)
              .then((msg) => {
                msg.edit({ embeds: [embedPonto()] });
              });
            canalPontoLog.sendEmbed(embedPontoLog(newState, gifs, 1));
          }

          gatinhaSteveAux++;
          gatinhaSteve = true;
          break;

        case "259537215539904512":
          if (gatinhaGuilhermeAux === 0) {
            gatinhaGuilhermeEmoji = "✅";

            gatinhaGuilhermeTime = getTime();

            client.channels.cache
              .get("912366143174500363")
              .messages.fetch(idMensagem)
              .then((msg) => {
                msg.edit({ embeds: [embedPonto()] });
              });

            canalPontoLog.sendEmbed(embedPontoLog(newState, gifs, 0));
          }

          gatinhaGuilhermeAux++;
          gatinhaGuilherme = true;
          break;

        case "448514695238778930":
          if (gatinhaSlashAux === 0) {
            gatinhaSlashEmoji = "✅";

            gatinhaSlashTime = getTime();

            client.channels.cache
              .get("912366143174500363")
              .messages.fetch(idMensagem)
              .then((msg) => {
                msg.edit({ embeds: [embedPonto()] });
              });

            canalPontoLog.sendEmbed(
              embedPontoLog(
                newState,
                slash,
                Math.floor(Math.random() * slash.length)
              )
            );
          }

          gatinhaSlashAux++;
          gatinhaSlash = true;
          break;
      }
      if (todasAux === 0) {
        if (
          gatinhaCidao &&
          gatinhaChaposo &&
          gatinhaJean &&
          gatinhaSteve &&
          gatinhaGuilherme &&
          gatinhaSlash === true
        ) {
          todasAux++
          const embedGatinhas = new MessageEmbed()
            .setTitle("TODAS!!")
            .setDescription(
              "Todas as gatinhas bateram ponto hoje !!! Nyaaaaaaaaaaaa (●´ω｀●) ."
            )
            .setColor("#fc03f0")
            .setImage("https://i.imgur.com/vgCdjaX.gif")
            .setFooter("≧◡≦")
            .setTimestamp();

          canalPonto.sendEmbed(embedGatinhas);

          const shyEmbed = new MessageEmbed()
            .setTitle("Hm...")
            .setDescription(
              "Vocês vêm sempre aqui?... nya ~~"
            )
            .setColor("##ff00e6")
            .setImage("https://c.tenor.com/7m11C6gauXoAAAAC/show-by-rock-cyan-hijirikawa.gif")
            .setFooter("(〃▽〃)")
            .setTimestamp();

          canalGatinhas.sendEmbed(shyEmbed);   
              
          console.log("Todas as gatinhas bateram ponto yeeey :)");
          return;
        }
      }
    } else if (newVoice == null) {
      console.log("Usuário Saiu!");

      const embedLeft = new MessageEmbed()
        .setAuthor(
          `${newState.member.displayName}`,
          newState.member.user.avatarURL({
            dynamic: true,
          })
        )
        .setDescription(
          `${oldState.member.user} saiu do canal <#${oldState.channel.id}>`
        )
        .setColor("#ff0000")
        .setFooter(`〴⋋_⋌〵`)
        .setTimestamp();

      canalLog.sendEmbed(embedLeft);
    } else {
      console.log("Usuário trocou de canal!");

      const embedSwitch = new MessageEmbed()
        .setAuthor(
          `${newState.member.displayName}`,
          newState.member.user.avatarURL({
            dynamic: true,
          })
        )
        .setDescription(
          `${oldState.member.user} mudou de <#${oldState.channel.id}> para <#${newState.channel.id}>`
        )
        .setColor("#00f7ff")
        .setFooter(`(◠‿◠✿)`)
        .setTimestamp();

      canalLog.sendEmbed(embedSwitch);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift();

  if (command === "play") distube.play(message, args.join(" "));

  if (command == "volume") distube.setVolume(message, Number(args[0]));

  if (["repeat", "loop"].includes(command)) {
    const mode = distube.setRepeatMode(message);
    message.channel.send(
      `Set repeat mode to \`${
        mode ? (mode === 2 ? "All Queue" : "This Song") : "Off"
      }\``
    );
  }

  if (command === "stop") {
    distube.stop(message);
    message.channel.send("Parei a música! ~~");
  }

  if (command === "resume") distube.resume(message);

  if (command === "pause") distube.pause(message);

  if (command === "skip") distube.skip(message);

  if (command === "lista") {
    const queue = distube.getQueue(message);
    if (!queue) {
      message.channel.send("Nenhuma música tocando! :c");
    } else {
      message.channel.send(
        `Lista:\n${queue.songs
          .map(
            (song, id) =>
              `**${id ? id : "Tocando"}**. ${song.name} - \`${
                song.formattedDuration
              }\``
          )
          .slice(0, 10)
          .join("\n")}`
      );
    }
  }

  if (
    [`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(
      command
    )
  ) {
    const filter = distube.setFilter(message, command);
    message.channel.send(
      `Filtro da lista atual: ${filter.join(", ") || "Off"}`
    );
  }
});

const status = (queue) =>
  `Volume: \`${queue.volume}%\` | Filter: \`${
    queue.filters.join(", ") || "Off"
  }\` | Loop: \`${
    queue.repeatMode
      ? queue.repeatMode === 2
        ? "All Queue"
        : "This Song"
      : "Off"
  }\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

distube
  .on("playSong", (queue, song) =>
    queue.textChannel.send(
      `Tocando \`${song.name}\` - \`${
        song.formattedDuration
      }\`\nSolicitada por: ${song.user}\n${status(queue)}`
    )
  )
  .on("addSong", (queue, song) =>
    queue.textChannel.send(
      `Adicionada ${song.name} - \`${song.formattedDuration}\` à lista por ${song.user}`
    )
  )
  .on("addList", (queue, playlist) =>
    queue.textChannel.send(
      `Adicionada \`${playlist.name}\` playlist (${
        playlist.songs.length
      } músicas) à fila\n${status(queue)}`
    )
  )
  // DisTubeOptions.searchSongs = true
  .on("searchResult", (message, result) => {
    let i = 0;
    message.channel.send(
      `**Escolha uma opção abaixo! :3 **\n${result
        .map(
          (song) => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``
        )
        .join(
          "\n"
        )}\n*Insira qualquer coisa ou espere 30 segundos para cancelar*`
    );
  })
  // DisTubeOptions.searchSongs = true
  .on("searchCancel", (message) => message.channel.send(`Busca cancelada. :c`))
  .on("searchInvalidAnswer", (message) =>
    message.channel.send(`searchInvalidAnswer`)
  )
  .on("searchNoResult", (message) =>
    message.channel.send(`Nenhum resultado foi encontrado.`)
  )
  .on("error", (textChannel, e) => {
    console.error(e);
    textChannel.send(`Um erro ocorreu: ${e.slice(0, 2000)}`);
  })
  .on("finish", (queue) => {})
  .on("finishSong", (queue) => {})
  .on("disconnect", (queue) => queue.textChannel.send("Fui!"))
  .on("empty", (queue) => queue.textChannel.send("Esvaziei!"))
  .on("searchDone", () => {});

console.log(idMensagem);
