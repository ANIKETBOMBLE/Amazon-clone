import React from 'react'
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
function Header2() {
  return (
	<>
	<div className="Nav-div border bg-[#232f36] h-12 text-white ">
  <div className="main-div flex justify-evenly  items-center  text-xs cursor-pointer mt-2">
    <div className="All flex justify-center items-center border border-transparent hover:border-white rounded px-1  transition duration-100">
      <IoMenu className="h-8 w-8" />
      <span className="">All</span></div>

    <div className="border border-transparent hover:border-white rounded p-2 transition duration-200">
      <Link to="https://www.mxplayer.in/">MX Player</Link>
    </div>

    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">Sell</div>
    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">Gift Cards</div>
    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">Amazon Pay</div>
    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">Buy Again</div>
    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">AmazonBasics</div>
    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">Gift ideas</div>
    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">Books</div>
    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">Home Improvement</div>
    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">Health, Household & Personal Care</div>
    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">Today's Deal</div>
    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">Browsing History</div>
    <div className="border border-transparent hover:border-white rounded p-2 transition duration-100">Customer Services</div>
  </div>
</div>

	
	</>
  )
}

export default Header2