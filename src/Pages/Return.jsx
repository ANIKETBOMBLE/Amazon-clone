import React from 'react'

function Return() {
  return (
	<div class="max-w-4xl mx-auto p-6">
  <h1 class="text-2xl font-bold mb-6">Your Orders</h1>

  <div class="space-y-6">

    <div class="border rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <div class="flex justify-between items-center mb-3">
        <div>
          <p class="text-sm text-gray-500">Order #123456789</p>
          <p class="text-sm text-gray-500">Placed on April 25, 2025</p>
        </div>
        <span class="text-sm px-2 py-1 bg-green-100 text-green-700 rounded-full">Delivered</span>
      </div>
      <div class="flex items-center space-x-4">
        <img src="https://via.placeholder.com/60" alt="Product" class="w-16 h-16 rounded border" />
        <div>
          <p class="font-medium text-gray-800">Wireless Headphones</p>
          <p class="text-sm text-gray-500">Qty: 1</p>
        </div>
      </div>
      <div class="mt-4 text-right">
        <a href="#" class="text-sm text-blue-600 hover:underline">View Details</a>
      </div>
    </div>

  </div>
</div>

  )
}

export default Return