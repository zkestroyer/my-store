import React from 'react';

export default function ShoppingCart() {
  // Mock data for the cart items
  const cartItems = [
    { id: 1, title: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Artel Market', price: '78.99', qty: 9, img: 'cart-1.png' },
    { id: 2, title: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Best factory LLC', price: '39.00', qty: 3, img: 'cart-2.png' },
    { id: 3, title: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Artel Market', price: '170.50', qty: 1, img: 'cart-3.png' },
  ];

  // Mock data for the "Saved for later" section
  const savedItems = [
    { id: 1, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: 'saved-1.png' },
    { id: 2, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: 'saved-2.png' },
    { id: 3, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: 'saved-3.png' },
    { id: 4, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: 'saved-4.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* HEADER (Simplified for Cart view) */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-2xl">
            <img src="/assets/Layout/Brand/logo-colored.png" alt="Brand Logo" className="h-8 w-auto rounded" />
            Brand
          </div>

          <div className="flex gap-6 text-gray-500 text-xs text-center">
            <div className="flex flex-col items-center cursor-pointer">
              <div className="w-6 h-6 bg-gray-200 rounded-full mb-1"></div> Profile
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="w-6 h-6 bg-gray-200 rounded mb-1"></div> Message
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="w-6 h-6 bg-gray-200 rounded mb-1"></div> Orders
            </div>
            <div className="flex flex-col items-center cursor-pointer text-blue-600">
              <div className="w-6 h-6 bg-blue-100 rounded mb-1 flex items-center justify-center text-blue-600">🛒</div> My cart
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My cart (3)</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT COLUMN: Cart Items & Saved Items */}
          <div className="lg:w-3/4">
            
            {/* Cart Items List */}
            <div className="bg-white border border-gray-200 rounded-lg mb-6">
              <div className="p-5 space-y-5 divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <div key={item.id} className={`flex justify-between ${index !== 0 ? 'pt-5' : ''}`}>
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-100 rounded border border-gray-200 flex items-center justify-center p-2 flex-shrink-0">
                        <img src={`/assets/${item.img}`} alt={item.title} className="max-h-full object-contain mix-blend-multiply" />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900 leading-tight">{item.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">Size: {item.size}, Color: {item.color}, Material: {item.material}</p>
                          <p className="text-sm text-gray-500">Seller: {item.seller}</p>
                        </div>
                        <div className="flex gap-4 mt-3 text-sm font-medium">
                          <button className="text-red-500 hover:text-red-600 shadow-sm border border-gray-200 px-3 py-1 rounded">Remove</button>
                          <button className="text-blue-600 hover:text-blue-700 shadow-sm border border-gray-200 px-3 py-1 rounded">Save for later</button>
                        </div>
                      </div>
                    </div>

                    {/* Price & Quantity */}
                    <div className="flex flex-col items-end justify-between">
                      <span className="font-bold text-lg text-gray-900">${item.price}</span>
                      <select 
                        className="border border-gray-300 rounded px-3 py-1.5 outline-none bg-white text-sm"
                        defaultValue={item.qty}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i+1} value={i+1}>Qty: {i+1}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer Actions */}
              <div className="p-5 border-t border-gray-200 flex justify-between items-center">
                <button className="bg-blue-600 text-white px-5 py-2 rounded font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm shadow-sm">
                  <span>←</span> Back to shop
                </button>
                <button className="text-blue-600 font-medium text-sm hover:underline">
                  Remove all
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl">🔒</div>
                <div>
                  <h4 className="text-gray-800 text-sm font-medium">Secure payment</h4>
                  <p className="text-gray-400 text-xs">Have you ever finally just</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl">💬</div>
                <div>
                  <h4 className="text-gray-800 text-sm font-medium">Customer support</h4>
                  <p className="text-gray-400 text-xs">Have you ever finally just</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl">🚚</div>
                <div>
                  <h4 className="text-gray-800 text-sm font-medium">Free delivery</h4>
                  <p className="text-gray-400 text-xs">Have you ever finally just</p>
                </div>
              </div>
            </div>

            {/* Saved for Later */}
            <div className="bg-white border border-gray-200 rounded-lg mb-8">
              <h2 className="text-xl font-bold p-5 border-b border-gray-200">Saved for later</h2>
              <div className="p-5 grid grid-cols-4 gap-4">
                {savedItems.map((item) => (
                  <div key={item.id} className="flex flex-col group">
                    <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center p-4 mb-4">
                      <img src={`/assets/${item.img}`} alt={item.title} className="max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <span className="font-bold text-lg text-gray-900 mb-1">${item.price}</span>
                    <h4 className="text-sm text-gray-600 line-clamp-2 mb-3 h-10">{item.title}</h4>
                    <button className="border border-gray-300 text-blue-600 rounded py-2 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm w-max px-4">
                      🛒 Move to cart
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* DISCOUNT BANNER */}
            <div className="bg-blue-600 rounded-lg flex justify-between items-center px-8 py-6 text-white overflow-hidden relative shadow-sm">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-700 transform skew-x-12 translate-x-10"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-1">Super discount on more than 100 USD</h2>
                <p className="text-blue-200 text-sm">Have you ever finally just write dummy info</p>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium shadow relative z-10 transition-colors">
                Shop now
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="lg:w-1/4">
            
            {/* Coupon Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
              <h3 className="text-gray-600 text-sm mb-3">Have a coupon?</h3>
              <div className="flex border border-gray-300 rounded overflow-hidden focus-within:border-blue-500">
                <input type="text" placeholder="Add coupon" className="w-full px-3 py-2 text-sm outline-none" />
                <button className="bg-white border-l border-gray-300 text-blue-600 px-4 py-2 text-sm font-medium hover:bg-gray-50">Apply</button>
              </div>
            </div>

            {/* Checkout Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="space-y-3 text-sm text-gray-600 mb-4 border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-gray-900">$1403.97</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span className="text-red-500">- $60.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span className="text-green-500">+ $14.00</span>
                </div>
              </div>
              
              <div className="flex justify-between font-bold text-lg text-gray-900 mb-6">
                <span>Total:</span>
                <span>$1357.97</span>
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded mb-4 shadow-sm transition-colors">
                Checkout
              </button>

              <div className="flex justify-center gap-2">
                {/* Dummy Payment Icons */}
                <div className="w-10 h-6 bg-gray-200 rounded border border-gray-300"></div>
                <div className="w-10 h-6 bg-gray-200 rounded border border-gray-300"></div>
                <div className="w-10 h-6 bg-gray-200 rounded border border-gray-300"></div>
                <div className="w-10 h-6 bg-gray-200 rounded border border-gray-300"></div>
                <div className="w-10 h-6 bg-gray-200 rounded border border-gray-300"></div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white pt-12 pb-6 border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-6 gap-8 mb-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xl mb-4">
              <img src="/assets/logo.png" alt="Brand Logo" className="h-8 w-auto rounded" />
              Brand
            </div>
            <p className="text-gray-500 text-sm mb-6 pr-10">Best information about the company gies here but too lorem ipsum is.</p>
            <div className="flex gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gray-400 rounded-full text-white flex items-center justify-center text-xs">i</div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Partnership</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Shipping</li>
              <li>Contact us</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">For users</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Login</li>
              <li>Register</li>
              <li>Settings</li>
              <li>My Orders</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Get app</h4>
            <div className="space-y-2 flex flex-col">
              <div className="bg-gray-900 w-32 h-10 rounded text-white text-xs flex items-center justify-center">App Store</div>
              <div className="bg-gray-900 w-32 h-10 rounded text-white text-xs flex items-center justify-center">Google Play</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-gray-600">
            <p>© 2023 Ecommerce.</p>
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-5 h-3 bg-red-500 mr-1"></div>
              English
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}