var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : . coverlol AKIRAA || MD'
  m.reply('_Proses..._')
  var tio = `https://xzn.wtf/api/cover-lol?text=${response[0]}&apikey=Akiraabotz=`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['coverlol'];
handler.tags = ['maker'];
module.exports = handler;