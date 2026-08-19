import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Konfigurasi Fonts menggunakan CSS Variables
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Metadata Gabungan (Menggunakan identitas James Bangguna dengan struktur SEO yang lebih lengkap)
export const metadata: Metadata = {
  title: {
    default: 'James Bangguna | Frontend Engineer',
    template: '%s | James Bangguna',
  },
  description:
    'Professional Frontend Engineer Portfolio built with Next.js, TypeScript, Tailwind CSS and modern web technologies.',
  keywords: [
    'Frontend Developer',
    'Frontend Engineer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Tailwind CSS',
    'Portfolio',
  ],
  openGraph: {
    title: 'James Bangguna',
    description:
      'Professional Frontend Engineer Portfolio built with Next.js, TypeScript, and Tailwind CSS.',
    type: 'website',
    locale: 'en_US',
  },
  metadataBase: new URL('https://your-domain.com'), // Silakan sesuaikan dengan domain asli nanti
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn('font-sans', geist.variable)}
    >
      <body
        className={cn(
          inter.variable,
          'min-h-screen bg-[#050816] text-white antialiased'
        )}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
