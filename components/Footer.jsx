import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center mt-10 py-10 bg-[#5C5470]">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <Link className="hover:text-gray-900" href="/">
          Home
        </Link>
        <Link className="hover:text-gray-900" href="/about">
          About
        </Link>
        <Link className="hover:text-gray-900" href="/portfolio">
          Portfolio
        </Link>
        <Link className="hover:text-gray-900" href="/blog">
          Blog
        </Link>
        <Link className="hover:text-gray-900" href="/contact">
          Contact
        </Link>
      </nav>

      <div className="flex justify-center space-x-5">
        <Link
          href="https://web.facebook.com/idabagusputusaskaraputra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} className="text-white"/>
        </Link>
        <Link
          href="https://www.linkedin.com/in/saskaraputra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} className="text-white"/>
        </Link>
        <Link
          href="https://www.instagram.com/gus_saskara/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare size={30} className="text-white"/>
        </Link>
        <Link
          href="https://github.com/PutraSaskara"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} className="text-white"/>
        </Link>
      </div>
      <p className="text-center text-gray-700 font-medium">
        &copy; 2024 Saskara Putra. All rights reservered.
      </p>
    </footer>
  );
}

export default Footer;
