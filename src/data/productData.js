// Shared product data used across all pages
// IDs are unique and used to track cart items

export const allProducts = [
  // Tech / Electronics
  { id: 1, title: 'Canon Camera EOS 2000D, Black 10x zoom', price: 998.00, oldPrice: 1128.00, rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: '/assets/Image/tech/image 33.png', category: 'electronics' },
  { id: 2, title: 'GoPro HERO6 4K Action Camera - Black', price: 998.00, oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img: '/assets/Image/tech/image 23.png', category: 'electronics' },
  { id: 3, title: 'GoPro HERO6 4K Action Camera - Black', price: 998.00, oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img: '/assets/Image/tech/image 32.png', category: 'electronics' },
  { id: 4, title: 'GoPro HERO6 4K Action Camera - Black', price: 998.00, oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img: '/assets/Image/tech/image 34.png', category: 'electronics' },
  { id: 5, title: 'Smart Watch Series - Premium Edition', price: 998.00, oldPrice: 1128.00, rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img: '/assets/Image/tech/8.png', category: 'electronics' },
  { id: 6, title: 'Premium Headphones - Wireless Edition', price: 998.00, oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img: '/assets/Image/tech/image 86.png', category: 'electronics' },
  { id: 7, title: 'GoPro Camera - Outdoor Edition', price: 99.50, oldPrice: 1128.00, rating: 7.5, orders: 154, shipping: 'Free Shipping', desc: 'High quality action camera for outdoor adventures.', img: '/assets/Image/tech/6.png', category: 'electronics' },
  { id: 8, title: 'Smart Watch - Fitness Tracker', price: 99.50, oldPrice: null, rating: 5.0, orders: 120, shipping: 'Free Shipping', desc: 'Advanced fitness tracking with heart rate monitor.', img: '/assets/Image/tech/image 85.png', category: 'electronics' },
  { id: 9, title: 'Gaming Headset - Pro Series', price: 99.50, oldPrice: null, rating: 7.5, orders: 89, shipping: 'Free Shipping', desc: 'Professional gaming headset with surround sound.', img: '/assets/Image/tech/image 29.png', category: 'electronics' },

  // Home & Interior
  { id: 10, title: 'Soft Chairs - Comfort Edition', price: 19.00, oldPrice: null, rating: 6.5, orders: 200, shipping: 'Free Shipping', desc: 'Comfortable soft chairs for your living room.', img: '/assets/Image/interior/1.png', category: 'home' },
  { id: 11, title: 'Sofa & Chair Set', price: 19.00, oldPrice: null, rating: 7.0, orders: 150, shipping: 'Free Shipping', desc: 'Elegant sofa and chair set for modern homes.', img: '/assets/Image/interior/6.png', category: 'home' },
  { id: 12, title: 'Kitchen Dishes Set', price: 100.00, oldPrice: null, rating: 8.0, orders: 300, shipping: 'Free Shipping', desc: 'Complete kitchen dishes set for the modern kitchen.', img: '/assets/Image/interior/image 93.png', category: 'home' },
  { id: 13, title: 'Smart Watch - Classic', price: 39.00, oldPrice: null, rating: 7.5, orders: 100, shipping: 'Free Shipping', desc: 'Classic smart watch with premium features.', img: '/assets/Image/interior/3.png', category: 'home' },
  { id: 14, title: 'Kitchen Mixer - Professional', price: 19.00, oldPrice: null, rating: 6.0, orders: 80, shipping: 'Free Shipping', desc: 'Professional grade kitchen mixer.', img: '/assets/Image/interior/9.png', category: 'home' },
  { id: 15, title: 'Blender - High Power', price: 10.00, oldPrice: null, rating: 7.0, orders: 250, shipping: 'Free Shipping', desc: 'High power blender for smoothies and more.', img: '/assets/Image/interior/8.png', category: 'home' },
  { id: 16, title: 'Home Appliance - Multi-use', price: 19.00, oldPrice: null, rating: 6.5, orders: 170, shipping: 'Free Shipping', desc: 'Multi-use home appliance for everyday needs.', img: '/assets/Image/interior/7.png', category: 'home' },
  { id: 17, title: 'Coffee Maker - Premium', price: 10.00, oldPrice: null, rating: 8.5, orders: 400, shipping: 'Free Shipping', desc: 'Premium coffee maker for the perfect brew.', img: '/assets/Image/interior/image 89.png', category: 'home' },
];

// Products used in the grid view (tech focused)
export const gridProducts = [
  { id: 1, title: 'Canon Camera EOS 2000D, Black 10x zoom', price: 99.50, oldPrice: 1128.00, rating: 7.5, img: '/assets/Image/tech/image 33.png' },
  { id: 2, title: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: 1128.00, rating: 5.0, img: '/assets/Image/tech/image 23.png' },
  { id: 18, title: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: null, rating: 7.5, img: '/assets/Image/tech/image 23.png' },
  { id: 3, title: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: 1128.00, rating: 7.5, img: '/assets/Image/tech/image 32.png' },
  { id: 7, title: 'GoPro Camera - Outdoor Edition', price: 99.50, oldPrice: 1128.00, rating: 7.5, img: '/assets/Image/tech/6.png' },
  { id: 19, title: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: null, rating: 7.5, img: '/assets/Image/tech/image 23.png' },
  { id: 4, title: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: 1128.00, rating: 7.5, img: '/assets/Image/tech/image 34.png' },
  { id: 5, title: 'Smart Watch Series - Premium Edition', price: 99.50, oldPrice: 1128.00, rating: 7.5, img: '/assets/Image/tech/8.png' },
  { id: 20, title: 'Canon Camera EOS 2000D, Black 10x zoom', price: 99.50, oldPrice: null, rating: 7.5, img: '/assets/Image/tech/image 33.png' },
];

// Default cart items (initial state matching the ShoppingCart page design)
export const defaultCartItems = [
  { id: 101, title: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Artel Market', price: 78.99, qty: 9, img: '/assets/Layout/alibaba/Image/cloth/image 24.png' },
  { id: 102, title: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Best factory LLC', price: 39.00, qty: 3, img: '/assets/Layout/alibaba/Image/cloth/Bitmap.png' },
  { id: 103, title: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Artel Market', price: 170.50, qty: 1, img: '/assets/Layout/alibaba/Image/cloth/image 26.png' },
];

// Default saved-for-later items
export const defaultSavedItems = [
  { id: 201, title: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, img: '/assets/Image/tech/8.png' },
  { id: 202, title: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, img: '/assets/Image/tech/image 23.png' },
  { id: 203, title: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, img: '/assets/Image/tech/image 32.png' },
  { id: 204, title: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, img: '/assets/Image/tech/image 34.png' },
];
