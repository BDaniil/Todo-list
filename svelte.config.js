import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		vite:{
			resolve:{
				alias:{
					'@src':path.resolve('./src'),
					'@stores':path.resolve('./src/stores'),
					'@useSnapshot':path.resolve('./src/useSnapshot')
				}
			},
			build:{
				rollupOptions:{
					external:['react']
				}
			}
		},
		adapter: adapter({
			fallback:'200.html'
		}),
		ssr: false,
		
		prerender:{
			enabled:false
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
