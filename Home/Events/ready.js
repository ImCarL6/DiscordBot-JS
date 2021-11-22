const Discord = require('discord.js')
const cidao = require("../../bot.js")
const {client} = require('../../bot.js')

module.exports = {
  name: "ready",
  once: true,
  run: async (client) => {
    const chalk = require("chalk");
    const chalkAnimation = require("chalk-animation");
    client.user.setActivity("As gatinhas", {
      type: `WATCHING`,
    });
    const info = require(`${HOME}/Home/Classes/Handler`);
    info.Handler.loadSlashCommands(client); // SLASHCMDS HANDLER, MUST BE IN READY EVENT.
    console.log(
      chalk.bold.cyan("[Nyan]") +
        chalk.bold.magentaBright(`  Positiva e Operante :3`)
    );
    if (client.commands.size > 0)
      console.log(
        chalk.bold.redBright("[Handler]") +
          chalk.bold.greenBright(` encontrou ${client.commands.size} comandos.`)
      );
    if (client.aliases.size > 0)
      console.log(
        chalk.bold.whiteBright("[Handler]") +
          chalk.bold.magentaBright(` encontrou ${client.aliases.size} aliases.`)
      );
    if (client.events.size > 0)
      console.log(
        chalk.bold.greenBright("[Handler]") +
          chalk.bold.cyanBright(` encontrou ${client.events.size} eventos.`)
      );
    if (client.buttonCommands.size > 0)
      console.log(
        chalk.bold.yellow("[Handler]") +
          chalk.bold.blue(` encontrou ${client.buttonCommands.size} botões.`)
      );
    if (client.selectMenus.size > 0)
      console.log(
        chalk.bold.white("[Handler]") +
          chalk.bold.green(` encontrou ${client.selectMenus.size} Menus.`)
      );
    if (info.slashCount.length > 0)
      console.log(
        chalk.bold.red("[Handler]") +
          chalk.bold.yellow(
            ` encontrou ${info.slashCount.length} slashCommands.`
          )
      );      
    

    const nyan = chalkAnimation.rainbow(
      "---------------------------------Nyaaaaan------------------------------------"
    );
  },
};
