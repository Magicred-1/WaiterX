import { Navbar, Footer, QuestionAndAnswer, HeroSection } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='text-white'>
      <Navbar />
      <HeroSection />

      <section className='bg-black flex flex-col justify-center items-center py-16'>
        <h1 className='text-4xl md:text-7xl text-center lg:w-[1024px]'>
          Time to enter the web3
        </h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center mx-4 md:mx-8 gap-4 md:gap-8 mt-16 pb-12'>
          <Card
            title='Multi-Usage'
            description='With the help of our platform you can use your crypto assets in many ways. It is just more simple than you think.'
            icon='/arrow-icon.png'
          />
          <Card
            title='Easy to use'
            description='Waiter X is design to be a one click solution, complexity is gone'
            icon='/profile-icon.png'
          />
          <Card
            title='Telegram embeded'
            description='Our application is embeded in telegram. No need to download any other application.'
            icon='/courbe-icon.png'
          />
          <Card
            title='Fully interoperable'
            description='Enought thinking about bridging asset, everything is automated'
            icon='/bourse-icon.png'
          />
        </div>
      </section>

      <QuestionAndAnswer />
      <Footer />
    </main>
  );
}

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card = ({ title, description, icon }: CardProps) => (
  <div className='max-w-xs bg-[#272727] rounded-lg shadow text-white flex flex-col h-full justify-between'>
    <div className='flex justify-center items-center pt-8'>
      <Image src={icon} alt='image' width={50} height={50} />
    </div>

    <div className='p-5 text-center'>
      <h5 className='mb-4 text-xl font-bold tracking-wide'>{title}</h5>
      <p className='font-normal text-sm text-slate-400'>{description}</p>
    </div>
    <div className='p-5'>
      <Link
        href='https://t.me/waiter_x_bot'
        className='flex justify-center h-10 items-center w-full text-center text-sm font-medium
              bg-[#5768FF] hover:bg-[#5768ffb1] duration-300 ease-in-out rounded-lg'
      >
        Start your journey
      </Link>
    </div>
  </div>
);
