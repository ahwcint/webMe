import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import '@/styles/globals.css';
import { Toaster } from '@/components/ui/toaster';

const font = Kanit({ subsets: ['latin'], weight: ['300'] });

export const metadata: Metadata = {
  title: 'webMe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font.className} dark`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
