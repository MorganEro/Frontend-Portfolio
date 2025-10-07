import type { Metadata } from 'next';
import { Ibarra_Real_Nova, Public_Sans } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/navigation/site-header';
import SiteFooter from '@/components/navigation/site-footer';
import Container from '@/components/layout/Container';
import { Toaster } from '@/components/ui/sonner';

/* Headings */
const ibarra = Ibarra_Real_Nova({
  variable: '--font-ibarra',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

/* Body */
const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const fontVariables = [ibarra.variable, publicSans.variable].join(' ');

export const metadata: Metadata = {
  title: "Morgan's Portfolio",
  description:
    'Welcome to my personal portfolio showcasing my work and projects.',
  icons: {
    icon: [{ url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full">
      <head>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
          defer></script>
      </head>
      <body className={`${fontVariables} h-full flex flex-col`}>
        <SiteHeader />
        <main className="flex-1">
          <Container>{children}</Container>
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
