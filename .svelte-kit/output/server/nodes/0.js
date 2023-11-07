import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.59131b10.js","_app/immutable/chunks/index.39f50a9e.js"];
export const stylesheets = ["_app/immutable/assets/0.6d966e3b.css"];
export const fonts = [];
