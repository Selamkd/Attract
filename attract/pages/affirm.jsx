import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import MainCard from '../components/Maincard';
import AffirmCard from '../components/AffirmCard';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function AffirmPage() {
  useEffect(() => {
    document.body.classList.add('disable-scroll');

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, []);
  return (
    <main>
      <Header />
      <AffirmCard />
    </main>
  );
}
