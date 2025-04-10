import React from 'react';
import Button from '../components/Button.jsx';

const Hero1 = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white relative pt-10 sm:pt-16" id="home">
      {/* Profile Image */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gray-600 mb-6">
        <img src="assets/VINAY.jpg" alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Main Heading */}
      <h1 className="text-center text-3xl sm:text-5xl font-bold">
        I&apos;m <span className="text-purple-500">Vinay Dewangan</span>, <br />
        <span className="text-orange-500">Full Stack Developer</span> based in India.
      </h1>

      {/* Subtext */}
      <p className="text-center text-gray-400 mt-4 sm:text-lg">
        I am a full stack developer from Raipur, India with 2 years of experience in building dynamic and responsive websites.
      </p>
      <p className="text-center text-gray-400 sm:text-lg">
        I have a strong passion for learning new technologies and staying up-to-date with the latest trends in web development.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-16 sm:mt-12">
        <a
          href="#contact"
          className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 flex items-center justify-center"
        >
          Connect with me
        </a>
        <a
          href="assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-400 text-white px-6 py-3 rounded-full hover:bg-gray-700 flex items-center justify-center"
        >
          My Resume
        </a>
      </div>
    </section>
  );
};

export default Hero1;