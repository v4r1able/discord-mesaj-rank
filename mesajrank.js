const Discord = require('discord.js');
const client = new Discord.Client();
const editJsonFile = require("edit-json-file");
let mesajrank = editJsonFile(`${__dirname}/mesajlistesi.json`);

client.on('message', msg => {

  eskitoplam = mesajrank.get(msg.author.id);
  if(eskitoplam === null || eskitoplam === '' || eskitoplam === NaN || eskitoplam === undefined)
  {
  yenitoplam = "1";
  } else {
  yenitoplam = Number(eskitoplam) + 1;
  }
  mesajrank.set(msg.author.id, yenitoplam);
  mesajrank.save();
  
  if (msg.content === '!mesajrank') {
    mesajsayi = mesajrank.get(msg.author.id);
    msg.reply("Sunucu üzerinde toplam "+mesajsayi+" adet mesajınız bulunuyor.");
  }
  
  });
  
  client.login('token');
