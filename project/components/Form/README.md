# Form

Text fields, a segmented control and radios — all native elements, so focus, arrow keys and checked state need no script. Provide the markup; no JS.

- `.field` wraps a `<label>` (12px, 70% ink, above the field) and the control.
- `.input` on `<input>` or `<textarea>`: `color-surface` fill, 1px `color-divider` border, 36px min height, accent caret; hover darkens the border, focus turns it `color-accent`. Textareas start at 90px and resize vertically.
- `.radio` label → hidden `<input type="radio">` + `<span class="dot">`: a 16px ring that fills `color-accent` with a `color-bg` inset when checked. (The dot is the one round shape — it is a radio.)
- `.seg` with `.seg-opt` labels around hidden radios: a 1px-bordered strip; the checked option fills `color-accent` with `color-bg` text. Give the `.seg` `role="radiogroup"` and an `aria-labelledby`.

Pair forms with a `.btn-primary.btn-block` submit. Labels always sit above their fields.
