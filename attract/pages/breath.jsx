import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import MainCard from '../components/Maincard';
import BreathCard from '../components/BreathCard';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function BreathPage() {
  useEffect(() => {
    document.body.classList.add('disable-scroll');

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, []);
  return (
    <main className="breath-page">
      <Header />
      <BreathCard />
    </main>
  );
}
