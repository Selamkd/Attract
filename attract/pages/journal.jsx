import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import JournalEntries from '@/components/JournalEntries';
import JournalForm from '@/components/JournalForm';
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
      <JournalEntries />
      <JournalForm />
    </main>
  );
}
