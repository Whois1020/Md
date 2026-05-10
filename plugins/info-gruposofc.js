let handler = async (m, { conn }) => {
  const namegrupo = 'Grupo Oficial'
  const gp1 = 'https://chat.whatsapp.com/FgQ4q11AjaO8ddyc1LvK4r'

  const namechannel = 'Canal del Bot'
  const channel = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m'

  const dev = '👾 Desarrollador: @whois.yallico'
  const catalogo = 'https://o.uguu.se/MJVbgdQD.jpg'
  const emoji = '📡'

  let grupos = `
╭─⟪ 🌐 GRUPOS OFICIALES ⟫
│
│ ⚔️ ${namegrupo}
│ ${gp1}
│
│ ⚡ ${namechannel}
│ ${channel}
│
│ ${dev}
╰─────────────────╯
`.trim()

  await conn.sendMessage(m.chat, {
    image: { url: catalogo },
    caption: grupos
  }, { quoted: m })

  await m.react(emoji)
}

handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler