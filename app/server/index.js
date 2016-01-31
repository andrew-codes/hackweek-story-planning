import App from 'koa';
import StoryPlanning from './../features/StoryPlanning/server';

let app = new App();
app = StoryPlanning(app);

const port = 3000;
app.server.listen(port, () => console.log(`Listening on ${port}`));
