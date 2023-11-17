import type { Metadata } from 'next';
import { IsOnTelegram } from '@/components';

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
    <div>
      <IsOnTelegram>{children}</IsOnTelegram>
    </div>
  );
}