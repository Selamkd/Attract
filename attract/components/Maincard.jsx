import React from 'react';
import Image from 'next/image';
import Hero from '../public/mainbanner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faSpa } from '@fortawesome/free-solid-svg-icons';
const MainCard = () => {
  return (
    <>
      <section id="mainbanner" className="grid lg:grid-cols-2">
        <div id="mainbanner-img" className="lg:col-span-1">
          <Image src={Hero}></Image>
        </div>
        <div className="container lg:col-span-1">
          <div className="indent-1 lg:w-[65%] mx-auto text-center pb-16">
            <h1 className="text-3xl lg:text-6xl font-bold">
              Nurturing Well-being through{' '}
              <span className="text-[#f6bc02]">Attract</span>
            </h1>

            <p className="py-3">
              Welcome to Attract, your personal guide to a more mindful life.
              Crafted with care, Attract is your mindful companion designed to
              elevate your daily experience. Rooted in tranquility and
              mindfulness, Attract seamlessly blends breath and affirmations to
              empower you on your journey to inner balance.
            </p>
            <div className="banner-buttons flex items-center  justify-center mt-3">
              <div className="primary-btn ">
                <a
                  href=""
                  className="py-3 px-12 rounded-full text-md font-medium border border-black  hover:bg-[#f6cb42] hover:text-[#2c434e]"
                >
                  Breath{' '}
                  <FontAwesomeIcon
                    className="pl-2 text-[#6495ED] "
                    icon={faWind}
                  />
                </a>
              </div>
              <div className="secondary-btn mx-2">
                <a
                  href=""
                  className="py-3 px-12 rounded-full text-md font-medium border border-black hover:bg-[#f6cb42] hover:text-[#2c434e]"
                >
                  Affirm{' '}
                  <FontAwesomeIcon
                    className="pl-2 text-[#6495ED] "
                    icon={faSpa}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainCard;
