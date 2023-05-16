import React from 'react'
import './Header.css'
import Navbar from './Navbar'
import Search from './Search'

const Header = () => {

  return (
    <div className='holder'>
      <header className='header'>
        <Navbar/>
        <div className='header-content flex flex-c text-center text-white'>
          <h1 className='header-title text-capatalize'>Find a book of your choice</h1>
          <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptate assumenda eius facilis officiis similique at explicabo voluptatem repudiandae. Eligendi consectetur laboriosam, nesciunt vero voluptatibus quas! Repellat quo vitae aliquam.</p>
          <Search/>
        </div>
        </header>
    </div>
  )
}

export default Header
