import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  let imageSrc = '/images/burger-tradicional.png'; // Imagem padrão para tradicionais
  
  if (product.category === 'passaportes') {
    imageSrc = '/images/passaporte.png';
  } else if (product.category === 'burgers-artesanais') {
    imageSrc = '/images/burger-artesanal.png';
  }

  return (
    <div className="product-card">
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="product-title text-lg">{product.name}</h3>
          <span className="product-price">R$ {product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 h-20 overflow-hidden">{product.description}</p>
        <Link 
          href={`/product/${product.id}`} 
          className="add-button w-full block text-center"
        >
          Adicionar
        </Link>
      </div>
    </div>
  );
}
