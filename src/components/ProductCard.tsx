'use client';

import Image from 'next/image';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition hover:scale-105">
      
      {/* Imagem do produto */}
      <div className="relative w-full h-40 bg-gray-100">
        <Image
          src={
            product.category === 'burgers-artesanais'
              ? '/images/burger-artesanal.png'
              : product.category === 'passaportes'
              ? '/images/passaporte.png'
              : '/images/burger-tradicional.png'
          }
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Informações do produto */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold text-primary mb-2 text-center">{product.name}</h3>
          <p className="text-sm text-gray-600 text-center">{product.description}</p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xl font-bold text-primary">R$ {product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
