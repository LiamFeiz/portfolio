# Portfolio

Personal site for Liam Feiz, Senior Full-Stack & AI Developer.

## Architecture

Content lives in `src/content/profile.ts`. Pages and sections read from that file instead of hardcoding resume copy.

```
src/
  content/profile.ts     # resume as structured data
  lib/types.ts           # Profile, Experience, Skills, ...
  app/                   # Next.js App Router (layout + homepage)
  components/
    layout/              # header, footer
    sections/            # hero, work, experience, skills, contact
    ui/                  # shared layout primitives
```

The homepage is a single-route, sectioned page. Profile data also retains education details for future use. Featured work is based on BoldSpan product work until dedicated case studies exist.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```
