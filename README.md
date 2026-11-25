# Ali Raza Portfolio

A structured Next.js App Router portfolio built with TypeScript and React Server Components. All text content (profile, services, skills, projects, experience) lives in `src/data/portfolio.ts`; page sections and shared layout components live in `src/components/`.

## Requirements

- Node.js 20.9 or newer
- npm

## Develop

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```sh
npm run build
npm start
```

The résumé download is served from `public/Ali_Raza_Resume.pdf`.

## Adding your photo

Put a square image in `public/` (e.g. `public/ali.jpg`) and set `photo: "/ali.jpg"` in `src/data/portfolio.ts`. Until then the hero card shows your initials.

## Deploy

```sh
npx vercel        # preview
npx vercel --prod # live
```
