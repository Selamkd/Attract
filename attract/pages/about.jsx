import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Affirm from '../public/Affirm.png';
import Breathe from '../public/Breathe.svg';
import Journal from '../public/Journal.png';
const About = () => {
  return (
    <>
      <section>
        <Header />
        <div className="container-fluid  px-[5%] lg:px-[15%] py-3 bg-[#f9f9f9]">
          <div
            className="flex flex-col items-center justify-center "
            id="margin-div"
          >
            <h1 className="text-3xl lg:text-6xl font-bold mb-3" id="h1-about">
              Welcome to <span className="text-[#f6bc02]">Attract</span> Your
              Path to Mindfulness
            </h1>
            <p className="text-[#3f3844] mb-3">
              Attract is not just a mindfulness app; it's your companion on the
              journey to self-discovery, confidence, and empowerment. Created
              with the vision of making a positive impact, Attract is created
              for the submission of the
              <Link
                href="https://m4kingspaces.org/the-making-good-prize/about-the-prize/"
                className="text-[#8296ff] font-bold underline pl-1"
              >
                Making Good Prize.
              </Link>{' '}
              Our app offers a holistic approach to well-being through
              affirmations, breathing exercises, and thoughtful journaling.
            </p>
          </div>
          <div className="service-item grid  lg:grid-cols-2 gap-10 mx-auto items-center justify-center">
            <div className="service-img text-center order-1 lg:order-[0]">
              <Image
                src={Breathe}
                alt=""
                className="w-[60%] h-auto mt-3 "
                id="about-img"
              />
            </div>
            <div className="">
              <h2
                className="text-2xl lg:text-4xl font-bold mb-3 "
                id="service-title"
              >
                Breathe, Relax, Renew
              </h2>
              <p className="text-[#3f3844]">
                Take a moment for yourself with our customizable breathing
                exercises. Whether you have 3, 5, or 7 minutes to spare, Attract
                guides you through calming breathing sessions, helping you find
                serenity in the midst of life's chaos.
              </p>
              <div className="secondary-btn flex m-auto items-center justify-center mt-8 ">
                <Link
                  href="/breath"
                  className="smky-btn3 relative hover:text-[#212121] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#f6cd46] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
                >
                  Start your Journey
                </Link>
              </div>
            </div>
          </div>
          <div className="service-item grid lg:grid-cols-2 gap-10 mx-auto items-center justify-center">
            <div className="service-info">
              <h2
                className="text-2xl lg:text-4xl font-bold mb-3"
                id="service-title"
              >
                Discover Your Inner Strength
              </h2>
              <p className="text-[#3f3844]">
                Unleash your potential with our curated library of affirmations
                crafted to boost confidence and foster empowerment. Set daily
                affirmations or explore personalized ones to kickstart your day
                on a positive note.
              </p>
              <div className="secondary-btn flex m-auto items-center justify-center mt-8">
                <Link
                  href="/affirm"
                  className="smky-btn3 relative hover:text-[#212121] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#f6cd46] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
                >
                  Start your Journey
                </Link>
              </div>
            </div>
            <div className="service-img text-center">
              <Image
                src={Affirm}
                alt=""
                className="w-[70%] h-auto"
                id="about-affirm"
              />
            </div>
          </div>
          <div className="service-item grid lg:grid-cols-2 gap-10 mx-auto items-center justify-center">
            <div className="service-img text-center order-1 lg:order-[0]">
              <Image
                src={Journal}
                alt=""
                className="w-[70%] h-auto"
                id="about-journal"
              />
            </div>
            <div className="service-info">
              <h2
                className="text-2xl lg:text-4xl font-bold mb-3"
                id="service-title"
              >
                Your Daily Journaling Oasis
              </h2>
              <p className="text-[#3f3844]">
                Capture your thoughts, reflections, and aspirations in our
                intuitive journaling feature. Receive daily prompts to inspire
                self-reflection and personal growth.
              </p>
              <div className="secondary-btn flex m-auto items-center justify-center mt-8">
                <Link
                  href="/journal"
                  className="smky-btn3 relative hover:text-[#212121] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#f6cd46] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
                >
                  Start your Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
