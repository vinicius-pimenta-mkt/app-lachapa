import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/data';

interface CategorySectionProps {
  category: {
    id: string;
    name: string;
  };
  products: Product[];
}

export default function CategorySection({ category, products }: CategorySectionProps) {
  if (products.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-primary">{category.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
