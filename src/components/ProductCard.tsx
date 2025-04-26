'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition cursor-pointer">
        <div className="relative w-full h-48">
          <Image
            src="/images/burger-tradicional.png"
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.description}</p>
          <span className="text-primary font-bold block mt-2">R$ {product.price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
}
