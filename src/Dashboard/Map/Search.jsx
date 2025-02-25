import React from 'react'
import { IoChevronBack } from "react-icons/io5";
import ProfileImg from '../../assets/profileImg.svg'
import { FaRegBell } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import './Map.css'
const Search = () => {
  return (
    <>  <div className='map-pg'>
          <div className='top-bar'>
              <p><IoChevronBack/></p>
          </div>
          <div className='search-bar'>
              <input type='text' placeholder='search'/>
              <p><HiMenuAlt1/></p>
          </div>
        </div>
    </>
        
  )
}

export default Search