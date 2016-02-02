import Koa from 'koa';
import IO from 'koa-socket';
import co from 'co';
import bodyParser from 'koa-bodyparser';
import ActionCreators from './ActionCreators';
import api from './api';

let app = new Koa();
app.use(bodyParser());
app = api(app);
const socket = new IO('VersionOne');

const cleanActionTypeText = (text) => text.replace('server/', '');

socket.attach(app);

socket.on('connection', ctx => {
    console.log('Join event', ctx.socket.id)
});

socket.on('disconnect', ctx => {
    console.log('leave event', ctx.socket.id);
});

socket.on('action', ctx => {
    console.log('Action received', ctx.data.type, ctx.data.payload);
	let actionCreator = ActionCreators[cleanActionTypeText(ctx.data.type)];
	if (!actionCreator){
		return;
	}
	socket.broadcast('action', actionCreator(ctx.data.payload));
});

const port = 3000;
app.server.listen(port, () => console.log(`Listening on ${port}`));
