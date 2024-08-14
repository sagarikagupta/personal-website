import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'

const Navbar = () => {
    const paragraphRef = useRef(null);

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const [fadeInMain, setFadeInMain] = useState(false);
    const [fadeInText, setFadeInText] = useState(false);

    useEffect(() => {
        const timeoutIdMain = setTimeout(() => setFadeInMain(true), 900);
        const timeoutIdText = setTimeout(() => setFadeInText(true), 900);

        return () => {
            clearTimeout(timeoutIdMain);
            clearTimeout(timeoutIdText);
        };
    }
        , []);


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-gradient-to-r from-blue-300 to-blue-100'} text-primary-content`}>
            <div className={`flex-1 transition-opacity duration-1000 ${fadeInText ? "opacity-100" : "opacity-0"}`}>
                <a className="btn btn-ghost text-2xl py-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" style={{ color: "#EADFB2" }}>Sagarika Gupta</a>
            </div>
            <div className="flex-none">
                <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
                {
                    nav ? (
                        <div className={`fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center z-20 transition-opacity duration-1000 ${fadeInText ? "opacity-100" : "opacity-0"
                            }`}>
                            <a href='#main'
                                className='w-[500px] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <AiOutlineHome size={20} />
                                <span className='pl-4'>Home</span>
                            </a>
                            <a href='#work'
                                className='w-[500px] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <GrProjects size={20} />
                                <span className='pl-4'>Work</span>
                            </a>
                            <a href='#projects'
                                className='w-[500px] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={scrollToElement("projects")}>
                                <AiOutlineProject size={20} />
                                <span className='pl-4'>Projects</span>
                            </a>
                            <a href='#main'
                                className='w-[500px] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover: scale-110 ease-in duration-200'>
                                <BsPerson size={20} />
                                <span className='pl-4'>Resume</span>
                            </a>
                            <a href='#contact'
                                className='w-[500px] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <AiOutlineMail size={20} />
                                <span className='pl-4'>Contact</span>
                            </a>
                        </div>
                    ) : (
                        ""
                    )}
                <div className={`md:block hidden fixed left-[53%] z-10 m-auto transition-opacity duration-1000 ${fadeInText ? "opacity-100" : "opacity-0"
                    }`}>
                    <div className='flex'>
                        <a href='#main' className='flex items-center mr-10 hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: '#EADFB2' }} size={22} />
                            <span className='pl-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: "#EADFB2" }}>Home</span>
                        </a>
                        <a href='#aboutme' className='flex items-center mr-10 hover:scale-110 ease-in duration-200'>
                            <GrProjects className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: '#EADFB2' }} size={22} />
                            <span className='pl-2 text-xl whitespace-nowrap drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: "#EADFB2" }}>About Me</span>
                        </a>
                        <a href='#projects' className='flex items-center mr-10 hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: '#EADFB2' }} size={22} />
                            <span className='pl-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: "#EADFB2" }}>Projects</span>
                        </a>
                        <a href='#main' className='flex items-center mr-10 hover:scale-110 ease-in duration-200'>
                            <BsPerson className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: '#EADFB2' }} size={22} />
                            <span className='pl-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: "#EADFB2" }}>Resume</span>
                        </a>
                        <a href='#contact' className='flex items-center hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: '#EADFB2' }} size={22} />
                            <span className='pl-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: "#EADFB2" }}>Contact</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar