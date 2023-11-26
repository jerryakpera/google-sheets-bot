const TelegramBot = require('node-telegram-bot-api');

const { token } = require('./config');
const { getGoogleSheetData } = require('./test');

// Create a new bot passing it my token and setting the polling to true
const bot = new TelegramBot(token, { polling: true });

// Create a new event listener on the bot that listens for messages
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/start') {
    console.log('Start');
    bot.sendMessage(chatId, 'Welcome to the bot!!!');
  }

  if (messageText.startsWith('/get-cells')) {
    const parts = messageText.split('-');
    let startCell = 'A1';
    let endCell = 'Z1000';

    if (parts.length > 2) {
      [, , start, end] = parts;
      if (start) startCell = start;
      if (end) endCell = end;
    }

    const cellsData = await getGoogleSheetData(startCell, endCell);

    console.log(cellsData);
    bot.sendMessage(chatId, `cellsData: ${JSON.stringify(cellsData)}`);
  }
});
