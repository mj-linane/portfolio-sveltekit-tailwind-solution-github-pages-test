

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/price-table-demo/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.43fd3d31.js","_app/immutable/chunks/index.39f50a9e.js"];
export const stylesheets = [];
export const fonts = [];