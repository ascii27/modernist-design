# Card

A surface-filled content block: `.card` (flex column, `space-2` gap, `space-3` padding, `color-surface` fill, square corners) holding, in order, `.card-kicker` (10px uppercase accent eyebrow), `.card-title` (17px heading face), `.card-body` (13px at 80% opacity, grows to fill), and `.card-meta` (11px muted row with a 13px Lucide icon).

Lay cards out in equal-width grid cells. Cards sit flat by default; add `.elev-sm`, `.elev-md` or `.elev-lg` (`shadow-sm/md/lg`) only when one must lift — `md` for popovers, `lg` for dialogs.

Contrast: the meta row (50% ink on `color-surface`) is 3.1:1 — kept exact from the source; keep meta text non-essential.
