

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/product/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.27bfc94e.js","_app/immutable/chunks/index.39f50a9e.js"];
export const stylesheets = [];
export const fonts = [];
