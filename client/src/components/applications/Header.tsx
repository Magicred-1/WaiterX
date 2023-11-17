'use client';

import { useTelegram } from '../TelegramContext';
import { Web3Button } from '@web3modal/react';

const Header = () => {
  const { user } = useTelegram();
  return (
    <div className='p-4 flex items-center justify-between bg-slate-800'>
      <div className='rounded-full p-4 text-lg text-white bg-slate-400'>
        {user?.username.slice(0, 2).toUpperCase()}
      </div>
      <Web3Button />
    </div>
  );
};

export default Header;
