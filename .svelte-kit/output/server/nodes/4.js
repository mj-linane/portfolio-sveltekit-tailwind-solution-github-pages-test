

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/form/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.fb34fef4.js","_app/immutable/chunks/index.39f50a9e.js"];
export const stylesheets = [];
export const fonts = [];