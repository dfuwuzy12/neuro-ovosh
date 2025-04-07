// ниже попытался подробно описать все что тут намалякал

require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

// ключ для openrouter и модель, которую бот будет использовать если чо они описаны в .env
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL;

// лог в терминал о том что бот запустилсчя
client.once('ready', () => {
  console.log(`🟢 НейроОвощ запущен как ${client.user.tag}`);
});

client.on('guildCreate', async (guild) => {
  const targetChannel = guild.channels.cache.find(channel =>
    channel.type === 0 && channel.name.toLowerCase().includes('нейро-овощ🥔') && // бот ищет канал с названием нейро-овощ🥔 и будет первое сообщение в него. монжл поменять
    channel.permissionsFor(guild.members.me).has('SendMessages')
  );

  if (targetChannel) {
    targetChannel.send(
      `🥔 Привет, сервер **${guild.name}**! Я — **Нейро Овощ**! 🥬\n\n` +
      `Созданный **ванечкой про геймером** специально для общения и помощи.\n` +  // первое сообщение, которое бот пишет при заходе можно поменять
      `🥔 Чтобы поговорить со мной, просто напиши **!овощ** и свой вопрос. 🥬\n\n`
    );
  }
});

// бот читает сообщения
client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // если это бот — игнор
  if (!message.content.startsWith('!овощ')) return; // если не начинается с !овощ — тоже игнор

  const prompt = message.content.replace('!овощ', '').trim(); // удаляем !овощ и обрезаем пробелы
  if (!prompt) return message.reply('🥔 Напиши что-нибудь после `!овощ`, чтобы я ответил!'); // если ничего не написали — говорим об этом

  try {
    // отправляем запрос к OpenRouter
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: OPENROUTER_MODEL,
        messages: [
          { role: 'system', content: 'Ты дружелюбный овощ, который помогает людям. Все люди которые обращаются к тебе - это овощи' }, // это промпт
          { role: 'user', content: prompt },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    message.reply(reply);
  } catch (error) {
    message.reply('🚫 Не удалось получить ответ от нейроовоща.');
  }
});

// запуск бота
client.login(process.env.DISCORD_TOKEN);