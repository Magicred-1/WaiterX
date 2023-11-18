'use client';

import { useTelegram } from '../TelegramContext';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { Web3Button } from '@web3modal/react';

import { useAccount } from 'wagmi';
import { addUser } from '@/lib/wallet.action';
import { useAtom } from 'jotai';
import { generatedUserWallet } from '@/lib/context';

const Header = () => {
  const { user } = useTelegram();
  const [modal, setModal] = useState(false);
  const [wallet, setWallet] = useAtom(generatedUserWallet);

  const { address, isConnecting, isDisconnected } = useAccount();

  useEffect(() => {
    if (user) {
      const getUser = addUser(user);
      console.log(getUser);
    }
  }, [user]);

  return (
    <div className='p-4 flex items-center justify-between bg-slate-800'>
      <Image
        src='https://noun-api.com/beta/pfp'
        alt='logo'
        width={50}
        height={50}
        className='rounded-full'
      />
      {address ? (
        <Web3Button />
      ) : (
        <Button onClick={() => setModal(!modal)}>Connect Wallet</Button>
      )}

      {modal && (
        <>
          <div
            className='absolute items-center bg-black/30 w-full h-screen top-0 left-0'
            onClick={() => setModal(false)}
          />
          <div
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             flex flex-col items-center rounded-lg bg-white p-4 text-black'
          >
            <div onClick={() => setModal(false)}>
              <Web3Button />
            </div>
            <span className='my-4 font-bold'>Or</span>

            <button
              className='bg-blue-400 font-bold text-white rounded-xl px-4 py-2'
              onClick={() => {
                setModal(false);
                // setWallet();
              }}
            >
              Generate wallet
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
