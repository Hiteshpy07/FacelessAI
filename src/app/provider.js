// "use client"

// import React, { use } from 'react'
// import { useUser } from '@clerk/nextjs'
// function    Provider({children}) {


// const {user}=useUser()
// console.log(user)


//   return (
//     <div>{children  }</div>
//   )
// }

// export default  Provider

"use client"
import { useUser } from '@clerk/nextjs'

function Provider({ children }) {
  const { isLoaded, isSignedIn, user } = useUser()

  // 1. Wait for Clerk to load
  if (!isLoaded) {
    return <div>Loading...</div>
  }

  // 2. Check if the user is actually logged in
  if (!isSignedIn) {
    console.log("No user is logged in")
  } else {
    console.log("User Data:", user)
  }

  return <div>{children}</div>
}

export default Provider