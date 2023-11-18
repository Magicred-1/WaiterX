import { atom } from 'jotai';

export const depositOrWithdraw = atom<'deposit' | 'withdraw'>('deposit');
