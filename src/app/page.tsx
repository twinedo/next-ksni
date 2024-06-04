'use client';
import Image from 'next/image';
import Button from './components/button';
import Link from 'next/link';

export default function Home() {

  const gotoProducts = (id: string) => {
    const releventDiv = document.getElementById(id);
    releventDiv?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <main className="flex min-h-screen flex-col items-center relative justify-between bg-gradient-to-b from-white to-blue-300">
      <div className="z-10 w-full max-w-5xl flex flex-col place-items-center items-center justify-center h-screen">
        <div className="w-full mb-2 text-2xl font-bold text-[#090909]">
          KSNI/tw
        </div>
        <div className="w-full p-8 flex items-center justify-between shadow-xl rounded-xl bg-gradient-to-b from-blue-300 to-white">
          <div className="flex flex-1 flex-col gap-3">
            <div className='flex flex-1 flex-col'>
              <div className="text-5xl font-bold text-black">
                Welcome, <br />
                Let's rock with us
              </div>
              <div className="w-full h-0.5 my-4 bg-black" />
              <div className="text-xl font-thin text-black text-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris{' '}
              </div>
            </div>
            <div className='flex flex-1'>
              <Link href="#products">
              <Button
                text="Check this out"
                className="my-3"
                onClick={() => gotoProducts("#products")}
                />
                </Link>
            </div>
          </div>
          <div className="flex flex-1">
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/assets/building.png"
              alt="Next.js Logo"
              width={480}
              height={360}
              priority
            />
          </div>
        </div>
      </div>
      <div id="#products">
        <div>Test product here aowndawnd andkaw dkandjn</div>
        <div>Test product here aowndawnd andkaw dkandjn</div>
        <div>Test product here aowndawnd andkaw dkandjn</div>
        <div>Test product here aowndawnd andkaw dkandjn</div>
        <div>Test product here aowndawnd andkaw dkandjn</div>
        <div>Test product here aowndawnd andkaw dkandjn</div>
        <div>Test product here aowndawnd andkaw dkandjn</div>
      </div>

     
    </main>
  );
}
