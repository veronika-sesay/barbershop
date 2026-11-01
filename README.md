# De Kubes Barber

A responsive, single-page website for De Kubes Barber. It presents barber services and prices, business hours, a photo gallery, the shop location, and contact details, with a link to online appointment booking.

## Getting started

You’ll need Node.js and npm installed.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite to view the site.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run `npm run build` first. |

## Project structure

```text
src/
  assets/fonts/     Local font files and font styles
  pages/
    HomePage/       Services, hours, gallery, location, and contact sections
    Navigation/     Responsive page navigation
    Footer/         Business information and site credits
  global.css        Global styles
  index.jsx         React app entry point and routes
public/             Static assets served as-is
```

The app is built with React and Vite. Its production output is a static site in `dist/`, which can be deployed to a static hosting provider.
