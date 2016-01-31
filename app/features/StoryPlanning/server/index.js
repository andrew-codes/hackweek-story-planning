import IO from 'koa-socket';
import * as actionCreators from './ActionCreators';

export default (app) => {
    const socket = new IO('StoryPlanning');
    socket.attach(app);

    socket.on('connection', ctx => {
        console.log('Join event', ctx.socket.id)
    });

    socket.on('disconnect', ctx => {
        console.log('leave event', ctx.socket.id);
    });

    socket.on('action', ctx => {
        console.log('Action received', ctx.data.type, ctx.data.payload);
        console.log(actionCreators.increment(ctx.data.payload))
        socket.broadcast('action', actionCreators.increment(ctx.data.payload));
    });

    return app;
};
