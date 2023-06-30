const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.xyroinee.xyz/api/sfw/kobo?apikey=2pTTdQZvVR`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['kobo']
handler.tags = ['premium']
handler.command = /^(kobo)$/i
handler.limit = true;
handler.premium = true;
module.exports = handler;