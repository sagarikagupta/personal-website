import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { GiSkills } from "react-icons/gi";

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
    }, []);

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
        <div className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#E779C1]' : 'bg-gradient-to-r from-gray to-gray'} text-primary-content`}>
            <div className={`flex-1 transition-opacity duration-1000 ${fadeInText ? "opacity-100" : "opacity-0"}`}>
                <a className="btn btn-ghost text-2xl py-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" style={{ color: "oklch(var(--n))" }}>Sagarika Gupta</a>
            </div>
            <div className="flex-none">
                <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
                <div className={`md:block hidden fixed left-[53%] z-10 m-auto transition-opacity duration-1000 ${fadeInText ? "opacity-100" : "opacity-0"
                    }`}>
                    <div className='flex'>
                        <a href='#main' className='flex items-center mr-10 hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: 'oklch(var(--n))' }} size={22} />
                            <span className='pl-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: "oklch(var(--n))" }}>Home</span>
                        </a>
                        <a href='#about' className='flex items-center mr-10 hover:scale-110 ease-in duration-200'>
                            <GrProjects className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: 'oklch(var(--n))' }} size={22} />
                            <span className='pl-2 text-xl whitespace-nowrap drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: "oklch(var(--n))" }}>About Me</span>
                        </a>
                        <a href='#resume' className='flex items-center mr-10 hover:scale-110 ease-in duration-200'>
                            <GiSkills className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: 'oklch(var(--n))' }} size={22} />
                            <span className='pl-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: "oklch(var(--n))" }}>Skills</span>
                        </a>
                        <a href='#projects' className='flex items-center mr-10 hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: 'oklch(var(--n))' }} size={22} />
                            <span className='pl-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: "oklch(var(--n))" }}>Projects</span>
                        </a>
                        <a href='#contact' className='flex items-center hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: 'oklch(var(--n))' }} size={22} />
                            <span className='pl-2 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{ color: "oklch(var(--n))" }}>Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
