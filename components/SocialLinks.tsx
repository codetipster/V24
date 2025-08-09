import * as React from "react";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export function SocialLinks() {
  const links = [
    { href: "https://x.com", label: "X", icon: Twitter },
    { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
    { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  ];
  return (
    <div className="flex items-center gap-6">
      {links.map(({ href, label, icon: Icon }) => (
        <a 
          key={label} 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer nofollow" 
          aria-label={label} 
          className="text-white/60 hover:text-[#FFCC00] transition-colors duration-200"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
