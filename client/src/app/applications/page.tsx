import Image from 'next/image';
import Link from 'next/link';
import { Header, Card, MenuBar } from '@/components/applications';

const HeroSection = () => {
  return (
    <section className='bg-gradient-2 text-white'>
      <Header />
      <div className='flex flex-col bg-gradient p-4 mb-20'>
        <section className='flex flex-col'>
          <Link href='/'>
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
            <Card title='Transfer fund' image='/arrow-icon.png' />
            <Card title='Donation' image='/bourse-icon.png' />
            <Card title='Other' image='/bourse-icon.png' />
            <Card title='Other' image='/bourse-icon.png' />
          </div>
        </section>
      </div>
      <MenuBar />
    </section>
  );
};

export default HeroSection;
