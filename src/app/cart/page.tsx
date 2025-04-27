'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { Additional, Product } from '@/lib/data';

interface AdditionalWithQuantity extends Additional {
  quantity: number;
}

interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  additionals: AdditionalWithQuantity[];
  observations: string;
  totalPrice: number;
}

export default function Cart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const cart = localStorage.getItem('cart');
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  const removeItem = (id: string) => {
    const newCart = cartItems.filter(item => item.id !== id);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('storage'));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
  };

  const continueShopping = () => {
    router.push('/');
  };

  const generateOrderSummary = () => {
    let summary = `*PEDIDO LA CHAPA HAMBURGUERIA*\n\n`;

    cartItems.forEach((item, index) => {
      summary += `*Item ${index + 1}: ${item.product.name}*\n`;
      summary += `Quantidade: ${item.quantity}\n`;

      if (item.additionals.length > 0) {
        summary += `Adicionais:\n`;
        item.additionals.forEach(additional => {
          summary += `- ${additional.name} (${additional.quantity}x) - R$ ${(additional.price * additional.quantity).toFixed(2)}\n`;
        });
      }

      if (item.observations) {
        summary += `Observações: ${item.observations}\n`;
      }

      summary += `Subtotal: R$ ${item.totalPrice.toFixed(2)}\n\n`;
    });

    summary += `*TOTAL DO PEDIDO: R$ ${calculateTotal()}*\n\n`;
    summary += `Por favor, informe seu nome e endereço para entrega.`;

    return summary;
  };

  const copyOrderToClipboard = () => {
    const summary = generateOrderSummary();
    navigator.clipboard.writeText(summary)
      .then(() => {
        alert('Resumo do pedido copiado para a área de transferência!');
      })
      .catch(err => {
        console.error('Erro ao copiar: ', err);
        alert('Não foi possível copiar o resumo do pedido.');
      });
  };

  const sendToWhatsApp = () => {
    const summary = encodeURIComponent(generateOrderSummary());
    const phoneNumber = "5582982141000";
    window.location.href = `https://wa.me/${phoneNumber}?text=${summary}`;
  };

  if (!isClient) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Seu Carrinho</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="mb-4">Seu carrinho está vazio</p>
            <button onClick={continueShopping} className="add-button">
              Voltar para o Cardápio
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-6 shadow-md mb-6">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-2xl font-bold text-red-600">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">{item.product.description}</p>

                    <p className="text-sm text-gray-800">Quantidade: {item.quantity}</p>

                    {item.additionals.length > 0 && (
                      <div className="text-sm text-gray-800">
                        <span className="font-semibold">Adicionais:</span>
                        <ul className="list-disc list-inside ml-4">
                          {item.additionals.map(a => (
                            <li key={a.id}>
                              {a.quantity}x {a.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.observations && (
                      <p className="text-sm text-gray-700 italic">
                        Observações: {item.observations}
                      </p>
                    )}

                    <div className="flex justify-between items-center mt-4">
                      <p className="text-lg font-bold text-primary">
                        R$ {item.totalPrice.toFixed(2)}
                      </p>

                      <button 
                        onClick={() => removeItem(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md transition"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Total do pedido em destaque */}
              <div className="p-6 border-t mt-8 bg-white rounded-lg shadow-md">
                <p className="text-2xl font-bold text-primary text-right">
                  Total do Pedido: R$ {calculateTotal()}
                </p>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col space-y-4 mt-8">
              <button onClick={continueShopping} className="add-button">
                Continuar Comprando
              </button>

              <button onClick={copyOrderToClipboard} className="add-button">
                Copiar Resumo do Pedido
              </button>

              <button onClick={sendToWhatsApp} className="whatsapp-button">
                Finalizar no WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
