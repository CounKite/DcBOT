const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
message.delete();
  console.log("t!istatistik komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")

   const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Davet | Davet Ödülleri', bot.user.avatarURL)
  .addField("» Botun Sahibi", "<@229250733915111424>")
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField("» Çalışma süresi", duration)
  .addField("» Kullanıcılar", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» Sunucular", bot.guilds.size.toLocaleString(), true)
  .addField("» Kanallar", bot.channels.size.toLocaleString(), true)
  .addField("» Discord.JS sürüm", "v"+Discord.version, true)
  .addField("» Ping", bot.ping+" ms", true)
  .addField("» Linkler", `[Bot Davet Linki](Çalıntı nedeniyle kaldırılmıştır.)` + "** | **" + `[Destek Sunucusu](https://discord.gg/Q4rQBj)`, false);
  return message.channel.send(istatistikler);
  };

module.exports.help = {
  name: "istatistik"
}