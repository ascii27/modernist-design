# Button

Actions on `.btn`: a solid accent primary, an outlined secondary, a text-only ghost, square icon buttons and a full-width block. Provide a native `<button type="button">` (or `<a>`) with the base `.btn` plus one variant class; add a Lucide SVG after the label for a trailing icon.

- `.btn-primary` — `color-accent` fill with `color-bg` text; hover `color-accent-600`, pressed `color-accent-700`. One per view, for the thing the page is for.
- `.btn-secondary` — 1px `color-divider` border, ink text; hover/pressed are 7%/14% ink tints.
- `.btn-ghost` — accent text, `space-1` side padding; hover/pressed are 10%/18% accent tints.
- `.btn-icon` — 34×34px, no padding; always give it an `aria-label`.
- `.btn-block` — 100% width, label flush LEFT (`justify-content: flex-start`), `space-2` top margin.

Labels use the heading face at weight 800, 13px. Disabled drops to 45% opacity.

Do: keep labels flush left, verb first. Don't: center a wide button's label, round its corners, or add a second filled color.

Contrast: the primary's `color-bg` label on `color-accent` is 3.8:1 at 13px/800 — below 4.5:1; kept exact from the source.
