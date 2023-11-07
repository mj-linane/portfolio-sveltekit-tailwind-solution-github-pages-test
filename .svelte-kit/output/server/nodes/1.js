

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8a6f4011.js","_app/immutable/chunks/index.39f50a9e.js","_app/immutable/chunks/singletons.81c9dee0.js"];
export const stylesheets = [];
export const fonts = [];
