const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
    message.channel.sendCode("TEST Yardım Komutları", `
Bot test aşamasındadır.

`);
};

module.exports.help = {
  name: "yardım"
}