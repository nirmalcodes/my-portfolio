import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import STTButton from '@/components/STTButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nirmal Fernano',
  description: 'This is my portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <STTButton />
      </body>
    </html>
  );
}