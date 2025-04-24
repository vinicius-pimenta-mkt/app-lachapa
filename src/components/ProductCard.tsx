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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
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
