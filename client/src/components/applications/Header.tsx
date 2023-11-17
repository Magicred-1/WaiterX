'use client';

import { useTelegram } from '../TelegramContext';

const Header = () => {
  const { user } = useTelegram();
  return (
    <div className='p-4 flex justify-between bg-slate-800'>
      <div className='rounded-full p-4 text-lg text-white bg-slate-400'>
        {user?.username.slice(0, 2).toUpperCase()}
      </div>
      <w3m-button />
    </div>
  );
};

export default Header;
