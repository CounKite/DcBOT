const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 const members = message.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
 return message.channel.send(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "```Sunucuda bulunan kişiler kontrol edildi kimse oynuyor kısmına reklam koymamıştır ✅```");
};

module.exports.help = {
  name: "reklam-taraması"
}