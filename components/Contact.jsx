import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

import Link from "next/link";

const Contact = () => {
  return (
    <section className="mt-10">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="font-medium text-blue-500 dark:text-blue-400">Contact me</p>

          <h1 className="mt-2 text-2xl font-semibold  md:text-3xl text-[#DBD8E3]">
            Get in touch
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">      
              Im always here to chat and lend a listening ear!
          </p>
        </div>

        {/* contact info */}
        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <MdEmail/>
            </span>

            <h2 className="mt-4 text-lg font-medium text-[#5C5470]">
              Email
            </h2>
            <p className="mt-2 text-[#5C5470]">
              Always ready to discuss
            </p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">
              example@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-[#5C5470]">
              Address
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Come say hello at our office HQ.
            </p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">
              home street No.3
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-[#5C5470]">
              Phone
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Mon-Fri from 8am to 5pm.
            </p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">
              +01 3345442
            </p>
          </div>
        </div>

        <h1 className="text-2xl font-semibold md:text-3xl text-[#5C5470] mt-[60px] text-center">Social Media</h1>

        {/* sosmed */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 justify-items-center content-center gap-5 mb-[300px]">
          <Link href={'#'} target="_blank" className="hover:bg-slate-400 p-3">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <FaFacebook/>
            </span>
            <h2 className="mt-4 text-lg font-medium text-[#5C5470]">
              Facebook
            </h2>
          </div>
          </Link>

          <Link href={'#'} target="_blank" className="hover:bg-slate-400 p-3">
          <div className="flex flex-col items-center justify-center text-center">
          <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
            <FaLinkedin/>
          </span>

            <h2 className="mt-4 text-lg font-medium text-[#5C5470]">
              LinkedIn
            </h2>
          </div>
          </Link>

          <Link href={'#'} target="_blank" className="hover:bg-slate-400 p-3">
          <div className="flex flex-col items-center justify-center text-center">
          <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
            <FaInstagramSquare/>
          </span>

            <h2 className="mt-4 text-lg font-medium text-[#5C5470]">
              Instagram
            </h2>
          </div>
          </Link>


          <Link href={'#'} target="_blank" className="hover:bg-slate-400 p-3">
          <div className="flex flex-col items-center justify-center text-center">
          <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
            <FaGithub/>
          </span>

            <h2 className="mt-4 text-lg font-medium text-[#5C5470]">
              Github
            </h2>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
