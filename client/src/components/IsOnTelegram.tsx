'use client';
import { redirect } from 'next/navigation';
import { useTelegram } from './TelegramContext';
import { HeroSection } from '.';
import Link from 'next/link';
import { Button } from './ui/button';

const IsOnTelegram = ({ children }: { children: React.ReactNode }) => {
  const { user } = useTelegram();

  return (
    <div>
      {user ? (
        <div>{children}</div>
      ) : (
        <section className='bg-gradient-2 text-white'>
          <div className='flex flex-col justify-center items-center bg-gradient'>
            <div className='mb-16 flex flex-col justify-center items-center min-h-screen'>
              <h1 className='text-4xl md:text-8xl text-center lg:w-[1024px]'>
                Bringing <span className='text-[#4457FF]'>web3</span> to the{' '}
                <span className='text-[#4457FF]'>masses</span>
              </h1>

              <p className='lg:w-[768px] text-center mt-8 md:text-xl text-lg lg:mx-0 sm:mx-8 mx-4'>
                Connect to telegram to start using the app
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
      )}
    </div>
  );
};

export default IsOnTelegram;
