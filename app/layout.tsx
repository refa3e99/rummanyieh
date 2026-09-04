import type {Metadata} from 'next';
import { Aref_Ruqaa, Cairo } from 'next/font/google';
import './globals.css';

const arefRuqaa = Aref_Ruqaa({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-aref-ruqaa',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'رُمّانية | شاورما وبرغر',
  description: 'مطعم رُمّانية - أصالة الطعم في الشاورما والبرغر',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={`${arefRuqaa.variable} ${cairo.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-cream text-navy min-h-screen antialiased flex flex-col font-body">
        {children}
      </body>
    </html>
  );
}
