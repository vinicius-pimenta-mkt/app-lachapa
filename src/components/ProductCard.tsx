'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Função para determinar a imagem com base na categoria do produto
  const getImageForCategory = (category: string) => {
    switch (category) {
      case 'burgers-artesanais':
        return '/images/burger-artesanal.png';
      case 'tradicionais':
        return '/images/burger-tradicional.png';
      case 'passaportes':
        return '/images/passaporte.png';
      case 'bebidas':
        // Pode usar uma imagem genérica para bebidas ou criar uma específica
        return '/images/logo.png';
      default:
        return '/images/burger-tradicional.png';
    }
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:scale-105 cursor-pointer">
        <div className="relative h-48 w-full">
          <Image 
            src={getImageForCategory(product.category)} 
            alt={product.name} 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
          <span className="text-primary font-bold">R$ {product.price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
}
