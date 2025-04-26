'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo + Nome */}
        <div className="flex items-center space-x-3">
          <Image src="/images/logo.png" alt="La Chapa" width={40} height={40} className="h-10 w-auto" />
          <span className="text-2xl font-bold">La Chapa Hamburgueria</span>
        </div>

        {/* Botão Carrinho */}
        <Link href="/cart">
          <div className="relative w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-gray-200 transition ml-auto">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}
