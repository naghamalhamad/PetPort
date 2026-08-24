# PetPort — Pet Care App Prototype

A clickable, front-end-only prototype of a pet care mobile app, built with React, Vite, Tailwind CSS, and React Router. Design sourced from Figma (`bMOAlpoNVYuoBe2cP5fYwR`) via the Figma MCP server.

All data is mocked locally in `src/data/mockData.js` and `src/data/calendarEvents.js` — there is no backend.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL. The app renders inside a phone-frame shell (390×844) centered on the page.

## Structure

- `src/components/` — shared chrome: `Screen`, `PhoneFrame`, `StatusBar`, `BottomNav`, `ScreenHeader`, `Icons`
- `src/context/AppState.jsx` — cart + selected-pet state shared across screens
- `src/data/` — mock pets, appointments, vets, salons, products, calendar events
- `src/screens/` — one folder/component per screen, grouped by flow (`onboarding/`, `calendar/`, `care/`, `grooming/`, `profile/`, `store/`)

## Navigation map

- `/` → Onboarding (1 → 2 → 3) → `/home` via "Get Started" or "Skip"
- `/home` — Dashboard; tapping a pet avatar opens `/profile/:petId`
- `/calendar`, `/calendar/list`, `/calendar/month` — daily / list / month views, switchable via the header icon
- `/care`, `/care/vet`, `/care/grooming`, `/care/upcoming` — Care tabs + full appointments list
- `/grooming/salons` → `/grooming/salons/:id` → `/grooming/salons/:id/photos`
- `/profile/:petId`, `/profile/:petId/medical` — per-pet dashboard and medical history
- `/store`, `/store/categories`, `/store/item/:id`, `/cart` — Store flow; "Add to Cart" updates the bottom-nav and header cart badge
- `/settings` — reachable from a pet's profile settings icon

## Note on design fidelity

Figma MCP access for this session was capped by the Starter plan's monthly tool-call quota (20 calls/month). Design context was pulled directly for 10 of the 21 screens (both Onboarding screens, Dashboard, all 3 Calendar views, and Care Overview/Vet/Grooming). The remaining 11 screens (Care Upcoming Appointments, the Grooming detail flow, both Pet Profile screens, the Store flow, and Settings) were built by extending the same design system (colors, typography, spacing, card/button/nav patterns) extracted from the confirmed screens, rather than from direct Figma exports.
