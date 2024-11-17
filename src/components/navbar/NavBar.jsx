import React from 'react'

export default function NavBar() {
  return (
        <div className='flex justify-center items-center gap-2 p-3 lg:p-5 xl:p-8 border-b border-gray-300 text-white'>
            <img src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" alt="Weather-app" className='w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-18 xl:h-18' />
            <h1 className='font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl'>BreezyNow</h1>
        </div>
  )
}
