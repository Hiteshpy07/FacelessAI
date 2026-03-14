"use client"
import React from 'react'
import { useState } from 'react'

function Style({onUpdate}) {
    const styleoptions=["Realistic","cartoon","comic","watercolor","GTA"]
    const [style,setstyle]=useState('')    
  return (
    <>
    <span className='text-2xl mb-3'>STYLES</span>
    <div className='flex gap-5 '>

        {styleoptions.map(
            (item,index)=>(
               
                <div className='bg-blue-600 p-2 rounded-xl hover:scale-110 hover:cursor-pointer hover:bg-blue-500' onClick={(e)=>{
                    console.log(e.target.innerHTML)
                    setstyle(e.target.innerHTML)
                    console.log(style)
                    onUpdate(style)
                }} >{item}</div>
                
            )
        )
        }
    </div>
    </>
  )
}

export default Style