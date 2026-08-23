# starlight-theme-galaxy

## 1.0.0

### Major Changes

- [`ffc2a62`](https://github.com/frostybee/starlight-theme-galaxy/commit/ffc2a621972c6b996db30f4d022d2d44a018a786) Thanks [@frostybee](https://github.com/frostybee)! - Upgrade to Astro v7 and Starlight 0.41. Drops support for Astro v6 and Starlight versions below 0.41.

## 0.8.0

### Minor Changes

- [`b3007ca`](https://github.com/frostybee/starlight-theme-galaxy/commit/b3007ca6413cb8b9a8946f9695fed98b27c42429) Thanks [@frostybee](https://github.com/frostybee)! - Udpate to Astro 6 and fix tab styling, mobile theme toggle, and broken accent colors

  ### Bug Fixes
  - Fix tabs stretching to fill full width ([#17](https://github.com/frostybee/starlight-theme-galaxy/issues/17))
  - Fix tab active indicator to use a rounded pill style centered on separator line
  - Remove per-tab gray underline from Starlight's default box-shadow
  - Fix theme toggle moon icon not rendering correctly due to SVG mask bug ([#18](https://github.com/frostybee/starlight-theme-galaxy/issues/18))
  - Show theme toggle in mobile header instead of burying it in the menu ([#18](https://github.com/frostybee/starlight-theme-galaxy/issues/18))
  - Fix 45 broken `rgba(var(--sl-color-accent), ...)` calls that silently produced no color: all accent shadows, glows, and borders now render correctly
  - Fix `hsla(var(--sl-color-bg), ...)` producing invalid CSS on hero page
  - Fix double `##` typo in light mode sidebar background color

  ### Breaking Changes
  - Minimum Node.js version is now 22.12.0
  - Minimum Starlight version is now 0.38.0
  - Minimum Astro version is now 6.0

## 0.7.0

### Minor Changes

- [`13212d5`](https://github.com/frostybee/starlight-theme-galaxy/commit/13212d5b7a22931bb33e6a562603e07cc528a156) Thanks [@frostybee](https://github.com/frostybee)! - Bug fixes and style improvements:
  - Reduced the height of code block headers for a more compact appearance.
  - Fixed table styles.
  - Removed outline around card component icons.

## 0.6.0

### Minor Changes

- [`5bb2bb3`](https://github.com/frostybee/starlight-theme-galaxy/commit/5bb2bb33a90dd7b954e5306d46bea8147d6bedf0) Thanks [@frostybee](https://github.com/frostybee)! - Fix issue with links not showing on card components and improve aside styles

## 0.5.2

### Patch Changes

- [`c6f433d`](https://github.com/frostybee/starlight-theme-galaxy/commit/c6f433d86d248a8cf1dc6eb14ed7887a3c28f147) Thanks [@frostybee](https://github.com/frostybee)! - Fix: Add aria-label to theme switcher for screen reader accessibility

## 0.5.1

### Patch Changes

- [`4797e3a`](https://github.com/frostybee/starlight-theme-galaxy/commit/4797e3a32d71c98bd53df77eb8f628b170863106) Thanks [@frostybee](https://github.com/frostybee)! - Fixed the issue with the sidebar item's left border not spanning multiple lines

## 0.5.0

### Minor Changes

- [`0b34c20`](https://github.com/frostybee/starlight-theme-galaxy/commit/0b34c202b5e312364b924e5270274645dab54f68) Thanks [@frostybee](https://github.com/frostybee)! - - Resolved missing language select component in header override, as reported in #9

## 0.4.0

### Minor Changes

- [`edff6ec`](https://github.com/frostybee/starlight-theme-galaxy/commit/edff6ece78c07edbf4a5b9ae84bac8cf5c13b960) Thanks [@frostybee](https://github.com/frostybee)! - - Refactored components' styling

## 0.3.0

### Minor Changes

- [`9550083`](https://github.com/frostybee/starlight-theme-galaxy/commit/9550083548be49ab9754d5a8fb2cc46073b08936) Thanks [@frostybee](https://github.com/frostybee)! - Updated the table of contents styling for a more compact layout.

## 0.2.0

### Minor Changes

- [`d95b45b`](https://github.com/frostybee/starlight-theme-galaxy/commit/d95b45ba35f404c16809bddba1b2d62623d51193) Thanks [@frostybee](https://github.com/frostybee)! - Add styling improvments to Starlight's user components

## 0.1.0

### Minor Changes

- [#3](https://github.com/frostybee/starlight-theme-galaxy/pull/3) [`9be459d`](https://github.com/frostybee/starlight-theme-galaxy/commit/9be459d58e42e7a444fffada34947ac69768dc03) Thanks [@frostybee](https://github.com/frostybee)! - Initial public release
