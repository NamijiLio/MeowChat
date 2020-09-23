const { router, text } = require('bottender/router');

const 貓貓學說話 = require('./貓貓學說話');
const 貓貓忘記 = require('./貓貓忘記');
const 貓貓試著回話 = require('./貓貓試著回話');

module.exports = async function App() {
  return router([
    text(/^貓貓學說話;([^;]+);([^;]+)$/, 貓貓學說話),
    text(/^貓貓忘記;([^;]+)$/, 貓貓忘記),
    text('*', 貓貓試著回話),
  ]);
};

// const coinranking = require('./coinranking'); 

// const coins = [
//   {
//     id: 1,
//     symbol: 'BTC',
//     name: 'Bitcoin',
//   },
//   {
//     id: 2,
//     symbol: 'ETH',
//     name: 'Ethereum',
//   },
//   {
//     id: 3,
//     symbol: 'XRP',
//     name: 'XRP',
//   },
// ];

// module.exports = async function App2(context) {
//   const { text } = context.event;
//   for (let c of coins) {
//     if (new RegExp(`(${c.symbol})|(${c.name})`, 'i').test(text)) {
//       const {
//         data: { coin },
//       } = await coinranking.getCoin(c.id);
//       await context.sendText(`${c.symbol} 現在價格是 ${coin.price} TWD`);
//       return;
//     }
//   }
// };