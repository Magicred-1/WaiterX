import type { Metadata } from 'next';
import './globals.css';
import { Web3Modal, TelegramProvider } from '@/components';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          <Web3Modal>{children}</Web3Modal>
        </TelegramProvider>
      </body>
    </html>
  );
}
