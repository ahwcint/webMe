'use server';

import { cookies } from 'next/headers';
import { decrypt, encrypt } from '@/libs/jwt';
import {
  TSignInFormSchema,
  TSignUpFormSchema,
} from '@/components/pages/access-hub/AccessHub.type';

export async function signInAuth(formData: TSignInFormSchema) {
  const user = {
    username: formData.username,
  };
  const session = await encrypt({ user });
  cookies().set('session', session, { httpOnly: true });
}

export async function signUpAuth(formData: TSignUpFormSchema) {
  //re-check and try to registering if the username doesn't exist on db

  //after create new account then set cookies for session
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
