'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Função para atualizar a contagem do carrinho
    const updateCartCount = () => {
      const cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart') || '[]')
        : [];
      setCartCount(cart.length);
    };

    // Atualizar a contagem inicial
    updateCartCount();

    // Adicionar listener para eventos de storage (quando o carrinho for atualizado)
    window.addEventListener('storage', updateCartCount);

    // Cleanup
    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <header className="la-chapa-header p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="header-logo-title">
          <div className="la-chapa-logo">
            <Image
              src="/images/logo.png"
              alt="La Chapa Hamburgueria"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div className="header-title">
            <h1 className="text-2xl font-bold text-yellow-400">LA CHAPA</h1>
            <p className="text-sm text-yellow-200">Hamburgueria Artesanal</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Cardápio
          </Link>
          <Link href="/cart" className="relative">
            <button className="flex items-center px-3 py-1 rounded-full bg-white text-primary font-medium text-sm">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              Carrinho
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
