import type { StarlightPlugin } from '@astrojs/starlight/types'
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
// Get directory path of current file
const __dirname = dirname(fileURLToPath(import.meta.url));

const componentOverrides = {
  Header: 'starlight-theme-galaxy/components/Header.astro',
} as const

export default function starlightThemeGalaxyPlugin(): StarlightPlugin {
  return {
    name: 'starlight-theme-galaxy',
    hooks: {
      'config:setup': async ({ config, updateConfig, logger }) => {
        // The path the theme's CSS main file.
        const galaxyCss = 'starlight-theme-galaxy/styles/index.css';

        // We need to copy the ec.config.mjs file to the consuming project's root.
        // Get the source path of ec.config.mjs from our plugin
        const sourcePath = path.join(__dirname, 'ec.config.mjs');
        // Get the destination path in the consuming project's root
        const destPath = path.join(process.cwd(), 'ec.config.mjs');

        try {
          await fs.copyFile(sourcePath, destPath);
        } catch (error) {
          logger.error('Failed to copy ec.config.mjs: ' + error);
        }

        updateConfig({
          customCss: [
            // Add our theme's CSS before the consuming project's custom styles.
            galaxyCss,
            ...(config.customCss ?? []),
          ],
          components: {
            ...componentOverrides,
            ...config.components,
          },          
        })
      },
    },
  }
}
