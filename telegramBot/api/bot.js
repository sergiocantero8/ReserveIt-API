const Telegraf = require('telegraf')

const bot = new Telegraf('1392559329:AAGjThwPqVxbbLXk5zQBcsVRhEDRUuXpjdY')

bot.start((ctx) => {
    ctx.reply('¡Bienvenido al bot para saber el horario de las pistas de Granada! ');
})

bot.help((ctx) => {
    ctx.reply('Usas los comandos:\n');
})

bot.command(['horariosCartuja','horarioCartuja','horarioscartuja'] ,(ctx) => {
    ctx.reply('Usas los comandos:\n');
})

bot.on('text', ctx =>{
    ctx.reply('No hay ningun comando con ese nombre, utiliza /help para ver los comandos')
})

bot.on('sticker', ctx =>{
    ctx.reply('Gracias por el sticker pero solo sirvo para informar sobre horarios.')
})

bot.launch()