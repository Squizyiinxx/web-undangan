import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import {astroImageTools} from "astro-imagetools";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
   adapter: vercel(),
  integrations: [tailwind(), icon(), astroImageTools],
});
