import logo from '../public/Attract-logo.png';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  console.log(logo);
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
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
