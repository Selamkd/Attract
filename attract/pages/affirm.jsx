import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import MainCard from '../components/Maincard';
import AffirmCard from '../components/AffirmCard';
const inter = Inter({ subsets: ['latin'] });

export default function BreathPage() {
  return (
    <main>
      <Header />
      <AffirmCard />
    </main>
  );
}
