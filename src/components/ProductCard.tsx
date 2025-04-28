
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Determinar a imagem com base na categoria
  let imageSrc = '/images/logo.png'; // Imagem padrão caso nenhuma categoria corresponda
  if (product.category === 'burgers-artesanais') {
    imageSrc = '/images/burger-artesanal.png';
  } else if (product.category === 'tradicionais') {
    imageSrc = '/images/burger-tradicional.png';
  } else if (product.category === 'passaportes') {
    imageSrc = '/images/passaporte.png';
  } else if (product.category === 'bebidas') {
    imageSrc = '/images/bebidas.png';
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="product-image"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={product.category === 'burgers-artesanais'} // Priorizar carregamento de imagens da primeira categoria visível
        />
      </div>
      <div className="product-content">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="product-title text-lg">{product.name}</h3>
            <span className="product-price">R$ {product.price.toFixed(2)}</span>
          </div>
          <p className="product-description text-sm text-gray-600 mb-4">{product.description}</p>
        </div>
        <Link 
          href={`/product/${product.id}`} 
          className="add-button mt-auto"
        >
          Adicionar
        </Link>
      </div>
    </div>
  );
}

