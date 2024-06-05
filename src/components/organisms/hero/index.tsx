import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../../atoms/button'

type THero = {
    onButtonClick: () => void;
}

function Hero(props: THero) {
    const {onButtonClick} = props;
  return (
    <div>
        <div className="w-full p-8 flex items-center justify-between shadow-xl rounded-xl bg-gradient-to-b from-blue-300 to-white">
          <div className="flex flex-1 p-5 lg:p-20 flex-col gap-3">
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
                onClick={onButtonClick}
                />
                </Link>
            </div>
          </div>
          <div className="hidden md:flex md:flex-1 ">
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
  )
}

export default Hero