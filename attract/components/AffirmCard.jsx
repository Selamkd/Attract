import React from 'react';
import { useState, useEffect } from 'react';
import affirmations from '../db/affirmations.json';
const AffirmCard = () => {
  const [currentAffirmation, setAffirmation] = useState('');
  const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setAffirmation(affirmations[randomIndex]);
  };

  useEffect(() => {
    getRandomAffirmation();
  }, []);
  return (
    //
    <section className="flex flex-col h-min-screen  bg-[#f9f9f9]  items-center justify-start min-h-screen ">
      <div class="px-2 md:px-6 my-3 w-full text-slate-700  dark:text-white flex mt-10 flex-col items-center">
        <div class="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4  rounded-xl">
          <div class="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-white shadow-md">
            <div
              class="rounded-t-xl w-full h-64 shadow-sm bg-cover"
              style={{
                backgroundImage:
                  'url("https://images.squarespace-cdn.com/content/v1/540d9bd0e4b0b3f7fc675613/1629033190317-Z451QM2MARXUSUTVR321/you+are+so+easy+to+love.jpg?format=1500w")',
              }}
            ></div>

            <div class="w-full p-3 flex flex-col items-center justify-between h-auto overflow-auto lg:h-auto">
              <p class="text-sm text-black">{currentAffirmation.affirmation}</p>

              <div class="flex mt-4">
                <button
                  className="rounded-lg px-4 py-2 border-2 border-gray-900 hover:bg-gray-900  hover:text-gray-100  text-gray-900 hover:text-[] duration-300"
                  onClick={getRandomAffirmation}
                >
                  Get Affirmation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffirmCard;
