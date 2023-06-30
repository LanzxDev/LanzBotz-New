let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `Ingin sc bot ini?, Join grup official LanzBotz untuk mendapatkan sc ini link dibawah\n
${gc}
`
m.reply(esce)
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler