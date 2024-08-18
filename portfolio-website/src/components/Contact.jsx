import React from 'react'
import { useState } from 'react';
import { MdEmail, MdPhone } from "react-icons/md"; // Icons for email and phone
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Icons for GitHub and LinkedIn
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import InputSpotlightBorder from "./InputSpotlightBorder"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  };

  return (
    <section id="contact" className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-800 py-10" style={{ scrollMarginTop: '60px' }}>
      <h1 className="text-center text-[#EADFB2] text-4xl font-bold tracking-wide mb-10">
        Contact
      </h1>

      <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto p-5">
        {/* Left contact page */}
        <form
          id="contact-form"
          className="w-full md:w-full flex flex-col space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="p-3 bg-[#EADFB2] text-black border border-gray-600 rounded-full"
            id="name"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="email"
            className="p-3 bg-[#EADFB2] text-black border border-gray-600 rounded-full"
            id="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="p-3 bg-[#EADFB2] text-black border border-gray-600 rounded-3xl"
            rows="10"
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <button
            className="bg-[#EADFB2] text-black p-3 rounded mt-4 hover:bg-blue-700 transition duration-200"
            id="submit"
            type="submit"
          >
            <div className="flex items-center justify-center space-x-2">
              <i className="fa fa-paper-plane"></i>
              <span className="font-bold uppercase tracking-wide">Send</span>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

