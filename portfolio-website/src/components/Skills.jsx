import React from 'react'
import { GiSkills } from "react-icons/gi";
import CircleIcon from './CircleIcon';
import {
    FaUniversity,
    FaCode,
    FaRobot,
    FaHeart,
    FaJava,
    FaJsSquare,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";

const Skills = () => {
    return (
        <div id="skills" className="bg-base-200 py-10" style={{ scrollMarginTop: '60px' }}>
            <h1 className="text-6xl font-bold text-center text-[oklch(var(--s))] pb-8">My Skills</h1>
            <div className="flex justify-center space-x-4">
              <CircleIcon icon={FaJava} />
              <CircleIcon icon={FaJsSquare} />
              <CircleIcon icon={FaReact} />
              <CircleIcon icon={FaNodeJs} />
            </div>

        </div>
    )
}

export default Skills