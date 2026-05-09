import React from 'react';

export default function EcommerceLayout() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 pb-10">
      
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
              {/* IMAGE ASSET LINK HERE: Profile Icon */}
              <img src="https://img.icons8.com/material-outlined/24/787878/user.png" alt="Profile Icon" className="w-6 h-6 rounded-full mb-1" />
              Profile
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              {/* IMAGE ASSET LINK HERE: Message Icon */}
              <img src="https://img.icons8.com/material-outlined/24/787878/speech-bubble.png" alt="Message Icon" className="w-6 h-6 rounded mb-1" />
              Message
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              {/* IMAGE ASSET LINK HERE: Orders Icon */}
              <img src="https://img.icons8.com/material-outlined/24/787878/box.png" alt="Orders Icon" className="w-6 h-6 rounded mb-1" />
              Orders
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              {/* IMAGE ASSET LINK HERE: Cart Icon */}
              <img src="https://img.icons8.com/material-outlined/24/787878/shopping-cart.png" alt="Cart Icon" className="w-6 h-6 rounded mb-1" />
              My cart
            </div>
          </div>
        </div>

        {/* SUBHEADER MENU */}
        <div className="border-t border-gray-200 py-2 text-sm text-gray-600">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-6 font-medium">
              <span className="cursor-pointer hover:text-blue-600">All category</span>
              <span className="cursor-pointer hover:text-blue-600">Hot offers</span>
              <span className="cursor-pointer hover:text-blue-600">Gift boxes</span>
              <span className="cursor-pointer hover:text-blue-600">Projects</span>
              <span className="cursor-pointer hover:text-blue-600">Menu item</span>
              <span className="cursor-pointer hover:text-blue-600">Help</span>
            </div>
            <div className="flex gap-4 font-medium">
              <span className="cursor-pointer">English, USD</span>
              <span className="cursor-pointer flex items-center gap-1">
                Ship to
                {/* IMAGE ASSET LINK HERE: Germany Flag */}
                <img src= "/assets/Layout1/Image/flags/DE@2x.png" alt="Germany Flag" className="w-4 h-3 object-cover rounded-sm" />
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 mt-6 space-y-6">

        {/* HERO SECTION */}
        <section className="bg-white border border-gray-200 rounded-lg p-4 flex gap-4 h-[400px]">
          {/* Sidebar */}
          <ul className="w-1/5 space-y-2 text-gray-600 text-sm overflow-y-auto pr-2">
            <li className="bg-blue-50 text-blue-700 font-medium p-2 rounded cursor-pointer">Automobiles</li>
            <li className="p-2 hover:bg-gray-50 rounded cursor-pointer">Clothes and wear</li>
            <li className="p-2 hover:bg-gray-50 rounded cursor-pointer">Home interiors</li>
            <li className="p-2 hover:bg-gray-50 rounded cursor-pointer">Computer and tech</li>
            <li className="p-2 hover:bg-gray-50 rounded cursor-pointer">Tools, equipments</li>
            <li className="p-2 hover:bg-gray-50 rounded cursor-pointer">Sports and outdoor</li>
            <li className="p-2 hover:bg-gray-50 rounded cursor-pointer">Animal and pets</li>
            <li className="p-2 hover:bg-gray-50 rounded cursor-pointer">Machinery tools</li>
            <li className="p-2 hover:bg-gray-50 rounded cursor-pointer">More category</li>
          </ul>

          {/* Banner */}
          <div className="w-3/5 bg-teal-100 rounded-lg relative overflow-hidden p-10 flex flex-col justify-center">
             {/* IMAGE ASSET LINK HERE: Hero Banner Background (Electronics flatlay) */}
            <img src="/assets/Image/backgrounds/Banner-board-800x420 2.png" alt="Hero Banner" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="relative z-10">
              <p className="text-xl text-teal-800 mb-1">Latest trending</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Electronic items</h2>
              <button className="bg-white text-gray-900 px-4 py-2 rounded font-medium shadow-sm w-max">Learn more</button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="w-1/5 flex flex-col gap-3">
            <div className="bg-blue-50 p-4 rounded-lg flex flex-col h-1/3 justify-center">
              <div className="flex items-center gap-3 mb-3">
                 {/* IMAGE ASSET LINK HERE: User Avatar */}
                <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
                <span className="text-sm">Hi, user<br/>let's get started</span>
              </div>
              <button className="bg-blue-600 text-white py-1.5 rounded text-sm w-full mb-2">Join now</button>
              <button className="bg-white text-blue-600 py-1.5 rounded text-sm w-full border border-gray-200">Log in</button>
            </div>
            <div className="bg-orange-500 text-white p-4 rounded-lg h-1/3 flex items-center text-sm">
              Get US $10 off<br/>with a new<br/>supplier
            </div>
            <div className="bg-teal-500 text-white p-4 rounded-lg h-1/3 flex items-center text-sm">
              Send quotes with<br/>supplier<br/>preferences
            </div>
          </div>
        </section>

        {/* DEALS AND OFFERS */}
        <section className="bg-white border border-gray-200 rounded-lg flex overflow-hidden">
          <div className="p-6 border-r border-gray-200 w-1/5">
            <h3 className="font-bold text-lg">Deals and offers</h3>
            <p className="text-gray-500 text-sm mb-4">Hygiene equipments</p>
            <div className="flex gap-2 text-center text-xs text-white">
              <div className="bg-gray-800 rounded p-2">04<div className="text-[10px]">Days</div></div>
              <div className="bg-gray-800 rounded p-2">13<div className="text-[10px]">Hour</div></div>
              <div className="bg-gray-800 rounded p-2">34<div className="text-[10px]">Min</div></div>
              <div className="bg-gray-800 rounded p-2">56<div className="text-[10px]">Sec</div></div>
            </div>
          </div>
          <div className="flex w-4/5 divide-x divide-gray-200">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="p-4 flex flex-col items-center justify-center w-1/5">
                {/* IMAGE ASSET LINK HERE: Deal Product Image {item} */}
                <img src= "/assets/Image/tech/8.png" alt={`Deal ${item}`} className="w-24 h-24 mb-3 rounded object-cover" />
                <p className="text-sm text-gray-800 mb-2">Smartwatches</p>
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">-25%</span>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORY BLOCK: HOME AND OUTDOOR */}
        <section className="bg-white border border-gray-200 rounded-lg flex overflow-hidden">
          <div className="w-1/4 p-6 relative flex flex-col justify-start">
             {/* IMAGE ASSET LINK HERE: Home & Outdoor Banner Image */}
             <img src="/assets/Image/backgrounds/Group 969.png" alt="Home and Outdoor" className="absolute inset-0 w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-yellow-50/60 z-0"></div>
             <div className="relative z-10">
               <h3 className="font-bold text-lg mb-4 w-1/2">Home and outdoor</h3>
               <button className="bg-white px-4 py-2 rounded text-sm font-medium shadow-sm">Source now</button>
             </div>
          </div>
          <div className="w-3/4 grid grid-cols-4 grid-rows-2 divide-x divide-y border-l border-gray-200">
             {[...Array(8)].map((_, idx) => (
              <div key={idx} className="p-4 flex justify-between relative">
                <div>
                  <h4 className="text-sm text-gray-800">Sofa</h4>
                  <p className="text-xs text-gray-400 mt-1">From<br/>USD 19</p>
                </div>
                {/* IMAGE ASSET LINK HERE: Home Product {idx} */}
                <img src= "/assets/Image/interior/1.png" alt={`Home product ${idx + 1}`} className="w-16 h-16 rounded absolute bottom-2 right-2 object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORY BLOCK: CONSUMER ELECTRONICS */}
        <section className="bg-white border border-gray-200 rounded-lg flex overflow-hidden">
          <div className="w-1/4 p-6 relative flex flex-col justify-start">
             {/* IMAGE ASSET LINK HERE: Electronics Banner Image */}
             <img src="/assets/Image/backgrounds/Group 982.png" alt="Consumer Electronics" className="absolute inset-0 w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-blue-50/60 z-0"></div>
             <div className="relative z-10">
               <h3 className="font-bold text-lg mb-4 w-1/2">Consumer electronics and gadgets</h3>
               <button className="bg-white px-4 py-2 rounded text-sm font-medium shadow-sm">Source now</button>
             </div>
          </div>
          <div className="w-3/4 grid grid-cols-4 grid-rows-2 divide-x divide-y border-l border-gray-200">
             {[...Array(8)].map((_, idx) => (
              <div key={idx} className="p-4 flex justify-between relative">
                <div>
                  <h4 className="text-sm text-gray-800">Gaming Console</h4>
                  <p className="text-xs text-gray-400 mt-1">From<br/>USD 19</p>
                </div>
                {/* IMAGE ASSET LINK HERE: Electronics Product {idx} */}
                <img src= "/assets/Image/tech/6.png" alt={`Electronics product ${idx + 1}`} className="w-16 h-16 rounded absolute bottom-2 right-2 object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* INQUIRY BANNER */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg flex relative overflow-hidden">
           {/* IMAGE ASSET LINK HERE: Inquiry Background Graphic */}
          <img src="/assets/Image/backgrounds/Mask group (1).png" alt="Inquiry Background" className="absolute right-0 top-0 h-full object-cover opacity-15" />
          <div className="w-1/2 p-10 text-white relative z-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 w-3/4">An easy way to send requests to all suppliers</h2>
            <p className="text-sm text-blue-100 w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="w-1/2 p-6 flex justify-end relative z-10">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
              <h3 className="font-bold text-gray-800 mb-4">Send quote to suppliers</h3>
              <input type="text" placeholder="What item you need?" className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 outline-none" />
              <textarea placeholder="Type more details" className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 h-20 outline-none resize-none"></textarea>
              <div className="flex gap-2 mb-4">
                <input type="text" placeholder="Quantity" className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm outline-none" />
                <select className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm outline-none bg-white">
                  <option>Pcs</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium text-sm">Send inquiry</button>
            </div>
          </div>
        </section>

        {/* RECOMMENDED ITEMS */}
        <section>
          <h3 className="font-bold text-xl mb-4 text-gray-800">Recommended items</h3>
          <div className="grid grid-cols-5 gap-4">
             {[...Array(10)].map((_, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col">
                {/* IMAGE ASSET LINK HERE: Recommended Product {idx} */}
                <img src={["/assets/Image/interior/3.png","/assets/Image/interior/6.png","/assets/Image/interior/7.png","/assets/Image/interior/8.png","/assets/Image/interior/9.png","/assets/Image/tech/6.png","/assets/Image/tech/8.png","/assets/Image/tech/image 23.png","/assets/Image/tech/image 29.png","/assets/Image/tech/image 32.png"][idx % 10]} alt={`Recommended product ${idx + 1}`} className="w-full h-40 rounded mb-4 object-cover" />
                <p className="font-bold text-gray-900 mb-1">$10.30</p>
                <p className="text-sm text-gray-500 line-clamp-2">T-shirts with multiple colors, for men</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR EXTRA SERVICES */}
        <section>
          <h3 className="font-bold text-xl mb-4 text-gray-800">Our extra services</h3>
          <div className="grid grid-cols-4 gap-4">
             {[
               { title: 'Source from Industry Hubs' },
               { title: 'Customize Your Products' },
               { title: 'Fast, reliable shipping by ocean or air' },
               { title: 'Product monitoring and inspection' }
             ].map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden relative">
                {/* IMAGE ASSET LINK HERE: Service Background {idx} */}
                <img src={["/assets/Image/backgrounds/image 106.png","/assets/Image/backgrounds/image 107.png","/assets/Image/backgrounds/image 98.png","/assets/Image/backgrounds/Mask group (1).png"][idx % 4]} alt={`Service background ${idx + 1}`} className="h-32 w-full object-cover" />
                {/* IMAGE ASSET LINK HERE: Service Icon {idx} */}
                <div className="absolute right-4 top-24 w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">
                  <img src={`https://img.icons8.com/material-outlined/24/787878/search.png`} alt={`Service icon ${idx + 1}`} className="w-5 h-5 rounded-full" />
                </div>
                <div className="p-4 pt-6">
                  <p className="text-sm font-medium text-gray-800 w-3/4">{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SUPPLIERS BY REGION */}
        <section className="mb-10">
          <h3 className="font-bold text-xl mb-4 text-gray-800">Suppliers by region</h3>
          <div className="grid grid-cols-5 gap-y-4 gap-x-2">
             {[
               { name: 'United Arab Emirates', domain: 'shopname.ae' },
               { name: 'Australia', domain: 'shopname.au' },
               { name: 'United States', domain: 'shopname.us' },
               { name: 'Russia', domain: 'shopname.ru' },
               { name: 'Italy', domain: 'shopname.it' },
               { name: 'Denmark', domain: 'denmark.com.dk' },
               { name: 'France', domain: 'shopname.com.fr' },
               { name: 'Arabic Emirates', domain: 'shopname.ae' },
               { name: 'China', domain: 'shopname.cn' },
               { name: 'Great Britain', domain: 'shopname.co.uk' }
             ].map((region, idx) => (
              <div key={idx} className="flex items-center gap-3">
                 {/* IMAGE ASSET LINK HERE: Flag Icon {idx} */}
                <img src={'/assets/Layout1/Image/flags/' + ["AE@2x.png","US@2x.png","US@2x.png","RU@2x.png","IT@2x.png","DK@2x.png","FR@2x.png","AE@2x.png","CN@2x.png","GB@2x.png"][idx % 10]} alt={`Flag ${region.name}`} className="w-8 h-6 rounded-sm object-cover" />
                <div>
                  <p className="text-sm text-gray-800">{region.name}</p>
                  <p className="text-xs text-gray-500">{region.domain}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

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
              {/* IMAGE ASSET LINK HERE: Social Icons (FB, Twitter, LinkedIn, IG, YT) */}
              {['FB','TW','LI','IG','YT'].map((icon) => (
                <img key={icon} src={`https://via.placeholder.com/32?text=${icon}`} alt={`${icon} icon`} className="w-8 h-8 rounded-full object-cover" />
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
               {/* IMAGE ASSET LINK HERE: App Store Button */}
              <img src="/assets/Layout/Misc/market-button.png" alt="App Store" className="w-32 h-10 object-contain rounded" />
               {/* IMAGE ASSET LINK HERE: Google Play Button */}
              <img src="/assets/Layout/Misc/market-button.png" alt="Google Play" className="w-32 h-10 object-contain rounded mt-2" />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="bg-gray-100 py-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-gray-600">
            <p>© 2023 Ecommerce.</p>
            <div className="flex items-center gap-1 cursor-pointer">
              {/* IMAGE ASSET LINK HERE: USA Flag Icon */}
              <img src="/assets/Layout1/Image/flags/US@2x.png" alt="USA Flag" className="w-5 h-3 object-cover rounded-sm mr-1" />
              English
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}