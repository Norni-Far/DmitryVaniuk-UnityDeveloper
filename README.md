# Dmitry Vaniuk — Unity Developer Portfolio

A mobile-first bilingual portfolio built with React 19, TypeScript, and Vite 8. The site is designed for recruiter scanning while retaining enough engineering detail for technical reviewers.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
```

The production build is written to `dist/`. Vite is configured for the `/DmitryVaniuk-UnityDeveloper/` GitHub Pages base path.

## Editing content

All editable copy, project records, design tokens, media, and the downloadable CV are under `src/content/`.

- Edit general English/Russian copy in `src/content/site.ts`.
- Add a project by adding one bilingual JSON file to `src/content/projects/`.
- Remove a project by deleting its JSON file; cards are discovered automatically.
- Put project media in `src/content/assets/projects/`.
- Replace the CV PDF in `src/content/assets/cv/`.
- Change colors, font stacks, spacing, and radii in `src/content/theme.css`.

See [`src/content/README.md`](src/content/README.md) for the complete content schema and asset rules. Runtime validation fails clearly for incomplete translations, duplicate project IDs/orders, invalid links, and missing assets.

## Deployment

The workflow in `.github/workflows/deploy.yml` lints, builds, and deploys `dist/` to GitHub Pages on pushes to `main` or manual dispatch. In the repository settings, set Pages source to **GitHub Actions**.

TEST

Canonical URL: https://norni-far.github.io/DmitryVaniuk-UnityDeveloper/
