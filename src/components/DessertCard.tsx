import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { DessertItem } from '../types';
import { useCart } from '../context/CartContext';

interface DessertCardProps {
  dessert: DessertItem;
}

export function DessertCard({ dessert }: DessertCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={dessert.image}
          alt={dessert.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{dessert.category}</div>
        <h3 className="text-lg font-semibold mb-2">{dessert.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{dessert.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-orange-600">
            ${dessert.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(dessert)}
            className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}