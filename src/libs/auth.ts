'use server';

import { cookies } from 'next/headers';
import { decrypt, encrypt } from '@/libs/jwt';

export type TSignInFormSchema = {
  username: string;
  password: string;
};

export type TSignUpFormSchema = {
  username: string;
  password: string;
  confirmPassword: string;
};

export async function signInAuth(formData: TSignInFormSchema) {
  const user = {
    username: formData.username,
  };
  const session = await encrypt({ user });
  cookies().set('session', session, { httpOnly: true });
}

export async function signUpAuth(formData: TSignUpFormSchema) {
  //re-check and try to registering if the username doesn't exist on db

  //after create new account then set cookies
  const user = {
    username: formData.username,
  };
  const session = await encrypt({ user });
  cookies().set('session', session, { httpOnly: true });
}

export async function signOutAuth() {
  cookies().delete('session');
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
}
