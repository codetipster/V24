// Simple in-memory token bucket per IP
// Allows burst of 5 and refill 1 token per 5 seconds

const buckets = new Map<string, { tokens: number; last: number }>();
const CAPACITY = 5;
const REFILL_INTERVAL_MS = 5000;
const REFILL_TOKENS = 1;

export function allowAttempt(key: string) {
  const now = Date.now();
  const b = buckets.get(key) || { tokens: CAPACITY, last: now };
  // refill
  const elapsed = now - b.last;
  const refills = Math.floor(elapsed / REFILL_INTERVAL_MS);
  if (refills > 0) {
    b.tokens = Math.min(CAPACITY, b.tokens + refills * REFILL_TOKENS);
    b.last = now;
  }
  if (b.tokens <= 0) {
    buckets.set(key, b);
    return false;
  }
  b.tokens -= 1;
  buckets.set(key, b);
  return true;
}
