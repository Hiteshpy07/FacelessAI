import React from 'react'
import Header from '../dashboard/_components/Header'
import Sidebar from '../dashboard/_components/Sidebar'

function layout({children}) {
  return (
    <div>
        <Header/>
        <div className='flex'>
        <Sidebar/>
        {children}
        </div>
    </div>
  )
}

export default layout