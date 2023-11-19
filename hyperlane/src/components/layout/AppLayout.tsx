import { PropsWithChildren } from 'react';
import { WalletControlBar } from '../../features/wallet/WalletControlBar';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className='bg-black' style={{ width: '100%', height: '100%' }}>
        <WalletControlBar />
        <div className="sm:px-4 mx-auto grow flex items-center max-w-screen-xl">
          <main className="w-full flex-1 flex items-center justify-center">{children}</main>
        </div>
    </div>
  );
}
