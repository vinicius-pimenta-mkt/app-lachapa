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

    // Disparar evento para atualizar o contador do carrinho
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
    // Número fixo da La Chapa Hamburgueria
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
        <h1 className="text-2xl font-bold mb-6 text-primary">Seu Carrinho</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="mb-4">Seu carrinho está vazio</p>
            <button
              onClick={continueShopping}
              className="add-button"
            >
              Voltar para o Cardápio
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="flex items-center justify-between p-4">
                    <div className="cart-item-details">
                      <div className="flex flex-col mb-1">
                        <h3 className="cart-item-title">{item.product.name}</h3>
                        <p className="text-sm text-gray-600">{item.product.description}</p>
                      </div>
                      <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
                      {item.additionals.length > 0 && (
                        <div className="cart-item-additionals">
                          <span className="font-semibold text-sm">Adicionais:</span>
                          <ul className="ml-2 text-sm">
                            {item.additionals.map(a => (
                              <li key={a.id}>
                                {a.name} ({a.quantity}x) - R$ {(a.price * a.quantity).toFixed(2)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {item.observations && (
                        <p className="cart-item-observations text-sm">
                          <span className="font-semibold">Obs:</span> {item.observations}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="item-price-box mb-4">
                        R$ {item.totalPrice.toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="bg-red-500 text-white text-sm py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 border border-white w-[120px] sm:w-auto mt-2 sm:mt-0"
                      >
                        Remover item
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-4">
                <div className="cart-total font-bold text-lg cart-total-spacing">
                  Total: R$ {calculateTotal()}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <button
                onClick={continueShopping}
                className="add-button"
              >
                Continuar Comprando
              </button>

              <div className="flex flex-col md:flex-row gap-4">
                <button
                  onClick={copyOrderToClipboard}
                  className="add-button"
                >
                  Copiar Resumo do Pedido
                </button>

                <button
                  onClick={sendToWhatsApp}
                  className="whatsapp-button"
                >
                  Finalizar no WhatsApp
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
