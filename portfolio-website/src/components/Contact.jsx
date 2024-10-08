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
    <div id="contact" className="w-full h-full bg-base-100" style={{ scrollMarginTop: '60px' }}>
      <h1 className="text-center text-white text-6xl font-bold tracking-wide mb-10 pt-10">
        <span className='text-[oklch(var(--s))]'>Contact</span>
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
            className="p-3 bg-base-100 text-black border border-gray-600"
            id="name"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="email"
            className="p-3 bg-base-100 text-black border border-gray-600"
            id="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="p-3 bg-base-100 text-black border border-gray-600"
            rows="10"
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <button
            className="bg-white text-black p-3 rounded mt-4 hover:bg-[oklch(var(--n))] hover:text-[oklch(var(--nc))] transition duration-200"
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
    </div>
  );
};

export default Contact;

