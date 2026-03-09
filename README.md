# loops.md

`loops.md` is a directory-first library of autonomous business experiment loops for B2B growth and ops teams.

## Stack

- Next.js 16.1.6
- React 19.2.4
- Tailwind CSS 4.2.1
- TypeScript 5.9.3
- Node 24 LTS recommended (`.nvmrc` is included)

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project shape

- `src/app` route tree
- `src/components` reusable UI
- `src/lib` typed content loading and validation
- `content/loops` local template content files

## Content model

Every loop exposes three visible sections:

- `baseline`: fixed context, ICP, guardrails, and non-negotiables
- `template`: the asset or workflow being changed
- `program`: the scoring rule, review window, and keep/discard logic

## Contributing

The site is intentionally repo-backed. To add a new loop:

1. Duplicate the closest category file pattern in `content/loops`.
2. Follow the `LoopTemplate` schema in `src/lib/types.ts`.
3. Add the new slug to related loops where useful.
4. Open a pull request with the new content.
