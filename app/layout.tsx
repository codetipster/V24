import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  variable: "--font-inter", 
  subsets: ["latin"], 
  weight: ["400", "500"],
  display: "swap" 
});
const spaceGrotesk = Space_Grotesk({ 
  variable: "--font-space-grotesk", 
  subsets: ["latin"], 
  weight: ["700"], 
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Vono24",
  metadataBase: new URL('https://vono24.com'),
  description: "From Payday to Every Day.",
  openGraph: {
    title: "Vono24 Coming Soon",
    description: "Your earnings, ready when life happens.",
    images: [
      {
  url: "/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Vono24",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-full bg-[#111827] text-white`}
        style={{
          fontFamily: 'var(--font-inter), ui-sans-serif, system-ui',
          fontWeight: 400
        }}
      >
        {children}
      </body>
    </html>
  );
}
