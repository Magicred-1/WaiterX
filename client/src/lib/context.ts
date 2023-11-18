import { User, Wallet } from '@prisma/client';
import { atom } from 'jotai';

export const depositOrWithdraw = atom<'deposit' | 'withdraw'>('deposit');
export const generatedUserWallet = atom<Wallet | null>(null);
