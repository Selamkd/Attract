import React from 'react';

const MainCard = () => {
  return (
    <>
      <section
        id="mainbanner"
        className="h-[700px] lg:h-[900px] w-full main-banner bg-no-repeat bg-cover bg-center flex items-end justify-center"
      >
        <div className="container">
          <div className="indent-1 lg:w-[60%] mx-auto text-center pb-16">
            <h1 className="text-3xl text-white lg:text-6xl font-bold">
              Find Your Ultimate <br />
              Daily Routine and Make it Stick
            </h1>
            <p className="py-3 text-white">
              Welcome to Attract, your personal guide to a more mindful life.
              Crafted with care, Attract is your mindful companion designed to
              elevate your daily experience. Rooted in tranquility and
              mindfulness, Attract seamlessly blends breath and affirmations to
              empower you on your journey to inner balance.
            </p>
            <div className="banner-buttons flex items-center justify-center mt-3">
              <div className="primary-btn">
                <a
                  href=""
                  className="py-3 px-12 rounded-full text-md font-medium border border-black"
                >
                  Breath
                </a>
              </div>
              <div className="secondary-btn mx-2">
                <a
                  href=""
                  className="py-3 px-12 rounded-full text-md font-medium border border-black"
                >
                  Affirm
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
