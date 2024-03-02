import Image from 'next/image';
import React from 'react';

function SkillCard2({img, alt}) {
  return (
    <div className="relative w-[50px] sm:w-[80px] md:w-[100px] lg:w-[200px]">
      <div className="group w-full h-full bg-white rounded-2xl overflow-hidden">
        {/* Text to be shown on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white opacity-0 group-hover:opacity-75 transition-opacity rounded-2xl">
          {alt}
        </div>
        
        {/* Image */}
        <Image src={img} alt={alt} width={200} height={200} />
      </div>
    </div>
  );
}

export default SkillCard2;
