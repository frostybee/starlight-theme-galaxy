import type { StarlightPlugin, HookParameters } from '@astrojs/starlight/types'
import type { AstroIntegrationLogger } from 'astro'
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
// Get directory path of current file
const __dirname = dirname(fileURLToPath(import.meta.url));

const componentOverrides = {
  Header: 'starlight-theme-galaxy/overrides/Header.astro',
} as const

function checkComponentOverrides(
  starlightConfig: StarlightUserConfig,
  overrides: ComponentOverride[],
  logger: AstroIntegrationLogger,
): void {
  for (const override of overrides) {
    if (starlightConfig.components?.[override]) {
      const fallback = `starlight-theme-galaxy/overrides/${override}.astro`

      logger.warn(`A \`<${override}>\` component override is already defined in your Starlight configuration.`)
      logger.warn(
        `To use \`starlight-theme-galaxy\`, either remove this override or manually render the content from \`${fallback}\`.`,
      )
    }
  }
}

type StarlightUserConfig = HookParameters<'config:setup'>['config']
type ComponentOverride = keyof typeof componentOverrides

export default function starlightThemeGalaxyPlugin(): StarlightPlugin {
  return {
    name: 'starlight-theme-galaxy',
    hooks: {
      'config:setup': async ({ config, updateConfig, logger }) => {
        const userExpressiveCodeConfig =
          !config.expressiveCode || config.expressiveCode === true ? {} : config.expressiveCode
        // The path the theme's CSS main file.
        const galaxyCss = 'starlight-theme-galaxy/styles/index.css';

        // Check for existing component overrides and warn if found
        checkComponentOverrides(config, Object.keys(componentOverrides) as ComponentOverride[], logger)

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
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                themes: ["github-dark-high-contrast", "light-plus"],
                ...userExpressiveCodeConfig,
                frames: {
                  extractFileNameFromCode: false,
                  ...((userExpressiveCodeConfig as any)?.frames ?? {}),
                },
                styleOverrides: {
                  borderRadius: "0.4rem",
                  borderColor: "var(--fb-code-block-bg-color)",
                  codeBackground: "var(--fb-code-block-bg-color)",
                  ...userExpressiveCodeConfig.styleOverrides,
                  frames: {
                    shadowColor: "var(--sl-shadow-sm)",
                    editorActiveTabIndicatorTopColor: 'unset',
                    editorActiveTabIndicatorBottomColor: 'var(--sl-color-gray-3)',
                    editorTabBarBorderBottomColor: 'var(--fb-code-block-bg-color)',
                    frameBoxShadowCssValue: 'unset',
                    ...userExpressiveCodeConfig.styleOverrides?.frames,
                  },
                },
              },
        })
      },
    },
  }
}
