import adapter from "@sveltejs/adapter-cloudflare";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [preprocess({ typescript: true }), mdsvex(mdsvexConfig)],

  kit: {
    adapter: adapter({
      routes: {
        include: ["/*"],
        exclude: ["<all>"],
      },
    }),
  },
};

export default config;
