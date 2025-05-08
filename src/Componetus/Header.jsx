import React from 'react'
import { Link } from 'react-router-dom'
import navLogo from "./../assets/OO.png"
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
	<>
  <header className='bg-[#131921]'>
    <nav className='border w-full h-19 flex items-center'>
      <div className="leftdiv  flex">
      <Link to="/">
      <img src={navLogo} alt="NavLogo"   className='w-38  h-16 p-4 m-2  hover:border hover:border-white transition duration-100 rounded-xl '/>

      </Link>
      
      </div>
      <div className="location-div flex items-center p-4 h-16   hover:border  hover:border-white transition duration-100 rounded-xl">
         <LocationOnRoundedIcon className="text-white " />
        <div className="text-white ml-2 flex flex-col">
        <div>Delivering to Aniket</div>
         <div>Update Location</div>
           </div>
</div>
<div className="serachdiv ml-2 flex h-10 w-150  justify-between text-white   rounded ">
  <div className="ALL flex bg-[#cdcdcd] border-s-2   rounded text-center p-2  text-black w-20 cursor-pointer border-l-2 border-white" >All
  <ArrowDropDownIcon/>
  </div>
<input type="search" placeholder='Search Amazon.in'  className='w-full border-none hover:border-2  p-2 0' />
<style>
  {`
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
      display: none;
    }
  `}
</style>
  
  <span className='p-2 border-r text-white   w-14 text-center   cursor-pointer  hover:bg-yellow-400 '><SearchRoundedIcon  /></span>
  
</div>


    
      
    </nav>
    
  </header>
  </>
  )
}

export default Header