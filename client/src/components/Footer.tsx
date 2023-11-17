import Image from 'next/image';
import Link from 'next/link';
import { BsDiscord, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='footer p-10 bg-black text-neutral-content'>
      <aside>
        <Link href='/' className='hidden md:block'>
          <Image
            src='/logo_nobg.png'
            alt='logo'
            width={50}
            height={50}
            className='rounded-lg'
          />
        </Link>
        <p>
          Waiter X.
          <br />
          Providing reliable tech since 2023
        </p>
      </aside>
      <nav>
        <header className='footer-title'>Social</header>
        <div className='grid grid-flow-col gap-4'>
          <Link
            href='#'
            className='text-slate-400 hover:text-[#4457ffad] dark:hover:text-white'
          >
            <BsTwitter className='w-6 h-6' />
            <span className='sr-only'>Twitter page</span>
          </Link>
          <Link
            href='#'
            className='text-slate-400 hover:text-[#4457ffad] dark:hover:text-white'
          >
            <BsDiscord className='w-6 h-6' />
            <span className='sr-only'>Discord community</span>
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
