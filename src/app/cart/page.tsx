'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Image from 'next/image';
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
              {cartItems.map(item => {
                let imageSrc = '/images/burger-tradicional.png';
                
                if (item.product.category === 'passaportes') {
                  imageSrc = '/images/passaporte.png';
                } else if (item.product.category === 'burgers-artesanais') {
                  imageSrc = '/images/burger-artesanal.png';
                } else if (item.product.category === 'bebidas') {
                  imageSrc = '/images/bebidas.png';
                }
                
                return (
                  <div key={item.id} className="cart-item">
                    <div className="flex items-center">                      
                      <div className="cart-item-details">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h3 className="cart-item-title">{item.product.name}</h3>
                            <p className="text-sm text-gray-600">{item.product.description}</p> {/* Descrição adicionada */}
                          </div>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 ml-2 flex-shrink-0"
                            aria-label="Remover item"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                        
                        <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
                        
                        {item.additionals.length > 0 && (
                          <div className="cart-item-additionals">
                            <span className="font-semibold">Adicionais:</span>
                            <ul className="ml-2">
                              {item.additionals.map(a => (
                                <li key={a.id}>
                                  {a.name} ({a.quantity}x) - R$ {(a.price * a.quantity).toFixed(2)}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {item.observations && (
                          <p className="cart-item-observations">
                            <span className="font-semibold">Obs:</span> {item.observations}
                          </p>
                        )}
                      </div>
                      
                      <div className="cart-item-quantity-price">
                        <p className="cart-item-price">
                          R$ {item.totalPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <div className="p-4">
                <div className="cart-total">
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
