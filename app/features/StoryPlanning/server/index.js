import IO from 'koa-socket';
import * as actionCreators from './../ActionCreators/server';
import featureName from './../feature';

export default ({app, socket}) => {
    socket.on('action', ctx => {
        console.log('Action received', ctx.data.type, ctx.data.payload);
        socket.broadcast('action', actionCreators.increment(ctx.data.payload));
    });

    return {app, socket};
};
