import { categories, products } from '@/lib/data';
import CategorySection from '@/components/CategorySection';
import Header from '@/components/Header';
import CartButton from '@/components/CartButton';

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {categories.map(category => (
          <CategorySection 
            key={category.id}
            category={category}
            products={products.filter(product => product.category === category.id)}
          />
        ))}
      </div>
      
      <CartButton />
    </div>
  );
}
