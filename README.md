# Real Estate Listings App

A React + TypeScript app for browsing property listings with advanced filtering, search, and pagination, powered by URL-based state management.

---

## Features

- **Property Listings:** Responsive display of property cards with mock data.
- **Filtering:** Dynamic filters for rent, lease, buy, or all.
- **Search:** Search by property type, location, and price range.
- **Pagination:** Paginated listings for easy navigation.
- **URL State:** Filter, search, and pagination states are synced to the URL for shareable links and browser navigation.
- **Reset Filters:** Easily reset all filters to default.
- **React Suspense:** Loading state management for listings section.
- **Newsletter Subscription:** Section to subscribe to newsletters.
- **UI Layout:** Site-wide navbar and footer with responsive styling.

---

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install

npm run dev

```

The app will run locally, usually at http://localhost:5173/


## Project Structure

- `src/hooks` — Custom reusable hooks for filtering, search params, and pagination logic.
- `src/components` — UI components including listings, filters, search bar, pagination, and newsletter.
- `src/resources` — Mock data and resource fetching logic.
- `src/types` — TypeScript type definitions.
- `src/utils` — Utility functions for formatting and normalization.
- `src/assets` — Static assets like images, icons, and styles.
- `public` — Dynamic data and static files served directly (e.g., JSON files, images).



## Notes

- Filtering, search, and pagination are all synchronized via URL search parameters.
- React Suspense is used to provide a better loading experience in the listings section.
- Newsletter subscription section implemented with basic UI

### Scripts

```bash
npm run dev      # Run the development server
npm run build    # Build for production
npm run preview  # Preview production build
```
