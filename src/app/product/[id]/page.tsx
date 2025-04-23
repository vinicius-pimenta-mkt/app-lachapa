import { Suspense } from 'react';
import ProductDetailClient from './ProductDetailClient';

type Params = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: Params) {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ProductDetailClient params={params} />
    </Suspense>
  );
}
