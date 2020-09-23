const db = require('./db');

module.exports = async function 貓貓忘記(context) {
  const { text } = context.event;


  const [, key] = text.split(';');

 
  db.map[key] = db.map[key].filter(
    mapping => mapping.sessionId !== context.session.id
  );

  await context.sendText('喵');
};
