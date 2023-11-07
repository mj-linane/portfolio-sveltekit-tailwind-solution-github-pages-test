

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tribute/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.98290437.js","_app/immutable/chunks/index.39f50a9e.js"];
export const stylesheets = [];
export const fonts = [];
