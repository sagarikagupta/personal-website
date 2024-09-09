import React from 'react';
import { MdOutlineWavingHand } from 'react-icons/md';
import QuoteMachine from './QuoteMachine'; // Make sure this path is correct

const About = () => {
  return (
    <div id="about" className="bg-base-100 p-10 flex flex-col items-center" style={{ scrollMarginTop: '60px' }}>
      <h1 className="text-6xl font-bold text-center mb-10"><span className='text-[oklch(var(--s))]'>About</span> Me</h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 p-5">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="flex items-center text-justify text-3xl font-bold text-white mb-2">
              <MdOutlineWavingHand className="mr-2" />
              Hi there!
            </h2>
            <p className="text-justify text-2xl text-white">
              I am a third-year Computer Systems Engineering student at Carleton University
              with a passion for coding and software development. Throughout my studies, I have developed a strong foundation
              in programming and have applied my skills to various projects, including a personal finance tracker built
              in Python and a Block Breaker game coded in Javascript.

              <span className="text-justify font-bold text-2xl text-white"> I am currently seeking internship roles
                for Winter 2025. </span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-5">
          <QuoteMachine />
        </div>
      </div>
    </div>
  );
};

export default About;
