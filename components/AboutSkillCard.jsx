import React from 'react';
import SkillCard2 from './SkillCard2';

function AboutSkillCard() {
    const imagePaths = [
        { src: 'https://ik.imagekit.io/saskara/New%20folder/react.png?updatedAt=1709213616811', alt: 'React' },
        { src: 'https://ik.imagekit.io/saskara/New%20folder/next.png?updatedAt=1709213617669', alt: 'Next.js' },
        { src: 'https://ik.imagekit.io/saskara/New%20folder/css.png?updatedAt=1709213616898', alt: 'CSS' },
        { src: 'https://ik.imagekit.io/saskara/New%20folder/javascript.png?updatedAt=1709213616672', alt: 'JavaScript' },
        { src: 'https://ik.imagekit.io/saskara/New%20folder/Express.png?updatedAt=1709213615050', alt: 'Express.js' },
        { src: 'https://ik.imagekit.io/saskara/New%20folder/Github.png?updatedAt=1709213615590', alt: 'GitHub' },
        { src: 'https://ik.imagekit.io/saskara/New%20folder/Mongodb.png?updatedAt=1709213615205', alt: 'MongoDB' },
        { src: 'https://ik.imagekit.io/saskara/New%20folder/Mysql.png?updatedAt=1709213616260', alt: 'MySQL' },
        { src: 'https://ik.imagekit.io/saskara/New%20folder/Node.png?updatedAt=1709213615455', alt: 'Node.js' },
        { src: 'https://ik.imagekit.io/saskara/New%20folder/tailwind.png?updatedAt=1709213619795', alt: 'Tailwind CSS' },
        { src: 'https://ik.imagekit.io/saskara/New%20folder/javascript.png?updatedAt=1709213616672', alt: 'JavaScript' }
      ];

    return (
        <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 content-center justify-items-center gap-y-5'>
            {imagePaths.map((image, index) => (
                <SkillCard2 key={index} img={image.src} alt={image.alt} />
            ))}
        </div>
    );
}

export default AboutSkillCard;
