import React, { useState } from 'react';

export default function ProductDetail({ navigate, product, addToCart, onSelectProduct, cartCount }) {
  // Use the selected product or fall back to defaults
  const rawProduct = product || {
    id: 100,
    title: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle',
    price: 98.00,
    img: '/assets/Layout/alibaba/Image/cloth/ce60bd07ba64362f07075659795d0e6c24963920.jpg',
  };

  // Ensure price is always a number
  const currentProduct = {
    ...rawProduct,
    price: typeof rawProduct.price === 'string' ? parseFloat(rawProduct.price.replace('$', '')) || 98 : (rawProduct.price || 98),
  };

  const [mainImage, setMainImage] = useState(currentProduct.img);

  const thumbnails = [
    '/assets/Layout/alibaba/Image/cloth/ce60bd07ba64362f07075659795d0e6c24963920.jpg', 
    '/assets/Layout/alibaba/Image/cloth/6a90c22a9f3dac9e0b97dd076154a67e0ea941a5.jpg', 
    '/assets/Layout/alibaba/Image/cloth/06b8fd3662c57b197df41225b5846b233d3a1058.jpg', 
    '/assets/Layout/alibaba/Image/cloth/361ff6150b669765823c4c4c5af81ab06e2a1158.jpg', 
    '/assets/Layout/alibaba/Image/cloth/ce60bd07ba64362f07075659795d0e6c24963920 (1).jpg', 
    '/assets/Layout/alibaba/Image/cloth/ce60bd07ba64362f07075659795d0e6c24963920 (1).jpg'
  ];

  const pricingTiers = [
    { price: `$${(currentProduct.price || 98).toFixed(2)}`, qty: '50-100 pcs', highlight: true },
    { price: `$${((currentProduct.price || 98) * 0.92).toFixed(2)}`, qty: '100-700 pcs', highlight: false },
    { price: `$${((currentProduct.price || 98) * 0.80).toFixed(2)}`, qty: '700+ pcs', highlight: false },
  ];

  const productSpecs = [
    { label: 'Model', value: '#8786867' },
    { label: 'Style', value: 'Classic style' },
    { label: 'Certificate', value: 'ISO-898921212' },
    { label: 'Size', value: '34mm x 450mm x 19mm' },
    { label: 'Memory', value: '36GB RAM' },
  ];

  const relatedProducts = [
    { id: 2, title: 'Xiaomi Redmi 8 Original', price: 32.00, img: '/assets/Image/tech/image 23.png' },
    { id: 9, title: 'Xiaomi Redmi 8 Original', price: 32.00, img: '/assets/Image/tech/image 29.png' },
    { id: 3, title: 'Xiaomi Redmi 8 Original', price: 32.00, img: '/assets/Image/tech/image 32.png' },
    { id: 1, title: 'Xiaomi Redmi 8 Original', price: 32.00, img: '/assets/Image/tech/image 33.png' },
    { id: 4, title: 'Xiaomi Redmi 8 Original', price: 32.00, img: '/assets/Image/tech/image 34.png' },
    { id: 8, title: 'Xiaomi Redmi 8 Original', price: 32.00, img: '/assets/Image/tech/image 85.png' },
  ];

  const handleAddToCart = () => {
    addToCart(currentProduct);
    alert(`"${currentProduct.title}" added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(currentProduct);
    navigate('cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#1C1C1C]">
      
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/Layout/Brand/logo-colored.png" alt="Brand Logo" className="h-10 w-auto cursor-pointer" onClick={() => navigate('home')} />
          </div>
          <div className="flex w-1/2 border-2 border-blue-600 rounded-md overflow-hidden">
            <input type="text" placeholder="Search" className="w-full px-4 py-2 outline-none" />
            <select className="bg-white border-l border-gray-300 px-4 py-2 text-gray-600 outline-none cursor-pointer">
              <option>All category</option>
            </select>
            <button className="bg-blue-600 text-white px-8 py-2 font-medium">Search</button>
          </div>
          <div className="flex gap-6 text-gray-500 text-[12px] text-center">
             {/* Icons using icons8 links from your code */}
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/user.png" label="Profile" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/speech-bubble.png" label="Message" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/box.png" label="Orders" />
            <HeaderIcon src="https://img.icons8.com/material-outlined/24/787878/shopping-cart.png" label={`My cart${cartCount ? ` (${cartCount})` : ''}`} onClick={() => navigate('cart')} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-5">
        {/* Breadcrumbs */}
        <div className="text-gray-400 text-sm mb-5">
          <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate('home')}>Home</span> &gt; Clothings &gt; Men's wear &gt; Summer clothing
        </div>

        {/* TOP PRODUCT SECTION */}
        <section className="bg-white border border-gray-200 rounded-lg p-5 flex gap-8 mb-6">
          {/* 1. Left: Gallery */}
          <div className="w-1/3 flex flex-col gap-4">
            <div className="border border-gray-200 rounded-lg p-10 h-[380px] flex items-center justify-center">
              <img src={mainImage} alt="Main" className="max-h-full object-contain" />
            </div>
            <div className="flex justify-between gap-2">
              {thumbnails.map((thumb, i) => (
                <div key={i} className={`w-14 h-14 border rounded-md flex items-center justify-center p-1 cursor-pointer ${mainImage === thumb ? 'border-gray-800' : 'border-gray-200'}`} onClick={() => setMainImage(thumb)}>
                  <img src={thumb} alt="thumb" className="max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* 2. Middle: Info */}
          <div className="flex-1">
            <div className="text-green-500 text-sm font-medium flex items-center gap-1 mb-2">✓ In stock</div>
            <h1 className="text-2xl font-bold text-[#1C1C1C] mb-3 leading-tight">{currentProduct.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span className="text-orange-400">★★★★☆ <span className="text-orange-500 ml-1">9.3</span></span>
              <span>• 32 reviews</span>
              <span>• 154 sold</span>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-[#FFF0DF] border-y border-gray-100 flex divide-x divide-orange-200 py-3 mb-5">
              {pricingTiers.map((tier, i) => (
                <div key={i} className="px-6 first:pl-4">
                  <p className={`text-xl font-bold ${tier.highlight ? 'text-[#FA3434]' : 'text-[#1C1C1C]'}`}>{tier.price}</p>
                  <p className="text-xs text-gray-500 mt-1">{tier.qty}</p>
                </div>
              ))}
            </div>

            {/* Attributes */}
            <div className="space-y-3 text-sm pb-5 border-b border-gray-200">
              <Attribute label="Price:" value="Negotiable" />
              <Attribute label="Type:" value="Classic shoes" />
              <Attribute label="Material:" value="Plastic material" />
              <Attribute label="Design:" value="Modern nice" />
            </div>
            <div className="space-y-3 text-sm py-5">
              <Attribute label="Customization:" value="Customized logo and design custom packages" />
              <Attribute label="Protection:" value="Refund Policy" />
              <Attribute label="Warranty:" value="2 years full warranty" />
            </div>
          </div>

          {/* 3. Right: Supplier Card */}
          <div className="w-[280px]">
            <div className="border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 bg-[#C3F0F1] text-[#4CA7A7] font-bold text-xl rounded-md flex items-center justify-center">R</div>
                <div>
                  <p className="text-sm text-gray-400">Supplier</p>
                  <p className="font-medium text-[#1C1C1C]">Guanjoi Trading LLC</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-500 mb-6">
                <p className="flex items-center gap-3"><img src="/assets/Layout1/Image/flags/US@2x.png" className="w-5" /> Germany, Berlin</p>
                <p className="flex items-center gap-3">🛡️ Verified Seller</p>
                <p className="flex items-center gap-3">🌐 Worldwide shipping</p>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-lg mb-2 hover:bg-blue-700" onClick={handleAddToCart}>Add to cart</button>
              <button className="w-full bg-white text-blue-600 border border-gray-200 font-bold py-2.5 rounded-lg hover:bg-gray-50" onClick={handleBuyNow}>Buy now</button>
              <button className="w-full text-blue-600 text-sm font-bold mt-5 flex items-center justify-center gap-2">♡ Save for later</button>
            </div>
          </div>
        </section>

        {/* BOTTOM CONTENT AREA */}
        <div className="flex gap-6">
          {/* Tabs and Description */}
          <div className="flex-1 bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex border-b border-gray-200 text-sm font-bold text-gray-400">
              <button className="px-6 py-4 text-blue-600 border-b-2 border-blue-600">Description</button>
              <button className="px-6 py-4 hover:text-gray-600">Reviews</button>
              <button className="px-6 py-4 hover:text-gray-600">Shipping</button>
              <button className="px-6 py-4 hover:text-gray-600">About seller</button>
            </div>
            <div className="p-6 text-[#505050] text-sm leading-relaxed">
              <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <table className="w-full max-w-lg border border-gray-200 mb-6">
                <tbody>
                  {productSpecs.map((s, i) => (
                    <tr key={i} className="border-b border-gray-200 last:border-0">
                      <td className="bg-gray-50 px-4 py-2 font-medium w-1/3">{s.label}</td>
                      <td className="px-4 py-2">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">✓ Some great feature name here</li>
                <li className="flex items-center gap-2">✓ Lorem ipsum dolor sit amet, consectetur</li>
                <li className="flex items-center gap-2">✓ Duis aute irure dolor in reprehenderit</li>
              </ul>
            </div>
          </div>

          {/* "You may like" Sidebar */}
          <aside className="w-[280px] bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold mb-5">You may like</h3>
            <div className="space-y-4">
              {[
                { id: 201, title: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50', img: '/assets/Layout/alibaba/Image/cloth/image 30.png' },
                { id: 202, title: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50', img: '/assets/Layout/alibaba/Image/cloth/image 24.png' },
                { id: 203, title: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50', img: '/assets/Layout/alibaba/Image/cloth/image 26.png' },
                { id: 204, title: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50', img: '/assets/Layout/alibaba/Image/cloth/Bitmap.png' },
                { id: 205, title: "New Summer Men's castrol T-Shirts", price: '$7.00 - $99.50', img: '/assets/Layout/alibaba/Image/cloth/Bitmap (2).png' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 cursor-pointer group" onClick={() => onSelectProduct({ id: item.id, title: item.title, price: 99.50, img: item.img })}>
                  <div className="w-14 h-14 border border-gray-200 rounded-md p-1 flex-shrink-0 group-hover:border-blue-300">
                    <img src={item.img} alt="item" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1C1C1C] line-clamp-2 leading-tight mb-1 group-hover:text-blue-600">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* RELATED PRODUCTS */}
        <section className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
          <h3 className="font-bold text-xl mb-6">Related products</h3>
          <div className="grid grid-cols-6 gap-4">
            {relatedProducts.map((item, i) => (
              <div key={i} className="cursor-pointer group" onClick={() => onSelectProduct(item)}>
                <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center p-4 mb-3 group-hover:bg-gray-200">
                  <img src={item.img} className="max-h-full object-contain" alt="rel" />
                </div>
                <p className="text-sm text-[#505050] line-clamp-1 group-hover:text-blue-600">{item.title}</p>
                <p className="text-sm text-gray-400 mt-1">${item.price.toFixed(2)}-$40.00</p>
              </div>
            ))}
          </div>
        </section>

        {/* DISCOUNT BANNER */}
        <section className="bg-blue-600 rounded-lg flex justify-between items-center px-10 py-8 text-white mt-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-700 skew-x-12 translate-x-20"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-1">Super discount on more than 100 USD</h2>
            <p className="text-blue-100">Have you ever finally just write dummy info</p>
          </div>
          <button className="bg-orange-500 text-white font-bold px-6 py-2.5 rounded-lg relative z-10 hover:bg-orange-600" onClick={() => navigate('home')}>Shop now</button>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 pt-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-6 gap-8 pb-10">
          <div className="col-span-2">
            <img src="/assets/Layout/Brand/logo-colored.png" className="h-10 mb-5 cursor-pointer" alt="Logo" onClick={() => navigate('home')} />
            <p className="text-gray-400 text-sm leading-relaxed pr-10">Best information about the company gies here but too lorem ipsum is.</p>
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

function HeaderIcon({ src, label, onClick }) {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:text-blue-600" onClick={onClick}>
      <img src={src} className="w-5 h-5 mb-1 opacity-70" alt={label} />
      <span>{label}</span>
    </div>
  );
}

function Attribute({ label, value }) {
  return (
    <div className="flex gap-4">
      <span className="text-gray-400 w-32">{label}</span>
      <span className="text-[#505050]">{value}</span>
    </div>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-bold mb-4 text-[#1C1C1C]">{title}</h4>
      <ul className="space-y-1 text-gray-400 text-sm">
        {links.map(l => <li key={l} className="cursor-pointer hover:text-blue-600">{l}</li>)}
      </ul>
    </div>
  );
}