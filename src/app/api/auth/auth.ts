'use server';

import { cookies } from 'next/headers';
import { decrypt, signIn, signOut } from '@/lib/auth';
import { waitMe } from '@/lib/utils';

export type TLoginFormSchema = {
  username: string;
  password: string;
};

export async function signInAuth(formData: TLoginFormSchema) {
  await signIn(formData);
}

export async function signOutAuth() {
  await signOut();
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
}
