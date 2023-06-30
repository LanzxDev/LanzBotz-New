
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6288298582710']  
global.mods = ['6288298582710'] 
global.prems = ['6288298582710']
global.nameowner = 'ʟᴀɴᴢx ᴅᴇᴠ'
global.numberowner = '6288298582710' 
global.mail = 'lanzxdev@gmail.com' 
global.dana = '6288298582710'
global.pulsa = '6288298582710'
global.gopay = '6288298582710'
global.namebot = 'ʟᴀɴʙᴏᴛᴢ'
global.gc = 'https://chat.whatsapp.com/G5JCaeoUPSF6Xq2otUT2w0'
global.web = 'https://github.com/LanzxDev'
global.instagram = 'https://instagram.com/farel_mael'
global.wm = '© ʟᴀɴᴢx ᴅᴇᴠ'
global.watermark = wm
global.wm2 = '⫹⫺ ʟᴀɴʙᴏᴛᴢ'
global.wm3 = '© ʟᴀɴʙᴏᴛᴢ'
global.wm4 = '© BotWa'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'ʟᴀɴʙᴏᴛᴢ'
global.read = true//Untuk autoread kalau pengen autoread nyala true kalau pengen mati false 
//==> Apikey
global.lann = 'jLGiBWwj' //isi apikey mu https://api.betabotz.org
global.btc = 'TvYTERTo'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'jLGiBWwj' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
