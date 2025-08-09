// import fs from "node:fs";
// import path from "node:path";

// const DB_PATH = "/var/data/waitlist.db";
// const FILE_FALLBACK_PATH = "/var/data/waitlist.ndjson";

// type DB = {
//   pragma: (sql: string) => void;
//   exec: (sql: string) => void;
//   prepare: (sql: string) => { run: (...args: unknown[]) => void };
// };

// export async function ensureDb(): Promise<DB> {
//   // make sure folder exists
//   const dir = path.dirname(DB_PATH);
//   try {
//     fs.mkdirSync(dir, { recursive: true });
//   } catch {}
//   // Try native SQLite first (optional dependency). If unavailable, fall back to a file-based stub.
//   try {
//     const mod = await import("better-sqlite3");
//     const Driver: any = (mod as any).default ?? (mod as any);
//     const db: DB = new Driver(DB_PATH);
//     db.pragma("journal_mode = WAL");
//     db.exec(
//       `CREATE TABLE IF NOT EXISTS waitlist (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         email TEXT UNIQUE NOT NULL,
//         firstName TEXT,
//         createdAt TEXT NOT NULL
//       );`
//     );
//     return db;
//   } catch {
//     // File-based fallback that mimics a tiny subset of the DB API used by insertWaitlist
//     try {
//       // Ensure fallback file exists and pre-load existing emails to enforce uniqueness
//       if (!fs.existsSync(FILE_FALLBACK_PATH)) {
//         fs.writeFileSync(FILE_FALLBACK_PATH, "", { encoding: "utf8" });
//       }
//     } catch {}

//   const existingEmails = new Set<string>();
//     try {
//       const data = fs.readFileSync(FILE_FALLBACK_PATH, "utf8");
//       if (data) {
//         for (const line of data.split("\n")) {
//           if (!line.trim()) continue;
//           try {
//             const obj = JSON.parse(line);
//             if (obj && obj.email) existingEmails.add(String(obj.email).trim().toLowerCase());
//           } catch {}
//         }
//       }
//     } catch {}

//     const fdb: DB = {
//       pragma: () => {},
//       exec: () => {},
//       prepare: (sql: string) => ({
//         run: (email: unknown, firstName: unknown, createdAt: unknown) => {
//           void sql; // keep signature compatibility without unused var warnings
//           const e = String(email ?? "").trim().toLowerCase();
//           if (!e) return;
//           if (existingEmails.has(e)) return; // mimic INSERT OR IGNORE unique(email)
//           const record = {
//             email: e,
//             firstName: (firstName as string) || null,
//             createdAt: String(createdAt ?? new Date().toISOString()),
//           };
//           try {
//             fs.appendFileSync(FILE_FALLBACK_PATH, JSON.stringify(record) + "\n", { encoding: "utf8" });
//             existingEmails.add(e);
//           } catch {}
//         },
//       }),
//     };
//     return fdb;
//   }
// }

// export function insertWaitlist(db: DB, email: string, firstName: string, createdAt: string) {
//   const stmt = db.prepare("INSERT OR IGNORE INTO waitlist (email, firstName, createdAt) VALUES (?, ?, ?)");
//   stmt.run(email.trim().toLowerCase(), firstName || null, createdAt);
// }
