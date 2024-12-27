// import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'

const Navigation = () => {
  return (
    <nav className='border-2 text-black border-gray-200 p-4 flex justify-between items-center'>
    <div className="flex item-center border-2 rounded-full px-4 py-2 max-w-md ml-[5rem]">
      <FaSearch className='text-2xl pr-2 ' />
      <input type="text" placeholder='Search...' className='bg-transparent outline-none w-full' />
    </div>
    <section className='flex items-center mr-[5rem]'>
      <FaUser className='text-2xl mr-2'/>
    </section>
    </nav>
  )
}

export default Navigation