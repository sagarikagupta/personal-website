import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ReactParticles from './ReactParticles';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import Resume from '../assets/sagarikaresume.pdf';
import { RiFileUserLine } from 'react-icons/ri';

// LinkItem Component to handle icon hover effects
const LinkItem = ({ href, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-lg transition-colors duration-300"
      style={{ color: hover ? 'oklch(var(--s))' : 'white' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  );
};

const Main = () => {
  const [fadeInImage, setFadeInImage] = useState(false);
  const [fadeInH1, setFadeInH1] = useState(false);
  const [fadeInH2, setFadeInH2] = useState(false);
  const [fadeInIcons, setFadeInIcons] = useState(false);

  const openResume = () => {
    window.open(Resume, '_blank');
  };

  useEffect(() => {
    const timeoutIdImage = setTimeout(() => setFadeInImage(true), 2500);
    const timeoutIdH1 = setTimeout(() => setFadeInH1(true), 1000);
    const timeoutIdH2 = setTimeout(() => setFadeInH2(true), 1500);
    const timeoutIdIcons = setTimeout(() => setFadeInIcons(true), 2000);

    return () => {
      clearTimeout(timeoutIdImage);
      clearTimeout(timeoutIdH1);
      clearTimeout(timeoutIdH2);
      clearTimeout(timeoutIdIcons);
    };
  }, []);

  return (
    <>
      <div className="hero min-h-screen relative">
        <div className="hero-content relative z-10 flex flex-col lg:flex-row items-center lg:items-start">
          <div className={`max-w-md mx-auto transition-opacity duration-1000 ${fadeInH1 ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-8xl font-bold">
              Hi, I'm <span style={{ color: 'oklch(var(--s))' }}>Sagarika</span>
            </h1>
            <h2 className={`flex text-3xl py-4 text-white transition-opacity duration-1000 ${fadeInH2 ? 'opacity-100' : 'opacity-0'}`}>
              <TypeAnimation
                sequence={[
                  'Building innovative solutions.',
                  2000,
                  'Crafting efficient code.',
                  2000,
                  'Turning ideas into reality.',
                  2000,
                  'Passionate about technology.',
                  2000,
                  'Solving complex problems.',
                  2000,
                  'Creating seamless user experiences.',
                  2000,
                  'Bringing projects to life.',
                  2000,
                  'Driven by curiosity and creativity.',
                  2000,
                  'Writing clean, scalable code.',
                  2000,
                  'Engineering with purpose.',
                  2000,
                ]}
                speed={50}
                deletionSpeed={30}
                repeat={Infinity}
                wrapper="span"
                style={{ display: 'inline-block', color: '#FFFFFF' }}
              />
            </h2>
            <div className={`flex justify-between pt-6 max-w-[150px] transition-opacity duration-1000 ${fadeInIcons ? 'opacity-100' : 'opacity-0'}`}>
              <LinkItem href="https://github.com/sagarikagupta">
                <FaGithub className="cursor-pointer" size={30} />
              </LinkItem>
              <LinkItem href="https://www.linkedin.com/in/sagarika-gupta/">
                <FaLinkedinIn className="cursor-pointer" size={30} />
              </LinkItem>
              <LinkItem href="https://www.instagram.com/__sagarika__/">
                <FaInstagram className="cursor-pointer" size={30} />
              </LinkItem>
            </div>
            <button
              onClick={openResume}
              className={`btn btn-neutral hover:btn-secondary mt-4 rounded-none transition-opacity duration-1000 ${fadeInIcons ? 'opacity-100' : 'opacity-0'}`}
            >
              <RiFileUserLine size={30} />
              Resume
            </button>
          </div>
          <div
            className={`w-96 h-96 mx-auto mt-4 rounded-3xl overflow-hidden transition-opacity duration-1000 ${fadeInImage ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              className="w-full h-full object-cover"
              src="" // Replace with actual image path
              alt="Your Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
