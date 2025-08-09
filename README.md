## Vono24 Coming Soon

Production-grade Coming Soon site in Next.js App Router with TypeScript, Tailwind v4, and shadcn tokens.

### Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Build and start

```bash
npm run build
npm start
```

### Environment variables
- LAUNCH_AT (optional): ISO-8601 timestamp used for countdown. Example: 2025-12-01T10:00:00Z
- WAITLIST_WEBHOOK_URL (optional): if set, joinWaitlist POSTs JSON {email, firstName, source:"comingSoon", timestamp}

If WAITLIST_WEBHOOK_URL is not set, waitlist entries are persisted to local SQLite at /var/data/waitlist.db.

### Server Action
`app/actions.ts` exposes `joinWaitlist(formData)` with:
- Zod validation
- IP rate limit (in-memory token bucket)
- Webhook or SQLite persistence via better-sqlite3

### Accessibility
- AA contrast, visible focus, aria-live for messages, keyboard friendly

### Fonts
- Inter (default), Space Grotesk for headings via next/font
