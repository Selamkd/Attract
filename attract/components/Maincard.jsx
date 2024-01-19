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

            <p className="py-3 mb-3 sm:mt-5">
              Welcome to Attract, your personal guide to a more mindful life.
              Crafted with care, Attract is your mindful companion designed to
              elevate your daily experience. Rooted in tranquility and
              mindfulness, Attract seamlessly blends breath and affirmations to
              empower you on your journey to inner balance.
            </p>
            <div className=" flex items-center sm:mt-10  justify-center mt-3">
              <div className="secondary-btn mx-2 flex">
                <Link href="/journal" className="home-button">
                  Journal <FontAwesomeIcon className="icon" icon={faBook} />
                </Link>
              </div>
              <div className="secondary-btn mx-2 flex">
                <Link href="/breath" className="home-button">
                  Breathe <FontAwesomeIcon className="icon" icon={faWind} />
                </Link>
              </div>
              <div className="secondary-btn mx-2 flex">
                <Link href="/affirm" className="home-button" id="unique">
                  Affirm <FontAwesomeIcon className="icon " icon={faSpa} />
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
