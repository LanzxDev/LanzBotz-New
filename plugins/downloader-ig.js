const fetch = require("node-fetch");

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukkan URL!\n\nContoh:\n${usedPrefix + command} https://www.instagram.com/reel/Cts2hSoso0c/?igshid=MzRlODBiNWFlZA=`;
  if (!args[0].match(/tiktok/gi)) throw `URL Tidak Ditemukan!`;
  m.reply("Tunggu sebentar...");  
		const url = args[0];
		const apis = await fetch(`https://xzn.wtf/api/igdl?url=${args,[0]}&apikey=Akiraabotz`);
		
var json = await apis.json()
if(json.msg != "success") throw "Error"
var {
caption,
media,
} = json.data
await conn.sendFile(m.chat,media, 'ig.mp4', `
• *Caption*: ${caption} `, m)
};
};
handler.help = ['ig']
handler.command = /^(Instagram|ig|igdl|dlig)$/i
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
module.exports = handler;