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
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-lg bg-white shadow-lg px-10 pt-10 pb-10 text-gray-800"
        style={{ maxWidth: '500px' }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img
              src="https://images.squarespace-cdn.com/content/v1/540d9bd0e4b0b3f7fc675613/1629033190317-Z451QM2MARXUSUTVR321/you+are+so+easy+to+love.jpg?format=1500w"
              alt=""
            />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-[#ffc300] text-left leading-tight h-3"></div>
          <p className="text-md py-4 text-gray-700 text-center px-5">
            {currentAffirmation.affirmation}
          </p>
          <div className="text-3xl text-[#ffc300] text-right leading-tight h-3 -mt-3"></div>
        </div>
        <div className="w-full">
          <p className="text-md text-[#ffc300] font-bold text-center">
            <button
              className="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:text-[#6495ED] duration-300"
              onClick={getRandomAffirmation}
            >
              Get Affirmation
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffirmCard;
