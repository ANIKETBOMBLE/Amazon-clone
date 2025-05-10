import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
function Cart() {
  return (
	<>
	<Link to="/Cart">
	
	<div className="Cart-div flex justify-between p-10">
		
		<div className="firstdiv w-260  h-30   p-2 flex flex-col  justify-around  border-transparent border-2 bg-gray-200 ">
			<h2 className='font-bold text-2xl'>Your Amazon Cart is empty</h2>
			<Link>Check your Saved for later items below or  <Link to="/" className='text-blue-400 hover:underline'>continue shopping.</Link></Link>
		</div>
	
			
	
		<div className="sidebar  flex flex-col gap-1 justify-between p-4 rounded-2xl w-80  text-center bg-gray-200  ">
			<h2 className='font-bold text-start'>You might also like</h2>
			
		<div className="flex w-72 h-45 border rounded-2xl  gap-2 items-center ">
				<img className='w-30  h-20 object-cover ml-2' src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg" alt="" />
				<div className="text-xs text-start ">
					<h2 className='text-blue-500 hover:underline p-2'>Fossil Men Leather Machine Analog Black Dial Watch-Fs4656, Band Color-Brown</h2>
				<span className='text-orange-400 flex gap-1'><FaStar/><FaStar/><FaStar/><FaStar/></span>
				<span className='font-semibold '>₹13,400</span>
				<p className=''>Get it by <b> Tuesday, May 13</b>
 <br /> FREE Delivery by Amazon</p>
<button className='p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer'>Add to cart</button>
				</div>
				
			</div>	
			<div className="flex w-72 h-45 border rounded-2xl  gap-2 items-center ">
				<img className='w-30  h-20 object-cover ml-2' src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg" alt="" />
				<div className="text-xs text-start ">
					<h2 className='text-blue-500 hover:underline p-2'>Fossil Men Leather Machine Analog Black Dial Watch-Fs4656, Band Color-Brown</h2>
				<span className='text-orange-400 flex gap-1'><FaStar/><FaStar/><FaStar/><FaStar/></span>
				<span className='font-semibold '>₹13,400</span>
				<p className=''>Get it by <b> Tuesday, May 13</b>
 <br /> FREE Delivery by Amazon</p>
<button className='p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer'>Add to cart</button>
				</div>
				
			</div>	<div className="flex w-72 h-45 border rounded-2xl  gap-2 items-center ">
				<img className='w-30  h-20 object-cover ml-2' src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg" alt="" />
				<div className="text-xs text-start ">
					<h2 className='text-blue-500 hover:underline p-2'>Fossil Men Leather Machine Analog Black Dial Watch-Fs4656, Band Color-Brown</h2>
				<span className='text-orange-400 flex gap-1'><FaStar/><FaStar/><FaStar/><FaStar/></span>
				<span className='font-semibold '>₹13,400</span>
				<p className=''>Get it by <b> Tuesday, May 13</b>
 <br /> FREE Delivery by Amazon</p>
<button className='p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer'>Add to cart</button>
				</div>
				
			</div>	<div className="flex w-72 h-45 border rounded-2xl  gap-2 items-center ">
				<img className='w-30  h-20 object-cover ml-2' src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg" alt="" />
				<div className="text-xs text-start ">
					<h2 className='text-blue-500 hover:underline p-2'>Fossil Men Leather Machine Analog Black Dial Watch-Fs4656, Band Color-Brown</h2>
				<span className='text-orange-400 flex gap-1'><FaStar/><FaStar/><FaStar/><FaStar/></span>
				<span className='font-semibold '>₹13,400</span>
				<p className=''>Get it by <b> Tuesday, May 13</b>
 <br /> FREE Delivery by Amazon</p>
<button className='p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer'>Add to cart</button>
				</div>
				
			</div>	
			<div className="flex w-72 h-45 border rounded-2xl  gap-2 items-center ">
				<img className='w-30  h-20 object-cover ml-2' src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg" alt="" />
				<div className="text-xs text-start ">
					<h2 className='text-blue-500 hover:underline p-2'>Fossil Men Leather Machine Analog Black Dial Watch-Fs4656, Band Color-Brown</h2>
				<span className='text-orange-400 flex gap-1'><FaStar/><FaStar/><FaStar/><FaStar/></span>
				<span className='font-semibold '>₹13,400</span>
				<p className=''>Get it by <b> Tuesday, May 13</b>
 <br /> FREE Delivery by Amazon</p>
<button className='p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer'>Add to cart</button>
				</div>
				
			</div>	
		
				
			</div>
			
			
			
			
			
			
			
			
			
			
		</div>
		
		</Link>
	

  </>
);
};
  
export default Cart