import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import UnoCSS from "unocss/vite";
import { extractorSvelte } from "@unocss/core";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

const config: UserConfig = {
  plugins: [
    UnoCSS({
      extractors: [extractorSvelte],
      presets: [presetUno(), presetIcons],
      transformers: [transformerDirectives(), transformerVariantGroup()],
      shortcuts: [],
    }),
    sveltekit(),
  ],
};

export default config;
