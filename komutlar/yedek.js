const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor('Anons/Duyuru!')
  .setColor("#DB9721")
  .addField('**Şuanlık Öyle Süslü Püslü Bir Sunucumuz Yok! İleride daha güzelleştireceğiz!** ')
  return message.channel.sendEmbed(embed);
};

module.exports.help = {
  name: "ping"
}