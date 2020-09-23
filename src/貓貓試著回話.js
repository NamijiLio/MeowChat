const { partition, last } = require('lodash');

const db = require('./db');

module.exports = async function 貓貓試著回話(context) {
  const { text } = context.event;

  const mappings = db.map[text];
  
   // 如果曾經有任何關於這個關鍵字的紀錄
  if (mappings && mappings.length > 0) {

    const [localMappings, globalMappings] = partition(mappings, {
      sessionId: context.session.id,
    });

    const answer = last(
      localMappings.length > 0 ? localMappings : globalMappings
    ).message;

    await context.sendText(answer);
  }
};
