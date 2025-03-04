import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Doréa Mokhtari',
  description: 'Doréa Mokhtari Portfolio Développeuse Front-End.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body
        className="antialiased bg-cover bg-center bg-no-repeat"
        style={{}}
      >
        {children}
      </body>
    </html>
  );
}