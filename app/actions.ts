"use server";

import { headers } from "next/headers";
// import { ensureDb, insertWaitlist } from "@/lib/db";
import { allowAttempt } from "@/lib/rateLimit";
import { waitlistSchema } from "@/lib/validate";

export type JoinWaitlistResult = { ok: boolean; message: string };

export async function joinWaitlist(formData: FormData): Promise<JoinWaitlistResult> {
  // Honeypot
  const hp = (formData.get("hp") as string | null) ?? "";
  if (hp) {
    return { ok: true, message: "Thanks!" }; // silently ignore bots
  }

  const email = (formData.get("email") as string | null) || "";
  const firstName = (formData.get("firstName") as string | null) || "";
  const consentRaw = formData.get("consent");
  const consent = consentRaw === "on" || consentRaw === "true" || consentRaw === "1";
  const audience = (formData.get("audience") as string | null) || "";

  const parsed = waitlistSchema.safeParse({ email, firstName, consent });
  if (!parsed.success) {
    return { ok: false, message: "Check your email and try again" };
  }

  // Rate limit by IP
  const h = await headers();
  const ipCandidate =
    h.get("x-forwarded-for")?.split(",")[0].trim() ||
    h.get("x-real-ip") ||
    h.get("cf-connecting-ip") ||
    "unknown";
  const allowed = allowAttempt(ipCandidate);
  if (!allowed) {
    return { ok: false, message: "Please wait a moment and try again" };
  }

  const timestamp = new Date().toISOString();
  const payload = { email: parsed.data.email, firstName: parsed.data.firstName || "", source: "comingSoon", timestamp, audience };

  try {
    if (process.env.WAITLIST_WEBHOOK_URL) {
      await fetch(process.env.WAITLIST_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      });
    } else {
    //   const db = ensureDb();
    //   insertWaitlist(db, payload.email, payload.firstName, timestamp);
    }
  } catch {
    return { ok: false, message: "Something went wrong. Please try again" };
  }

  return { ok: true, message: "You are on the list. We will notify you before launch" };
}
