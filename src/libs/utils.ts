import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function waitMe(second: number) {
  await new Promise((resolve) => setTimeout(resolve, second * 1000));
}

export const axiosHeaders = {
  headers: { Authorization: 'Bearer ' + process.env.AUTH_SECRET_KEY },
};
