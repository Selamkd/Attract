import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import MainCard from '../components/Maincard';
import BreathCard from '../components/BreathCard';
const inter = Inter({ subsets: ['latin'] });

export default function BreathPage() {
  return (
    <main className="breath-page">
      <Header />
      <BreathCard />
    </main>
  );
}
