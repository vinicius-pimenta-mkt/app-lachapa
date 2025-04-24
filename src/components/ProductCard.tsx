import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Lógica para selecionar a imagem correta com base na categoria
  let imageSrc = '/images/burger-tradicional.png'; // Imagem padrão para tradicionais
  
  if (product.category === 'passaportes') {
    imageSrc = '/images/passaporte.png';
  } else if (product.category === 'burgers-artesanais') {
    imageSrc = '/images/burger-artesanal.png';
  }

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative h-40 w-full bg-gray-50">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-700 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="product-price">R$ {product.price.toFixed(2)}</span>
          <Link href={`/product/${product.id}`}>
            <button className="add-button">
              Adicionar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
