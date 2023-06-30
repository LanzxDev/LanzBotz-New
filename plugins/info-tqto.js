import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
  import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ameliamd = 'https://telegra.ph/file/298ffb26f3c8b9da588f3.jpg'
//tim
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offsetalldiii0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
//==============> Menu nya
let intro = `
        
          BIG THANKS TO

Terutama Terimakasih Teruntuk:
➸ ImYanXiao

Terimakasih Juga Untuk Kang Banned:
➸ Mark Zuckerberg 

─────────────────────
• God
• My ortu
• King Of Bear
• Aldi lesmana
• Zykobotz (Kabul)
• PutraModz 
• WH MODS DEV
• Marsandi Botz
• LanzxDev (ME)
• Akiraa Botz
• Bang Syaii
• Nurutomo
• Adiwajshing
• Ariffb
• Amel 
• IrwanX
• Dawnfrosty
• Rteam1
• Beniismael
• Raditya 
• AlyaaXzy 
• Haori 
• David
• Rozi
• Letta
• Yanzz
• Furqan
• Elyas
• Rasel
• Xteam
• Khael
• Atenabot
• Baka Botz
• ZeeoneOfc
• Zeks
• Rendycraft  
• Krizynofc
• Nadin
• NexEp
• Jarot
• Tio
• Aca Mirabel
• Ramdani
• Penyedia Layanan API
• Orang-orang yang Berdonasi
─────────────────────`
//Sound ny
/*let sound17 = "sound17"
let sound18 = "sound18"
let sound19 = "sound19"
let sound20 = "sound20"
let sound21 = "sound21"
let sound22 = "sound22"
let sound23 = "sound23"
let sound24 = "sound24"
let sound25 = "sound25"
let sound26 = "sound26"
let sound27 = "sound27"
let sound28 = "sound28"
let sound29 = "sound29"
let sound30 = "sound30"
let sound31 = "sound31"
let sound32 = "sound32"
let snd = `${pickRandom([sound17,sound18,sound19,sound20,sound21,sound22,sound23,sound24,sound25,sound26,sound27,sound28,sound29,sound30,sound31,sound32])}`
let audio = `https://raw.githubusercontent.com/Aisyah-Aldi/Sound/main/${snd}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: "TERIMAKASIH",
    body: bottime,
    thumbnail: await (await fetch(ameliamd)).buffer(),
    sourceUrl: syt
 	}
     }
    })
conn.send3ButtonDoc(m.chat, `\n\n     *『 🌹 T H A N K S 🌹 』*\n\n`, intro + `\n\n${tag}\n\n`, 'Aʟʟ Mᴇɴᴜ', '.? all', 'Lɪsᴛ Mᴇɴᴜ', '.tesm', '\nSewa Bot Amelia', '.sewa', m, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: 'T E R I M A K A S I H'}}})
    }*/
/*conn.sendButton(m.chat, '┍┈༺ *ᚯӃᶱᶮᶽᶲメ฿Ø₮™* ༻', intro, ameliamd, [
                ['Owner', `${usedPrefix}owner`],
                ['Menu', `${usedPrefix}allmenu`],
                ['Donasi', `${usedPrefix}donasi`]
            ], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'TERIMA KASIH',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})*/

conn.sendMessage(m.chat, {
text: intro,
contextInfo: {
externalAdReply: {
title: date,
body: 'bodynya',
thumbnailUrl: "https://telegra.ph/file/298ffb26f3c8b9da588f3.jpg",
sourceUrl: gclink,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})

}
    
handler.tags = ['xp']

handler.command = /^(tqto|credits|credit)$/i

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Night Rider')
  }
  if (time >= 4) {
    wishloc = ('Good Morning')
  }
  if (time >= 12) {
    wishloc = ('Good Afternoon')
  }
  if (time >= 16) {
    wishloc = ('️Good Evening')
  }
  if (time >= 23) {
    wishloc = ('Night Rider')
  }
  return wishloc
}