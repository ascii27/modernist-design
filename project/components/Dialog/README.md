# Dialog

A modal: `.dialog-backdrop` (fixed, full-viewport, centered grid, `color-neutral-900` scrim at 50%) containing `.dialog` (max 440px, `color-surface`, `space-4` padding, `shadow-lg`, square corners). Inside: `.dialog-title` (20px heading face), `.dialog-body` (14px), `.dialog-actions` (right-aligned row: secondary first, primary last).

The consumer provides open/close behaviour, focus trapping and `role="dialog" aria-modal="true" aria-labelledby`. The preview pins the backdrop inside a frame; in a real page it covers the viewport.
