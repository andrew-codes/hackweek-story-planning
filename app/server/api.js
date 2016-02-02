import Router from 'koa-router';

export default app => {
	const router = Router({prefix: '/api'});

	router.post('authenticate', '/authenticate', async (ctx, next) => {
		console.log(`Authenticating user: ${ctx.request.body.username}`);
		ctx.body = JSON.stringify({
			isLoggedIn: true
		});
	});

	app.use(router.routes())
		.use(router.allowedMethods());

	return app;
};
