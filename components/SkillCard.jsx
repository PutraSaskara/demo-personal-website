 import React from 'react'

function SkillCard({img, name}) {
  return (
    <div className='relative'>
        <div className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-white hover:bg-[#00A8CC] rounded-3xl '>
          <div className='absolute hover:bg-slate-500 opacity-0 hover:opacity-75 w-full h-full rounded-3xl flex justify-center items-center'>
            <p className='hover:bg-[#669ae71f] text-white text-[24px]'>{name}</p>
          </div>
            <img src={img} alt={name} className='w-[200px] m-auto bg-white rounded-3xl' />
        </div>
    </div>
  )
}

export default SkillCard