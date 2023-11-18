import type { Metadata } from 'next';
import './globals.css';
import { Web3ModalProvider, TelegramProvider } from '@/components';

export const metadata: Metadata = {
  title: 'WaiterX - App',
  description: 'Making WEB3 accesible for Humankind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <TelegramProvider>
          <Web3ModalProvider>{children}</Web3ModalProvider>
        </TelegramProvider>
      </body>
    </html>
  );
}
