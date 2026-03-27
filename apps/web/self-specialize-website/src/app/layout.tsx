import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Self-Specialize Your Agents',
  description:
    'Portable context packages that make agents more aligned, more reusable, and more efficient.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
