export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string; // <-- ADICIONADO AQUI
}

export interface Additional {
  id: string;
  name: string;
  price: number;
}

// Produtos
export const products: Product[] = [
  // Burgers Artesanais
  {
    id: 'la-costela',
    name: 'La Costela',
    description: 'Pão brioche, hambúrguer de Costela 130g, presunto, queijo cheddar, bacon crocante, molho barbecue e salada.',
    price: 24.00,
    category: 'burgers-artesanais',
    image: 'burger-artesanal.png'
  },
  {
    id: 'la-file-bovino',
    name: 'La Filé Bovino',
    description: 'Pão brioche, 130g de filé Bovino, presunto, mussarela, molho especial e salada.',
    price: 25.00,
    category: 'burgers-artesanais',
    image: 'burger-artesanal.png'
  },
  {
    id: 'la-alcatra',
    name: 'La Alcatra',
    description: 'Pão brioche, hambúrguer de Alcatra 130g, presunto, mussarela, bacon crocante, molho barbecue e salada.',
    price: 25.00,
    category: 'burgers-artesanais',
    image: 'burger-artesanal.png'
  },
  {
    id: 'la-cupim',
    name: 'La Cupim',
    description: 'Pão brioche, hambúrguer de Cupim 130g, presunto, mussarela, bacon crocante, molho barbecue e salada.',
    price: 27.00,
    category: 'burgers-artesanais',
    image: 'burger-artesanal.png'
  },
  {
    id: 'la-picanha',
    name: 'La Picanha',
    description: 'Pão brioche, hambúrguer de Picanha 130g, presunto, mussarela, bacon crocante, molho barbecue e salada.',
    price: 30.00,
    category: 'burgers-artesanais',
    image: 'burger-artesanal.png'
  },
  {
    id: 'la-costela-duplo',
    name: 'La Costela Duplo',
    description: 'Pão brioche, 2x hambúrguer de Costela 130g, 2x queijo cheddar, molho barbecue e salada.',
    price: 34.00,
    category: 'burgers-artesanais',
    image: 'burger-artesanal.png'
  },
  {
    id: 'la-alcatra-duplo',
    name: 'La Alcatra Duplo',
    description: 'Pão brioche, 2x hambúrguer de Alcatra 130g, presunto, mussarela, bacon crocante, molho barbecue e salada.',
    price: 35.00,
    category: 'burgers-artesanais',
    image: 'burger-artesanal.png'
  },
  {
    id: 'la-picanha-duplo',
    name: 'La Picanha Duplo',
    description: 'Pão brioche, 2x hambúrguer de Picanha 130g, presunto, mussarela, bacon crocante, molho barbecue e salada.',
    price: 40.00,
    category: 'burgers-artesanais',
    image: 'burger-artesanal.png'
  },

  // Tradicionais
  {
    id: 'bauru',
    name: 'Bauru',
    description: 'Pão brioche, hambúrguer, ovo, queijo mussarela, presunto, alface e tomate, molho da casa.',
    price: 15.00,
    category: 'tradicionais',
    image: 'burger-tradicional.png'
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Pão brioche, hambúrguer, catupiry, ovo, queijo mussarela, presunto, alface tomate, molho da casa.',
    price: 16.00,
    category: 'tradicionais',
    image: 'burger-tradicional.png'
  },
  {
    id: 'x-burguer',
    name: 'X-Burguer',
    description: 'Pão brioche, hambúrguer, queijo mussarela, presunto, alface, tomate, molho da casa.',
    price: 14.00,
    category: 'tradicionais',
    image: 'burger-tradicional.png'
  },
  {
    id: 'x-burguer-duplo',
    name: 'X-Burguer Duplo',
    description: 'Pão brioche, 2 hambúrguer, queijo mussarela, presunto, alface e tomate, molho da casa.',
    price: 20.00,
    category: 'tradicionais',
    image: 'burger-tradicional.png'
  },
  {
    id: 'x-bacon',
    name: 'X-Bacon',
    description: 'Pão brioche, hambúrguer, bacon crocante, queijo mussarela, presunto, alface e tomate, molho da casa.',
    price: 20.00,
    category: 'tradicionais',
    image: 'burger-tradicional.png'
  },
  {
    id: 'x-calabacon',
    name: 'X-Calabacon',
    description: 'Pão brioche, hambúrguer, calabresa, bacon, queijo mussarela, presunto, alface, tomate, molho da casa.',
    price: 22.00,
    category: 'tradicionais',
    image: 'burger-tradicional.png'
  },
  {
    id: 'x-calabresa-egg',
    name: 'X-Calabresa Egg',
    description: 'Pão brioche, hambúrguer, calabresa, ovo, queijo mussarela, presunto, alface, tomate, molho da casa.',
    price: 23.00,
    category: 'tradicionais',
    image: 'burger-tradicional.png'
  },
  {
    id: 'la-calabresa',
    name: 'La Calabresa',
    description: 'Pão brioche, 130g de Calabresa defumada, mussarela, presunto, alface, tomate, molho da casa.',
    price: 20.00,
    category: 'tradicionais',
    image: 'burger-tradicional.png'
  },
  {
    id: 'la-frango-desfiado',
    name: 'La Frango Desfiado',
    description: 'Pão brioche, 130g de Frango Desfiado, catupiry, presunto, mussarela, batata palha, molho da casa e salada.',
    price: 23.00,
    category: 'tradicionais',
    image: 'burger-tradicional.png'
  },
  {
    id: 'la-toscana',
    name: 'La Toscana',
    description: 'Pão brioche, hambúrguer de toscana 130g, presunto, mussarela, molho da casa e salada.',
    price: 22.00,
    category: 'tradicionais',
    image: 'burger-tradicional.png'
  },
  {
    id: 'x-tudo',
    name: 'X-Tudo',
    description: 'Pão brioche, hambúrguer, ovo, calabresa bacon, queijo mussarela presunto, cheddar, frango desfiado batata palha, catupiry, molho da casa.',
    price: 28.00,
    category: 'tradicionais',
    image: 'burger-tradicional.png'
  },

  // Passaportes
  {
    id: 'passaporte-frango',
    name: 'Passaporte de Frango',
    description: 'Pão seda, 2 salsichas, frango desfiado, milho, ervilha, tomate, batata palha, queijo ralado e molho especial.',
    price: 16.00,
    category: 'passaportes',
    image: 'passaporte.png'
  },
  {
    id: 'passaporte-frango-catupiry',
    name: 'Passaporte de Frango c/ Catupiry',
    description: 'Pão seda, 2 salsichas, frango desfiado, Catupiry, milho, ervilha, tomate, batata palha, queijo ralado e molho especial.',
    price: 19.00,
    category: 'passaportes',
    image: 'passaporte.png'
  },
  {
    id: 'passaporte-frango-cheddar',
    name: 'Passaporte de Frango c/ Cheddar',
    description: 'Pão seda, 2 salsichas, frango desfiado, Cheddar, milho, ervilha, tomate, batata palha, queijo ralado e molho especial.',
    price: 19.00,
    category: 'passaportes',
    image: 'passaporte.png'
  },
  {
    id: 'passaporte-frango-calabresa',
    name: 'Passaporte de Frango c/ Calabresa',
    description: 'Pão seda, 2 salsichas, frango desfiado, Calabresa, milho, ervilha, tomate, batata palha, queijo ralado e molho especial.',
    price: 19.00,
    category: 'passaportes',
    image: 'passaporte.png'
  },
  {
    id: 'passaporte-frango-bacon',
    name: 'Passaporte de Frango c/ Bacon',
    description: 'Pão seda, 2 salsichas, frango desfiado, Bacon, milho, ervilha, tomate, batata palha, queijo ralado e molho especial.',
    price: 20.00,
    category: 'passaportes',
    image: 'passaporte.png'
  },
  {
    id: 'passaporte-toscana',
    name: 'Passaporte de Toscana',
    description: 'Pão seda, 2 salsichas, linguiça toscana, milho, ervilha, tomate, batata palha, queijo ralado e molho especial.',
    price: 21.00,
    category: 'passaportes',
    image: 'passaporte.png'
  },
  {
    id: 'passaporte-carne',
    name: 'Passaporte de Carne',
    description: 'Pão seda, 2 salsichas, carne moída, milho, ervilha, tomate, batata palha, queijo ralado e molho especial.',
    price: 20.00,
    category: 'passaportes',
    image: 'passaporte.png'
  },
  {
    id: 'passaporte-carne-catupiry',
    name: 'Passaporte de Carne c/ Catupiry',
    description: 'Pão seda, 2 salsichas, carne moída, catupiry, milho, ervilha, tomate, batata palha, queijo ralado e molho especial.',
    price: 22.00,
    category: 'passaportes',
    image: 'passaporte.png'
  },
  {
    id: 'passaporte-carne-cheddar',
    name: 'Passaporte de Carne c/ Cheddar',
    description: 'Pão seda, 2 salsichas, carne moída, Cheddar, milho, ervilha, tomate, batata palha, queijo ralado e molho especial.',
    price: 22.00,
    category: 'passaportes',
    image: 'passaporte.png'
  },
  {
    id: 'passaporte-carne-sol',
    name: 'Passaporte de Carne de Sol',
    description: 'Pão seda, 2 salsichas, carne de sol desfiada, milho, ervilha, tomate, batata palha, queijo ralado e molho especial.',
    price: 28.00,
    category: 'passaportes',
    image: 'passaporte.png'
  },
  {
    id: 'passaporte-file-bovino',
    name: 'Passaporte de Filé Bovino',
    description: 'Pão seda, 2 salsichas, filé bovino, milho, ervilha, tomate, batata palha, queijo ralado e molho especial.',
    price: 23.00,
    category: 'passaportes',
    image: 'passaporte.png'
  },

  // Bebidas
  {
    id: 'coca-cola-lata',
    name: 'Coca-cola lata',
    description: 'Refrigerante Coca-cola lata 350ml',
    price: 5.50,
    category: 'bebidas',
    image: 'bebidas.png'
  },
  {
    id: 'guarana-lata',
    name: 'Guaraná lata',
    description: 'Refrigerante Guaraná lata 350ml',
    price: 5.00,
    category: 'bebidas',
    image: 'bebidas.png'
  },
  {
    id: 'fanta-lata',
    name: 'Fanta lata',
    description: 'Refrigerante Fanta lata 350ml',
    price: 5.00,
    category: 'bebidas',
    image: 'bebidas.png'
  },
  {
    id: 'agua-mineral',
    name: 'Água mineral',
    description: 'Água mineral sem gás 500ml',
    price: 3.00,
    category: 'bebidas',
    image: 'bebidas.png'
  },
  {
    id: 'agua-gas',
    name: 'Água mineral c/ gás',
    description: 'Água mineral com gás 500ml',
    price: 3.00,
    category: 'bebidas',
    image: 'bebidas.png'
  },
  {
    id: 'guarana-1l',
    name: 'Guaraná 1 litro',
    description: 'Refrigerante Guaraná 1 litro',
    price: 8.00,
    category: 'bebidas',
    image: 'bebidas.png'
  },
  {
    id: 'guarana-2l',
    name: 'Guaraná 2 litros',
    description: 'Refrigerante Guaraná 2 litros',
    price: 12.00,
    category: 'bebidas',
    image: 'bebidas.png'
  },
  {
    id: 'coca-cola-1l',
    name: 'Coca-cola 1 litro',
    description: 'Refrigerante Coca-cola 1 litro',
    price: 10.00,
    category: 'bebidas',
    image: 'bebidas.png'
  },
  {
    id: 'coca-cola-2l',
    name: 'Coca-cola 2 litros',
    description: 'Refrigerante Coca-cola 2 litros',
    price: 14.00,
    category: 'bebidas',
    image: 'bebidas.png'
  },
  {
    id: 'coca-cola-zero-lata',
    name: 'Coca-cola Zero lata',
    description: 'Refrigerante Coca-cola Zero lata 350ml',
    price: 5.50,
    category: 'bebidas',
    image: 'bebidas.png'
  },
  {
    id: 'fanta-1l',
    name: 'Fanta 1 litro',
    description: 'Refrigerante Fanta 1 litro',
    price: 8.00,
    category: 'bebidas',
    image: 'bebidas.png'
  }
];
