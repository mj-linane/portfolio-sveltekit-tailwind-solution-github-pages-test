import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
  },
  vite: {
    base: '/portfolio-sveltekit-tailwind-solution-github-pages-test/', // replace 'your-repo-name' with the name of your GitHub repository
  }
};

export default config;