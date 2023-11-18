'use client';

import { depositOrWithdraw } from '@/lib/context';
import { useAtom } from 'jotai';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { IoCopy } from 'react-icons/io5';

import { useAccount } from 'wagmi';

const DepositInformation = () => {
  const [value, setValue] = useAtom(depositOrWithdraw);
  const { address, isConnecting, isDisconnected } = useAccount();
  if (value !== 'deposit') return null;
  return (
    <div>
      <div className='grid w-full max-w-sm items-center gap-1.5 py-8'>
        <Label htmlFor='wallet'>Deposit wallet</Label>
        <div className='flex gap-2'>
          <Input
            type='wallet'
            id='wallet'
            placeholder='wallet'
            value={address}
            className='text-black'
          />
          <div className='rounded-lg bg-white p-2'>
            <IoCopy className='text-2xl text-black' />
          </div>
        </div>
      </div>

      <div className='w-full flex h-[2px] bg-white' />
    </div>
  );
};

export default DepositInformation;
