import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().email(),
  firstName: z.string().max(100).optional().or(z.literal("")),
  consent: z.boolean().optional(),
});
