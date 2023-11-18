import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='bg-gradient-2'>
      <div className='flex flex-col justify-center items-center bg-gradient'>
        <div className='mb-16 flex flex-col justify-center items-center min-h-screen'>
          <h1 className='text-4xl md:text-8xl text-center lg:w-[1024px]'>
            Making <span className='text-[#4457FF]'>web3</span> accessible to
            the <span className='text-[#4457FF]'>human kind</span>
          </h1>

          <p className='lg:w-[768px] text-center mt-8 md:text-xl text-lg lg:mx-0 sm:mx-8 mx-4'>
            Making WEB3 accesible for Humankind
            <span className='text-[#4457FF]'>All in One wallet </span>
            modular telegram web app
          </p>

          <Link href='https://t.me/waiter_x_bot'>
            <Button
              variant='secondary'
              className='h-10 w-[250px] rounded-md mt-8'
            >
              Start your journey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
