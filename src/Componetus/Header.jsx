import React from 'react'
import { Link } from 'react-router-dom'
import navLogo from "./../assets/OO.png"
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import flag from "./../assets/FLAG.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Cart from '../Pages/Cart';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
  return (
	<>
  <header className='bg-[#131921]'>
    <nav className='border w-full h-18 flex items-center py-6 gap-0.5'>
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
<div className="serachdiv ml-2 flex w-150 h-10 rounded border-t border-b justify-between text-white ">
  <div className="ALL flex bg-[#cdcdcd] justify-center items-center    rounded-l text-center   text-[#999999] p-3 cursor-pointer hover:border-3 hover:border-orange-400 " >All
  <ArrowDropDownIcon/>
  </div>
<input type="text" placeholder='Search Amazon.in'  className='w-full text-black  bg-amber-50   hover:border-3 hover:border-orange-400  p-2 0   ' />
{/* <style>
  {`
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
      display: none;
    }
  `}
</style> */}
  
  <span className='p-3 rounded-r   bg-orange-300 text-black  flex justify-center items-center border-2 border-white outline-0  cursor-pointer   hover:bg-orange-400   hover:border-yellow-400'><SearchIcon  /></span>
  
</div>
<div className="EN flex text-white ml-2 py-2 gap-0.5 hover:border  hover:border-white transition duration-100 rounded-xl cursor-pointer">
  <img src={flag} alt=""  className='w-10'/>
  <span >EN <ArrowDropDownIcon/></span>
</div>
<div className="hellouser flex flex-col  text-white p-2 hover:border  hover:border-white transition duration-100 rounded-xl cursor-pointer">
  <div className="Hello, User">Hello, User</div>
  <div className=" font-bold">Accounts & Lists  <ArrowDropDownIcon/>  </div>
</div>
<div className="returnoder text-white flex  flex-col cursor-pointer   hover:border hover:border-white transition duration-100 rounded p-2"> 
  <Link to="/Return"> 
  <div className="">Returns</div>
  <div className="font-bold">& Orders</div>
    </Link>
  
  
</div>

<div className="Cart text-white  flex p-2 cursor-pointer">
  <Link to="/Cart">  
  <ShoppingCartIcon className=''/>
  <span className='text-xl font-semibold'>Cart</span>
    </Link>
 
  
</div>

<div className="profile text-white flex justify-center items-center ml-4 cursor-pointer " title='Profile'>
  <span className=''>
  <AccountCircleIcon sx={{fontSize: 40}}/>

  </span>
</div>

    
      
    </nav>
    
  </header>
  </>
  )
}

export default Header