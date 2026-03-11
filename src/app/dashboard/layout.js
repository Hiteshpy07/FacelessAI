import React from 'react'
import Header from './_components/Header'
import Sidebar from './_components/Sidebar'
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