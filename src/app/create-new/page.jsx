"use client"
import React from 'react'
import  { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import TextArea from './TextArea';
import Style from './Style';


function Page() {

  let [optionselected, setoptionSelected] = useState("Select Project");

  const options = [
    "Custom Prompt",
    "Random AI Story",
    "Scary Story",
    "Historical Facts",
    "Bed Time Story",
    "Motivational",
    "Fun Facts"
  ];



  return (
    <div className='text-white mt-8  ml-4 font-mono'>
      <span className='text-xl'>What's your topics?</span>
      <div>
        <div className="w-full max-w-xs px-4 mt-4 w-full">
      
      
      <div className="relative group">
        {/* The Visual Select Box */}
        <select 
          onChange={(e) => setoptionSelected(e.target.value)}
          className="w-full appearance-none bg-slate-900 border border-slate-800 text-slate-300 py-3 px-4 pr-10 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all hover:bg-slate-800 hover:border-slate-700"
        >
          {options.map((option, index) => (
            <option key={index} value={option} className="bg-slate-900 text-slate-300">
              {option}
            </option>
          ))}
        </select>

        {/* Custom Chevron Icon */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500 group-hover:text-blue-400 transition-colors">
          <HiChevronDown size={20} />
        </div>
      </div>
      
      {/* Small Hint Text */}
      <p className="mt-2 text-[10px] text-slate-600 ml-1">
        Selected: <span className="text-blue-500">{optionselected}</span>
      </p>
    </div>
      </div>

      {optionselected=="Custom Prompt" && //IMPORTANT WAY HWO TO RENDER CONDITIONAL COMPOENTS 
      <TextArea/>
      }

      <Style/>
    </div>
  )
}

export default Page