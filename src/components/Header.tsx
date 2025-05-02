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
    <header className="la-chapa-header shadow-md">
      <div className="container mx-auto px-6 header-content">
        <div className="header-logo-title">
          <div className="la-chapa-logo">
            <Image 
              src="/images/logo.png" 
              alt="La Chapa Hamburgueria" 
              width={80} 
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="header-title">
            <h1 className="text-3xl font-bold text-yellow-400">LA CHAPA</h1>
            <p className="text-lg text-yellow-200">Hamburgueria Artesanal</p>
          </div>
        </div>

        {/* Carrinho + botão cardápio */}
        <div className="flex flex-col items-end mr-4">
          {/* Botão carrinho */}
          <Link href="/cart" className="relative">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -bottom-1 -right-1 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>

          {/* Botão Cardápio */}
          <Link
            href="/"
            className="mt-1 bg-white text-primary text-xs px-2 py-1 rounded-full font-semibold shadow-sm"
          >
            Cardápio
          </Link>
        </div>
      </div>
    </header>
  );
}
