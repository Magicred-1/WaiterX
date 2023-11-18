'use client';

import { useTelegram } from '../TelegramContext';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { Web3Button } from '@web3modal/react';

import { useAccount } from 'wagmi';
import { addUser, getUserWallet } from '@/lib/wallet.action';
import { useAtom } from 'jotai';
import { generatedUserWallet } from '@/lib/context';
import { shortenAddress } from '@/lib/utils';

const Header = () => {
  const { user } = useTelegram();
  const [modal, setModal] = useState(false);
  const [wallet, setWallet] = useAtom(generatedUserWallet);
  const [isUsingGeneratedWallet, setIsUsingGeneratedWallet] = useState(false);

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
        src={`${address ? `https://noun-api.com/beta/pfp?name=${address}`: 'https://noun-api.com/beta/pfp'}`}
        alt='logo'
        width={50}
        height={50}
        className='rounded-full'
      />
      {address ? (
        <Web3Button />
      ) : wallet?.publicKey && isUsingGeneratedWallet ? (
        <Button onClick={() => setModal(!modal)}>
          {shortenAddress(wallet.publicKey)}
        </Button>
      ) : (
        <Button onClick={() => setModal(!modal)}>Connect Wallet</Button>
      )}

      {modal && !isUsingGeneratedWallet && (
        <>
          <div
            className='absolute items-center bg-black/30 w-full h-screen top-0 left-0'
            onClick={() => setModal(false)}
          />
          <div
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             flex flex-col items-center rounded-lg bg-white p-4 text-black'
          >
            <div
              onClick={() => {
                setIsUsingGeneratedWallet(false);
                setModal(false);
              }}
            >
              <Web3Button />
            </div>
            <span className='my-4 font-bold'>Or</span>

            <button
              className='bg-blue-400 font-bold text-white rounded-xl px-4 py-2'
              onClick={async () => {
                if (user?.id) {
                  const telegramUserWallet = await getUserWallet(user?.id);
                  setWallet(telegramUserWallet);
                }
                setIsUsingGeneratedWallet(true);
                setModal(false);
              }}
            >
              Generated wallet
            </button>
          </div>
        </>
      )}
      {modal && isUsingGeneratedWallet && (
        <div
          className='absolute items-center bg-black/30 w-full h-screen top-0 left-0'
          onClick={() => setModal(false)}
        >
          <div
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             flex flex-col items-center rounded-lg bg-white p-4 text-black'
          >
            <button
              className='bg-blue-400 font-bold text-white rounded-xl px-4 py-2'
              onClick={async () => {
                setIsUsingGeneratedWallet(false);
                setModal(false);
              }}
            >
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
