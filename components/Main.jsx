import Link from "next/link";
import React from "react";

function Main() {
  return (
    <div className="lg:flex lg:justify-between h-[100vh]">
      {/* left */}
      <div className="lg:w-[50%] flex flex-col justify-center items-center mx-auto mt-10">
        <div className="text-white font-bold">
          <h1 className="text-[25px] md:text-[40px] lg:text-[50px]  tracking-wide">
            I m <span className="text-[#5C5470]">Jack</span>
          </h1>
          <h3 className="text-[20px] lg:text-[30px] tracking-wide">
            Full Stack Web Developer
          </h3>
          <button className="border-4 rounded-md px-5 py-2 border-[#5C5470] text-[#5C5470] font-bold mt-10 ml-[25%] lg:ml-0 hover:bg-[#5C5470] hover:text-[#222831]">
            <Link href={"/contact"}>Contact Me</Link>
          </button>
        </div>
        <img
          src="/example2.png"
          alt="profile picture"
          className="w-[200px] md:w-[250px] md:mt-20 lg:w-[500px] mt-10 lg:hidden avatar"
        />
      </div>

      {/* right */}
      <div className="lg:w-[50%] lg:relative">
        <img
          src="/example2.png"
          alt="profile picture"
          className="w-[40%] lg:absolute top-[25%] left-[20%] hidden lg:block avatar"
        />
      </div>
      {/* <div className='lg:w-[50%] lg:relative'>
        <img src='/my-foto.png' alt='saskara' className='w-[200px] lg:w-[250px] xl:w-[280px] 2xl:w-[400px] lg:absolute lg:top-[20%] left-40 hidden lg:block avatar'/>
      </div> */}
    </div>
  );
}

export default Main;
