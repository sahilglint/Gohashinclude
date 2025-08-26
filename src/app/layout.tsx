import Header from './Header';
import './globals.css';
import { Instrument_Sans } from 'next/font/google';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} scroll-smooth`}>
      <body className="bg-background text-foreground font-sans transition-colors duration-300">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
