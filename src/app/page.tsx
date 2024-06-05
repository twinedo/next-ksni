'use client';
import Hero from '../components/organisms/hero';
import Products from '@/components/organisms/products';

export default function Home() {
  const gotoProducts = (id: string) => {
    const releventDiv = document.getElementById(id);
    releventDiv?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <main className="flex min-h-screen flex-col items-center relative justify-between bg-gradient-to-b from-white to-blue-300">
      <div className="z-10 w-full max-w-5xl p-10 lg:p-20 flex flex-col place-items-center items-center justify-center h-screen">
        <div className="w-full mb-2 text-2xl font-bold text-[#090909]">
          KSNI/tw
        </div>
        <Hero onButtonClick={() => gotoProducts('#products')} />
      </div>
      <div
        id="#products"
        className="w-full p-10 lg:p-20 bg-[#F6F6F6] flex flex-col place-items-center gap-4 justify-center">
        <div className="text-black underline text-2xl font-bold text-left">
          Our Products
        </div>
        <div className="z-10 w-full max-w-5xl flex flex-col place-items-center items-center justify-center">
          <Products />
        </div>
      </div>
    </main>
  );
}
