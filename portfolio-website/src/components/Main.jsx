import React, { useState, useEffect } from 'react'
import mypicture from '../assets/IMG_9997-transformed.png'
import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import ReactParticles from './ReactParticles'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import Resume from '../assets/IMG_9997-transformed.png'
import { RiFileUserLine } from "react-icons/ri";


const LinkItem = ({ href, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-lg transition-colors duration-300"
      style={{ color: hover ? "#7480FF" : "white" }}
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
  const [fadeInTypeAnimation, setFadeInTypeAnimation] = useState(false);
  const [fadeInIcons, setFadeInIcons] = useState(false);

  useEffect(() => {
    const timeoutIdImage = setTimeout(() => setFadeInImage(true), 2500);
    const timeoutIdH1 = setTimeout(() => setFadeInH1(true), 1000);
    const timeoutIdH2 = setTimeout(() => setFadeInH2(true), 1500);
    const timeoutIdTypeAnimation = setTimeout(() => setFadeInTypeAnimation(true), 1500);
    const timeoutIdIcons = setTimeout(() => setFadeInIcons(true), 2000);

    return () => {
      clearTimeout(timeoutIdImage);
      clearTimeout(timeoutIdH1);
      clearTimeout(timeoutIdH2);
      clearTimeout(timeoutIdTypeAnimation);
      clearTimeout(timeoutIdIcons);
    };
  }
    , []);

  
    const openResume = () => {
      window.open(Resume, "_blank");
    }


  return (
    <>
      <ReactParticles />
      <div id='main' className='h-screen bg-gradient-to-r from-gray to-gray relative' style={{ color: "#000000" }}>
        <img className={`w-[500px] rounded-full absolute bottom-60 right-60 mb-0 mr-0 md:block hidden z-10 transition-opacity duration-1000 ${fadeInImage ? "opacity-100" : "opacity-0"
          } text-white`} alt="picture will go here" />
        <div className='max-w-[700px] ml-[calc(50%-350px-100px)] h-[90vh] w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className={`sm:text-6xl text-5xl font-bold text-[#E0E1DD] transition-opacity duration-1000 ${fadeInH1 ? "opacity-100" : "opacity-0"
            }`}>Hi, I'm <span className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: "#778DA9" }}>Sagarika</span></h1>
          <h2 className={`flex sm:text-4xl text-3xl pt-4 text-[#E0E1DD] transition-opacity duration-1000 ${fadeInH2 ? "opacity-100" : "opacity-0"
            }`}>I'm a
            <TypeAnimation
              sequence={[
                'Developer',
                1000,
                'Coder',
                1000,
                'Tech Enthusiast',
                1000,
                'Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block', color: "#F5F5F5" }}
              repeat={Infinity}
            />

          </h2>
          <div className={`flex justify-between pt-6 max-w-[150px] w-full transition-opacity duration-1000 ${fadeInIcons ? "opacity-100" : "opacity-0"
            }`}>
            <LinkItem href='https://github.com/sagarikagupta'>
              <FaGithub className='cursor-pointer' size={30}/>
            </LinkItem>
            <LinkItem href='https://www.linkedin.com/in/sagarika-gupta/'>
              <FaLinkedinIn className='cursor-pointer' size={30}/>
            </LinkItem>
            <LinkItem href='https://www.instagram.com/__sagarika__/'>
              <FaInstagram className='cursor-pointer' size={30}/>
            </LinkItem>
          </div>
          <div className={`flex justify-between pt-6 max-w-[150px] w-full font-bold transition-opacity duration-1000 ${fadeInIcons ? "opacity-100" : "opacity-0"
            }`}>
            <LinkItem href={Resume}>
              Resume <RiFileUserLine className='cursor-pointer' size={30}/>
            </LinkItem>
          </div>
        </div>
      </div>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Main