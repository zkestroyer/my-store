import React from 'react';

export default function ProductGrid() {
  // Mock data for the products specifically following the 3x3 layout in the SS
  const products = [
    { id: 1, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', oldPrice: '1128.00', rating: 7.5, imgSrc: '/assets/Image/tech/8.png' },
    { id: 2, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', oldPrice: '1128.00', rating: 5.0, imgSrc: '/assets/Image/tech/image 23.png' },
    { id: 3, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', oldPrice: null, rating: 7.5, imgSrc: '/assets/Image/tech/image 29.png' },
    { id: 4, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', oldPrice: '1128.00', rating: 7.5, imgSrc: '/assets/Image/tech/image 32.png' },
    { id: 5, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', oldPrice: '1128.00', rating: 7.5, imgSrc: '/assets/Image/tech/image 33.png' },
    { id: 6, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', oldPrice: null, rating: 7.5, imgSrc: '/assets/Image/tech/image 34.png' },
    { id: 7, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', oldPrice: '1128.00', rating: 7.5, imgSrc: '/assets/Image/tech/8.png' },
    { id: 8, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', oldPrice: '1128.00', rating: 7.5, imgSrc: '/assets/Image/tech/6.png' },
    { id: 9, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', oldPrice: null, rating: 7.5, imgSrc: '/assets/Image/tech/image 23.png' },
  ];

  const activeFilters = ['Samsung', 'Apple', 'Poco', 'Metallic', '4 star', '3 star'];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#1C1C1C]">
      
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/Layout/Brand/logo-colored.png" alt="Brand Logo" className="h-10 w-auto" />
          </div>
          
          <div className="flex w-1/2 border-2 border-blue-600 rounded-md overflow-hidden">
            <input type="text" placeholder="Search" className="w-full px-3 py-2 outline-none" />
            <select className="bg-white border-l border-gray-300 px-3 py-2 text-gray-600 outline-none cursor-pointer">
              <option>All category</option>
            </select>
            <button className="bg-blue-600 text-white px-8 py-2 font-medium">Search</button>
          </div>

          <div className="flex gap-6 text-gray-500 text-[12px] text-center">
            <NavItem src="https://img.icons8.com/material-outlined/24/787878/user.png" label="Profile" />
            <NavItem src="https://img.icons8.com/material-outlined/24/787878/speech-bubble.png" label="Message" />
            <NavItem src="https://img.icons8.com/material-outlined/24/787878/box.png" label="Orders" />
            <NavItem src="https://img.icons8.com/material-outlined/24/787878/shopping-cart.png" label="My cart" />
          </div>
        </div>

        <div className="border-t border-gray-200 py-3 text-sm font-medium">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-6">
              <span className="cursor-pointer">≡ All category</span>
              {['Hot offers', 'Gift boxes', 'Projects', 'Menu item', 'Help'].map(item => (
                <span key={item} className="cursor-pointer hover:text-blue-600">{item}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <span className="cursor-pointer">English, USD ▼</span>
              <span className="cursor-pointer flex items-center gap-1">
                Ship to <img src="/assets/Layout1/Image/flags/DE@2x.png" alt="Germany" className="w-5 h-3.5 object-cover" /> ▼
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 py-5">
        
        {/* Breadcrumbs */}
        <div className="text-gray-400 text-sm mb-5">
          Home &gt; Clothings &gt; Men's wear &gt; Summer clothing
        </div>

        <div className="flex gap-6">
          {/* LEFT SIDEBAR FILTERS */}
          <aside className="w-64 flex-shrink-0 space-y-2">
            <SidebarFilter title="Category" items={['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech']} type="text" />
            <SidebarFilter title="Brands" items={['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo']} type="checkbox" />
            <SidebarFilter title="Features" items={['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory']} type="checkbox" />
            <SidebarFilter title="Price range" type="collapsed" />
            <SidebarFilter title="Condition" type="collapsed" />
            <SidebarFilter title="Ratings" type="collapsed" />
            <SidebarFilter title="Manufacturer" type="collapsed" />
          </aside>

          {/* RIGHT PRODUCT GRID AREA */}
          <div className="flex-1">
            
            {/* Sorting Toolbar */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-center mb-4">
              <p className="text-sm">12,911 items in <span className="font-bold">Mobile accessory</span></p>
              <div className="flex items-center gap-4 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300" /> Verified only
                </label>
                <select className="border border-gray-300 rounded px-3 py-1.5 outline-none bg-white">
                  <option>Featured</option>
                </select>
                <div className="flex border border-gray-300 rounded overflow-hidden">
                  <button className="px-2 py-1.5 bg-gray-100 border-r border-gray-300">田</button>
                  <button className="px-2 py-1.5 bg-white text-gray-400">≡</button>
                </div>
              </div>
            </div>

            {/* Active Filter Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {activeFilters.map(filter => (
                <div key={filter} className="flex items-center gap-2 bg-white border border-blue-500 text-[#1C1C1C] text-sm px-3 py-1 rounded-md">
                  {filter} <button className="text-gray-400 hover:text-gray-600">×</button>
                </div>
              ))}
              <button className="text-blue-600 text-sm ml-2 font-medium">Clear all filter</button>
            </div>

            {/* 3x3 Product Grid */}
            <div className="grid grid-cols-3 gap-4">
              {products.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col hover:shadow-md transition">
                  <div className="w-full h-48 mb-4 flex items-center justify-center">
                    <img src={item.imgSrc} alt="Product" className="max-h-full max-w-full object-contain" />
                  </div>
                  
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">${item.price}</span>
                        {item.oldPrice && <span className="text-sm text-gray-400 line-through">${item.oldPrice}</span>}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-yellow-400">★★★★☆</span>
                        <span className="text-orange-500 text-sm font-medium">{item.rating}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 border border-gray-200 p-2 rounded-lg hover:bg-gray-50 shadow-sm">♡</button>
                  </div>

                  <p className="text-gray-500 text-sm mt-2 leading-snug line-clamp-2">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination Row */}
            <div className="mt-8 flex justify-end items-center gap-3">
              <select className="border border-gray-300 rounded px-3 py-1.5 bg-white outline-none text-sm">
                <option>Show 10</option>
              </select>
              <div className="flex border border-gray-300 rounded-md overflow-hidden bg-white">
                <button className="px-3 py-1.5 border-r border-gray-300 text-gray-400">&lt;</button>
                <button className="px-3 py-1.5 border-r border-gray-300 bg-gray-100 font-bold">1</button>
                <button className="px-3 py-1.5 border-r border-gray-300 hover:bg-gray-50">2</button>
                <button className="px-3 py-1.5 border-r border-gray-300 hover:bg-gray-50">3</button>
                <button className="px-3 py-1.5 hover:bg-gray-50">&gt;</button>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* NEWSLETTER */}
      <div className="bg-[#EFF2F4] py-12 mt-10">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-bold text-xl mb-2">Subscribe on our newsletter</h3>
          <p className="text-gray-500 text-sm mb-6">Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="flex gap-2 justify-center">
            <input type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-2 w-80 outline-none focus:border-blue-500" />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">Subscribe</button>
          </div>
        </div>
      </div>

      {/* FOOTER - Identical to your previous pages */}
      <footer className="bg-white pt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <img src="/assets/Layout/Brand/logo-colored.png" alt="Logo" className="h-10 mb-6" />
            <p className="text-gray-500 text-sm pr-10 leading-relaxed">Best information about the company gies here but too lorem ipsum is.</p>
            <div className="flex gap-2">
              {['FB', 'TW', 'LI', 'IG', 'YT'].map(s => (
                <div key={s} className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-[10px] font-bold cursor-pointer">{s}</div>
              ))}
            </div>
          </div>
          <FooterCol title="About" links={['About Us', 'Find store', 'Categories', 'Blogs']} />
          <FooterCol title="Partnership" links={['Affiliates', 'Co-branding', 'Franchise', 'Retailers']} />
          <FooterCol title="Information" links={['Help Center', 'Money Refund', 'Shipping', 'Contact us']} />
          <FooterCol title="For users" links={['Login', 'Register', 'Settings', 'My Orders']} />
        </div>
        <div className="bg-gray-100 py-5">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-gray-500 font-medium">
            <p>© 2023 Ecommerce.</p>
            <p className="cursor-pointer">English ▲</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Internal Reusable Components ---

function NavItem({ src, label }) {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition">
      <img src={src} className="w-5 h-5 mb-1 opacity-70" alt={label} />
      <span>{label}</span>
    </div>
  );
}

function SidebarFilter({ title, items = [], type }) {
  return (
    <div className="border-t border-gray-200 py-4">
      <div className="flex justify-between items-center font-bold text-sm mb-3 cursor-pointer">
        {title} <span className="text-gray-400">{type === 'collapsed' ? '▼' : '▲'}</span>
      </div>
      {type !== 'collapsed' && (
        <ul className="space-y-2 text-sm text-gray-600">
          {items.map(item => (
            <li key={item} className="flex items-center gap-2 cursor-pointer">
              {type === 'checkbox' && <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />}
              <span className="hover:text-blue-600">{item}</span>
            </li>
          ))}
          <li className="text-blue-600 cursor-pointer pt-1">See all</li>
        </ul>
      )}
    </div>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-bold mb-4 text-[#1C1C1C]">{title}</h4>
      <ul className="space-y-2 text-gray-500 text-sm">
        {links.map(l => <li key={l} className="cursor-pointer hover:text-blue-600">{l}</li>)}
      </ul>
    </div>
  );
}