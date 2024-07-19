import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import {astroImageTools} from "astro-imagetools";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), astroImageTools],
});
