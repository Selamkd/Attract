import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import MainCard from '../components/Maincard';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Header />
      <MainCard />
    </main>
  );
}
