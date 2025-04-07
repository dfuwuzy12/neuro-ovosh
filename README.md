## кароче как этим всем гамном пользоваться

### 📦 Что скачать

- Node.js — установи, если ещё не поставил. [nodejs.org](https://nodejs.org)
- Git — необязательно можно и руками всё скачать с GitHub, но в будущем мб пригодится. Если не будешь качать то первый шаг пропусти.

### 🧾 Как запустить эту овощную гамну

1. Клонируй проект или скачай ZIP и разархивируй:
   ```bash
   git clone https://github.com/ТВОЙ_ЮЗЕРНЕЙМ/нейро-овощ.git
   cd нейро-овощ
   ```

2. Установи зависимости:
   ```bash
   npm install
   ```

3. Сделай файл `.env` и пропиши туда вот это:
   ```env
   DISCORD_TOKEN=тут_твой_токен_от_дискорд_бота
   OPENROUTER_API_KEY=тут_твоя_апишка_от_openrouter
   OPENROUTER_MODEL=nousresearch/nous-capybara-7b  # это модель ИИ по желанию можно поставить чат гпт (но я хз бесплатный он или нет) если он работает в вашем регионе
   ```
думаю токены разберешся откуда брать

4. и наконец запускается через:
   ```bash
   node bot.js
   ```

### 🤖 Как бот вообще работает

- Когда ты его кидаешь на сервер — он ищет канал с названием `нейро-овощ🥔` я в коде делал коментарий, можно найти. Кароче название ясное дело можно поменять
- Пишет туда приветствие (также можно поменять в коде)
- Потом, когда кто-то пишет `!овощ и после этого вопрос` — бот отправляет это в OpenRouter и отвечает

### ❗ Если что-то не робит

- Проверь `.env`, может забыл туда вставить токены
- Если не менял название канала в коде, проверь есть ли у тебя на свервер канал `нейро-овощ🥔`? Если нет — создай, иначе молчать будет
- У бота есть права писать в канал? Тоже важно, это выставляется на сайте дискорд деволопер
- API-ключ от OpenRouter рабочий? Модель правильная?

### 🧠 Хочешь поменять стиль общения овоща?

В `bot.js` найди:
```js
{ role: 'system', content: 'Ты дружелюбный овощ, который помогает людям. Все люди которые обращаются к тебе - это овощи' }
```
думаю понимаешь что это просмпт для личности бота
И пиши там всё что хочешь. Хочешь агрессивную репу? Пожалуйста. Хочешь бот-поэта? Тоже можно.

### 🤝 Кому это вообще надо

- Ну, в первую очередь, мне
- Тем кто хочет сделать свой ИИ-бот на базе OpenRouter
- Тем кто овощ

### 👨‍🌾 Автор всей этой овощебазы

ванечка про геймер, просто решил сделать овоща с интеллектом. Без понтов, просто по кайфу, чисто аккуратненько двигаясь. Если используешь — значит ты тоже в овощной семье 🥔
#### **ВСТУПАЙТЕ В ДИСКОРД КАНАЛ ["ПАСЕВЫ ОВОЩЕЙ"](https://discord.gg/RmK5BBKNQa)**
