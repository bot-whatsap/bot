import { googleImage } from '@bochilteam/scraper';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*[❗Error❗] Example: ${usedPrefix + command} cat*`;
  if (m.text.includes('gore') || m.text.includes('cp') || m.text.includes('porno') || m.text.includes('Gore') || m.text.includes('rule') || m.text.includes('CP') || m.text.includes('Rule34')) return m.reply('[❗Error❗] I cannot send this content, the group is restricted. If you are an admin and want to activate it, inform the developer.');
  
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  
  conn.sendFile(m.chat, link, 'error.jpg', `🔎 *Result for:* ${text}\n🔗 *From* ${link}\n🌎 *Search Engine:* Google`, m);
};

handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(image|صورة)$/i;

export default handler;
