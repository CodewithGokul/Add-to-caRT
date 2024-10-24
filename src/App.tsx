import React from 'react';
import { CartProvider } from './context/CartContext';
import { DessertCard } from './components/DessertCard';
import { Cart } from './components/Cart';
import { desserts } from './data/desserts';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Desserts</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {desserts.map((dessert) => (
                  <DessertCard key={dessert.id} dessert={dessert} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;