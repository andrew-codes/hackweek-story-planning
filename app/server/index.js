import App from 'koa';
import IO from 'koa-socket';
//import StoryPlanning from './../features/StoryPlanning/server';
//import Security from './../features/Security/server';

const  app = new App();
const socket = new IO('VersionOne');

socket.attach(app);

socket.on('connection', ctx => {
    console.log('Join event', ctx.socket.id)
});

socket.on('disconnect', ctx => {
    console.log('leave event', ctx.socket.id);
});

socket.on('action', ctx => {
    console.log('Action received', ctx.data.type, ctx.data.payload);
    // socket.broadcast('action', actionCreators.login(ctx.data.payload));
});

const port = 3000;
app.server.listen(port, () => console.log(`Listening on ${port}`));
