import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import logo from '../public/Attract-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Check if a user is authenticated
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const user = session?.user;
        setAuthenticated(user !== null);
      }
    );
  }, []);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAuthenticated(false);
    router.push('/login');
  };
  const handleLogin = () => {
    router.push('/');
  };

  return (
    <>
      <header className="px-2 lg:px-16 py-1 bg-white sticky top-0 border-b-2 border-gray-200">
        <div className="container-fluid">
          <div className="nav-bar flex items-center justify-between">
            <div className=" left-0">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="page-menu lg:block">
              <ul className="flex">
                <li className="mx-4 text-md text-blck font-medium  hover:text-[#f6cb42]">
                  <Link href="/">Home</Link>
                </li>
                <li className="mx-4 text-md text-blck font-medium hover:text-[#f6cb42]">
                  <Link href="/affirm">Affirm</Link>
                </li>
                <li className="mx-4 text-md text-blck font-medium  hover:text-[#f6cb42]">
                  <Link href="/breath">Breathe</Link>
                </li>
                <li className="mx-4 text-md text-blck font-medium  hover:text-[#f6cb42]">
                  <Link href="/journal">Journal</Link>
                </li>
                {authenticated ? (
                  <button onClick={handleLogout}>Log out</button>
                ) : (
                  <button onClick={handleLogin}>Log in</button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
