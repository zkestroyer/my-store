import React from 'react';

export default function ShoppingCart() {
  // Main Cart Items
  const cartItems = [
    { id: 1, title: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Artel Market', price: '78.99', qty: 9, img: '/assets/Layout/alibaba/Image/cloth/image 24.png' },
    { id: 2, title: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Best factory LLC', price: '39.00', qty: 3, img: '/assets/Layout/alibaba/Image/cloth/Bitmap.png' },
    { id: 3, title: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Artel Market', price: '170.50', qty: 1, img: '/assets/Layout/alibaba/Image/cloth/image 26.png' },
  ];

  // Saved for later grid
  const savedItems = [
    { id: 1, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: '/assets/Image/tech/8.png' },
    { id: 2, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: '/assets/Image/tech/image 23.png' },
    { id: 3, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: '/assets/Image/tech/image 32.png' },
    { id: 4, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: '/assets/Image/tech/image 34.png' },
  ];

  return (
    <div className="min-h-screen bg-[#F7FAFC] font-sans text-[#1C1C1C]">
      
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-blue-600 font-bold text-2xl">Brand</div>
          <div className="flex gap-8 text-gray-500 text-[12px] text-center">
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/user.png" label="Profile" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/speech-bubble.png" label="Message" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/box.png" label="Orders" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/0D6EFD/shopping-cart.png" label="My cart" active />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My cart (3)</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT: Cart List & Badges */}
          <div className="lg:w-3/4">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
              <div className="p-5 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center p-2">
                        <img src={item.img} alt="item" className="max-h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[16px] mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-400">Size: {item.size}, Color: {item.color}, Material: {item.material}</p>
                        <p className="text-sm text-gray-400">Seller: {item.seller}</p>
                        <div className="flex gap-2 mt-3">
                          <button className="text-[#FA3434] border border-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-red-50">Remove</button>
                          <button className="text-blue-600 border border-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-50">Save for later</button>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex flex-col justify-between">
                      <span className="font-bold text-lg">${item.price}</span>
                      <select className="border border-gray-300 rounded-md px-2 py-1.5 text-sm bg-white outline-none">
                        <option>Qty: {item.qty}</option>
                        {[1, 2, 3, 4, 5].map(q => <option key={q}>Qty: {q}</option>)}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white p-5 border-t border-gray-100 flex justify-between">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2">
                  <span>←</span> Back to shop
                </button>
                <button className="text-blue-600 border border-gray-200 px-4 py-2 rounded-lg font-bold hover:bg-gray-50">Remove all</button>
              </div>
            </div>

            {/* Features/Badges */}
            <div className="flex gap-10 mb-8">
              <Badge icon="🔒" title="Secure payment" desc="Have you ever finally just" />
              <Badge icon="💬" title="Customer support" desc="Have you ever finally just" />
              <Badge icon="🚚" title="Free delivery" desc="Have you ever finally just" />
            </div>

            {/* Saved for later */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Saved for later</h2>
              <div className="grid grid-cols-4 gap-5">
                {savedItems.map((item) => (
                  <div key={item.id}>
                    <div className="bg-[#EEEEEE] rounded-lg h-44 flex items-center justify-center p-6 mb-3">
                      <img src={item.img} alt="saved" className="max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <p className="font-bold text-lg mb-1">${item.price}</p>
                    <p className="text-sm text-gray-500 leading-tight mb-4 line-clamp-2">{item.title}</p>
                    <button className="text-blue-600 border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-50 transition">
                      🛒 Move to cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:w-1/4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
              <p className="text-gray-500 text-sm mb-3">Have a coupon?</p>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <input type="text" placeholder="Add coupon" className="w-full px-3 py-2 outline-none text-sm" />
                <button className="bg-white border-l border-gray-300 text-blue-600 px-4 py-2 font-bold text-sm">Apply</button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="space-y-3 pb-4 border-b border-gray-100 mb-4 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal:</span>
                  <span>$1403.97</span>
                </div>
                <div className="flex justify-between text-[#FA3434]">
                  <span>Discount:</span>
                  <span>- $60.00</span>
                </div>
                <div className="flex justify-between text-[#00B517]">
                  <span>Tax:</span>
                  <span>+ $14.00</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-xl mb-6">
                <span>Total:</span>
                <span>$1357.97</span>
              </div>
              <button className="w-full bg-[#00B517] text-white font-bold py-3 rounded-lg text-lg hover:bg-green-600 shadow-md">Checkout</button>
              <div className="flex justify-center gap-2 mt-4">
                {/* Visual payment card placeholders */}
                {['visa', 'mastercard', 'paypal', 'apple', 'gpay'].map(card => (
                  <div key={card} className="w-10 h-6 bg-gray-100 rounded border border-gray-200"></div>
                ))}
              </div>
            </div>

            {/* Bonus Banner */}
            <div className="mt-6 bg-[#005ADE] rounded-lg p-6 text-white relative overflow-hidden">
                <div className="absolute right-[-20px] top-0 bottom-0 w-1/2 bg-[#0067FF] skew-x-12"></div>
                <div className="relative z-10">
                    <p className="text-lg font-bold leading-tight mb-4">Super discount on more than 100 USD</p>
                    <button className="bg-[#FF9017] text-white px-4 py-2 rounded-lg text-sm font-bold">Shop now</button>
                </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 pt-12 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-6 gap-8 pb-10">
          <div className="col-span-2">
            <div className="text-blue-600 font-bold text-2xl mb-5">Brand</div>
            <p className="text-gray-400 text-sm leading-relaxed pr-10">Best information about the company gies here but too lorem ipsum is.</p>
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
        <div className="bg-gray-100 py-5">
           <div className="max-w-7xl mx-auto px-4 flex justify-between text-gray-500 text-sm">
              <p>© 2023 Ecommerce.</p>
              <p className="flex items-center gap-2">
                <img src="/assets/Layout1/Image/flags/US@2x.png" className="w-5" alt="US" /> English ▲
              </p>
           </div>
        </div>
      </footer>
    </div>
  );
}

// --- Internal Reusable Components ---

function HeaderIcon({ src, label, active = false }) {
  return (
    <div className={`flex flex-col items-center cursor-pointer ${active ? 'text-blue-600' : 'hover:text-blue-600'}`}>
      <img src={src} className="w-5 h-5 mb-1" alt={label} />
      <span>{label}</span>
    </div>
  );
}

function Badge({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">{icon}</div>
      <div>
        <h4 className="font-medium text-sm text-[#1C1C1C]">{title}</h4>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-bold mb-4">{title}</h4>
      <ul className="space-y-1 text-gray-400 text-sm">
        {links.map(l => <li key={l} className="cursor-pointer hover:text-blue-600">{l}</li>)}
      </ul>
    </div>
  );
}