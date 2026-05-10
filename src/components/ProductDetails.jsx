import React from 'react';

export default function ProductListing() {
  // Sidebar Category Data
  const categories = ['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'];
  const brands = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
  const features = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'];

  // Main Product List Data
  const products = [
    { id: 1, title: 'Canon C-os EOS 2000D, Black 10x zoom', price: '$998.00', oldPrice: '$1128.00', rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: '/assets/Image/tech/image 33.png' },
    { id: 2, title: 'GoPro HERO6 4K Action Camera - Black', price: '$998.00', oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.', img: '/assets/Image/tech/image 23.png' },
    { id: 3, title: 'GoPro HERO6 4K Action Camera - Black', price: '$998.00', oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.', img: '/assets/Image/tech/image 32.png' },
    { id: 4, title: 'GoPro HERO6 4K Action Camera - Black', price: '$998.00', oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.', img: '/assets/Image/tech/image 34.png' },
    { id: 5, title: 'GoPro HERO6 4K Action Camera - Black', price: '$998.00', oldPrice: '$1128.00', rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.', img: '/assets/Image/tech/8.png' },
    { id: 6, title: 'GoPro HERO6 4K Action Camera - Black', price: '$998.00', oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.', img: '/assets/Layout/alibaba/Image/tech/image 86.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#1C1C1C]">
      
      {/* HEADER - Consistent with Page 1 */}
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
          <div className="max-w-7xl mx-auto px-4 flex justify-between">
            <div className="flex gap-6">
              <span>All category</span>
              {['Hot offers', 'Gift boxes', 'Projects', 'Menu item', 'Help'].map(item => <span key={item} className="cursor-pointer">{item}</span>)}
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

      <main className="max-w-7xl mx-auto px-4 py-5">
        {/* Breadcrumbs */}
        <div className="text-gray-400 text-sm mb-5">
          Home &gt; Clothings &gt; Men's wear &gt; Summer clothing
        </div>

        <div className="flex gap-6">
          {/* SIDEBAR FILTERS */}
          <aside className="w-1/4 space-y-6">
            <FilterSection title="Category" items={categories} type="text" />
            <FilterSection title="Brands" items={brands} type="checkbox" />
            <FilterSection title="Features" items={features} type="checkbox" />
            
            {/* Price Range */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-bold mb-3">Price range</h4>
              <div className="flex gap-2 mb-3">
                <input type="number" placeholder="Min" className="w-1/2 border border-gray-300 rounded p-2 text-sm" />
                <input type="number" placeholder="Max" className="w-1/2 border border-gray-300 rounded p-2 text-sm" />
              </div>
              <button className="w-full bg-white border border-gray-300 text-blue-600 font-bold py-2 rounded shadow-sm">Apply</button>
            </div>

            <FilterSection title="Condition" items={['Any', 'Refurbished', 'Brand new', 'Old items']} type="radio" />
            
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-bold mb-3">Ratings</h4>
              {[5, 4, 3, 2].map(star => (
                <div key={star} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-yellow-400">{'★'.repeat(star)}{'☆'.repeat(5-star)}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* PRODUCT LISTING AREA */}
          <div className="w-3/4">
            {/* Top Toolbar */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-center mb-4">
              <p className="text-sm">12,641 items in <span className="font-bold">Mobile accessory</span></p>
              <div className="flex items-center gap-4 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly /> Verified only
                </label>
                <select className="border border-gray-300 rounded p-1">
                  <option>Featured</option>
                </select>
                <div className="flex border border-gray-300 rounded overflow-hidden">
                  <button className="p-2 bg-gray-100 border-r border-gray-300">田</button>
                  <button className="p-2 bg-white">≡</button>
                </div>
              </div>
            </div>

            {/* List View Cards */}
            <div className="space-y-3">
              {products.map(product => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-5 flex gap-6 hover:shadow-sm transition">
                  <div className="w-48 h-48 flex-shrink-0 flex items-center justify-center border border-gray-100 rounded">
                    <img src={product.img} alt="Product" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-[16px] text-[#1C1C1C] hover:text-blue-600 cursor-pointer">{product.title}</h3>
                      <button className="text-blue-600 border border-gray-200 rounded p-2 hover:bg-gray-50">♡</button>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xl font-bold">{product.price}</span>
                      {product.oldPrice && <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400 mt-2">
                      <span className="text-yellow-500">★★★★☆ {product.rating}</span>
                      <span>•</span>
                      <span>{product.orders} orders</span>
                      <span>•</span>
                      <span className="text-green-500 font-medium">{product.shipping}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-2">{product.desc}</p>
                    <button className="text-blue-600 font-bold text-sm mt-3">View details</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-end mt-8 gap-1">
               <select className="border border-gray-300 rounded px-2 mr-2">
                 <option>Show 10</option>
               </select>
               <button className="px-3 py-1 border border-gray-300 rounded bg-white">1</button>
               <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">2</button>
               <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">3</button>
               <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">&gt;</button>
            </div>
          </div>
        </div>
      </main>

      {/* NEWSLETTER SECTION */}
      <div className="bg-[#EFF2F4] py-12 mt-10">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-bold text-xl mb-2">Subscribe on our newsletter</h3>
          <p className="text-gray-500 text-sm mb-6">Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="flex gap-2 justify-center">
            <input type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-2 w-80 outline-none" />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">Subscribe</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white pt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-6 gap-8 pb-10">
          <div className="col-span-2">
            <img src="/assets/Layout/Brand/logo-colored.png" alt="Brand Logo" className="h-10 mb-5" />
            <p className="text-gray-500 text-sm pr-10">Best information about the company gies here but too lorem ipsum is.</p>
            <div className="flex gap-2 mt-4">
              {['FB', 'TW', 'LI', 'IG', 'YT'].map(s => (
                <div key={s} className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-[10px] font-bold">{s}</div>
              ))}
            </div>
          </div>
          <FooterCol title="About" links={['About Us', 'Find store', 'Categories', 'Blogs']} />
          <FooterCol title="Partnership" links={['Affiliates', 'Co-branding', 'Franchise', 'Retailers']} />
          <FooterCol title="Information" links={['Help Center', 'Money Refund', 'Shipping', 'Contact us']} />
          <FooterCol title="For users" links={['Login', 'Register', 'Settings', 'My Orders']} />
        </div>
        <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-between text-sm text-gray-500">
            <p>© 2023 Ecommerce.</p>
            <p className="flex items-center gap-2 cursor-pointer font-medium">
              <img src="/assets/Layout1/Image/flags/US@2x.png" className="w-5" /> English <img src="/assets/Layout/Form/input-group/Icon/control/Vector2.png" className="w-3 h-2" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Helper Components ---

function NavItem({ src, label }) {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <img src={src} className="w-5 h-5 mb-1" alt={label} />
      <span>{label}</span>
    </div>
  );
}

function FilterSection({ title, items, type }) {
  return (
    <div className="border-t border-gray-200 pt-4">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold">{title}</h4>
        <span className="text-gray-400">▲</span>
      </div>
      <ul className="space-y-2 text-sm text-gray-600">
        {items.map(item => (
          <li key={item} className="flex items-center gap-2 cursor-pointer">
            {type === 'checkbox' && <input type="checkbox" className="w-4 h-4" />}
            {type === 'radio' && <input type="radio" name={title} className="w-4 h-4" />}
            <span className={type === 'text' ? 'hover:text-blue-600' : ''}>{item}</span>
          </li>
        ))}
        {type === 'text' && <li className="text-blue-600 cursor-pointer pt-1">See all</li>}
      </ul>
    </div>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-bold mb-4">{title}</h4>
      <ul className="text-gray-500 text-sm space-y-2">
        {links.map(l => <li key={l} className="cursor-pointer">{l}</li>)}
      </ul>
    </div>
  );
}