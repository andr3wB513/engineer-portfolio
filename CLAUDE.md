## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design

The site uses a fixed 5-color palette (dark theme). Always use the existing CSS custom
properties in `src/styles/global.css` rather than introducing new colors — do not
hardcode hex values in `.astro` files.

| Variable | Hex | Role |
|---|---|---|
| `--color-surface-deep` | `#1E2019` | Header, footer, code blocks (deepest layer) |
| `--color-bg` | `#393E41` | Main page background |
| `--color-surface` | `#454B50` | Card backgrounds (derived tint of `--color-bg`, for elevation) |
| `--color-secondary` | `#587B7F` | Tags/badges, secondary accents |
| `--color-text` | `#D3D0CB` | Primary text |
| `--color-text-muted` | `#A7ADA9` | Secondary/muted text (derived tint) |
| `--color-border` | `#52585C` | Borders, dividers (derived) |
| `--color-accent` | `#E2C044` | Primary accent — links, headings emphasis, buttons. Use sparingly. |
| `--color-accent-strong` | `#C7A93A` | Accent hover/active state (derived darker gold) |

If new UI needs a color not covered above, derive a tint/shade from one of the five
source hex codes (`393E41`, `D3D0CB`, `E2C044`, `587B7F`, `1E2019`) rather than picking
an unrelated color.

### Typography

Fonts are **IBM Plex Sans** (body/UI) and **IBM Plex Mono** (eyebrow text, tags, dates,
code), self-hosted via the `@fontsource/ibm-plex-sans` and `@fontsource/ibm-plex-mono`
npm packages — not loaded from an external CDN. Weight CSS files are imported once in
`src/layouts/BaseLayout.astro` (400/500/600/700 for Plex Sans, 400/500 for Plex Mono);
every page goes through that layout, so no other file needs to import fonts.

Use the existing variables rather than hardcoding font names:

| Variable | Value | Used for |
|---|---|---|
| `--font-sans` | `"IBM Plex Sans", ...` | Body text, nav, UI |
| `--font-mono` | `"IBM Plex Mono", ...` | Eyebrow labels, tags, dates, code |
| `--color-heading` | `#F2F0EC` | Headings (h1–h3) and the site wordmark — brighter than `--color-text` for contrast/emphasis |

Headings are bold (700 weight) with tight letter-spacing (`-0.02em`) and explicit sizes
(h1 2.75rem / h2 1.75rem / h3 1.2rem) so they stand out clearly against body copy. If
adding a new heading level or emphasis style, follow this same pattern rather than
relying on browser defaults.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
