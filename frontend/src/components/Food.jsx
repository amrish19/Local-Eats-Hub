import React from 'react'

function Food() {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-purple-600 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-8">Discover amazing things here!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white bg-opacity-20 rounded-xl">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-lg text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex ac ex dignissim auctor. Integer at posuere orci.</p>
          </div>
          <div className="p-6 bg-white bg-opacity-20 rounded-xl">
            <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
            <ul className="text-lg text-gray-100">
              <li>Veg</li>
              <li>Non-Veg</li>
              <li>Vegan</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-100">1234 Main Street, City, Country</p>
          <p className="text-lg text-gray-100">contact@example.com</p>
          <p className="text-lg text-gray-100">+1234567890</p>
        </div>
      </div>
    </div>
  )
}

export default Food