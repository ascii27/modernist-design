---
name: modernist-design
description: Build UI in the Modernist design system — flat, Swiss-modernist, Archivo type, one red accent, zero radius, strong 2px rules, grayscale photos. Use when the user asks for Modernist styling, or when a project's CLAUDE.md says it uses Modernist.
---

# Modernist design system

Source of truth: `/Users/michaelgalloway/dev/modernist-design` (mirrors the claude.ai artifact https://claude.ai/artifact/UiDc5Vfs4kczpvs9Go8GRY).

Before building anything, read `/Users/michaelgalloway/dev/modernist-design/project/README.md` (the brand book). For a specific component, read `project/components/<Name>/README.md` and copy the markup from its `preview.html`.

## Wiring it into a project

1. Copy `dist/modernist.css` into the project (e.g. `src/styles/modernist.css` or `public/`) and load it once, globally, before any other styles. It contains the Archivo font import, every token as a CSS variable, base type and all component classes. Re-copy it when the system changes; never edit the copy.
2. Plain HTML / any framework: use the classes below on native elements. No JavaScript is required.
3. React: use `className` with the same classes. Don't wrap them in new component libraries unless asked; if you do, keep the class names as the styling.
4. Tailwind: don't re-declare values. Map theme keys to the variables, e.g. Tailwind v4 `@theme inline { --color-bg: var(--color-bg); --color-accent: var(--color-accent); --font-sans: var(--font-body); --radius-*: initial; }` and keep `rounded-*` out of the markup.
5. Starting a new page or deck: copy `dist/templates/landing/` or `dist/templates/deck/` together with `dist/modernist.css` and `dist/assets/`, keeping the same relative layout.

## Rules (non-negotiable)

- Every color, font, space, radius and shadow comes from a variable: `var(--color-*)`, `var(--font-heading|body)`, `var(--font-heading-weight)`, `var(--space-1|2|3|4|6|8)`, `var(--radius-sm|md|lg)` (all 0), `var(--shadow-sm|md|lg)`. Never hard-code a hex, px spacing or font name the tokens carry.
- Ground `--color-bg` #f3f2f2, ink `--color-text` #201e1d, ONE accent `--color-accent` #ec3013. The accent is for the primary action and small emphasis; the system is mostly ink on ground. `--color-accent-2-*` is a stand-in — don't use it as a second voice.
- Paragraph-size text in red uses `--color-accent-700`, not the accent (3.8:1).
- No rounded corners anywhere. No gradients. No soft hairlines — major sections are separated by 2px `--color-divider` rules (`.hr`).
- Everything flush left: headings, hero copy, and labels inside wide buttons (`.btn-block` is left-aligned on purpose).
- Modular grid layouts: equal-width cells, visible structure.
- Every photograph goes in a `.grayscale` wrapper. Never tint imagery.
- Icons: Lucide, inline SVG, `stroke="currentColor"`, stroke-width 2.
- Focus: the built-in 2px accent `:focus-visible` ring. Don't restyle states per page.
- The only place red runs as a full field is a poster statement (a section divider slide, a closing banner).

## Class reference

| Class | Use |
| --- | --- |
| `.btn` + `.btn-primary` / `.btn-secondary` / `.btn-ghost`; `.btn-icon` (34×34, needs `aria-label`); `.btn-block` (full width, left label) | Actions. One primary per view. |
| `.tag` + `.tag-accent` / `.tag-neutral` / `.tag-outline` | Status and category labels. |
| `.field` > `label` + `.input` (input/textarea) | Text fields; label above. |
| `.radio` > hidden `input[type=radio]` + `.dot` | Radios. |
| `.seg` (role=radiogroup) > `.seg-opt` > hidden radio + text | Segmented control. |
| `.card` > `.card-kicker`, `.card-title`, `.card-body`, `.card-meta`; `.elev-sm/md/lg` | Content cards in grid cells. |
| `.nav` > `.nav-brand` + `a` (+ `aria-current="page"`) + optional `.btn-primary` | Header bar with 2px bottom rule. |
| `.table` | Data tables; reuse `.tag` in status cells, `.text-muted` for secondary columns. |
| `.dialog-backdrop` > `.dialog` > `.dialog-title`, `.dialog-body`, `.dialog-actions` | Modal; you provide open/close, focus trap, `role="dialog" aria-modal`. |
| `.hr` | 2px section rule. |
| `.grayscale` | Image wrapper. |
| `.text-muted` | Secondary text (55% ink). |
| Type classes `.h1`–`.h6`, `.body`, `.control`, `.label`, `.caption`, `.table-head`, `.eyebrow`, `.button-label`, `.title-card`, `.title-brand`, `.title-dialog` | Apply a text style to a non-heading element. |

## Before you finish

- grep your diff for `#`-hex, `rgb(`, `border-radius`, `rounded`, `text-align: center` and `linear-gradient` — each is almost always a violation.
- Check that body-size red text uses `--color-accent-700`.
