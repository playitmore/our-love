import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import socialPreview from '../images/social-preview.png';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://for-you-always-simple.arnozaajs.chatgpt.site'),
  title: 'For You, Always',
  description: 'A simple React anniversary website.',
  openGraph: {
    title: 'For You, Always',
    description: 'A simple love story, made for our anniversary.',
    type: 'website',
    images: [
      {
        url: new URL(
          typeof socialPreview === 'string' ? socialPreview : socialPreview.src,
          'https://for-you-always-simple.arnozaajs.chatgpt.site',
        ).toString(),
        width: 1733,
        height: 910,
        alt: 'For You, Always — a simple love story, made for our anniversary.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For You, Always',
    description: 'A simple love story, made for our anniversary.',
    images: [
      new URL(
        typeof socialPreview === 'string' ? socialPreview : socialPreview.src,
        'https://for-you-always-simple.arnozaajs.chatgpt.site',
      ).toString(),
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
