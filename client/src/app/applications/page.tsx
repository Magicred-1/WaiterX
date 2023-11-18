import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/applications';

const page = async () => {
  return (
    <div>
      <section className='flex flex-col'>
        <Link href='/applications/wallet'>
          <Image
            src='/herobanner.png'
            alt='herobanner'
            width={700}
            height={100}
            className='rounded-lg'
          />
        </Link>
      </section>
      <section className='flex flex-col mt-6'>
        <h1 className='text-xl text-white/80 font-bold uppercase'>
          Applications
        </h1>
        <div className='h-[2px] w-3/5 bg-white mt-1' />
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <Card title='Transfer fund' image='/arrow-icon.png' path=''/>
          <Card title='Donation' image='/bourse-icon.png' path=''/>
          <Card title='Auction' image='/courbe-icon.png' path=''/>
          <Card title='Swap' image='/profile-icon.png' path='/applications/swap'/>
        </div>
      </section>
    </div>
  );
};

export default page;
