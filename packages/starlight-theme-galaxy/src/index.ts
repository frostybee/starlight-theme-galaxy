/**
 * 
 */import type { StarlightPlugin } from '@astrojs/starlight/types'
// Import with type assertion to avoid TypeScript error
// @ts-ignore
// import expressiveCodeConfig from '../ec.config.mjs';

const componentOverrides = {
  Header: 'starlight-theme-galaxy/components/Header.astro',
} as const

export default function starlightThemeGalaxyPlugin(): StarlightPlugin {
  return {
    name: 'starlight-theme-galaxy',
    hooks: {
      'config:setup'({ config, updateConfig, logger }) {
        const userExpressiveCodeConfig =
          !config.expressiveCode || config.expressiveCode === true ? {} : config.expressiveCode

        updateConfig({
          customCss: [
            'starlight-theme-galaxy/styles/index.css',
            ...(config.customCss ?? []),
          ],
          components: {
            ...componentOverrides,
            ...config.components,
          },
          // expressiveCode:
          //   config.expressiveCode === false
          //     ? false
          //     : {
          //       ...expressiveCodeConfig,
          //       ...userExpressiveCodeConfig
          //     }
        })
      },
    },
  }
}
