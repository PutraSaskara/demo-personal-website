import React from 'react'
import Experience from '../../components/Experience'
import Portfolio from '../../components/Portfolio'

function page() {
  return (
    <div>
          <div className='bg-[#5C5470] h-[600px] overflow-y-auto '>
        <h1 className='text-[30px] font-bold text-white text-center p-10'>Portfolio</h1>
        <Portfolio/>
      </div>
      <h1 className='text-[30px] font-bold text-[#5C5470] text-center p-10'>Experience</h1>
        <Experience/>
    </div>
  )
}

export default page