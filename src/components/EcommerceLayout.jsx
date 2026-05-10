import React from 'react';

export default function EcommerceLayout() {
  // --- Data Arrays ---
  const dealsData = [
    { title: "Smart watches", disc: "25", img: "/assets/Image/tech/8.png" },
    { title: "Laptops", disc: "15", img: "/assets/Image/tech/image 34.png" },
    { title: "GoPro cameras", disc: "40", img: "/assets/Image/tech/6.png" },
    { title: "Headphones", disc: "25", img: "/assets/Image/tech/image 29.png" },
    { title: "Canon cameras", disc: "25", img: "/assets/Image/tech/image 23.png" },
  ];

  const homeItems = [
    { name: "Soft chairs", price: "19", img: "/assets/Image/interior/1.png" },
    { name: "Sofa & chair", price: "19", img: "/assets/Image/interior/6.png" },
    { name: "Kitchen dishes", price: "100", img: "/assets/Image/interior/image 93.png" },
    { name: "Smart Watches", price: "39", img: "/assets/Image/interior/3.png" },
    { name: "Kitchen Mixer", price: "19", img: "/assets/Image/interior/9.png" },
    { name: "Blender", price: "10", img: "/assets/Image/interior/8.png" },
    { name: "Home appliance", price: "19", img: "/assets/Image/interior/7.png" },
    { name: "Coffee Maker", price: "10", img: "/assets/Image/interior/image 89.png" },
  ];

  const electronicsItems = [
    { name: "Smart watches", price: "19", img: "/assets/Image/tech/8.png" },
    { name: "Cameras", price: "89", img: "/assets/Image/tech/6.png" },
    { name: "Headphones", price: "10", img: "/assets/Image/tech/image 86.png" },
    { name: "Smart watches", price: "90", img: "/assets/Image/tech/image 85.png" },
    { name: "Gaming set", price: "35", img: "/assets/Image/tech/image 29.png" },
    { name: "Laptops & PC", price: "340", img: "/assets/Image/tech/image 34.png" },
    { name: "Smartphones", price: "19", img: "/assets/Image/tech/image 32.png" },
    { name: "Electric kettle", price: "240", img: "/assets/Image/tech/image 33.png" },
  ];

  return (
    <div className="min-h-screen bg-[#F7FAFC] font-sans text-gray-800">
      
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src="/assets/Layout/Brand/logo-colored.png" alt="Brand Logo" className="h-10 w-auto" />
          <div className="flex w-1/2 border-2 border-blue-500 rounded-md overflow-hidden">
            <input type="text" placeholder="Search" className="w-full px-3 py-2 outline-none" />
            <select className="bg-white border-l border-gray-300 px-3 py-2 text-gray-600 outline-none">
              <option>All category</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2 font-medium">Search</button>
          </div>
          <div className="flex gap-6 text-gray-500 text-[12px] text-center">
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/user.png" label="Profile" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/speech-bubble.png" label="Message" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/heart.png" label="Orders" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/shopping-cart.png" label="My cart" />
          </div>
        </div>
        <div className="border-t border-gray-200 py-3 text-sm font-medium text-gray-800">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-6">
              <span className="cursor-pointer">☰ All category</span>
              {['Hot offers', 'Gift boxes', 'Projects', 'Menu item', 'Help'].map(item => (
                <span key={item} className="cursor-pointer hover:text-blue-600">{item}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <span>English, USD <img src="/assets/Layout/Form/input-group/Icon/control/Vector.png" className="w-3 h-2" /> </span>
              <span className="flex items-center gap-1">
                Ship to <img src="/assets/Layout1/Image/flags/DE@2x.png" alt="Germany" className="w-5 h-3" /> <img src="/assets/Layout/Form/input-group/Icon/control/Vector.png" alt="Dropdown" className="w-3 h-2" />
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT (Limited Width) */}
      <main className="max-w-7xl mx-auto px-4 mt-5 space-y-5">
        <section className="bg-white border border-gray-200 rounded-lg p-4 flex gap-4 h-[400px]">
          <ul className="w-1/5 text-gray-600 flex flex-col justify-between py-1">
            <li className="bg-blue-50 text-blue-700 font-semibold p-2.5 rounded-lg cursor-pointer">Automobiles</li>
            {['Clothes and wear', 'Home interiors', 'Computer and tech', 'Tools, equipments', 'Sports and outdoor', 'Animal and pets', 'Machinery tools', 'More category'].map(cat => (
              <li key={cat} className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition text-sm">{cat}</li>
            ))}
          </ul>
          <div className="w-3/5 bg-teal-100 rounded-lg relative overflow-hidden p-10 flex flex-col justify-center">
            <img src="/assets/Image/backgrounds/Banner-board-800x420 2.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10">
              <p className="text-2xl text-gray-800 mb-1">Latest trending</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Electronic items</h2>
              <button className="bg-white text-gray-900 px-5 py-2 rounded-lg font-bold shadow-sm">Learn more</button>
            </div>
          </div>
          <div className="w-1/5 flex flex-col gap-3">
            <div className="bg-[#E3F0FF] p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://ui-avatars.com/api/?name=User" className="w-11 h-11 rounded-full" />
                <span className="text-sm text-gray-800">Hi, user<br/>let's get started</span>
              </div>
              <button className="bg-blue-600 text-white py-2 rounded-lg text-sm w-full mb-2 font-medium">Join now</button>
              <button className="bg-white text-blue-600 py-2 rounded-lg text-sm w-full border border-gray-200 font-medium">Log in</button>
            </div>
            <div className="bg-[#F38332] text-white p-4 rounded-lg flex-1 text-[16px]">Get US $10 off with a new supplier</div>
            <div className="bg-[#55BDC3] text-white p-4 rounded-lg flex-1 text-[16px]">Send quotes with supplier preferences</div>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-lg flex overflow-hidden">
          <div className="p-6 border-r border-gray-200 w-1/5 flex flex-col justify-center">
            <h3 className="font-bold text-xl">Deals and offers</h3>
            <p className="text-gray-400 text-sm mb-4">Hygiene equipments</p>
            <div className="flex gap-1.5">
              <TimeBox val="04" label="Days" />
              <TimeBox val="13" label="Hour" />
              <TimeBox val="34" label="Min" />
              <TimeBox val="56" label="Sec" />
            </div>
          </div>
          <div className="flex w-4/5 divide-x divide-gray-200">
            {dealsData.map((item, idx) => (
              <div key={idx} className="p-5 flex flex-col items-center justify-center w-1/5 hover:bg-gray-50 transition cursor-pointer">
                <img src={item.img} className="w-28 h-28 mb-3 object-contain" />
                <p className="text-sm text-gray-800 mb-2">{item.title}</p>
                <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-bold">-{item.disc}%</span>
              </div>
            ))}
          </div>
        </section>

        <CategoryGrid title="Home and outdoor" bannerImg="/assets/Image/backgrounds/Group 969.png" items={homeItems} accentColor="bg-yellow-50" />
        <CategoryGrid title="Consumer electronics and gadgets" bannerImg="/assets/Image/backgrounds/Group 982.png" items={electronicsItems} accentColor="bg-blue-50" />

        <section className="bg-blue-600 rounded-lg flex relative overflow-hidden min-h-[400px]">
          <img src="/assets/Image/backgrounds/Mask group (1).png" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="w-1/2 p-10 text-white relative z-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 max-w-sm">An easy way to send requests to all suppliers</h2>
            <p className="text-sm text-blue-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="w-1/2 p-8 flex justify-end relative z-10">
            <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-2xl">
              <h3 className="font-bold text-xl text-gray-800 mb-5">Send quote to suppliers</h3>
              <input type="text" placeholder="What item you need?" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mb-4 outline-none" />
              <textarea placeholder="Type more details" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mb-4 h-24 outline-none resize-none"></textarea>
              <div className="flex gap-4 mb-6">
                <input type="text" placeholder="Quantity" className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 outline-none" />
                <select className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 outline-none bg-white"><option>Pcs</option></select>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold">Send inquiry</button>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-2xl mb-6">Recommended items</h3>
          <div className="grid grid-cols-5 gap-5">
            {[...Array(10)].map((_, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer">
                <div className="h-44 w-full flex items-center justify-center mb-4">
                  <img src={["/assets/Image/interior/3.png","/assets/Image/interior/6.png","/assets/Image/interior/7.png","/assets/Image/interior/8.png","/assets/Image/interior/9.png","/assets/Image/tech/6.png","/assets/Image/tech/8.png","/assets/Image/tech/image 23.png","/assets/Image/tech/image 29.png","/assets/Image/tech/image 32.png"][idx]} className="max-h-full object-contain" />
                </div>
                <p className="font-bold text-lg mb-1">$10.30</p>
                <p className="text-sm text-gray-400 line-clamp-2">T-shirts with multiple colors, for men</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-bold text-2xl mb-6">Our extra services</h3>
          <div className="grid grid-cols-4 gap-5">
            {[
              { title: 'Source from Industry Hubs', img: '/assets/Image/backgrounds/image 106.png' },
              { title: 'Customize Your Products', img: '/assets/Image/backgrounds/image 107.png' },
              { title: 'Fast, reliable shipping by ocean or air', img: '/assets/Image/backgrounds/image 98.png' },
              { title: 'Product monitoring and inspection', img: '/assets/Image/backgrounds/Mask group (1).png' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden relative group">
                <div className="h-32 overflow-hidden bg-gray-900">
                  <img src={service.img} className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition duration-500" />
                </div>
                <div className="absolute right-5 top-24 w-14 h-14 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center">
                  <img src="https://img.icons8.com/material-outlined/24/787878/search.png" className="w-6 h-6" />
                </div>
                <div className="p-6 pt-8"><p className="text-sm font-semibold text-gray-800 w-3/4">{service.title}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-10">
          <h3 className="font-bold text-2xl mb-6">Suppliers by region</h3>
          <div className="grid grid-cols-5 gap-y-6 gap-x-4">
            {[
              { name: 'United Arab Emirates', domain: 'shopname.ae', flag: 'AE@2x.png' },
              { name: 'Australia', domain: 'shopname.au', flag: 'US@2x.png' },
              { name: 'United States', domain: 'shopname.us', flag: 'US@2x.png' },
              { name: 'Russia', domain: 'shopname.ru', flag: 'RU@2x.png' },
              { name: 'Italy', domain: 'shopname.it', flag: 'IT@2x.png' },
              { name: 'Denmark', domain: 'denmark.com.dk', flag: 'DK@2x.png' },
              { name: 'France', domain: 'shopname.com.fr', flag: 'FR@2x.png' },
              { name: 'Arabic Emirates', domain: 'shopname.ae', flag: 'AE@2x.png' },
              { name: 'China', domain: 'shopname.cn', flag: 'CN@2x.png' },
              { name: 'Great Britain', domain: 'shopname.co.uk', flag: 'GB@2x.png' }
            ].map((region, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img src={`/assets/Layout1/Image/flags/${region.flag}`} className="w-8 h-6 object-cover shadow-sm" />
                <div>
                  <p className="text-sm font-medium leading-none mb-1">{region.name}</p>
                  <p className="text-xs text-gray-400">{region.domain}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FULL WIDTH SECTIONS (Outside Main) */}
      <section className="bg-white border-t border-gray-200 mt-10">
        <div className="bg-[#EFF2F4] py-12">
          <div className="max-w-xl mx-auto text-center px-4">
            <h3 className="font-bold text-xl mb-2">Subscribe on our newsletter</h3>
            <p className="text-gray-500 text-sm mb-6">Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className="flex gap-2 justify-center">
              <input type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-2 w-80 outline-none focus:border-blue-500" />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-6 gap-8">
          <div className="col-span-2">
            <img src="/assets/Layout/Brand/logo-colored.png" className="h-10 mb-6" />
            <p className="text-gray-500 text-sm pr-10 leading-relaxed">Best information about the company gies here but too lorem ipsum is.</p>
            <div className="flex gap-2 mt-4">
              {['FB', 'TW', 'LI', 'IG', 'YT'].map(s => (
                <div key={s} className="w-8 h-8 bg-[#BDC4CD] rounded-full flex items-center justify-center text-white text-[10px] font-bold">{s}</div>
              ))}
            </div>
          </div>
          <FooterCol title="About" links={['About Us', 'Find store', 'Categories', 'Blogs']} />
          <FooterCol title="Partnership" links={['Affiliates', 'Co-branding', 'Franchise', 'Retailers']} />
          <FooterCol title="Information" links={['Help Center', 'Money Refund', 'Shipping', 'Contact us']} />
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Get app</h4>
            <img src="/assets/Layout/Misc/market-button.png" className="w-32" />
            <img src="/assets/Layout/Misc/market-button.png" className="w-32" />
          </div>
        </div>

        <div className="bg-[#EFF2F4] py-5 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-gray-500">
            <p>© 2023 Ecommerce.</p>
            <p className="flex items-center gap-2 cursor-pointer font-medium">
              <img src="/assets/Layout1/Image/flags/US@2x.png" className="w-5" /> English <img src="/assets/Layout/Form/input-group/Icon/control/Vector2.png" className="w-3 h-2" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- SUB-COMPONENTS ---
function HeaderIcon({ src, label }) {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition">
      <img src={src} className="w-5 h-5 mb-1 opacity-70" />
      <span>{label}</span>
    </div>
  );
}
function TimeBox({ val, label }) {
  return (
    <div className="bg-gray-800 rounded-lg p-2 text-center text-white min-w-[50px]">
      <p className="text-lg font-bold leading-none">{val}</p>
      <p className="text-[10px] uppercase font-medium">{label}</p>
    </div>
  );
}
function CategoryGrid({ title, bannerImg, items, accentColor }) {
  return (
    <section className="bg-white border border-gray-200 rounded-lg flex overflow-hidden">
      <div className={`w-1/4 p-6 relative flex flex-col justify-start overflow-hidden ${accentColor}`}>
        <img src={bannerImg} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10">
          <h3 className="font-bold text-xl mb-5 w-2/3 leading-tight">{title}</h3>
          <button className="bg-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm">Source now</button>
        </div>
      </div>
      <div className="w-3/4 grid grid-cols-4 grid-rows-2 divide-x divide-y border-l border-gray-200">
        {items.map((item, idx) => (
          <div key={idx} className="p-4 flex flex-col justify-between hover:bg-gray-50 cursor-pointer relative min-h-[130px]">
            <div>
              <h4 className="text-sm font-medium">{item.name}</h4>
              <p className="text-xs text-gray-400 mt-1">From<br/>USD {item.price}</p>
            </div>
            <img src={item.img} className="w-16 h-16 rounded absolute bottom-4 right-4 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-bold mb-4">{title}</h4>
      <ul className="space-y-2 text-gray-500 text-sm">
        {links.map(l => <li key={l} className="cursor-pointer hover:text-blue-600">{l}</li>)}
      </ul>
    </div>
  );
}