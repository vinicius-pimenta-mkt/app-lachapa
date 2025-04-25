
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import { Product, Additional, additionals } from '@/lib/data';

interface ProductDetailProps {
  params: {
    id: string;
  };
}

interface AdditionalWithQuantity extends Additional {
  quantity: number;
}

export default function ProductDetailClient({ params }: ProductDetailProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedAdditionals, setSelectedAdditionals] = useState<AdditionalWithQuantity[]>([]);
  const [observations, setObservations] = useState('');
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const { products } = require('@/lib/data');
    const found = products.find((p: Product) => p.id === params.id);
    if (found) setProduct(found);
  }, [params.id]);

  if (!product) return <div>Produto não encontrado</div>;

  const handleQuantityChange = (value: number) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1) setQuantity(newQuantity);
  };

  const toggleAdditional = (additional: Additional) => {
    const exists = selectedAdditionals.find(a => a.id === additional.id);
    if (exists) {
      setSelectedAdditionals(prev => prev.filter(a => a.id !== additional.id));
    } else {
      setSelectedAdditionals(prev => [...prev, { ...additional, quantity: 1 }]);
    }
  };

  const updateAdditionalQuantity = (id: string, change: number) => {
    setSelectedAdditionals(prev =>
      prev.map(a => a.id === id ? { ...a, quantity: Math.max(1, a.quantity + change) } : a)
    );
  };

  const calculateTotal = () => {
    let total = product.price * quantity;
    selectedAdditionals.forEach(a => {
      total += a.price * a.quantity * quantity;
    });
    return total.toFixed(2);
  };

  const addToCart = () => {
    const currentCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];
    const cartItem = {
      id: Date.now().toString(),
      product,
      quantity,
      additionals: selectedAdditionals,
      observations,
      totalPrice: parseFloat(calculateTotal())
    };
    localStorage.setItem('cart', JSON.stringify([...currentCart, cartItem]));
    window.dispatchEvent(new Event('storage'));
    router.push('/cart');
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 w-full">
            <Image
              src="/images/burger-tradicional.png"
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-primary mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">Adicionais</h2>
              <div className="space-y-2">
                {additionals.map(additional => {
                  const selected = selectedAdditionals.find(a => a.id === additional.id);
                  return (
                    <div key={additional.id} className="flex justify-between items-center border-b py-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={!!selected}
                          onChange={() => toggleAdditional(additional)}
                        />
                        <span>{additional.name} - R$ {additional.price.toFixed(2)}</span>
                      </label>
                      {selected && (
                        <div className="flex items-center space-x-2">
                          <button onClick={() => updateAdditionalQuantity(additional.id, -1)} disabled={selected.quantity <= 1}>-</button>
                          <span>{selected.quantity}</span>
                          <button onClick={() => updateAdditionalQuantity(additional.id, 1)}>+</button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">Observações</h2>
              <textarea
                value={observations}
                onChange={e => setObservations(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Ex: Sem cebola, ponto da carne, etc."
              />
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">Quantidade</h2>
              <div className="flex items-center space-x-4">
                <button onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <span className="text-xl font-bold">Total: R$ {calculateTotal()}</span>
              <button onClick={addToCart} className="bg-primary text-white px-4 py-2 rounded-md">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
