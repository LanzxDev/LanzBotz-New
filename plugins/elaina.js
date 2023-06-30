const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.xyroinee.xyz/api/sfw/elaina?apikey=2pTTdQZvVR`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['elaina']
handler.tags = ['image']
handler.command = /^(elaina)$/i
handler.limit = true;
module.exports = handler;