import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.3add6258.js","_app/immutable/chunks/index.39f50a9e.js"];
export const stylesheets = ["_app/immutable/assets/0.5e1e3f2c.css"];
export const fonts = [];
