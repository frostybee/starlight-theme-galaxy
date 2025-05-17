import type { StarlightPlugin } from '@astrojs/starlight/types'

export default function starlightThemeGalaxy(): StarlightPlugin {
  return {
    name: 'starlight-theme-galaxy',
    hooks: {
      'config:setup'({ config, logger, updateConfig }) {
        /**
         * This is the entry point of your Starlight plugin.
         * The `config:setup` hook is called when Starlight is initialized (during the Astro `astro:config:setup`
         * integration hook).
         * To learn more about the Starlight plugin API and all available options in this hook, check the Starlight
         * plugins reference.
         *
         * @see https://starlight.astro.build/reference/plugins/
         */
        logger.info('Hello from the starlight-theme-galaxy plugin!')

        /**
         * Update the provided Starlight user configuration by appending the theme CSS file to the `customCss` array.
         * To start customizing your theme, edit the `packages/starlight-theme-galaxy/styles.css` file.
         *
         * @see https://starlight.astro.build/reference/plugins/#updateconfig
         * @see https://starlight.astro.build/reference/configuration/#customcss
         */
        updateConfig({
          customCss: [...(config.customCss ?? []), 'starlight-theme-galaxy/styles'],
        })
      },
    },
  }
}
