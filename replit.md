# Tai Chi para Iniciantes — Quiz Funnel

## Overview
Multi-step quiz funnel app targeting women over 40 interested in Tai Chi. Warm, calm aesthetic with cream (#FDF6ED), pink (#DE77A5), sand (#EBE0D6), and Inter font.

## Architecture
- **Frontend**: React + TypeScript + Vite, Tailwind CSS, Framer Motion
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: `wouter` (frontend), Express (backend API)

## Quiz Flow
All quiz steps render at root URL `/` using a state machine (`useState(step)`) in `client/src/pages/Quiz.tsx`. No URL changes during navigation.

### Steps (1–26)
1. Age selector (landing page)
2. Welcome
3. Goals
4. Solution/Symptoms
5. Tai Chi Knowledge
6. Not Common Workout
7. Body Type Grid
8. Troubles (multi-select)
9. Focus Areas Grid
10. Walk Together
11. Pose Feeling
12. Proud Body
13. Touch Toes
14. Normal Day
15. Neck Stiffness
16. Weight Change
17. Stairs Endurance
18. Extend Arms (Sim/Não)
19. Studies Confirm (info)
20. Discomfort Areas (multi-select with images)
21. Restore Body (info)
22. Train Start (intensity preference)
23. Train Intensity (confirmation)
24. Train Duration
25. Evolve Without Suffering (info + chart)
26. Trace Path (personalization intro)

## File Structure
- `client/src/pages/Quiz.tsx` — Main quiz state machine
- `client/src/components/quiz/` — Individual step components (each receives `onNext`/`onBack` props)
- `shared/schema.ts` — Drizzle schema (users, quizSubmissions)
- `server/db.ts` — Database connection
- `server/storage.ts` — Storage interface (DatabaseStorage)
- `server/routes.ts` — API routes (`POST /api/quiz/submit`, `GET /api/quiz/submissions`)

## Assets
All images imported via `@assets/` alias (mapped to `attached_assets/` in vite.config.ts).

## Data
- No database used for quiz data — all answers kept in React state (frontend only)
- Answers passed between steps via props (e.g., step 22 selection → step 23 display)

## Key Design Tokens
- Background: `#FDF6ED` (cream)
- Accent: `#DE77A5` (pink)
- Sand buttons: `#EBE0D6`
- Gray text: `#6C7686`
- Font: Inter
