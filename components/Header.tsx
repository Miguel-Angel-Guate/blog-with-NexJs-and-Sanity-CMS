import Link from 'next/link'
import React from 'react'



export default function Header() {
  return (
      <header className='flex justify-between p-5 max-w-7xl'>
          <div className='flex items-center space-x-5'>
            <Link href="/">
                <img
                style={{maxWidth: '100px'}}  
                src={"https://iconape.com/wp-content/files/wi/374518/png/374518.png"}
                alt='medium img' 
                />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5'>
            <div>About</div>
            <div>Contact</div>
            <div
            className='text-white bg-green-600 px-4 py-1 rounded-full cursor-pointer'
            >Follow</div>
            </div>
          </div>
          <div className='flex items-center space-x-5 text-green-600'>
          <h3>Sign in</h3>
          <h3 className='border px-4 py-1 rounded-full border-green-600 mr-5'>Get started</h3>
          </div>
      </header>
   
  )
}
