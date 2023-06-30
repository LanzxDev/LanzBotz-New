const fetch = require("node-fetch");

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukkan URL!\n\nContoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`;
  if (!args[0].match(/tiktok/gi)) throw `URL Tidak Ditemukan!`;
  m.reply("Tunggu sebentar...");  
		const url = args[0];
		const apis = await fetch(`https://xzn.wtf/api/tiktok?url=${args[0]}&apikey=Akiraabotz`);
		
var json = await apis.json()
if(json.msg != "success") throw "Error"
var { 
play, 
wmplay, 
region,
title,
duration,
music,
} = json.data
await conn.sendFile(m.chat,play, 'tiktok.mp4', `
• *Deskripsi*: ${title}
\n• *Username*: ${region}
\n• *Durasi*: ${duration} detik`, m)
await delay (1000)
conn.sendMessage(m.chat, { audio: { url: music }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
    title: title,
    body: "",
    thumbnailUrl: tmb,
    sourceUrl: web,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}} , { quoted: pesan })
};
};
handler.help = ['tiktok']
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm|dltt)$/i
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