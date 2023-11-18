import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  title: string;
  image: string;
}

const Card = ({ title, image }: CardProps) => {
  return (
    <div className='max-w-xs bg-black rounded-lg shadow text-black flex flex-col min-h-[150px] justify-between'>
      <div className='flex justify-center items-center pt-8'>
        <Image src={image} alt='image' width={50} height={50} />
      </div>

      <div className='p-5'>
        <Link
          href='/get-funded-account'
          className='flex justify-center h-10 items-center w-full text-center text-sm font-medium
        bg-white hover:bg-white/40 duration-300 ease-in-out rounded-lg'
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Card;
