import type { StarlightPlugin } from '@astrojs/starlight/types'

export default function starlightThemeGalaxyPlugin(): StarlightPlugin {
  return {
    name: 'starlight-theme-galaxy',
    hooks: {
      'config:setup'({ config, logger, updateConfig }) {

        logger.info('Hello from the starlight-theme-galaxy plugin!')

        /**
         * Update the provided Starlight user configuration by appending the theme CSS file to the `customCss` array.
         * To start customizing your theme, edit the `packages/starlight-theme-galaxy/styles.css` file.
         *
         * @see https://starlight.astro.build/reference/plugins/#updateconfig
         * @see https://starlight.astro.build/reference/configuration/#customcss
         */
        updateConfig({
          customCss: [
            'starlight-theme-galaxy/styles/index.css',
            ...(config.customCss ?? []),
          ],
        })
      },
    },
  }
}
