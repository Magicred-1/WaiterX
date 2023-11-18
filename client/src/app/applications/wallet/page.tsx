'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { GiPiggyBank } from 'react-icons/gi';
import { BiLogoBitcoin } from 'react-icons/bi';
import { IoCopy } from 'react-icons/io5';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAtom } from 'jotai';
import { generatedUserWallet } from '@/lib/context';

const DepositAndWithdraw = () => {
  const [value, setValue] = useState<'deposit' | 'withdraw'>('deposit');
  const { address, isConnecting, isDisconnected } = useAccount();
  const [wallet, setWallet] = useAtom(generatedUserWallet);

  const [form, setForm] = useState({
    currency: 'ethereum',
    address: '',
    amount: '',
    blockchain: 'polygon',
  });

  const handleForm = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <div>
      <section className='flex justify-evenly gap-4 py-8'>
        <div className='flex flex-col items-center'>
          <div
            className={`rounded-lg ${
              value === 'deposit' ? 'bg-slate-400' : 'bg-slate-600'
            } p-6 cursor-pointer`}
            onClick={() => setValue('deposit')}
          >
            <GiPiggyBank className='text-6xl text-white' />
          </div>
          <h2
            className={`text-xl mt-2 font-semibold ${
              value === 'deposit' && 'text-[#4457FF]'
            }`}
          >
            Deposit
          </h2>
        </div>

        <div className='flex flex-col items-center'>
          <div
            className={`rounded-lg ${
              value === 'withdraw' ? 'bg-slate-400' : 'bg-slate-600'
            } p-6 cursor-pointer`}
            onClick={() => setValue('withdraw')}
          >
            <BiLogoBitcoin className='text-6xl text-white' />
          </div>
          <h2
            className={`text-xl mt-2 font-semibold ${
              value === 'withdraw' && 'text-[#4457FF]'
            }`}
          >
            Withdraw
          </h2>
        </div>
      </section>
      <div className='w-full flex h-[2px] bg-white' />
      {value === 'deposit' ? (
        <div>
          <div className='grid w-full max-w-sm items-center gap-1.5 py-8'>
            <Label htmlFor='wallet'>Deposit wallet</Label>
            <div className='flex gap-2'>
              <Input
                type='wallet'
                id='wallet'
                placeholder='wallet'
                value={address || wallet?.publicKey || 'Connect wallet'}
                className='text-black'
              />
              <div className='rounded-lg bg-white p-2'>
                <IoCopy className='text-2xl text-black' />
              </div>
            </div>
          </div>

          <div className='w-full flex h-[2px] bg-white' />
        </div>
      ) : (
        <div>
          <div className='my-4'>
            <Label htmlFor='wallet'>Currency to withdraw</Label>
            <Select onValueChange={(e) => setForm({ ...form, currency: e })}>
              <SelectTrigger className='w-[180px] text-black'>
                <SelectValue placeholder='Ethereum' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='ethereum'>Ethereum</SelectItem>
                <SelectItem value='matic'>Matic</SelectItem>
                <SelectItem value='usdt'>Usdt</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5 my-4'>
            <Label htmlFor='wallet'>Withdrawal address</Label>
            <div className='flex gap-2'>
              <Input
                type='wallet'
                id='wallet'
                placeholder='wallet'
                onChange={(e) => handleForm(e)}
                className='text-black'
              />
            </div>
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5 mb-4'>
            <Label htmlFor='amount'>Amount</Label>
            <div className='flex gap-2'>
              <Input
                type='amount'
                id='amount'
                placeholder='amount'
                onChange={(e) => handleForm(e)}
                className='text-black'
              />
            </div>
          </div>

          <div className='mb-8'>
            <Label htmlFor='wallet'>Blockchain destination</Label>
            <Select onValueChange={(e) => setForm({ ...form, blockchain: e })}>
              <SelectTrigger className='w-[180px] text-black'>
                <SelectValue placeholder='Polygon' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='polygon'>Polygon</SelectItem>
                <SelectItem value='ethereum'>Ethereum</SelectItem>
                <SelectItem value='arbitrum'>Arbitrum</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='w-full flex h-[2px] bg-white' />

          <Button className='mt-8 bg-white text-black font-semibold hover:bg-white/40'>
            Withdraw
          </Button>
        </div>
      )}
    </div>
  );
};

export default DepositAndWithdraw;
