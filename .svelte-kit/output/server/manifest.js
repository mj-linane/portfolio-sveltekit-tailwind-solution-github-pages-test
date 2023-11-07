export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.75a28625.js","app":"_app/immutable/entry/app.055d4a37.js","imports":["_app/immutable/entry/start.75a28625.js","_app/immutable/chunks/index.39f50a9e.js","_app/immutable/chunks/singletons.81c9dee0.js","_app/immutable/entry/app.055d4a37.js","_app/immutable/chunks/index.39f50a9e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
