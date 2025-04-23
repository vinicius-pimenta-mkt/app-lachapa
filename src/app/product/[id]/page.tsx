import { Suspense } from 'react';
import ProductDetailClient from './ProductDetailClient';

export default function ProductPage(props: any) {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ProductDetailClient params={props.params} />
    </Suspense>
  );
}
