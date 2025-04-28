'use client';

import Image from 'next/image';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Escolhe uma imagem padrão conforme a categoria do produto
  let imageSrc = '/images/burger-tradicional.png'; // imagem padrão

  if (product.category === 'passaportes') {
    imageSrc = '/images/passaporte.png';
  } else if (product.category === 'burgers-artesanais') {
    imageSrc = '/images/burger-artesanal.png';
  } else if (product.category === 'bebidas') {
    imageSrc = '/images/bebida.png';
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition hover:scale-105">
      {/* Imagem fixa */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold text-primary mb-2 text-center">{product.name}</h3>
          <p className="text-sm text-gray-600 text-center">{product.description}</p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-primary font-bold text-lg">R$ {product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
