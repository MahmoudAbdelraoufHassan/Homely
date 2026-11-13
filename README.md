# Homely Real Estate App

Homely is a modern real estate landing and browsing application built with React and Vite. It allows users to explore featured properties, browse the full listings catalog, view detailed property information, read market insights articles, and contact the agency through a contact form. Property, blog, and testimonial data is loaded from a static JSON file, so no separate API server is required.

## Overview

This project is a single-page real estate website with a polished UI and route-based browsing experience. The app includes:

- Hero section with featured properties
- Real estate property listing pages
- Property detail pages with gallery, highlights, and buyer testimonial
- Blog and article section with real estate insights
- Contact page with a mailto-based inquiry form
- Responsive design for desktop, tablet, and mobile devices

## Tech Stack

- React 19
- Vite
- React Router DOM
- Styled Components
- Swiper
- Static JSON data served with the frontend
- Lucide + Phosphor icon libraries

## Project Structure

```bash
realstate-app/
├── public/                 # Static assets, images, and db.json data
├── src/
│   ├── features/          # Reusable product/property UI blocks
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Route pages
│   ├── services/          # Data-fetching functions
│   ├── ui/                # Shared UI components
│   ├── utils/             # Helper functions
│   ├── App.jsx            # App router configuration
│   ├── index.css          # Global styles
│   └── main.jsx           # App bootstrap
├── package.json           # Scripts and dependencies
├── vite.config.js        # Vite config
├── eslint.config.js      # ESLint config
├── index.html            # HTML entry point
└── README.md             # Project documentation
```

## Features

### Property browsing
- View a featured property carousel on the homepage
- Browse all available properties in a listing page
- Open detailed pages for each property with image gallery and summary details
- See property highlights, features, and buyer testimonials

### Content pages
- Read blog posts related to real estate and housing tips
- Open individual blog detail pages

### Contact flow
- Contact page with a form that prepares an email using the user's details
- Includes property-specific contact routing via URL query parameters such as `?property=...`

### Design
- Modern real estate UI
- Responsive layout with mobile-first styling patterns
- Reusable section and card components

## Data Source

The application loads its read-only data from:

- [`public/db.json`](./public/db.json)

## Prerequisites

Before running the project, make sure you have installed:

- Node.js (v20.19+ or v22.12+ recommended for Vite 8)
- npm

## Installation

```bash
npm install
```

## Running the Project

```bash
npm run dev
```

Open the frontend URL printed by Vite (normally `http://localhost:5173`). The data file is served at `/db.json` during development and included automatically in the production build.

## Available Scripts

```bash
npm run dev     # start the Vite development server
npm run build   # create a production build
npm run preview # preview the production build locally
npm run lint    # run ESLint checks
```

## Deployment

Build the project with `npm run build` and deploy the generated `dist/` folder to any static hosting provider. No JSON Server or `VITE_API_URL` configuration is needed. Ensure the host serves `index.html` for client-side routes such as `/properties` and `/blog`; enable the host's SPA fallback option if needed.

The JSON data is read-only in the deployed app. Editing listings or submitting form data does not update `public/db.json`; the contact form opens an email draft.

## Notes

This project uses demo content for illustrative purposes only. The listed properties, articles, buyer stories, and testimonials are example data and are not verified listings or customer reviews.

Property and article images are stock photography used for the demo experience.

## License

This project is for educational/demo use and does not include a formal production license unless specified separately.
