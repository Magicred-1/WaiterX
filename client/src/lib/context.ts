import { User } from '@prisma/client';
import { atom } from 'jotai';

export const depositOrWithdraw = atom<'deposit' | 'withdraw'>('deposit');
export const generatedUserWallet = atom<User | null>(null);
