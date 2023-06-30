let etch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Nama Anime!\n\nContoh: ${usedPrefix + command} hunter x hunter`
  let api =  `https://api.xyroinee.xyz/api/anime/otakudesu-detail?url=${text}&apikey=2pTTdQZvVR`
  let dann = await api.(text)
  let hasil =  ` *${dann.judul}*\nJudul: *${dann.skor}*\nRating: *${dann.season}*\nProduser: *${dann.produser}*\nTipe: *${dann.tipe}*\nStatus: *${dann.status}*\nEpisode: *${dann.total_episode}*\nDurasi: *${dann.durasi}*\nRilis: *${dann.rilis}*\nStudio: *${dann.studio}*\nGenre: *${dann.genre}*\nDeskripsi: ${dann.desc}\nBatch: 
*${dann.batch}*`
  await conn.sendFile(m.chat, dann.img, 'otakudesu.jpg', `${hasil}`, m)
}

handler.help = ['otakudesu']
handler.tags = ['internet']
handler.command = /^(otakudesu)$/i

module.exports = handler

/*
  * DannTeam
  * ig: @jkt48.danzz
*/