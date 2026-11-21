# modernist-design

This repo IS the Modernist design system. `project/` mirrors the claude.ai Design System artifact file-for-file; `dist/` is what other projects consume.

- Edit tokens in `project/tokens.json` (list-shaped: `color.tokens`, `spacing.tokens`, … — never a DTCG name→value map), components in `project/components/bundle.css`, guidance in `project/README.md` and `project/components/<Name>/README.md`.
- After any change under `project/`, run `node scripts/build.mjs`. It regenerates `project/tokens.css` and all of `dist/`. Never hand-edit `dist/` or `project/tokens.css`.
- Keep `skill/modernist-design/SKILL.md` in step with the README when rules or classes change.
- Previews (`project/components/*/preview.html`) don't link a stylesheet — the artifact page injects tokens.css and bundle.css. To view one locally, open it with `dist/modernist.css` injected.
- `project/templates/` reference the photo as an artifact upload (`/_blob/…`); `dist/templates/` use the local `assets/photo.jpg`.
- Sync: "pull Modernist from the artifact" = read its `project/` files into here and update `SOURCE.json`; "push Modernist" = publish changed `project/` files back (index `project/design-system.json` last). The artifact is https://claude.ai/artifact/UiDc5Vfs4kczpvs9Go8GRY.
