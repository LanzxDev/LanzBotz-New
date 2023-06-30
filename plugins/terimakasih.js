let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)

    let tio = `
*_Sama sama sayangg^^_*
    `.trim()
conn.sendMessage(m.chat, {
text: tio,
contextInfo: {
externalAdReply: {
title: "Ketik .menu untuk memulai",
body: uptimex,
thumbnailUrl: "https://telegra.ph/file/5b8a0ee2d6ba9d90da49c.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['mode']
handler.tags = ['main']
handler.customPrefix = /^(makasih|terimakasih|mksh|thx|tq|thank you)$/i 
handler.command = new RegExp
handler.limit = false

module.exports = handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik";
}