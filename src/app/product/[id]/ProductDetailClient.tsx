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

  let imageSrc = '/images/burger-tradicional.png';
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
    <div className="min-h-screen pb-20 product-page">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex md:flex-row">
          {/* Card da Imagem, Nome e Descrição (Imagem à Esquerda) */}
          <div className="md:w-1/2 p-6 mt-8">
            <div className="bg-white shadow-md rounded-lg flex items-center p-4 gap-4">
              <div className="relative w-28 h-28 flex-shrink-0">
                <Image
                  src={imageSrc}
                  alt={product.name}
                  width={138}
                  height={112}
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-red-700 mb-0.5">{product.name}</h1>
                <p className="text-gray-700 text-sm">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Seção de Adicionais, Observações e Compra */}
          <div className="p-6 md:w-1/2 flex flex-col justify-between">
            <div>
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
                        <label htmlFor={additional.id} className="text-gray-800 font-medium text-sm">
                          {additional.name} - R$ {additional.price.toFixed(2)}
                        </label>
                      </div>
                      {selected && (
                        <div className="additional-quantity-control">
                          <button
                            onClick={() => updateAdditionalQuantity(additional.id, -1)}
                            className="additional-quantity-button text-xs"
                            disabled={selected.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="additional-quantity-display text-sm w-8 text-center">
                            {selected.quantity}
                          </span>
                          <button
                            onClick={() => updateAdditionalQuantity(additional.id, 1)}
                            className="additional-quantity-button text-xs"
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

            <div className="mb-4">
              <h2 className="text-xl font-bold mb-3">Observações</h2>
              <textarea
                className="cart-item-observations"
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                placeholder="Ex: Sem cebola, molho à parte, etc."
                rows={2}
              />
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Quantidade</h2>
              <div className="additional-quantity-control inline-block">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="additional-quantity-button text-xs"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="additional-quantity-display text-sm w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="additional-quantity-button text-xs"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5 mt-7">
              <div className="bg-yellow-300 rounded-lg px-7 py-4 text-center font-bold text-black text-lg mb-4 shadow cart-total-spacing">
                <span className="total-box mt-8">Total: R$ {calculateTotal()}</span>
              </div>
              <button
                onClick={addToCart}
                className="add-button px-4 py-2 text-sm"
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
