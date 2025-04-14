import type { Metadata } from "next";
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Providers from './providers/ThemeProvider';
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

export const metadata: Metadata = {
  title: "ZeroToOne — Turn Bold Ideas Into Launch-Ready Software",
  description: "ZeroToOne is a software development agency that helps startups and entrepreneurs turn their bold ideas into launch-ready software.",
  openGraph: {
    title: 'ZeroToOne',
    description: 'Turn bold ideas into launch-ready software.',
    url: 'https://zerotoone.cloud',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZeroToOne – Product Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZeroToOne',
    description: 'Turn bold ideas into launch-ready software.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white text-gray-900 dark:bg-[#030b1a] dark:text-white ${inter.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
