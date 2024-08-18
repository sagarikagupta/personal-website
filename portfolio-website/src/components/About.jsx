import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import mypicture from "../assets/IMG_9997-transformed.png"


const About = () => {
  return (
    <div id="about" className="bg-gradient-to-r from-gray to-gray" style={{ scrollMarginTop: '60px' }}>
      <h1 className="text-4xl font-bold text-center text-[#EADFB2] p-10">About Me</h1>

      <div className="flex justify-between px-10 mb-10">
        <div className="w-1/2">
          <h2 className="flex items-center text-justify text-3xl font-bold text-[#EADFB2] mb-2">
            <MdOutlineWavingHand className="mr-2" />
            Hi there!
          </h2>
          <p className="text-justify text-2xl text-[#EADFB2]">
            I am a third-year Computer Systems Engineering student at Carleton University
            with a passion for coding and software development. Throughout my studies, I have developed a strong foundation
            in programming and have applied my skills to various projects, including a personal finance tracker built
            in Python and a Blackjack game coded in Java. As I continue to expand my knowledge and experience, I am actively seeking internship
            opportunities for Winter 2025 to further hone my skills and contribute to innovative projects in the tech industry.
          </p>
        </div>

        <div className="w-1/2 flex justify-center items-start">
          <img className="text-white" alt="picture will go here"></img>
        </div>
      </div>
    </div>

  )
}

export default About