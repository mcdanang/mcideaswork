import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PT McIdeas Work Digital - Digital Solutions Provider',
  description: 'Leading digital solutions provider in Indonesia, specializing in AI-powered applications and digital wedding invitations.',
  keywords: ['digital solutions', 'AI applications', 'wedding invitations', 'Indonesia', 'IELTS', 'software development'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}