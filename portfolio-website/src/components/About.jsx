import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import mypicture from "../assets/IMG_9997-transformed.png"



const About = () => {
  return (
    <div id="about" className="bg-base-100 p-10" style={{ scrollMarginTop: '60px' }}>
      <h1 className="text-4xl font-bold text-center text-[oklch(var(--n))]">About Me</h1>

      <div className="flex justify-between mb-10 mt-5">
        <div className="w-1/2 mx-10">
          <h2 className="flex items-center text-justify text-3xl font-bold text-[oklch(var(--n))] mb-2">
            <MdOutlineWavingHand className="mr-2" />
            Hi there!
          </h2>
          <p className="text-justify text-2xl text-[oklch(var(--n))]">
            I am a third-year Computer Systems Engineering student at Carleton University
            with a passion for coding and software development. Throughout my studies, I have developed a strong foundation
            in programming and have applied my skills to various projects, including a personal finance tracker built
            in Python and a Block Breaker game coded in Javascript.

            <span className="text-justify font-bold text-2xl text-[oklch(var(--n))]"> I am currently seeking internship roles
              for Winter 2025. </span>
          </p>
        </div>

        
      </div>
    </div>

  )
}

export default About