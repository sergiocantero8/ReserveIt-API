const Telegraf = require('telegraf')

const bot = new Telegraf('1392559329:AAGjThwPqVxbbLXk5zQBcsVRhEDRUuXpjdY')

bot.start((ctx) => {
    ctx.reply('Welcome');
})

bot.launch()