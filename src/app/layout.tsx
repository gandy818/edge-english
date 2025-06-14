import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingMenu from '@/components/FloatingMenu';

export const metadata: Metadata = {
  title: '엣지영어',
  description: '영어 강사들이 만든 원어민 화상영어 브랜드입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Header />

        <main>{children}</main>

        <FloatingMenu />
        <Footer />
      </body>
    </html>
  );
}
