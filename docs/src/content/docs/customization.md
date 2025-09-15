---
title: Customization
---

## Custom CSS

To customize the styles applied to your Starlight site when using `starlight-theme-galaxy`, you can provide additional CSS files to modify or extend Starlight and `starlight-theme-galaxy` default styles.

[Learn more about custom CSS in the Starlight documentation.](https://starlight.astro.build/guides/css-and-tailwind/#custom-css-styles)

## Cascade layers

Like Starlight, `starlight-theme-galaxy` uses [cascade layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers) internally to manage the order of its styles.
This ensures a predictable CSS order and allows for simpler overrides.
Any custom unlayered CSS will override the default styles from Starlight and `starlight-theme-galaxy`.

If you are using cascade layers, you can use [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) in your [custom CSS](https://starlight.astro.build/guides/css-and-tailwind/#custom-css-styles) to define the order of precedence for different layers relative to styles from the `starlight` and `galaxy` layers:

```css "starlight" "galaxy"
/* src/styles/custom.css */
@layer my-reset, starlight, galaxy, my-overrides;
```

The example above defines a custom layer named `my-reset`, applied before all Starlight and `starlight-theme-galaxy` layers, and another named `my-overrides`, applied after all Starlight and `starlight-theme-galaxy` layers.
Any styles in the `my-overrides` layer would take precedence over Starlight and `starlight-theme-galaxy` styles, but Starlight or `starlight-theme-galaxy` could still change styles set in the `my-reset` layer.
