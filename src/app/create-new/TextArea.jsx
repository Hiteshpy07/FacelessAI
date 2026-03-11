"use client"
import React from 'react'
import { useState } from 'react';
import { HiSparkles, HiOutlineTerminal } from 'react-icons/hi';

function TextArea() {
    function handleclick(){
        console.log(prompt)
        console.log("clicked")
    }
const [prompt, setPrompt] = useState('');
  const maxLength = 500;

  console.log(prompt)
  return (
    <div className="w-full max-w-xl p-6">
     
      <div className="flex items-center justify-between mb-3 px-1">
        <label className="flex items-center gap-2 text-sm font-semibold text-blue-400">        
        </label>
      </div>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
        
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => {setPrompt(e.target.value)         
            }}
            placeholder="Type your custom prompt here..."
            maxLength={maxLength}
            className="w-full h-40 bg-[#0a0a0c] text-slate-200 p-4 rounded-xl border border-slate-800 
                       focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50
                       placeholder:text-slate-600 resize-none transition-all duration-300"
          />
          
          <div className="absolute bottom-3 right-3 flex items-center gap-4">
            <span className={`text-[10px] font-mono ${prompt.length >= maxLength ? 'text-red-500' : 'text-slate-500'}`}>
              {prompt.length}/{maxLength}
            </span>
            <button 
                onClick={handleclick}
              disabled={!prompt}
              className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 
                         text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-all flex items-center gap-2"
            >
              <HiOutlineTerminal />
              Run
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TextArea