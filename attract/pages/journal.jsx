import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import JournalCard from '@/components/JournalCard';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function JournalPage() {
  useEffect(() => {
    document.body.classList.add('disable-scroll');

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, []);
  return (
    <main className="Journal-page">
      <Header />
      <JournalCard />
    </main>
  );
}
