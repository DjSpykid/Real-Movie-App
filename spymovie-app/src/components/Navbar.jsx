import React from 'react'
import Navbaritem from './Navbaritem'

function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6 '>
        <Navbaritem  title="Trending" param="FetchTrending"/>
        <Navbaritem  title="Top Rated"   param="FetchTopRated"/>
    </div>
  )
}

export default Navbar