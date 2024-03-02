import React from "react";
import AboutSkillCard from "../../components/AboutSkillCard";

function Page() {
  return (
    <div className="text-[#5C5470]">
      <div className="mt-10">
        <h1 className="font-bold text-[30px]">About</h1>
        <p className="mt-5 font-light">
        I'm a dedicated full-stack web developer with a passion for creating immersive digital experiences. My expertise spans both frontend and backend technologies, allowing me to craft seamless and robust solutions. With a keen eye for detail and a focus on user experience, I enjoy solving complex challenges and bringing innovative ideas to life.
        </p>
        <p className="mt-3 font-light">
        In my journey as a developer, I've honed my skills in HTML, CSS, JavaScript, as well as backend technologies like Node.js and Express. I thrive on staying up-to-date with the latest trends and technologies, continuously learning and adapting to meet the evolving demands of the digital landscape.
        </p>
        <p className="mt-3 font-light">
        Beyond writing code, I believe in the power of collaboration and communication. I enjoy working closely with clients and team members to understand their goals and deliver tailored solutions that exceed expectations. Let's work together to bring your vision to fruition and create impactful digital experiences that resonate with your audience.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-[30px] text-center">My Skill</h1>
        <AboutSkillCard />
      </div>
    </div>
  );
}

export default Page;
