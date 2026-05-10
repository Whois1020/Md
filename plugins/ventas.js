import fg from 'api-dylux' 
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
Owners / comprar Arceus 🫶🏻

Owner:
: ̗̀➛ 👑Whois : Wa.me/51936994155

vendedores:
: ̗̀➛ 👸🏻Melisa : Wa.me/51993800613
: ̗̀➛ 👸🏻 Thali : Wa.me/+573042479614
: ̗̀➛ 👸🏻 Elizabeth : Wa.me/51960831611
: ̗̀➛ 👸🏻 TodoBenne' : Wa.me/56931300864
: ̗̀➛ 👸🏻 Yane : Wa.me/529813279747

Grupo Oficial:
: ̗̀➛ https://chat.whatsapp.com/Fi6FHZ8VSGnAT7CKJkcd9r
                 
` 
}
handler.help = ['comprar']
handler.tags = ['owner']
handler.command = /^(comprar)$/i
handler.group = true
handler.admin = false
export default handler