'use server';

import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';
import prisma from './client';
import { ITelegramUser } from './types';

export async function addUser(telegramUser: ITelegramUser) {
  const userExists = await prisma.user.findUnique({
    where: {
      telegramId: telegramUser.id,
    },
  });
  if (userExists) return;

  const privateKey = generatePrivateKey();
  const account = privateKeyToAccount(privateKey);

  const user = await prisma.user.create({
    data: {
      telegramId: telegramUser.id,
      first_name: telegramUser.first_name,
      last_name: telegramUser.last_name,
      username: telegramUser.username,
      language_code: telegramUser.language_code,
      wallet: {
        create: {
          privateKey: String(privateKey),
          publicKey: String(account.publicKey),
        },
      },
    },
  });

  return user;
}

export async function getUserWallet(telegramId: number) {
  const telegramUser = await prisma.user.findUnique({
    where: {
      telegramId,
    },
  });
  const telegramUserWallet = await prisma.wallet.findUnique({
    where: {
      userId: telegramUser?.id,
    },
  });
  return telegramUserWallet;
}
