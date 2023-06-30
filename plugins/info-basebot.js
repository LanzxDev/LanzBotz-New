let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} 

_*•Script Akiraabotz v1:*_
(https://drive.google.com/file/d/11rsCJyhPhJi_psqd304dwL0G7XnH7iT0/view?usp=drivesdk)

Jika ingin bertanya tanya langsung chat ke no owner dibawah
Wa.me/6283842839555

`
m.reply(esce)
}
handler.command = /^(Akiraa)$/i

module.exports = handler