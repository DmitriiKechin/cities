import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const helveticaNeue = localFont({
  src: [
    {
      path: '../assets/fonts/HelveticaNeueCyr-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNeueCyr-Medium.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-helvetica',
});

export const metadata: Metadata = {
  title: 'Cities',
  description: 'Game to Cities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.className} flex min-h-screen flex-col items-center justify-between bg-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
