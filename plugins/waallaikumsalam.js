let handler = async (m, { conn }) => {
let thumb = 'https://telegra.ph/file/d204c78e7f970e3ce8d1d.jpg'
let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*


"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh” atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT"
`

await conn.sendFile(m.chat, thumb, 'shalat.jpg', `${caption}`, m)

       }
       
handler.customPrefix = /^(assalamualaikum|Salom|salam)/i
handler.command = new RegExp
module.exports = handler