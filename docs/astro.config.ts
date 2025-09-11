import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeGalaxy from 'starlight-theme-galaxy'

export default defineConfig({
  site: 'https://frostybee.github.io/starlight-theme-galaxy',
  base: '/starlight-theme-galaxy',
  integrations: [
    starlight({
      title: 'Starlight Galaxy',
      favicon: '/favicon.svg',   
      editLink: {
        baseUrl: 'https://github.com/frostybee/starlight-theme-galaxy/edit/main/docs/',
      },
      tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 4},
      plugins: [starlightThemeGalaxy()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started', 'customization', 'components-override'],
        },
        { label: 'Examples', autogenerate: { directory: 'examples' } },
        { label: 'Custom Components', autogenerate: { directory: 'components' } },
      ],  
      social: [
        { href: 'https://github.com/frostybee/starlight-theme-galaxy', icon: 'github', label: 'GitHub' },
      ],      
    }),
  ],
})
