import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-[#DBD8E3] px-10 py-3 relative'>
            <img src="/logo.png" alt="saskara-logo" className='w-[50px] absolute left-10 bottom-0 right-0 hidden sm:block'/>
        <div className='flex  justify-center items-center mt-5'>
            <div className='text-[#5C5470] flex justify-between items-center font-bold gap-5 text-[12px] lg:text-[18px]'>
                <button className='hover:bg-[#00A8CC] p-2'><Link href={'/'}>Home</Link></button>
                <button className='hover:bg-[#00A8CC] p-2'><Link href={'/about'}>About</Link></button>
                <button className='hover:bg-[#00A8CC] p-2' ><Link href={'/portfolio'}>Portfolio</Link></button>
                <button className='hover:bg-[#00A8CC] p-2'><Link href={'/blog'}>Blog</Link></button>
                <button className='hover:bg-[#00A8CC] p-2'><Link  href={'/contact'} >Contact</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar