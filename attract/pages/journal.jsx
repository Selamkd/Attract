import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import JournalEntries from '@/components/JournalEntries';
import JournalForm from '@/components/JournalForm';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function JournalPage() {
  // useEffect(() => {
  //   document.body.classList.add('Journal-scroll');

  //   return () => {
  //     document.body.classList.remove('Journal-scroll');
  //   };
  // }, []);
  return (
    <main className="Journal-page">
      <Header />
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 bg-[#f9f9f9]">
        <div
          id="entries"
          className="lg:col-span-1 sm:col-span-1 overflow-scroll h-screen "
        >
          <JournalEntries />
        </div>
        <div className="lg:col-span-1 sm:col-span-1 ">
          <JournalForm />
        </div>
      </section>
    </main>
  );
}
