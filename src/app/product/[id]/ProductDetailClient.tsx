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

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-xl font-bold">Produto não encontrado</h2>
          <button 
            onClick={() => router.push('/')}
            className="add-button mt-4"
          >
            Voltar para o cardápio
          </button>
        </div>
      </div>
    );
  }

  let imageSrc = '/images/burger-tradicional.png'; // Imagem padrão para tradicionais
  
  if (product.category === 'passaportes') {
    imageSrc = '/images/passaporte.png';
  } else if (product.category === 'burgers-artesanais') {
    imageSrc = '/images/burger-artesanal.png';
  }

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
              src={imageSrc}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl font-bold text-primary">{product.name}</h1>
              <span className="product-price text-lg">R$ {product.price.toFixed(2)}</span>
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">Adicionais</h2>
              <div className="grid grid-cols-1 gap-3">
                {additionals.map(additional => {
                  const selected = selectedAdditionals.find(a => a.id === additional.id);
                  
                  return (
                    <div key={additional.id} className="additional-item">
                      <div className="additional-item-info">
                        <input
                          type="checkbox"
                          id={additional.id}
                          checked={!!selected}
                          onChange={() => toggleAdditional(additional)}
                          className="additional-checkbox"
                        />
                        <label htmlFor={additional.id} className="text-gray-800 font-medium">
                          {additional.name} - R$ {additional.price.toFixed(2)}
                        </label>
                      </div>
                      
                      {selected && (
                        <div className="additional-quantity-control">
                          <button 
                            onClick={() => updateAdditionalQuantity(additional.id, -1)}
                            className="additional-quantity-button"
                            disabled={selected.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="additional-quantity-display">
                            {selected.quantity}
                          </span>
                          <button 
                            onClick={() => updateAdditionalQuantity(additional.id, 1)}
                            className="additional-quantity-button"
                          >
                            +
                          </button>
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
                onChange={(e) => setObservations(e.target.value)}
                placeholder="Ex: Sem cebola, molho à parte, etc."
                className="w-full p-3 border border-gray-300 rounded-md"
                rows={3}
              />
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">Quantidade</h2>
              <div className="additional-quantity-control inline-block">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="additional-quantity-button"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="additional-quantity-display text-xl w-16">
                  {quantity}
                </span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="additional-quantity-button"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">
                Total: <span className="text-primary">R$ {calculateTotal()}</span>
              </div>
              <button 
                onClick={addToCart}
                className="add-button px-6 py-3"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
