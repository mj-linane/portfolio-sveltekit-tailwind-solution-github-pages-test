export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.a9c1481c.js","app":"_app/immutable/entry/app.4efd1f23.js","imports":["_app/immutable/entry/start.a9c1481c.js","_app/immutable/chunks/index.39f50a9e.js","_app/immutable/chunks/singletons.ca29ab90.js","_app/immutable/entry/app.4efd1f23.js","_app/immutable/chunks/index.39f50a9e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
