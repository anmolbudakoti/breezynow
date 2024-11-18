import React from 'react'

export default function Search({ search, setSearch, handleSearch }) {

  return (
    <div className='flex gap-2 justify-center items-center mb-14 bg-gray-500 bg-opacity-25 rounded-lg p-6 lg:p-8 xl:p-10 md:m-14 lg:m-20 xl:m-24'>
      <input type="text" className="w-2/3 xl:w-2/4 rounded-3xl md:text-xl lg:text-2xl xl:text-2xl p-2 lg:p-3 text-center shadow-lg border border-gray-900 outline-none bg-gray-100 text-black" placeholder='Enter City Name' name='search' value={search} onChange={(e) => setSearch(e.target.value)} />
      <button className='bg-black text-white text-sm md:text-lg lg:text-xl xl:text-xl p-3 lg:p-4 rounded-full hover:bg-gray-700 active:bg-gray-500' onClick={handleSearch}>Search</button>
    </div>
  )
}
