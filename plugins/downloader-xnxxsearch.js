var fetch = require("node-fetch");

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    throw `Contoh:\n${usedPrefix + command} boobs`;
  }
const q = text;
const search = await fetch(API('lann', '/api/search/xnxx', { query: text, apikey: lann }));    
  const hasil = await search.json(); 
  let teks = `*XNXX RESULTS* \n\n🔍 *KEYWORDS* *${text}*\n\n`;
  let no = 1;
  
  for (let i of hasil.result) {
    teks += `📑 *No* : ${no++}\n📚 *Title* : ${i.title}\n⏱️ *Duration* : ${i.duration}\n🔗 *URL* ${i.link}\n\n─────────────────\n\n`;
  }
  
  await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  await conn.sendMessage(m.chat, { image: { url: hasil.result[0].thumb }, caption: teks }, { quoted: m });
 };

handler.command = ['xnxxsearch'];
handler.tags = ['internet'];

module.exports = handler;
