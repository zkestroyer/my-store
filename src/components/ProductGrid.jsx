import React from 'react';

export default function ProductGrid() {
  // Mock data for the products shown in the 3x3 grid
  const products = [
    { id: 1, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', oldPrice: '1128.00', rating: 7.5, imgSrc: 'product-1.png' },
    { id: 2, title: 'Canon EOS R5 Mirrorless Camera', price: '3899.00', oldPrice: '4000.00', rating: 9.2, imgSrc: 'product-2.png' },
    { id: 3, title: 'DJI Mavic Air 2 Fly More Combo', price: '988.00', oldPrice: null, rating: 8.5, imgSrc: 'product-3.png' },
    { id: 4, title: 'Apple iPad Pro 11-inch (3rd Gen)', price: '799.00', oldPrice: '850.00', rating: 9.0, imgSrc: 'product-4.png' },
    { id: 5, title: 'Samsung 49-Inch CRG9 Curved Monitor', price: '1199.00', oldPrice: '1499.00', rating: 8.8, imgSrc: 'product-5.png' },
    { id: 6, title: 'Bose QuietComfort 45 Bluetooth', price: '329.00', oldPrice: null, rating: 9.1, imgSrc: 'product-6.png' },
    { id: 7, title: 'Logitech MX Master 3 Advanced Mouse', price: '99.99', oldPrice: '120.00', rating: 9.5, imgSrc: 'product-7.png' },
    { id: 8, title: 'Nintendo Switch OLED Model', price: '349.99', oldPrice: '399.00', rating: 8.9, imgSrc: 'product-8.png' },
    { id: 9, title: 'Keychron K2 Wireless Mechanical Keyboard', price: '79.00', oldPrice: null, rating: 8.4, imgSrc: 'product-9.png' },
  ];

  // The active filters shown below the search bar
  const activeFilters = ['Samsung', 'Apple', 'Poco', 'Metallic', '4 star', '3 star'];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* HEADER */}
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
                    <input type="checkbox" defaultChecked={['Samsung', 'Apple', 'Pocco'].includes(brand)} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
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
                    <input type="checkbox" defaultChecked={feature === 'Metallic'} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    {feature}
                  </label>
                ))}
                <div className="text-blue-600 cursor-pointer mt-1">See all</div>
              </div>
            </div>

            {/* Collapsed Filters */}
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center font-semibold cursor-pointer">
                Price range <span className="text-gray-400 text-xs">▼</span>
              </div>
            </div>
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center font-semibold cursor-pointer">
                Condition <span className="text-gray-400 text-xs">▼</span>
              </div>
            </div>
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center font-semibold cursor-pointer">
                Ratings <span className="text-gray-400 text-xs">▼</span>
              </div>
            </div>
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center font-semibold cursor-pointer">
                Manufacturer <span className="text-gray-400 text-xs">▼</span>
              </div>
            </div>
          </aside>

          {/* RIGHT PRODUCT GRID */}
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
                  <button className="px-2 py-1 bg-gray-100 text-gray-800 border-r border-gray-300">
                    ⊞
                  </button>
                  <button className="px-2 py-1 bg-white hover:bg-gray-50 text-gray-400">
                    ☰
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters Row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {activeFilters.map(filter => (
                <span key={filter} className="flex items-center gap-1 bg-white border border-gray-300 text-gray-600 text-sm px-2 py-1 rounded">
                  {filter} 
                  <button className="text-gray-400 hover:text-gray-600 ml-1 leading-none">×</button>
                </span>
              ))}
              <button className="text-blue-600 text-sm ml-2 hover:underline">Clear all filter</button>
            </div>

            {/* 3x3 Grid of Products */}
            <div className="grid grid-cols-3 gap-4">
              {products.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col relative group">
                  {/* Image Container */}
                  <div className="w-full h-48 bg-gray-100 rounded mb-4 flex items-center justify-center p-4">
                    <img src={["/assets/Image/interior/3.png","/assets/Image/interior/6.png","/assets/Image/interior/7.png","/assets/Image/interior/8.png","/assets/Image/interior/9.png","/assets/Image/tech/6.png","/assets/Image/tech/8.png","/assets/Image/tech/image 23.png","/assets/Image/tech/image 29.png","/assets/Image/tech/image 32.png"][(item.id - 1) % 10]} alt={item.title} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                  </div>

                  {/* Price and Heart */}
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">${item.price}</span>
                        {item.oldPrice && <span className="text-sm text-gray-400 line-through">${item.oldPrice}</span>}
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-sm">
                        <span className="text-yellow-400 leading-none">★★★★☆</span>
                        <span className="text-yellow-600">{item.rating}</span>
                      </div>
                    </div>
                    <button className="text-blue-500 border border-gray-200 w-8 h-8 rounded flex items-center justify-center hover:bg-blue-50 shadow-sm">
                      ♡
                    </button>
                  </div>

                  {/* Title */}
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">{item.title}</p>
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

      {/* NEWSLETTER */}
      <div className="bg-gray-200 py-10 mt-10">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-bold text-xl mb-2">Subscribe on our newsletter</h3>
          <p className="text-gray-500 text-sm mb-6">Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="flex gap-2 justify-center">
            <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 w-72 outline-none" />
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium">Subscribe</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
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