'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '[]') : [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <header className="bg-primary shadow-md">
      {/* Faixa principal */}
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="relative w-14 h-14">
            <Image 
              src="/images/logo.png" 
              alt="La Chapa Hamburgueria" 
              fill 
              className="object-contain rounded-full"
            />
          </div>

          {/* Título */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-yellow-400">LA CHAPA</h1>
            <p className="text-sm text-yellow-200">Hamburgueria Artesanal</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white text-lg hover:underline">
            Cardápio
          </Link>
          <Link href="/cart" className="relative" style={{ position: 'fixed', top: '12px', right: '12px', zIndex: '50' }}>
            <button className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>

      {/* Sub-faixa vermelha */}
      <div className="bg-primary-dark py-2">
        <div className="container mx-auto px-6">
          <span className="text-white text-lg font-bold">Cardápio</span>
        </div>
      </div>
    </header>
  );
}
