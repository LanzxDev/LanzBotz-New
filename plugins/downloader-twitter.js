var fetch = require("node-fetch");
var handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
if (!args[0].match(/twitter/gi)) throw `URL Tidak Ditemukan!`
m.reply('wait')
const url = args[0];
const apis = await fetch(API('lann', '/api/download/twitter', { url: url, apikey: lann }));
if (!apis.ok) throw await apis.text()
var jsons = await apis.json()
if (!jsons.status) throw jsons
var { 
desc, 
HD } = jsons.result
await conn.sendFile(m.chat, HD, 'tiovid.mp4', `
*Deskripsi*: ${desc}`, m)
};
handler.command = handler.help = ['twitter','twitdl','twitterdl'];
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
