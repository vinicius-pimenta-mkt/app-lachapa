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
      <div className="relative w-full h-48">
        <Image
          src={`/images/${product.image}`} // <-- agora puxando certo
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Informações do produto */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.description}</p>
        </div>

        <div className="mt-4">
          <p className="text-primary font-bold">R$ {product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
