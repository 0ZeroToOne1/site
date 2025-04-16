import './globals.css';
import { Inter, Dancing_Script } from 'next/font/google';
import { Metadata } from 'next';
import ThemeProvider from './providers/ThemeProvider';
import ScrollProgressBar from './components/old/ScrollProgressBar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const script = Dancing_Script({ subsets: ['latin'], weight: '700', variable: '--font-script' });

export const metadata: Metadata = {
  title: 'Zero to One – MVPs, Fast.',
  description: 'We turn ideas into impressive, launch-ready products. Fast.',
  openGraph: {
    title: 'Zero to One',
    description: 'We turn ideas into impressive, launch-ready products. Fast.',
    url: 'https://zerotoone.so',
    siteName: 'Zero to One',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero to One',
    description: 'We turn ideas into impressive, launch-ready products. Fast.',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${script.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
