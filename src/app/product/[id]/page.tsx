import { Suspense } from 'react';
import ProductDetailClient from './ProductDetailClient';

// Interface para página do Next.js
interface ProductPageProps {
  params: {
    id: string;
  };
}

// Componente servidor assíncrono
export default async function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ProductDetailClient params={params} />
    </Suspense>
  );
}
