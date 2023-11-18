import Link from 'next/link';
import { IoIosApps } from 'react-icons/io';
import { IoMdSettings, IoMdWallet } from 'react-icons/io';

const MenuBar = () => {
  return (
    <div className='fixed bottom-0 w-full'>
      <div className='h-[2px] w-full bg-white' />
      <div className='p-3 flex gap-4 w-full justify-center shadow-xl bg-slate-800'>
        <Link
          href='/applications/wallet'
          className='rounded-full bg-slate-600 p-3 hover:scale-105'
        >
          <IoMdWallet className='text-2xl text-white hover:scale-105' />
        </Link>
        <Link
          href='/applications'
          className='rounded-full bg-slate-600 p-3 hover:scale-105'
        >
          <IoIosApps className='text-2xl text-white' />
        </Link>
        <Link
          href='/hystory'
          className='rounded-full bg-slate-600 p-3 hover:scale-105'
        >
          <IoMdSettings className='text-2xl text-white hover:scale-105' />
        </Link>
      </div>
    </div>
  );
};

export default MenuBar;
