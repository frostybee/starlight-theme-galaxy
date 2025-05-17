import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeGalaxy from 'starlight-theme-galaxy'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/frostybee/starlight-theme-galaxy/edit/main/docs/',
      },
      plugins: [starlightThemeGalaxy()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started', 'customization'],
        },
        { label: 'Examples', autogenerate: { directory: 'examples' } },
      ],
      social: [
        { href: 'https://github.com/frostybee/starlight-theme-galaxy', icon: 'github', label: 'GitHub' },
      ],
      title: 'starlight-theme-galaxy',
    }),
  ],
})
