import logo from '../public/Attract-logo.png';
import Image from 'next/image';
const Header = () => {
  console.log(logo);
  return (
    <>
      <header className="px-2 lg:px-16 py-1 bg-white sticky top-0">
        <div className="container-fluid">
          <div className="nav-bar flex items-center justify-between">
            <div className=" left-0">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="page-menu lg:block">
              <ul className="flex">
                <li className="mx-4 text-md text-blck font-medium">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    Affirm
                  </a>
                </li>
                <li className="mx-4 text-md text-blck font-medium">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    Breathe
                  </a>
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
