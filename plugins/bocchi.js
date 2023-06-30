const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.xyroinee.xyz/api/sfw/bocchi?apikey=2pTTdQZvVR`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['bocchi']
handler.tags = ['image']
handler.command = /^(bocchi)$/i
handler.limit = true;
module.exports = handler;