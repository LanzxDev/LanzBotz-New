const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.xyroinee.xyz/api/sfw/shota?apikey=2pTTdQZvVR`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['shota']
handler.tags = ['image']
handler.command = /^(shota)$/i
handler.limit = true;
module.exports = handler;