# For You, Always

A simple React anniversary website designed to be easy to understand and customize.

## Where everything is

All website code and images are inside `src`:

- `src/content.ts` — names, messages, memories, colors, and image imports
- `src/Website.tsx` — the HTML-like React page
- `src/app/globals.css` — all design and responsive styles
- `src/images` — every image used by the website
- `src/images/albums` — add titled photo albums without changing React code
- `src/app/page.tsx` — a tiny file that displays `Website.tsx`
- `src/app/layout.tsx` — the page title and description

Files outside `src`, such as `package.json`, are only project setup files. They are not website content.

## Run it in Visual Studio Code

1. Open this folder in Visual Studio Code.
2. Open **Terminal → New Terminal**.
3. Run `npm run dev`.
4. Open the local address shown in the terminal.

## How React works here

React uses TSX, which looks like HTML inside TypeScript. `page.tsx` displays the `Website` component. `Website.tsx` reads your details from `content.ts`. The browser then applies the styles from `globals.css`.

Start by editing `src/content.ts`. You do not need to understand the rest before personalizing the website.

## Add a new photo album

1. Open `src/images/albums`.
2. Create a folder named after the album, such as `Beach Trip 2026`.
3. Place your JPG, PNG, WEBP, AVIF, or GIF images inside that folder.
4. Push your changes to GitHub.

The folder name becomes the album title automatically, and every image inside
it appears in that album. You do not need to edit the React code.
