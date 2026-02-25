# Tai Chi para Iniciantes — Quiz Funnel

## Overview
Multi-step quiz funnel app targeting women over 40 interested in Tai Chi. Warm, calm aesthetic with cream (#FDF6ED), pink (#DE77A5), sand (#EBE0D6), and Inter font.

## Architecture
- **Frontend**: React + TypeScript + Vite, Tailwind CSS, Framer Motion
- **Backend**: Express.js + TypeScript (minimal, no DB for quiz)
- **Routing**: `wouter` (frontend), Express (backend API)

## Quiz Flow
All quiz steps render at root URL `/` using a state machine (`useState(step)`) in `client/src/pages/Quiz.tsx`. No URL changes during navigation.

### Steps (1–31)
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
22. Train Start (intensity preference) → saves answer
23. Train Intensity (shows step 22 selection dynamically)
24. Train Duration
25. Evolve Without Suffering (info + chart)
26. Trace Path (personalization intro)
27. Height Input (slider, cm/pol toggle, saves heightCm)
28. Weight Input (kg/lb toggle, calculates IMC from height, saves weightKg)
29. Target Weight (kg/lb, shows % reduction from current weight)
30. Ideal Body (2x2 grid with images)
31. Loading Analysis (animated progress circle, auto-advances)

## File Structure
- `client/src/pages/Quiz.tsx` — Main quiz state machine with `answers` state
- `client/src/components/quiz/` — Individual step components (each receives `onNext`/`onBack` props, some receive/emit data)
- `shared/schema.ts` — Drizzle schema (users only)
- `server/storage.ts` — In-memory storage interface
- `server/routes.ts` — Empty routes (no API needed for quiz)

## Data Flow
- All answers kept in React state (`answers` object in Quiz.tsx) — no database
- `saveAnswer(key, value)` stores data; passed as props to subsequent steps
- Key data flow: height (step 27) → IMC calc (step 28) → target weight % (step 29)
- Train intensity (step 22) → displayed in step 23

## Assets
All images imported via `@assets/` alias (mapped to `attached_assets/` in vite.config.ts).

## Key Design Tokens
- Background: `#FDF6ED` (cream)
- Accent: `#DE77A5` (pink)
- Sand buttons: `#EBE0D6`
- Gray text: `#6C7686`
- Font: Inter
