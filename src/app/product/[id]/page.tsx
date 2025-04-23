import { Suspense } from 'react';
import ProductDetailClient from './ProductDetailClient';

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Carregando..."}</div>}>
      <ProductDetailClient params={params} />
    </Suspense>
  );
}
