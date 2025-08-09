import * as React from "react";
import Image from "next/image";

type Props = { className?: string; variant?: "light" | "dark" };

export function Logo({ className, variant = "light" }: Props) {
  const logoSrc = variant === "dark" ? "/logo-white.svg" : "/logo.svg";
  
  return (
    <Image
      src={logoSrc}
      alt="Vono24"
      width={64}
      height={64}
      className={className}
      priority
    />
  );
}

export function LogoMono({ className, variant = "light" }: Props) {
  const color = variant === "dark" ? "#E5E7EB" : "#111827";
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="V mark">
      <path d="M32 32c-4-6-9-10-14-10C11 22 6 27 6 32s5 10 12 10c5 0 10-4 14-10z" fill={color} opacity={0.15} />
      <path d="M32 32c4 6 9 10 14 10 7 0 12-5 12-10s-5-10-12-10c-5 0-10 4-14 10z" fill={color} opacity={0.15} />
      <path d="M20 12l12 20 12-20" stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
