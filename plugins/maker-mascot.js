var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .logogaming Akiraabotz'
  m.reply('_Proses..._')
  var tio = `https://xzn.wtf/api/mascot-game?text=${response[0]}&apikey=Akiraabotz`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['logogaming'];
handler.tags = ['maker'];
handler.limit = 10
module.exports = handler;