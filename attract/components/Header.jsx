import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    router.push('/');
  };
  const handleLogin = () => {
    router.push('/home');
  };

  return (
    <>
      <header
        id="header"
        className="px-2 lg:px-16 py-1 bg-white sticky top-0 border-b-2 border-gray-200"
      >
        <div className="container-fluid">
          <div className="nav-bar flex items-center justify-between mt-2">
            <div className="left-0">
              <Image className="attract-logo" src={logo} alt="Logo" />
            </div>
            <div className="page-menu lg:block">
              <ul className="flex">
                <li className="mx-4 text-md text-blck font-medium  hover:text-[#f6cb42]">
                  <Link href="/about">About</Link>
                </li>
                <li className="mx-4 text-md text-blck font-medium  hover:text-[#f6cb42]">
                  <Link href="/home">Home</Link>
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
                  <FontAwesomeIcon
                    onClick={handleLogout}
                    icon={faArrowRightToBracket}
                    className="rounded-lg px-3  mx-4 mb-1 py-1  hover:text-gray-100 hover:bg-black  text-gray-900 hover:text-[] duration-300 ml-auto "
                  />
                ) : (
                  // <button
                  //   className="rounded-lg px-3  mx-4 mb-1 py-1 border-2 border-gray-900 hover:bg-gray-900  hover:text-gray-100  text-gray-900 hover:text-[] duration-300"
                  //   onClick={handleLogout}
                  // >
                  //   Log out
                  // </button>
                  <FontAwesomeIcon
                    onClick={handleLogout}
                    icon={faRightFromBracket}
                    className="rounded-lg px-3  mx-4 mb-1 hover:text-gray-100 hover:bg-black  text-gray-900 hover:text-[] duration-300 ml-auto "
                  />
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
