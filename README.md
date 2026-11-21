# modernist-design

Version-controlled copy of **Modernist** — a flat, architectural design system set in Archivo: one red accent on a light ground, a visible modular grid, zero radius, strong 2px rules, grayscale photography.

Live artifact: https://claude.ai/artifact/UiDc5Vfs4kczpvs9Go8GRY

## Layout

| Path | What |
|---|---|
| `project/` | Mirrors the artifact's files one-to-one (README brand book, `tokens.json`, `tokens.css`, `components/`, `templates/`, `assets/`) |
| `dist/modernist.css` | **The one stylesheet consumers load** — font import, tokens, base type and every component class |
| `dist/tokens.json` | Tokens as data |
| `dist/templates/` | Landing page and deck starters wired to `dist/modernist.css` |
| `skill/modernist-design/SKILL.md` | Claude Code skill: how to build with Modernist |
| `scripts/build.mjs` | Regenerates `project/tokens.css` and `dist/` (no dependencies) |

## Use it from Claude Code

Install the skill once, for every project:

```sh
mkdir -p ~/.claude/skills && ln -s ~/dev/modernist-design/skill/modernist-design ~/.claude/skills/modernist-design
```

Then in any project, ask Claude Code to "use the Modernist design system", or add a line to that project's `CLAUDE.md`:

```md
UI uses the Modernist design system (skill: modernist-design). Load dist/modernist.css; follow its rules.
```

## Change it

Edit under `project/`, run `node scripts/build.mjs`, commit. Ask Claude to push the changed `project/` files back to the artifact (or pull the artifact's latest into here). `SOURCE.json` records the artifact version last synced.
