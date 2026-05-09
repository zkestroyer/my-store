import React from 'react';

export default function ProductDetails() {
  // Mock data to keep the JSX clean
  const thumbnails = [
    'thumb-1.png', 'thumb-2.png', 'thumb-3.png', 'thumb-4.png', 'thumb-5.png', 'thumb-6.png'
  ];

  const pricingTiers = [
    { price: '$98.00', qty: '50-100 pcs', highlight: true },
    { price: '$90.00', qty: '100-700 pcs', highlight: false },
    { price: '$78.00', qty: '700+ pcs', highlight: false },
  ];

  const productSpecs = [
    { label: 'Model', value: '#8786867' },
    { label: 'Style', value: 'Classic style' },
    { label: 'Certificate', value: 'ISO-898921212' },
    { label: 'Size', value: '34mm x 450mm x 19mm' },
    { label: 'Memory', value: '36GB RAM' },
  ];

  const features = [
    'Some great feature name here',
    'Lorem ipsum dolor sit amet, consectetur',
    'Duis aute irure dolor in reprehenderit',
    'Some great feature name here'
  ];

  const youMayLike = [
    { id: 1, title: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50', imgSrc: 'like-1.png' },
    { id: 2, title: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50', imgSrc: 'like-2.png' },
    { id: 3, title: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50', imgSrc: 'like-3.png' },
    { id: 4, title: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50', imgSrc: 'like-4.png' },
    { id: 5, title: 'New Summer Men\'s castrol T-Shirts', price: '$7.00 - $99.50', imgSrc: 'like-5.png' },
  ];

  const relatedProducts = [
    { id: 1, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', imgSrc: 'related-1.png' },
    { id: 2, title: 'OnePlus 9 Pro 5G Unlocked', price: '$720.00', imgSrc: 'related-2.png' },
    { id: 3, title: 'Google Pixel 6 - 128GB - Stormy Black', price: '$599.00', imgSrc: 'related-3.png' },
    { id: 4, title: 'Samsung Galaxy S21 Ultra', price: '$950.00-$1050.00', imgSrc: 'related-4.png' },
    { id: 5, title: 'Apple iPhone 12 Mini', price: '$500.00-$550.00', imgSrc: 'related-5.png' },
    { id: 6, title: 'Motorola Edge Unlocked', price: '$499.00', imgSrc: 'related-6.png' },
  ];

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

        {/* TOP PRODUCT INFO SECTION */}
        <section className="bg-white border border-gray-200 rounded-lg p-4 flex gap-6 mb-5">

          {/* 1. Left: Product Images */}
          <div className="w-1/3 flex flex-col gap-4">
            <div className="border border-gray-200 rounded flex items-center justify-center p-4 h-[350px]">
              <img src="/assets/Layout/alibaba/Image/cloth/image 24.png" alt="Main Product" className="max-h-full object-contain" />
            </div>
            <div className="flex gap-2 justify-between">
              {thumbnails.map((thumb, idx) => (
                <div key={idx} className={`w-14 h-14 border rounded flex items-center justify-center p-1 cursor-pointer ${idx === 0 ? 'border-blue-500' : 'border-gray-200 hover:border-gray-400'}`}>
                  <img src={'/assets/Layout/alibaba/Image/cloth/' + ["2 1.png", "Bitmap (2).png", "Bitmap.png", "image 24.png", "image 26.png", "image 30.png"][idx % 6]} alt={`Thumbnail ${idx + 1}`} className="max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* 2. Middle: Product Details */}
          <div className="w-1/2">
            <div className="text-green-600 text-sm font-medium flex items-center gap-1 mb-1">
              ✓ In stock
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 leading-none">★★★★☆</span>
                <span className="text-yellow-600 font-medium">9.3</span>
              </div>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1">💬 32 reviews</span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1">🛒 154 sold</span>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-orange-50 border border-orange-100 rounded-sm flex divide-x divide-gray-200 mb-4">
              {pricingTiers.map((tier, idx) => (
                <div key={idx} className="flex-1 p-3">
                  <div className={`font-bold text-lg ${tier.highlight ? 'text-red-500' : 'text-gray-800'}`}>
                    {tier.price}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{tier.qty}</div>
                </div>
              ))}
            </div>

            {/* Attributes Grid */}
            <div className="grid grid-cols-[100px_1fr] gap-y-3 text-sm border-b border-gray-200 pb-4 mb-4">
              <div className="text-gray-500">Price:</div>
              <div className="text-gray-800">Negotiable</div>

              <div className="text-gray-500">Type:</div>
              <div className="text-gray-800">Classic shoes</div>

              <div className="text-gray-500">Material:</div>
              <div className="text-gray-800">Plastic material</div>

              <div className="text-gray-500">Design:</div>
              <div className="text-gray-800">Modern nice</div>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-y-3 text-sm">
              <div className="text-gray-500">Customization:</div>
              <div className="text-gray-800">Customized logo and<br />design custom packages</div>

              <div className="text-gray-500">Protection:</div>
              <div className="text-gray-800">Refund Policy</div>

              <div className="text-gray-500">Warranty:</div>
              <div className="text-gray-800">2 years full warranty</div>
            </div>
          </div>

          {/* 3. Right: Supplier Card */}
          <div className="w-1/4">
            <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white h-full flex flex-col">

              {/* Supplier Header */}
              <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-4">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 font-bold text-xl rounded flex items-center justify-center flex-shrink-0">
                  R
                </div>
                <div>
                  <div className="text-sm text-gray-500 leading-tight">Supplier</div>
                  <div className="font-medium text-gray-800 leading-tight">Guanjoi Trading LLC</div>
                </div>
              </div>

              {/* Supplier Badges */}
              <div className="space-y-2 text-sm text-gray-600 mb-6 flex-grow">
                <div className="flex items-center gap-2">
                  <img src="/assets/Layout1/Image/flags/US@2x.png" alt="US Flag" className="w-5 h-3 object-cover rounded-sm mr-1" /> Germany, Berlin
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">🛡️</span> Verified Seller
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">🌐</span> Worldwide shipping
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <button className="bg-blue-600 text-white font-medium py-2 rounded text-sm w-full hover:bg-blue-700 transition-colors">
                  Send inquiry
                </button>
                <button className="bg-white border border-gray-300 text-blue-600 font-medium py-2 rounded text-sm w-full shadow-sm hover:bg-gray-50 transition-colors">
                  Seller's profile
                </button>
              </div>

              <div className="mt-4 text-center">
                <button className="text-blue-600 text-sm font-medium flex items-center justify-center gap-1 w-full hover:underline">
                  <span className="text-lg leading-none">♡</span> Save for later
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* MIDDLE SECTION: TABS & SIDEBAR */}
        <div className="flex gap-5 mb-5">

          {/* Left: Tab Content */}
          <div className="w-3/4 bg-white border border-gray-200 rounded-lg">
            {/* Tabs Header */}
            <div className="flex border-b border-gray-200 text-sm font-medium text-gray-500">
              <div className="px-6 py-4 text-blue-600 border-b-2 border-blue-600 cursor-pointer">Description</div>
              <div className="px-6 py-4 hover:text-gray-800 cursor-pointer">Reviews</div>
              <div className="px-6 py-4 hover:text-gray-800 cursor-pointer">Shipping</div>
              <div className="px-6 py-4 hover:text-gray-800 cursor-pointer">About seller</div>
            </div>

            {/* Tab Body */}
            <div className="p-6 text-gray-600 text-sm">
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br /><br />
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              {/* Specs Table */}
              <table className="w-3/5 border-collapse border border-gray-200 mb-6">
                <tbody>
                  {productSpecs.map((spec, idx) => (
                    <tr key={idx} className="border-b border-gray-200">
                      <td className="bg-gray-50 py-2 px-4 border-r border-gray-200 w-1/3 text-gray-500">{spec.label}</td>
                      <td className="py-2 px-4 text-gray-800">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Features List */}
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-gray-400">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: You May Like Sidebar */}
          <div className="w-1/4 bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-4">You may like</h3>
            <div className="flex flex-col gap-4">
              {youMayLike.map((item) => (
                <div key={item.id} className="flex gap-3 items-center group cursor-pointer">
                  <div className="w-16 h-16 border border-gray-200 rounded flex items-center justify-center p-1 flex-shrink-0 group-hover:border-blue-300">
                    <img src={["/assets/Image/tech/image 23.png", "/assets/Image/tech/image 29.png", "/assets/Image/tech/image 32.png", "/assets/Image/tech/image 33.png", "/assets/Image/tech/image 34.png", "/assets/Image/tech/image 85.png"][(item.id - 1) % 6]} alt={item.title} className="max-h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-800 line-clamp-2 leading-tight mb-1 group-hover:text-blue-600">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RELATED PRODUCTS */}
        <section className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
          <h3 className="font-bold text-xl text-gray-900 mb-4">Related products</h3>
          <div className="grid grid-cols-6 gap-4">
            {relatedProducts.map((item) => (
              <div key={item.id} className="flex flex-col cursor-pointer group">
                <div className="bg-gray-100 rounded-md h-40 flex items-center justify-center p-4 mb-3 group-hover:bg-gray-200 transition-colors">
                  <img src={["/assets/Image/tech/image 23.png", "/assets/Image/tech/image 29.png", "/assets/Image/tech/image 32.png", "/assets/Image/tech/image 33.png", "/assets/Image/tech/image 34.png", "/assets/Image/tech/image 85.png"][(item.id - 1) % 6]} alt={item.title} className="max-h-full object-contain mix-blend-multiply" />
                </div>
                <h4 className="text-sm text-gray-800 mb-1 group-hover:text-blue-600">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DISCOUNT BANNER */}
        <section className="bg-blue-600 rounded-lg flex justify-between items-center px-8 py-6 text-white mb-10 overflow-hidden relative">
          {/* Decorative background shape to match figma */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-700 transform skew-x-12 translate-x-10"></div>

          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-1">Super discount on more than 100 USD</h2>
            <p className="text-blue-200 text-sm">Have you ever finally just write dummy info</p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium shadow relative z-10 transition-colors">
            Shop now
          </button>
        </section>

      </main>

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