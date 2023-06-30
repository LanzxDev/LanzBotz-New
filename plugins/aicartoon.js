let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .aicartoon'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://xzn.wtf/api/aitoonme?url=${url}&apikey=Akiraabotz`))
let json = await hasil.json()
if (!json.url) throw 'Error'
await conn.sendFile(m.chat,json.url, '', wm, m)
	
}
handler.help = ['aicartoon']
handler.tags = ['maker']
handler.command = /^(aicartoon)$/i
handler.limit = true

module.exports = handler