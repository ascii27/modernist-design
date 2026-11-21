Modernist is flat, architectural and set entirely in Archivo: a near-mono red on white, a visible modular grid, zero corner radius and strong 2px rules. Nothing floats and nothing is decorated — alignment and the strength of the dividers do all the organising, labels sit flush left (even inside buttons), and photography prints in pure black and white.

## How to use this

- Load `tokens.css` (the variables) and `components/bundle.css` (the component classes, which also imports Archivo from Google Fonts) on every page, and take every color, font, spacing, radius and shadow from the variables (`var(--color-*)`, `var(--font-*)`, `var(--space-*)`, `var(--radius-*)`, `var(--shadow-*)`). Never hard-code a hex, a font name or a px value the tokens already carry.
- Build with the classes below rather than inventing parallel ones; the component previews are plain HTML, so copy the markup.
- `templates/` holds starting points a consuming project can copy whole: `templates/landing/` (a one-page product landing) and `templates/deck/` (a twenty-one-slide presentation starter). Each loads the system through its `ds-base.js`.
- To change the look, edit `tokens.json` — `tokens.css`, every preview and the templates read from it — and keep this guide in step so it doesn't drift from what the CSS actually does.

## Direction

Modular grid layouts — content in equal-width cells, strong horizontal and vertical rhythm, visible structure. Use strong 2px dividers (`color-divider`) between major sections. Button labels are flush left — a button wider than its label starts the text at the left padding edge (trailing icon and all), never centered. Wrap hero and inline images in the `.grayscale` class — they print in pure black and white.

## Color

A light ground (`color-bg` #f3f2f2) with `color-text` #201e1d and a single accent `color-accent` #ec3013 (this is a mono scheme: no second accent was chosen — the `color-accent-2-*` tokens carry a machine-derived stand-in kept only so both sets resolve; treat them as one role). Each role carries a 100–900 tonal ramp (`color-neutral-100` … `color-accent-2-900`) generated in OKLCH on a shared perceptual lightness scale, so the same step of any ramp has the same visual weight. Use the light steps (100–300) for tinted fills, hovers and subtle borders, 500 as the role's base, and the dark steps (700–900) for text on tinted fills and for pressed states; prefer ramp steps over ad-hoc `color-mix()`. For elevation use `shadow-sm` / `shadow-md` / `shadow-lg` (already tuned to the ground) rather than ad-hoc box-shadows.

Contrast: `color-text` on `color-bg` is 14.9:1. The accent-to-ground pair is about 3.8:1 — enough for icons, large text and interface chrome, not for body copy — so for paragraph-size text in the accent use `color-accent-700` (6.4:1). Muted text built as 50–60% ink lands at 3.1–4.2:1 and `color-divider` at 2.4:1; these are kept exactly as the source defines them.

## Type

Archivo for headings over Archivo for body text, loaded as `--font-heading` / `--font-body`, headings at `--font-heading-weight` (800). Sizes are fixed: `h1` 42px down to `h6` 13px (uppercase, tracked 0.08em), `body` 15px / 1.55. Small UI text uses `control` (14px), `label` (12px), `caption` (11px) and `eyebrow` (10px, uppercase in the accent). Density 1.00× and radius 0px are already baked into the `--space-*` / `--radius-*` scales — use the variables, not raw numbers.

## Icons

Use Lucide icons (https://lucide.dev) throughout. Inline the SVG and leave `stroke`/`fill` on `currentColor` so icons take their color from the text around them; 20px standalone, 13–16px inside buttons and meta rows. See the Icons preview.

## Imagery

Every content photograph goes through the `.grayscale` wrapper (`filter: grayscale(1) contrast(1.08)`) — never place a raw, untreated image. The reference photograph is in `assets/Photography/`.

## Interaction states

Interactive states are themed, never browser defaults: give every interactive element a `:hover` tint and a pressed state from the accent ramp (one step past the base — `color-accent-600` on a light ground, `color-accent-400` on a dark one, or a `color-mix()` tint for outlined/ghost variants), and style keyboard focus with `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }` — never leave the default blue focus ring.

## Components

| Class | What it is | Preview |
| --- | --- | --- |
| `.btn` with `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-icon`, `.btn-block` | Actions — the primary is a solid accent fill | Button |
| `.tag` with `.tag-accent`, `.tag-accent-2`, `.tag-neutral`, `.tag-outline` | Small labels tinted from the ramps (mono palette: accent-2 reads the same as accent) | Tag |
| `.field` + `label`, `.input`, `.radio` + `.dot`, `.seg` + `.seg-opt` | Form fields and choices on native elements — no script | Form |
| `.card` with `.card-kicker`, `.card-title`, `.card-body`, `.card-meta`; `.elev-sm/md/lg` | Surface-filled content cards; elevation utilities | Card |
| `.nav` + `.nav-brand` | The header bar | Navigation |
| `.table` | Data tables with themed header and row rules | Table |
| `.dialog-backdrop` + `.dialog` (+ `.dialog-title/-body/-actions`) | A modal at the top elevation | Dialog |
| `.hr` | A strong 2px horizontal rule | Rule |
| `.grayscale` | The image wrapper — every content photograph goes through it | Imagery |

States are built in: hovers and pressed states come from the accent ramp, keyboard focus is the 2px accent `:focus-visible` ring, `::selection` is an accent tint, and disabled controls drop to 45% opacity. Don't restyle them per page.

## Do

- Let the grid show: equal-width cells, strong horizontal rules between sections, visible structure.
- Keep everything flush left — headings, copy, and the labels inside wide buttons.
- Use the accent sparingly, for the primary action and small emphasis; the system is mostly ink on ground. The one place red runs as a field is the poster statement — the deck's section dividers and the landing's closing banner — where type stays display-grade and the accent carries the page.
- Print photographs in black and white with the `.grayscale` wrapper.

## Don't

- Do not round a corner anywhere — `radius-md` is 0 on purpose.
- Do not center button labels or hero copy.
- Do not soften the rules into hairlines or drop them for whitespace.
- Do not tint or colorize imagery.

## Files

- `tokens.json` — the tokens (compiled to `tokens.css`).
- `components/bundle.css` — the component layer: base type and every class above.
- `components/<Name>/` — a live preview and guidelines per component.
- `assets/Photography/photo.jpg` — the reference photograph the imagery preview treats.
- `templates/landing/` — a starter page consuming the system the intended way (`index.html`, its `ds-base.js` loader, and the vendored `image-slot.js` its photograph mounts).
- `templates/deck/` — a presentation starter: cover, contents, dividers, bullets, column and quadrant layouts, a data table, charts and a timeline in static SVG, full- and half-bleed imagery, a quote.
