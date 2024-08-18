import React from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // Icons for email and phone
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Icons for GitHub and LinkedIn

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center text-white bg-[#EADFB2] z-10">
      <div className="container pt-4">
        <div className="pb-4 flex justify-center">
          <a
            href="mailto:sagarikagta@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <MdEmail size={25} color="black"/>
          </a>
          <a
            href="https://www.linkedin.com/in/sagarika-gupta/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <FaLinkedin size={25} color="black"/>
          </a>
          <a
            href="https://github.com/sagarikagupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 dark:text-neutral-200"
          >
            <FaGithub size={25} color="black" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;