# Wanderlust

A Next.js 16 travel-destination web app. Browse curated destinations, view details, add packages, and manage bookings. Authentication is handled with Better Auth (MongoDB).

## Getting Started

Run from the `wonderlus/` directory:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env` file in `wonderlus/` (see `.env` example):

```env
BETTER_AUTH_SECRET=...
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URL=mongodb+srv://...
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start built app
- `npm run lint` — lint

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS v4, shadcn (base-nova on @base-ui/react), TypeScript, Better Auth, MongoDB.