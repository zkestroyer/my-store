import React, { act, useState } from 'react';

// Import all three of your page components
import EcommerceLayout from './components/EcommerceLayout';
import ProductListing from './components/ProductListing';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';

function App() {
  // We use a simple state to track which page is currently active
  const [activePage, setActivePage] = useState('home');

  return (
    <div>
      {/* 
        DEV NAVIGATION BAR 
        This is a dark bar at the very top of your screen just so you can click 
        and switch between your designs. 
      */}
      <div className="bg-gray-900 text-white p-3 flex justify-center gap-4 text-sm font-medium z-50 relative shadow-md">
        <button 
          onClick={() => setActivePage('home')}
          className={`px-4 py-2 rounded transition-colors ${activePage === 'home' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          1. Home Layout
        </button>
        <button 
          onClick={() => setActivePage('list')}
          className={`px-4 py-2 rounded transition-colors ${activePage === 'list' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          2. Product List
        </button>
        <button 
          onClick={() => setActivePage('grid')}
          className={`px-4 py-2 rounded transition-colors ${activePage === 'grid' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          3. Product Grid
        </button>
        <button 
          onClick={() => setActivePage('details')}
          className={`px-4 py-2 rounded transition-colors ${activePage === 'details' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          4. Product Details
        </button>
      </div>

      {/* 
        CONDITIONAL RENDERING 
        React will only render the component that matches the activePage state.
      */}
      {activePage === 'home' && <EcommerceLayout />}
      {activePage === 'list' && <ProductListing />}
      {activePage === 'grid' && <ProductGrid />}
      {activePage === 'details' && <ProductDetails />}

    </div>
  );
}

export default App;