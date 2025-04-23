import { Suspense } from 'react';
import ProductDetailClient from './ProductDetailClient';

// ⚠️ Removemos a tipagem explícita para evitar conflitos com PageProps/Promise<any>
export default function ProductPage(props: any) {
  const { params } = props;

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ProductDetailClient params={params} />
    </Suspense>
  );
}
