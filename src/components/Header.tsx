import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="la-chapa-header p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="la-chapa-logo mr-4">
            <Image 
              src="/images/logo.png" 
              alt="La Chapa Hamburgueria" 
              width={60} 
              height={60}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-yellow-400">LA CHAPA</h1>
            <p className="text-sm text-yellow-200">Hamburgueria Artesanal</p>
          </div>
        </div>
        <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
          Cardápio
        </Link>
      </div>
    </header>
  );
}
