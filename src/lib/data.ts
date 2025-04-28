export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string; // ✅ Agora o tipo Product inclui a imagem
}

export interface Additional {
  id: string;
  name: string;
  price: number;
}

// ✅ Produtos
export const products: Product[] = [
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
  }
];

export const additionals: Additional[] = [
  { id: 'molho-barbecue', name: 'Molho Barbecue', price: 3.00 },
  { id: 'cheddar', name: 'Cheddar', price: 3.00 },
  { id: 'catupiry', name: 'Catupiry', price: 3.00 },
  { id: 'presunto', name: 'Presunto', price: 2.00 },
  { id: 'mussarela', name: 'Mussarela', price: 2.00 },
  { id: 'bacon', name: 'Bacon', price: 3.00 },
  { id: 'calabresa', name: 'Calabresa', price: 3.00 },
  { id: 'queijo-coalho', name: 'Queijo Coalho', price: 4.00 },
  { id: 'azeitona', name: 'Azeitona', price: 2.00 },
  { id: 'milho', name: 'Milho', price: 2.00 },
  { id: 'ovo', name: 'Ovo', price: 1.50 }
];

export const categories = [
  { id: 'burgers-artesanais', name: 'Burgers Artesanais' },
  { id: 'tradicionais', name: 'Tradicionais' },
  { id: 'passaportes', name: 'Passaportes' },
  { id: 'bebidas', name: 'Bebidas' }
];
