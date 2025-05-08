import React from 'react'

function Cart() {
  return (
	<>
	<div className="border rounded-xl p-4 flex items-center space-x-4 shadow-sm hover:shadow-md transition">
	
	<img
	  src="https://via.placeholder.com/80"
	  alt="Product"
	  className="w-20 h-20 object-cover rounded border"
	/>

	
	<div className="flex-1">
	  <h2 className="text-lg font-semibold text-gray-800">Wireless Headphones</h2>
	  <p className="text-sm text-gray-500">Color: Black</p>
	  <p className="mt-1 text-gray-700 font-medium">$59.99</p>
	</div>


	<div className="flex flex-col items-end space-y-2">
	  <div className="flex items-center space-x-2">
		<button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
		<span className="px-2">1</span>
		<button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
	  </div>
	  <button className="text-sm text-red-500 hover:underline">Remove</button>
	</div>
  </div>
  
  </>
);
};
  
export default Cart