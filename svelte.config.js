import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
    prerender: {
      handleMissingId: (id, path) =>
      {
        console.warn(`Ignoring missing id '${id}' on page '${path}'`);
        return 'ignore';
      }
    }
  },
  vite: {
    base: '/portfolio-sveltekit-tailwind-solution-github-pages-test/', // replace 'your-repo-name' with the name of your GitHub repository
  }
};

export default config;