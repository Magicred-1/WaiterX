import { User, Wallet } from '@prisma/client';
import { atom } from 'jotai';
import { getDefaultStore } from 'jotai';

export const store = getDefaultStore();

export const depositOrWithdraw = atom<'deposit' | 'withdraw'>('deposit');
export const generatedUserWallet = atom<Wallet | null>(null);
