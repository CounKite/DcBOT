const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Hiçbir komut bulunamadı!");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./komutlar/${f}`);
    console.log(`${f} yüklendi!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} ${bot.guilds.size} sunucuda aktif!`);

  bot.user.setActivity("Davet Ödülleri'ni", {type: "WATCHING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "d-";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
})

bot.on('message',msg => {
  if(msg.content === 'tasman varmı'){
      msg.reply('Var ama çok kısa geliyor çünkü tasmamın markası senin aletin :D');
  }
  });

  bot.on('message',msg => {
    if(msg.content === 'sa'){
      module.exports.run = async (bot, message, args) => {
        const embed = new Discord.RichEmbed()
        .setAuthor('Davet')
        .setColor("#DB9721")
        .setTitle(" ")
        .setDescription('**» Aleyküm Selam!**')
        return message.channel.sendEmbed(embed);
      };
    }})

    bot.on('message',msg => {
      if(msg.content === 'sa'){
          msg.reply('**,Aleyküm Selam!**');
      }
      });    

bot.login('ucantstealnoobs')