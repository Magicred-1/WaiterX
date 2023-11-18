'use client';

import { GiPiggyBank } from 'react-icons/gi';
import { BiLogoBitcoin } from 'react-icons/bi';

import { depositOrWithdraw } from '@/lib/context';
import { useAtom } from 'jotai';

const DepositAndWithdraw = () => {
  const [value, setValue] = useAtom(depositOrWithdraw);
  return (
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
  );
};

export default DepositAndWithdraw;
