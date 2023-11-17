'use client';

import { useTelegram } from '../TelegramContext';
import { Web3Button } from '@web3modal/react';
import Image from 'next/image';

const Header = () => {
  const { user } = useTelegram();
  return (
    <div className='p-4 flex items-center justify-between bg-slate-800'>
        <Image
          src='https://noun-api.com/beta/pfp'
          alt='logo'
          width={50}
          height={50}
          className='rounded-full'
        />
      <Web3Button />
    </div>
  );
};

export default Header;
