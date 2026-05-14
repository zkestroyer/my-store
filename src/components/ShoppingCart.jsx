import React from 'react';

export default function ShoppingCart({ navigate, cart, savedItems, removeFromCart, removeAllFromCart, updateQty, saveForLater, moveToCart, checkout, cartCount }) {

  // Calculate dynamic totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = subtotal > 100 ? 60.00 : 0;
  const tax = subtotal * 0.01;
  const total = subtotal - discount + tax;

  return (
    <div className="min-h-screen bg-[#F7FAFC] font-sans text-[#1C1C1C]">
      
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/Layout/Brand/logo-colored.png" alt="Brand Logo" className="h-10 w-auto cursor-pointer" onClick={() => navigate('home')} />
          </div>
          <div className="flex gap-8 text-gray-500 text-[12px] text-center">
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/user.png" label="Profile" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/speech-bubble.png" label="Message" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/box.png" label="Orders" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/0D6EFD/shopping-cart.png" label={`My cart (${cartCount})`} active />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My cart ({cart.length})</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT: Cart List & Badges */}
          <div className="lg:w-3/4">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
              <div className="p-5 space-y-6">
                {cart.length === 0 && (
                  <div className="text-center py-10 text-gray-400">
                    <p className="text-xl mb-2">Your cart is empty</p>
                    <p className="text-sm">Browse products and add items to your cart</p>
                  </div>
                )}
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center p-2">
                        <img src={item.img} alt="item" className="max-h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[16px] mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-400">Size: {item.size || 'medium'}, Color: {item.color || 'blue'}, Material: {item.material || 'Plastic'}</p>
                        <p className="text-sm text-gray-400">Seller: {item.seller || 'Artel Market'}</p>
                        <div className="flex gap-2 mt-3">
                          <button className="text-[#FA3434] border border-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-red-50" onClick={() => removeFromCart(item.id)}>Remove</button>
                          <button className="text-blue-600 border border-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-50" onClick={() => saveForLater(item.id)}>Save for later</button>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex flex-col justify-between">
                      <span className="font-bold text-lg">${(item.price * item.qty).toFixed(2)}</span>
                      <select 
                        className="border border-gray-300 rounded-md px-2 py-1.5 text-sm bg-white outline-none"
                        value={item.qty}
                        onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(q => <option key={q} value={q}>Qty: {q}</option>)}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white p-5 border-t border-gray-100 flex justify-between">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2" onClick={() => navigate('home')}>
                  <span>←</span> Back to shop
                </button>
                <button className="text-blue-600 border border-gray-200 px-4 py-2 rounded-lg font-bold hover:bg-gray-50" onClick={removeAllFromCart}>Remove all</button>
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
                    <p className="font-bold text-lg mb-1">${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</p>
                    <p className="text-sm text-gray-500 leading-tight mb-4 line-clamp-2">{item.title}</p>
                    <button className="text-blue-600 border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-50 transition" onClick={() => moveToCart(item.id)}>
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
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#FA3434]">
                  <span>Discount:</span>
                  <span>- ${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#00B517]">
                  <span>Tax:</span>
                  <span>+ ${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-xl mb-6">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#00B517] text-white font-bold py-3 rounded-lg text-lg hover:bg-green-600 shadow-md" onClick={checkout}>Checkout</button>
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
                    <button className="bg-[#FF9017] text-white px-4 py-2 rounded-lg text-sm font-bold" onClick={() => navigate('home')}>Shop now</button>
                </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white pt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-6 gap-8 pb-10">
          <div className="col-span-2">
            <img src="/assets/Layout/Brand/logo-colored.png" alt="Brand Logo" className="h-10 mb-5 cursor-pointer" onClick={() => navigate('home')} />
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