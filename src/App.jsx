import React, { useState } from 'react';

// Import all page components
import EcommerceLayout from './components/EcommerceLayout';
import ProductListing from './components/ProductListing';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

// Import shared product data for default cart/saved items
import { defaultCartItems, defaultSavedItems } from './data/productData';

function App() {
  // --- Navigation State ---
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // --- Cart State ---
  const [cart, setCart] = useState(defaultCartItems);
  const [savedItems, setSavedItems] = useState(defaultSavedItems);

  // --- Navigation Handler ---
  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  // --- Product Selection (click product → detail page) ---
  const onSelectProduct = (product) => {
    setSelectedProduct(product);
    navigate('list'); // 'list' renders ProductListing which is the product detail page
  };

  // --- Cart Actions ---
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, {
        id: product.id,
        title: product.title,
        price: typeof product.price === 'string' ? parseFloat(product.price.replace('$', '')) : product.price,
        qty: 1,
        img: product.img || product.imgSrc,
        size: 'medium',
        color: 'blue',
        material: 'Plastic',
        seller: 'Artel Market',
      }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  const updateQty = (itemId, newQty) => {
    if (newQty < 1) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev => prev.map(item =>
      item.id === itemId ? { ...item, qty: newQty } : item
    ));
  };

  const saveForLater = (itemId) => {
    const item = cart.find(i => i.id === itemId);
    if (item) {
      removeFromCart(itemId);
      setSavedItems(prev => {
        if (prev.find(s => s.id === itemId)) return prev;
        return [...prev, { id: item.id, title: item.title, price: item.price, img: item.img }];
      });
    }
  };

  const moveToCart = (itemId) => {
    const item = savedItems.find(i => i.id === itemId);
    if (item) {
      setSavedItems(prev => prev.filter(i => i.id !== itemId));
      addToCart({ ...item, price: item.price });
    }
  };

  const checkout = () => {
    alert('Order placed successfully! Thank you for your purchase.');
    setCart([]);
  };

  return (
    <div>
      {/* No dev navigation bar — navigation happens through in-page buttons */}
      {activePage === 'home' && (
        <EcommerceLayout
          navigate={navigate}
          onSelectProduct={onSelectProduct}
          addToCart={addToCart}
          cartCount={cart.length}
        />
      )}
      {activePage === 'list' && (
        <ProductListing
          navigate={navigate}
          product={selectedProduct}
          addToCart={addToCart}
          onSelectProduct={onSelectProduct}
          cartCount={cart.length}
        />
      )}
      {activePage === 'grid' && (
        <ProductGrid
          navigate={navigate}
          onSelectProduct={onSelectProduct}
          addToCart={addToCart}
          cartCount={cart.length}
        />
      )}
      {activePage === 'details' && (
        <ProductDetails
          navigate={navigate}
          onSelectProduct={onSelectProduct}
          addToCart={addToCart}
          cartCount={cart.length}
        />
      )}
      {activePage === 'cart' && (
        <ShoppingCart
          navigate={navigate}
          cart={cart}
          savedItems={savedItems}
          removeFromCart={removeFromCart}
          removeAllFromCart={removeAllFromCart}
          updateQty={updateQty}
          saveForLater={saveForLater}
          moveToCart={moveToCart}
          checkout={checkout}
          cartCount={cart.length}
        />
      )}
    </div>
  );
}

export default App;