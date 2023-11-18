import {
  DepositAndWithdraw,
  DepositInformation,
  WithdrawForm,
} from '@/components/applications';

const page = () => {
  return (
    <div>
      <DepositAndWithdraw />
      <div className='w-full flex h-[2px] bg-white' />
      <DepositInformation />
      <WithdrawForm />
    </div>
  );
};

export default page;
