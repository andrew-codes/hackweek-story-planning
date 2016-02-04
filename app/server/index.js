import Koa from 'koa';
import IO from 'koa-socket';
import co from 'co';
import bodyParser from 'koa-bodyparser';
import api from './api';
import actionCreators from './enabledActionCreators';

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
  const actionType = cleanActionTypeText(ctx.data.type);
  const actionCreator = actionCreators[actionType];
  if (!actionCreator) {
    console.log(`No matching action creator for ${actionType}`);
    return;
  }
  const payload = actionCreator(ctx.data.payload);
  console.log(`Dispatching action: ${ctx.data.type} with payload: ${JSON.stringify(payload)}`);
  socket.broadcast('action', payload);
});

const port = 3000;
app.server.listen(port, () => console.log(`Listening on ${port}`));
