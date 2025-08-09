"use client";
import * as React from "react";
import { useFormStatus } from "react-dom";
import { joinWaitlist } from "@/app/actions";
import { Button } from "@/components/ui/moving-border";

export function WaitlistForm() {
  const [status, setStatus] = React.useState<{ ok: boolean; message: string } | null>(null);
  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        className="space-y-6"
        action={async (formData: FormData) => {
          const res = await joinWaitlist(formData);
          setStatus(res);
        }}
      >
        {/* Main inputs row */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
            <label htmlFor="email" className="sr-only">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              autoComplete="email" 
              placeholder="Enter your email address" 
              className="w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-8 py-5 text-white placeholder-white/60 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCC00] focus-visible:border-[#FFCC00] transition-all duration-300 text-lg" 
            />
            
            <div>
              <label htmlFor="firstName" className="sr-only">First name</label>
              <input 
                id="firstName" 
                name="firstName" 
                type="text" 
                placeholder="First name (optional)" 
                className="w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-8 py-5 text-white placeholder-white/60 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] focus-visible:border-[#14B8A6] transition-all duration-300 text-lg" 
              />
            </div>
          </div>
          
          {/* Consent and Submit row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-center">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <input 
                id="consent" 
                name="consent" 
                type="checkbox" 
                className="size-5 rounded border border-white/30 bg-white/10 text-[#FFCC00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCC00]" 
              />
              <label htmlFor="consent" className="text-sm text-white/80 select-none cursor-pointer">
                I agree to be contacted about pilot onboarding
              </label>
            </div>
            
            {/* Submit button with moving border */}
            <div className="flex justify-center lg:justify-end">
              <SubmitButton />
            </div>
          </div>
        </div>
        
        <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
        
        {/* Status message */}
        <div aria-live="polite" className="min-h-6 text-center">
          {status && (
            <p className={`text-sm font-medium ${status.ok ? "text-[#14B8A6]" : "text-red-400"}`}>
              {status.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      borderRadius="1rem"
      className="bg-gradient-to-r from-[#FFCC00] to-[#FFCC00]/90 text-[#003366] font-semibold text-lg border-none min-w-[160px] h-14"
      borderClassName="bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] opacity-80"
      duration={3000}
      disabled={pending}
    >
      {pending ? "Requesting..." : "Request Pilot"}
    </Button>
  );
}
