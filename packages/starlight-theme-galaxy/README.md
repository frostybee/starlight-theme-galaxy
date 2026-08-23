<h1 align="center">Starlight Theme Galaxy</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/starlight-theme-galaxy"><img src="https://img.shields.io/npm/v/starlight-theme-galaxy.svg" alt="npm version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
</p>

<p align="center">
  <a href="https://frostybee.github.io/starlight-theme-galaxy/"><strong>Documentation</strong></a> ·
  <a href="https://frostybee.github.io/starlight-theme-galaxy/getting-started/">Getting Started</a> ·
  <a href="https://github.com/frostybee/starlight-theme-galaxy/releases">Releases</a>
</p>

A customized Astro Starlight theme for publishing docs and educational content.

## Features

- Refined typography with [Inter](https://fontsource.org/fonts/inter) and [JetBrains Mono](https://fontsource.org/fonts/jetbrains-mono) fonts,
- Enhanced [Expressive Code](https://expressive-code.com/) blocks with custom themes and styling,
- Reading progress scroll bar in the header,
- Animated theme toggle (sun/moon) with smooth transitions,
- Custom-styled Starlight components (asides, cards, badges, tabs, steps, and more),
- Banner support with splash page variant,
- CSS cascade layers for predictable and easy style overrides,
- Light and dark theme support,
- Responsive design across all devices.

## Installation

```bash
npm install starlight-theme-galaxy
```

## Usage

Add the plugin to your `astro.config.mjs` file:

```js
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeGalaxy from 'starlight-theme-galaxy'

export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      title: 'My Docs',
    }),
  ],
})
```

For more details, check out the [getting started guide](https://frostybee.github.io/starlight-theme-galaxy/getting-started/) and the [customization docs](https://frostybee.github.io/starlight-theme-galaxy/customization/).

## License

Licensed under the [MIT License](https://github.com/frostybee/starlight-theme-galaxy/blob/main/LICENSE).
