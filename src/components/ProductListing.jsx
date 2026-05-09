import React from 'react';

export default function ProductListing() {
  // Mock data for the products shown in the list
  const products = [
    { id: 1, title: 'Canon camera EOS 2000, Black 10x zoom', price: '998.00', oldPrice: '1128.00', rating: 4, orders: 154, imgAsset: 'Product 1 (Red Phone)' },
    { id: 2, title: 'Apple iPhone 13 Pro Max - 256GB - Blue', price: '899.00', oldPrice: null, rating: 5, orders: 320, imgAsset: 'Product 2 (Smartphone)' },
    { id: 3, title: 'Samsung Galaxy Z Fold 3 5G - Phantom Black', price: '1299.00', oldPrice: null, rating: 4, orders: 85, imgAsset: 'Product 3 (Tablet/Foldable)' },
    { id: 4, title: 'Apple MacBook Pro 14" M1 Pro Chip', price: '1999.00', oldPrice: null, rating: 5, orders: 210, imgAsset: 'Product 4 (Laptop)' },
    { id: 5, title: 'Apple Watch Series 7 GPS - Midnight Aluminum', price: '399.00', oldPrice: '429.00', rating: 4, orders: 405, imgAsset: 'Product 5 (Smartwatch)' },
    { id: 6, title: 'Sony WH-1000XM4 Wireless Noise Canceling', price: '298.00', oldPrice: '348.00', rating: 5, orders: 1024, imgAsset: 'Product 6 (Headphones)' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* HEADER (Reused from previous layout for consistency) */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/Layout/Brand/logo-colored.png" alt="Brand Logo" className="h-10 w-auto" />
          </div>

          <div className="flex w-1/2 border border-blue-500 rounded-md overflow-hidden">
            <input type="text" placeholder="Search" className="w-full px-3 py-2 outline-none" />
            <select className="bg-white border-l border-gray-300 px-3 py-2 text-gray-600 outline-none">
              <option>All category</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2 font-medium">Search</button>
          </div>

          <div className="flex gap-6 text-gray-500 text-xs text-center">
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://img.icons8.com/material-outlined/24/787878/user.png" alt="Profile" className="w-6 h-6 mb-1 opacity-70" /> Profile
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://img.icons8.com/material-outlined/24/787878/speech-bubble.png" alt="Icon" className="w-6 h-6 mb-1 opacity-70" /> Message
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://img.icons8.com/material-outlined/24/787878/speech-bubble.png" alt="Icon" className="w-6 h-6 mb-1 opacity-70" /> Orders
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://img.icons8.com/material-outlined/24/787878/speech-bubble.png" alt="Icon" className="w-6 h-6 mb-1 opacity-70" /> My cart
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-2 text-sm text-gray-600">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-6 font-medium">
              <span className="cursor-pointer hover:text-blue-600">All category</span>
              <span className="cursor-pointer hover:text-blue-600">Hot offers</span>
              <span className="cursor-pointer hover:text-blue-600">Gift boxes</span>
              <span className="cursor-pointer hover:text-blue-600">Projects</span>
              <span className="cursor-pointer hover:text-blue-600">Menu item</span>
              <span className="cursor-pointer hover:text-blue-600">Help ▾</span>
            </div>
            <div className="flex gap-4 font-medium">
              <span className="cursor-pointer">English, USD ▾</span>
              <span className="cursor-pointer flex items-center gap-1">
                Ship to <img src="/assets/Layout1/Image/flags/DE@2x.png" alt="Germany Flag" className="w-4 h-3 object-cover rounded-sm" /> ▾
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 pb-10">
        
        {/* Breadcrumbs */}
        <div className="py-4 text-sm text-gray-500 flex gap-2">
          <span>Home</span> <span className="text-gray-400">&gt;</span>
          <span>Clothings</span> <span className="text-gray-400">&gt;</span>
          <span>Men's wear</span> <span className="text-gray-400">&gt;</span>
          <span>Summer clothing</span>
        </div>

        <div className="flex gap-6">
          {/* LEFT SIDEBAR FILTERS */}
          <aside className="w-64 flex-shrink-0">
            {/* Category */}
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center font-semibold mb-3 cursor-pointer">
                Category <span className="text-gray-400 text-xs">▲</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="cursor-pointer hover:text-blue-600">Mobile accessory</li>
                <li className="cursor-pointer hover:text-blue-600">Electronics</li>
                <li className="cursor-pointer hover:text-blue-600">Smartphones</li>
                <li className="cursor-pointer hover:text-blue-600">Modern tech</li>
                <li className="text-blue-600 cursor-pointer mt-1">See all</li>
              </ul>
            </div>

            {/* Brands */}
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center font-semibold mb-3 cursor-pointer">
                Brands <span className="text-gray-400 text-xs">▲</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map(brand => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    {brand}
                  </label>
                ))}
                <div className="text-blue-600 cursor-pointer mt-1">See all</div>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center font-semibold mb-3 cursor-pointer">
                Features <span className="text-gray-400 text-xs">▲</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map(feature => (
                  <label key={feature} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    {feature}
                  </label>
                ))}
                <div className="text-blue-600 cursor-pointer mt-1">See all</div>
              </div>
            </div>

            {/* Price range */}
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center font-semibold mb-3 cursor-pointer">
                Price range <span className="text-gray-400 text-xs">▲</span>
              </div>
              {/* Slider Visual Mock */}
              <div className="px-2 mb-4">
                <div className="h-1 bg-gray-200 rounded relative mt-4">
                  <div className="absolute left-1/4 right-1/4 h-full bg-blue-500"></div>
                  <div className="w-4 h-4 bg-white border border-gray-300 rounded-full absolute -top-1.5 left-1/4 -ml-2 shadow"></div>
                  <div className="w-4 h-4 bg-white border border-gray-300 rounded-full absolute -top-1.5 right-1/4 -mr-2 shadow"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex-1">
                  <label className="text-xs text-gray-500 block mb-1">Min</label>
                  <input type="text" placeholder="0" className="w-full border border-gray-300 rounded px-2 py-1.5 outline-none" />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-gray-500 block mb-1">Max</label>
                  <input type="text" placeholder="999999" className="w-full border border-gray-300 rounded px-2 py-1.5 outline-none" />
                </div>
              </div>
              <button className="w-full mt-3 bg-white border border-gray-300 text-blue-600 font-medium py-1.5 rounded shadow-sm hover:bg-gray-50">Apply</button>
            </div>

            {/* Condition */}
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center font-semibold mb-3 cursor-pointer">
                Condition <span className="text-gray-400 text-xs">▲</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                {['Any', 'Refurbished', 'Brand new', 'Old items'].map((cond, i) => (
                  <label key={cond} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="condition" defaultChecked={i === 0} className="text-blue-600 focus:ring-blue-500" />
                    {cond}
                  </label>
                ))}
              </div>
            </div>

            {/* Ratings */}
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center font-semibold mb-3 cursor-pointer">
                Ratings <span className="text-gray-400 text-xs">▲</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                {[5, 4, 3, 2].map(stars => (
                  <label key={stars} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <div className="flex text-yellow-400 text-lg leading-none">
                      {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT PRODUCT LIST */}
          <div className="flex-1">
            {/* Top sorting bar */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-center mb-4">
              <div className="text-sm">
                12,911 items in <span className="font-semibold">Mobile accessory</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" /> Verified only
                </label>
                <select className="border border-gray-300 rounded px-3 py-1.5 outline-none bg-white">
                  <option>Featured</option>
                </select>
                <div className="flex border border-gray-300 rounded overflow-hidden">
                  <button className="px-2 py-1 bg-white hover:bg-gray-50 border-r border-gray-300">
                    {/* Grid Icon Asset */}
                    ⊞
                  </button>
                  <button className="px-2 py-1 bg-gray-100 text-gray-600">
                    {/* List Icon Asset */}
                    ☰
                  </button>
                </div>
              </div>
            </div>

            {/* Product Items */}
            <div className="space-y-4">
              {products.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 flex gap-5 relative group">
                  {/* Image Container */}
                  <div className="w-48 h-48 flex-shrink-0 bg-gray-100 rounded overflow-hidden p-2">
                    {/* IMAGE ASSET LINK HERE: {item.imgAsset} */}
                    <img src={["/assets/Image/interior/3.png","/assets/Image/interior/6.png","/assets/Image/interior/7.png","/assets/Image/interior/8.png","/assets/Image/interior/9.png","/assets/Image/tech/6.png","/assets/Image/tech/8.png","/assets/Image/tech/image 23.png","/assets/Image/tech/image 29.png","/assets/Image/tech/image 32.png"][(item.id - 1) % 10]} alt={item.imgAsset} className="w-full h-full object-cover rounded" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 py-1">
                    <h3 className="font-medium text-lg text-gray-900 mb-2">{item.title}</h3>
                    
                    <div className="flex items-center gap-3 mb-2 text-sm">
                      <span className="font-bold text-xl">${item.price}</span>
                      {item.oldPrice && <span className="text-gray-400 line-through">${item.oldPrice}</span>}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400 text-lg leading-none">★★★★☆</span>
                        <span className="text-yellow-600">{item.rating}.0</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span>{item.orders} orders</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-green-500 font-medium">Free Shipping</span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2 w-5/6 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <a href="#" className="text-blue-600 font-medium text-sm hover:underline">View details</a>
                  </div>

                  {/* Heart Icon Button */}
                  <button className="absolute top-4 right-4 w-10 h-10 border border-gray-200 rounded flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-colors shadow-sm">
                    ♡
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-end items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <select className="border border-gray-300 rounded px-2 py-1.5 bg-white outline-none">
                  <option>Show 10</option>
                </select>
              </div>
              <div className="flex border border-gray-300 rounded overflow-hidden text-sm">
                <button className="px-3 py-1.5 bg-white border-r border-gray-300 text-gray-400 cursor-not-allowed">&lt;</button>
                <button className="px-3 py-1.5 bg-gray-100 border-r border-gray-300 font-medium text-gray-800">1</button>
                <button className="px-3 py-1.5 bg-white border-r border-gray-300 hover:bg-gray-50">2</button>
                <button className="px-3 py-1.5 bg-white border-r border-gray-300 hover:bg-gray-50">3</button>
                <button className="px-3 py-1.5 bg-white hover:bg-gray-50 text-gray-600">&gt;</button>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* NEWSLETTER (Reused) */}
      <div className="bg-gray-200 py-10 mt-10">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-bold text-xl mb-2">Subscribe on our newsletter</h3>
          <p className="text-gray-500 text-sm mb-6">Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="flex gap-2 justify-center items-center">
            <div className="relative w-72">
              {/* IMAGE ASSET LINK HERE: Email Envelope Icon (optional inside input) */}
              <img src="https://img.icons8.com/material-outlined/24/787878/new-post.png" alt="Email icon" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
              <input type="email" placeholder="Email" className="border border-gray-300 rounded px-10 py-2 w-full outline-none" />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium">Subscribe</button>
          </div>
        </div>
      </div>

      {/* FOOTER (Reused) */}
      <footer className="bg-white pt-12 pb-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-6 gap-8 mb-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/assets/Layout/Brand/logo-colored.png" alt="Brand Logo" className="h-10 w-auto" />
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
              <li>Affiliates</li>
              <li>Co-branding</li>
              <li>Franchise</li>
              <li>Retailers</li>
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
              <img src="/assets/Layout/Misc/market-button.png" alt="App Store" className="w-32 h-10 object-contain rounded" />
              <img src="/assets/Layout/Misc/market-button.png" alt="Google Play" className="w-32 h-10 object-contain rounded" />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-gray-600">
            <p>© 2023 Ecommerce.</p>
            <div className="flex items-center gap-1 cursor-pointer">
              <img src="/assets/Layout1/Image/flags/US@2x.png" alt="US Flag" className="w-5 h-3 object-cover rounded-sm mr-1" />
              English
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}