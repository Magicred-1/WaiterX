import { Navbar, Footer, QuestionAndAnswer, HeroSection } from '@/components';

export default function Home() {
  return (
    <main className='text-white'>
      <Navbar />
      <HeroSection />

      <section className='bg-black flex flex-col justify-center items-center py-16'>
        <h1 className='text-4xl md:text-7xl text-center lg:w-[1024px]'>
          Time to enter the web3
        </h1>
      </section>

      <QuestionAndAnswer />
      <Footer />
    </main>
  );
}
