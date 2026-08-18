# Portfolio content guide

Everything intended for regular editing lives in this directory: bilingual copy, project records, theme tokens, the CV, and project artwork.

## Add or remove a project

Create one JSON file in `projects/` by copying an existing file. The application loads every `*.json` file with `import.meta.glob`; no component registration is needed. Delete that JSON file to remove its card.

Required fields:

- `id`: unique kebab-case identifier
- `order`: unique positive integer controlling display order
- `title`, `period`, `summary`: objects containing non-empty `en` and `ru` strings
- `contributions`: non-empty `en` and `ru` string arrays
- `technologies`, `platforms`: non-empty string arrays
- `artwork`: relative path such as `./assets/projects/example.svg`
- `links`: array of `{ kind, label, url }` objects or an empty array. `kind` must be
  `googlePlay`, `appStore`, `steam`, `youtube`, or `website`; store links are rendered as
  prominent buttons with the appropriate icon.

Content validation runs when the application loads and during a production build. Errors identify the source file and missing or malformed field. Duplicate IDs/orders, missing assets, and non-HTTPS links fail clearly.

## Assets and CV

Store project artwork in `assets/projects/`. Assets are resolved by Vite through a generic `import.meta.glob(..., { query: '?url' })` map, so filenames can be changed by updating only the corresponding content path.

The downloadable PDF lives in `assets/cv/`. Its reference is the `cv` field in `site.ts`.

## Copy and localization

General site copy is in `site.ts`. Every visitor-facing text value uses `{ en, ru }`. English is the default; the selected locale is saved in local storage.

## Experience, demos, and contacts

- Experience entries in `site.ts` may have an optional `website` object with the same
  `{ kind, label, url }` shape as project links.
- The `youtube` record controls the demo section: update `url` and `embedUrl` together.
- `contact.primary` is the main contact card (Telegram); `contact.socials` contains the
  secondary Email, LinkedIn, and GitHub cards. Keep the Telegram `value` visible as a
  handle so visitors can copy it without opening the link.

## Theme

Edit `theme.css` to change color, font, spacing, radius, shadow, and transition tokens. The site uses local/system font stacks and does not request external font files.
