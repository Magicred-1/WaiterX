import { IoIosApps } from 'react-icons/io';
import { IoMdSettings, IoMdWallet } from 'react-icons/io';

const MenuBar = () => {
  return (
    <div className='fixed bottom-0 w-full'>
      <div className='h-[2px] w-full bg-white' />
      <div className='p-3 flex gap-4 w-full justify-center shadow-xl bg-slate-800'>
        <div className='rounded-full bg-slate-600 p-3'>
          <IoMdWallet className='text-2xl text-white' />
        </div>
        <div className='rounded-full bg-slate-600 p-3'>
          <IoIosApps className='text-2xl text-white' />
        </div>
        <div className='rounded-full bg-slate-600 p-3'>
          <IoMdSettings className='text-2xl text-white' />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
