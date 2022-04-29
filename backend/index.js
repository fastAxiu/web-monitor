const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    ctx.body = 'Hello World';
});

app.listen(3000);