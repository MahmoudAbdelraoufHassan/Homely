# Homely Real Estate App

Homely is a modern real estate landing and browsing application built with React and Vite. It allows users to explore featured properties, browse the full listings catalog, view detailed property information, read market insights articles, and contact the agency through a contact form.

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
- JSON Server for mock API data
- Lucide + Phosphor icon libraries

## Project Structure

```bash
realstate-app/
├── public/                 # Static assets and images
├── src/
│   ├── data/              # Mock data source (JSON)
│   ├── features/          # Reusable product/property UI blocks
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Route pages
│   ├── services/          # Data-fetching functions
│   ├── ui/                # Shared UI components
│   ├── utils/             # Helper functions
│   ├── App.jsx            # App router configuration
│   ├── index.css          # Global styles
│   └── main.jsx           # App bootstrap
├── db.json                # Root JSON mock database
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

The application uses a JSON Server API to provide mock data. The source data lives in:

- [`src/data/db.json`](./src/data/db.json)

The app expects the API at `http://localhost:3000` by default.

## Prerequisites

Before running the project, make sure you have installed:

- Node.js (v18 or newer recommended)
- npm

## Installation

```bash
npm install
```

## Running the Project

Run the mock API and the app in separate terminals:

```bash
npm run server
npm run dev
```

Then open:

- Frontend: `http://localhost:5173`
- API: `http://localhost:3000`

## Available Scripts

```bash
npm run dev     # start the Vite development server
npm run build   # create a production build
npm run preview # preview the production build locally
npm run server  # start the JSON Server mock API
npm run lint    # run ESLint checks
```

## API Endpoints

The mock backend exposes endpoints such as:

- `http://localhost:3000/properties`
- `http://localhost:3000/blogs`
- `http://localhost:3000/testimonials`

The app uses the `VITE_API_URL` environment variable if set; otherwise it defaults to `http://localhost:3000`.

## Notes

This project uses demo content for illustrative purposes only. The listed properties, articles, buyer stories, and testimonials are example data and are not verified listings or customer reviews.

Property and article images are stock photography used for the demo experience.

## License

This project is for educational/demo use and does not include a formal production license unless specified separately.
