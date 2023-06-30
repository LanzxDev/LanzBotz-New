let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
   if (!args[0]) return m.reply('masukkan text\n\nContoh: .guralogo Akiraa')
   m.reply('Tunggu Sebentar...')
  let res = `https://oni-chan.my.id/api/canvas/gura?name=${args[0]}&apikey=`
  conn.sendFile(m.chat, res, 'sadboy.jpg', 'Sudah Jadi', m)
}
handler.help = ['guralogo'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(guralogo)$/i

module.exports = handler