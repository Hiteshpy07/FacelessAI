import React from 'react'
import { FaBrain } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
function Header() {
  return (
    <div className='w-fulll h-[50px] bg-blue-950 rounded-b-lg flex items-center gap-2'>
      <div className='flex text-blue-200 items-center gap-2 text-2xl p-3 '>
        <FaBrain />
          FacelessAI
        <div className='ml-280 bg-blue-600 rounded-xl hover:bg-blue-700 p-1 px-2 text-lg'>
          <button>Dashboard</button>
        </div>
        <CgProfile  className=' ml-4 text-3xl cursor-pointer hover:scale-105 hover:text-blue-600'/>
        
      </div>

    </div>
  )
}

export default Header