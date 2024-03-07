import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PrismaClient } from '@prisma/client';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function waitMe(second: number) {
  await new Promise((resolve) => setTimeout(resolve, second * 1000));
}

export const axiosHeaders = {
  headers: { Authorization: 'Bearer ' + process.env.AUTH_SECRET_KEY },
};

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
