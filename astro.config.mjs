// @ts-check
import { defineConfig } from 'astro/config';

const isGoDaddyBuild = process.env.DEPLOY_TARGET === 'godaddy';

// https://astro.build/config
export default defineConfig({
  site: isGoDaddyBuild ? 'https://c8bc.ca' : 'https://sparkplug604.github.io',
  base: isGoDaddyBuild ? '/' : '/collabor8-site',
});
