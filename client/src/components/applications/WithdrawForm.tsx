'use client';

import { depositOrWithdraw } from '@/lib/context';
import { useAtom } from 'jotai';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const WithdrawForm = () => {
  const [value, setValue] = useAtom(depositOrWithdraw);
  if (value !== 'withdraw') return null;
  return (
    <div>
      <div className='grid w-full max-w-sm items-center gap-1.5 pt-8'>
        <Label htmlFor='wallet'>Currency to withdraw</Label>
        <div className='flex gap-2'>
          <Input
            type='wallet'
            id='wallet'
            placeholder='wallet'
            // value={''}
            className='text-black'
          />
        </div>
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5 my-4'>
        <Label htmlFor='wallet'>Withdrawal address</Label>
        <div className='flex gap-2'>
          <Input
            type='wallet'
            id='wallet'
            placeholder='wallet'
            // value={''}
            className='text-black'
          />
        </div>
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5 mb-4'>
        <Label htmlFor='wallet'>Amount</Label>
        <div className='flex gap-2'>
          <Input
            type='wallet'
            id='wallet'
            placeholder='wallet'
            // value={''}
            className='text-black'
          />
        </div>
      </div>

      <div className='mb-8'>
        <Label htmlFor='wallet'>Blockchain destination</Label>
        <Select>
          <SelectTrigger className='w-[180px] text-black'>
            <SelectValue placeholder='Polygon' defaultValue={'polygon'} />
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
  );
};

export default WithdrawForm;
