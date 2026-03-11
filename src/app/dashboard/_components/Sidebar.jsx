import React from 'react';
import { 
  HiPlus, 
  HiOutlineViewGrid, 
  HiOutlineUserCircle, 
  HiOutlineLightningBolt, 
  HiOutlineCog 
} from "react-icons/hi"; // Using Hero Icons set from react-icons

import Link from 'next/link';

function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: <HiOutlineViewGrid /> },
    { name: 'Account', icon: <HiOutlineUserCircle /> },
    { name: 'Upgrade', icon: <HiOutlineLightningBolt /> },
    { name: 'Settings', icon: <HiOutlineCog /> },
  ];

  return (
    <div className='w-64 h-screen bg-[#0a0a0c] text-slate-400 flex flex-col border-r border-slate-800 shadow-2xl'>
      
      {/* Brand Header */}
      <div className='p-6 flex items-center gap-3'>
        {/* <div className='bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold'>
            B
        </div> */}
        {/* <span className='text-white font-bold text-xl tracking-tight'>BlueBlack</span> */}
      </div>

      {/* Primary Action */}
      <div className='px-4 mb-6'>
        <Link href='/create-new'>
        <button className='w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition-all shadow-lg shadow-blue-900/30'>
          <HiPlus className="text-xl" />
          <span>Create New</span>
        </button>
        </Link>
      </div>

      {/* Navigation List */}
      <nav className='flex-1 px-3 space-y-1'>
        {menuItems.map((item) => (
          <div 
            key={item.name}
            className='flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-slate-900 hover:text-blue-400 group'
          >
            <span className='text-xl group-hover:scale-110 transition-transform'>
              {item.icon}
            </span>
            <span className='font-medium text-sm'>{item.name}</span>
          </div>
        ))}
      </nav>

      {/* User Profile Section */}
      <div className='p-4 border-t border-slate-800 bg-[#0f0f12]'>
        <div className='flex items-center gap-3 hover:bg-slate-800 p-2 rounded-lg cursor-pointer transition-colors'>
          <div className='w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center'>
            <HiOutlineUserCircle className='text-2xl text-slate-300' />
          </div>
          <div className='flex flex-col'>
            <span className='text-xs font-bold text-white'>John Doe</span>
            <span className='text-[10px] text-slate-500'>Free Plan</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;