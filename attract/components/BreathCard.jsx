import React, { useState, useEffect } from 'react';

const BreathCard = () => {
  // duration of each breath cycle
  const inhaleDuration = 4;
  const holdDuration = 4;
  const exhaleDuration = 5;
  const prepDuration = 2;
  const totalDuration = inhaleDuration + holdDuration + exhaleDuration;
  // state to track the user input for the number of breaths
  const [breathInput, setBreathInput] = useState(3);
  // state to track the number of breaths left
  const [breathsLeft, setBreathsLeft] = useState(breathInput);
  // state to change the instructions displayed
  const [instructions, setInstructions] = useState(
    'Get relaxed, and click begin to start breathing.'
  );
  const [isBreathing, setIsBreathing] = useState(false);
  // state to track the current breath cycle (inhale, hold, exhale)
  const [currentCycle, setCurrentCycle] = useState(0);
  // state for the circle animation
  const [circleAnimation, setCircleAnimation] = useState(false);
  // handle the user input for the number of breaths
  const handleUserInput = (e) => {
    setBreathInput(e.target.value);
  };
  // set breathesLeft from user input when user input changes and add userInput as a dependancy to the useEffect
  useEffect(() => {
    setBreathsLeft(breathInput);
  }, [breathInput]);
  // function to handle the breathing logic
  const breathMeter = () => {
    for (let i = breathInput; i > 0; i--) {
      if (breathsLeft > 0) {
        // check the current cycle and set the instructions
        switch (currentCycle) {
          case 0:
            setIsBreathing(true);
            setInstructions('Prepare to inhale...');
            setTimeout(() => {
              setCurrentCycle(1);
            }, 4 * 1000);

            break;
          case 1:
            setInstructions('Inhale deeply through your nose');
            // set the timeout to 5 seconds for inhale and change current cycle to 1
            setTimeout(() => {
              setCurrentCycle(2);
            }, 4 * 1000);
            break;
          // set the timeout to 4 seconds for hold and change current cycle to 2
          case 2:
            setInstructions('Hold your breath...');
            setTimeout(() => {
              setCurrentCycle(3);
            }, 4 * 1000);
            break;
          // set the timeout to 6 seconds for exhale and change current cycle to 0
          case 3:
            setInstructions('Exhale slowly and completely through your mouth');
            setTimeout(() => {
              setCurrentCycle(0);
              setBreathsLeft(breathsLeft - 1);
            }, 4 * 1000);
            break;
        }
      }
      if (breathsLeft === 0) {
        setInstructions(
          'Breath complete! Feel free to select number of breaths and begin again.'
        );
        setIsBreathing(false);
      }
    }
  };

  const circleBreathAnimation = () => {
    setCircleAnimation(true);

    setTimeout(() => {
      setCircleAnimation(false);
    }, totalDuration * 1000);
  };

  // useEffect(() => {
  //   if (circleAnimation) {
  //     const circleProgress = document.getElementById('circle-progress');
  //     if (currentCycle === 1) {
  //       circleProgress.classList.add('circle-grow');
  //       console.log('growing!');
  //       setTimeout(() => {
  //         circleProgress.classList.remove('circle-grow');
  //       }, inhaleDuration * 1000);
  //     }
  //     if (currentCycle === 2) {
  //       circleProgress.classList.add('circle-hold');
  //       console.log('am i holding?');
  //       setTimeout(() => {
  //         circleProgress.classList.remove('circle-hold');
  //       }, holdDuration * 1000);
  //     }
  //     if (currentCycle === 3) {
  //       circleProgress.classList.add('circle-shrink');
  //       console.log('am i shrinking?');
  //       setTimeout(() => {
  //         circleProgress.classList.remove('circle-shrink');
  //       }, exhaleDuration * 1000);
  //     }
  //   }
  // }, [circleAnimation]);

  useEffect(() => {
    if (isBreathing) {
      breathMeter();
    }
    if (isBreathing && currentCycle === 1) {
      circleBreathAnimation();
    }
  }, [isBreathing, currentCycle]);
  return (
    <div className="min-h-screen flex flex-col justify-start items-center mt-4">
      <h4 className="mb-2">Select the number of breaths </h4>
      <div className="input mb-6">
        <select
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition  duration-150 ease-in-out bg-white border rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          onChange={handleUserInput}
          value={breathInput}
          disabled={isBreathing}
        >
          <option value="3">3 Breaths</option>
          <option value="5">5 Breaths</option>
          <option value="7">7 Breaths</option>
        </select>
      </div>
      <div className="circle-wrap">
        <div className="circle-outline"></div>
        <div
          id="circle-progress"
          className={`circle-progress ${
            currentCycle === 1
              ? 'circle-grow'
              : currentCycle === 2
              ? 'circle-hold'
              : currentCycle === 3
              ? 'circle-shrink'
              : ''
          }`}
        ></div>
      </div>
      <p class="breaths">
        Breaths remaining: <span className="breaths-text">{breathsLeft}</span>
      </p>
      <p className="my-2">{instructions}</p>
      <button
        className={`start-button ${
          isBreathing ? 'button-inactive' : ''
        }                   rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-300`}
        onClick={breathMeter}
        disabled={isBreathing}
      >
        Begin
      </button>
    </div>
  );
};

export default BreathCard;
