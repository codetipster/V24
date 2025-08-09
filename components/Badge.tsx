import * as React from "react";

export function Badge({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-medium shadow-lg ${className}`}>
      {children}
    </span>
  );
}
