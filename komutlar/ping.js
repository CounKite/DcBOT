const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor('Nasıl Kazanılır?')
  .setColor("#DB9721")
  .setTitle(" ")
  .setDescription('**» Yeteri Kadar Kişi Davet Etmelisiniz :** Yani ödeme fiyatları kısmına bakın!')
  .addField('**» Ödeme Yöntemleri**: İninal, Papara, Paypal, LoL Rp, Roblox Robux Şeklinde Ödemelerinizi Alabilirsiniz!')
  .addField('**» Neden Bedava Para Dağıtıyorsunuz? :**')
  .addField('Evet insanlara para dağıtıyoruz fakat bunun ilerde bize iyi bir geri dönüşü olabileceğine inanıyoruz yani biz bu işi')
  .addField('aylardır planlıyorduk ve bir bütçe biriktirdik.')
  .addField('İlerde sunucumuz çok kişi olduğundan bize sponsor olmak isteyenler olacaktır yani şimdilik biz size para dağıtıyoruz ama ilerde bizede gelecektir hem sizin faydanıza hem bizim!')
  return message.channel.sendEmbed(embed);
};

module.exports.help = {
  name: "ping"
}