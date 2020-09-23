const db = require('./db');

module.exports = async function 貓貓學說話(context) {
  const { text } = context.event;

  const [, key, val] = text.split(';');

  // 如果沒有教過就初始化
  if (!db.map[key]) db.map[key] = [];

  // 記錄到列表中
  db.map[key].push({
    sessionId: context.session.id,
    keyword: key,
    message: val,
  });

  await context.sendText('喵');
};
