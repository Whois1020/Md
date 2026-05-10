let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!global.isMain) {
    return m.reply('🚩 Este comando solo está disponible en el *BOT PRINCIPAL*');
  }

  if (!text) {
    return m.reply(
      `🍟 Ingrese el número al que quiere enviar una invitación al grupo\n\n🚩 Ejemplo :\n*${usedPrefix + command}* 51936994155`
    );
  }

  if (text.includes('+')) return m.reply('🚩 Ingrese el número todo sin el *+*');
  if (isNaN(text)) return m.reply('🍟 Ingrese sólo números más su código de país sin espacios');

  const group = m.chat;
  const link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);
  const number = text + '@s.whatsapp.net';

  try {
    const groupMeta = await conn.groupMetadata(m.chat);
    const botJid = conn.user.jid.split(':')[0] + '@s.whatsapp.net';
    const botIsAdmin = groupMeta.participants.find(p => p.jid === botJid)?.admin;

    if (!botIsAdmin) {
      return conn.reply(
        m.chat,
        `🤖 *BOT SIN PERMISOS SUFICIENTES*\n\n> Debo tener permisos de *Administrador* para ejecutar esta acción.\n\n🔍 Ejecuta: *dar al bot admin*\n🔒 Estado actual: *no admin XD*`,
        m
      );
    }

    await conn.sendMessage(number, {
      text: `🍟 *INVITACIÓN A GRUPO*\n\nUn usuario te invitó a unirte a este grupo 👇\n\n${link}`,
      mentions: [m.sender]
    });

    await m.reply(`🍟 Se envió un enlace de invitación al usuario.`);
  } catch (e) {
    console.error(e);
    await m.reply(
      '🚩 No se pudo enviar la invitación. Es posible que el número no exista, no tenga WhatsApp o nunca haya hablado con el bot.'
    );
  }
};

handler.help = ['invite *<numero>*'];
handler.tags = ['grupo'];
handler.command = ['invite', 'invitar'];
handler.group = true;
handler.admin = true;

export default handler;