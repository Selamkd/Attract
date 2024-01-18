import React from 'react';
import Image from 'next/image';
import Hero from '../public/mainbanner.jpg';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faSpa, faBook } from '@fortawesome/free-solid-svg-icons';
const MainCard = () => {
  return (
    <>
      <section
        id="mainbanner"
        className="grid lg:grid-cols-2 h-screen bg-[] mt-4 "
      >
        <div id="mainbanner-img" className="lg:col-span-1">
          <Image src={Hero}></Image>
        </div>
        <div className=" lg:col-span-1 ">
          <div className="indent-1 lg:w-[70%] mx-auto mt-8 text-center flex flex-col items-center pb-8  background-color:#EFEDE2;">
            <h1 className="text-3xl lg:text-6xl pt-6  items-center font-bold ">
              Nurturing Well-being through{' '}
              <span className="text-[#f6bc02]">Attract</span>
            </h1>

            <p className="py-3 mb-3">
              Welcome to Attract, your personal guide to a more mindful life.
              Crafted with care, Attract is your mindful companion designed to
              elevate your daily experience. Rooted in tranquility and
              mindfulness, Attract seamlessly blends breath and affirmations to
              empower you on your journey to inner balance.
            </p>
            <div className="banner-buttons flex items-center  justify-center mt-3">
              <div className="secondary-btn mx-2">
                <Link
                  href="/journal"
                  className="py-3 px-6 rounded-full text-md font-medium border border-black hover:bg-gray-900 hover:text-white"
                >
                  Journal{' '}
                  <FontAwesomeIcon
                    className="pl-2 text-indigo-400 "
                    icon={faBook}
                  />
                </Link>
              </div>
              <div className="primary-btn ">
                <Link
                  href="/breath"
                  className="py-3 px-6 rounded-full text-md font-medium border border-black hover:bg-gray-900 hover:text-gray-100"
                >
                  Breathe{' '}
                  <FontAwesomeIcon
                    className="pl-2 text-indigo-400 "
                    icon={faWind}
                  />
                </Link>
              </div>
              <div className="secondary-btn mx-2">
                <Link
                  href="/affirm"
                  className="py-3 px-6 rounded-full text-md font-medium border border-black hover:bg-gray-900 hover:text-gray-100"
                >
                  Affirm{' '}
                  <FontAwesomeIcon
                    className="pl-2 text-indigo-400 "
                    icon={faSpa}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainCard;
