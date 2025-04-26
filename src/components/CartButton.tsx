'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartButton() {
  const [itemCount, setItemCount] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const updateCartCount = () => {
      const cart = localStorage.getItem('cart');
      if (cart) {
        const cartItems = JSON.parse(cart);
        setItemCount(cartItems.length);
      }
    };
    
    updateCartCount();
    
    // Adicionar listener para atualizar quando o carrinho mudar
    window.addEventListener('storage', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);
  
  if (!isClient || itemCount === 0) {
    return null;
  }
  
  return (
    <div className="fixed bottom-4 right-4">
      <Link 
        href="/cart" 
        className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
      >
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {itemCount}
          </span>
        </div>
      </Link>
    </div>
  );
}
