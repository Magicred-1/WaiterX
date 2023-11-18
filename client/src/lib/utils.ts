import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shortenAddress = (address: string | undefined) =>
  `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`;
