import { Outfit } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/context/ThemeContext';
import { LocaleProvider } from '@/context/LocaleContext'; 

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
              <LocaleProvider>
                {children}
              </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
