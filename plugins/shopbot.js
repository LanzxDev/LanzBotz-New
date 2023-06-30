let handler = async (m, { conn }) => {
let thumb = 'https://telegra.ph/file/d204c78e7f970e3ce8d1d.jpg'
let caption = `*Lanz-Md* shop bot

List paket:
- Premium 
- Moderator 
- Sewa bot

• List Premium✅:
•10,000rp; = 7 hari
•40,000rp; = 30 hari
•60,000r; = permanent

keuntungan:
-akses Banyak fitur bot✅
-dapat memasukkan bot ke dalam group✅

• List moderator: 
•40,000; = 7 hari 
•70,000; = 30 hari
•90,000; = permanent

keuntungan:
- akses fitur moderator ✅
- ban✅
- unban✅
- add limit✅
- add exp✅
- add money✅
- add to Group✅

•sewa bot:
-7,000rp; = 7 hari
-30,000rp; = 30 hari
 
note: Bot akan keluar dari group jika masa sewa telah habis‼️



Ingin membeli? Chat ⤵️
https://wa.me/6288298582710
Selain itu *Clone* !!

• Payment:
➡️ Dana, Gopay, Pulsa

Shop bot By LanzxDev"`

await conn.sendFile(m.chat, thumb, 'shalat.jpg', `${caption}`, m)

       }
       
handler.customPrefix = /^(shopbot|beli|lihatharga)/i
handler.command = new RegExp
module.exports = handler