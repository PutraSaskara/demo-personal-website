"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Card3({img, link, title, github, desc, key}) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="flex flex-col justify-center relative" key={key}>
            {/* Card Content */}
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 z-1">
                <div className="w-full md:w-1/3 bg-white grid place-items-center overflow-hidden relative mx-auto">
                    <img
                        src={img}
                        alt="tailwind logo"
                        className="rounded-xl transition-transform duration-500 ease-in-out transform group-hover:scale-110 "
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 flex justify-center items-center group-hover:opacity-80 transition-opacity duration-300 ease-in-out flex-col">
                        <button className="text-white bg-transparent border border-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out" onClick={toggleModal}>
                            View Larger
                        </button>
                        <Link href={link} target="_blank" className="text-white bg-transparent border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800 xl:text-3xl text-xl">
                        {title}
                    </h3>
                    <p className="xl:text-lg text-gray-500 text-base">
                        {desc}
                    </p>
                </div>
                <div>
                    <Link href={github} target="_blank"><FaGithub size={40}/></Link>
                </div>
            </div>
            {/* Modal */}
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg">
                        <img
                            src={img}
                            alt="Larger image"
                            className="w-[70%] z-50"
                        />
                        <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700" onClick={toggleModal}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card3;
