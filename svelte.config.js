import adapter from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true
    })
  ],
  kit: {
    adapter: adapter({ runtine: 'edge' }),
    alias: {
      $ui: './src/lib/ui/*',
			$components: './src/lib/components/*',
      $utils: './src/lib/utils/*'
    }
  }
}

export default config
