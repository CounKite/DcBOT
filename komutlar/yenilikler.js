const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  const pingozel = new Discord.RichEmbed()
    .setTitle("YENİLİKLER")
  .setAuthor("Davet | Yenilikler", bot.user.avatarURL)
  .setColor("RANDOM")
  .setDescription("d-rol-olustur / d-rol-ver / d-havadurumu eklenmistir. d-yardım ! Eklenmesini İstediginiz Komutları d-tavsiye <tavsiyeniz> ile gonderiniz.")
  .setFooter('Davet Ödülleri', bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .addBlankField(true)
      return message.author.sendEmbed(pingozel)
};

module.exports.help = {
  name: "yenilikler"
}