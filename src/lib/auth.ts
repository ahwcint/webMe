import { JWTPayload, SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { TLoginFormSchema } from '@/app/api/auth/auth';

const secret_key = process.env.AUTH_SECRET_KEY;
const key = new TextEncoder().encode(secret_key);

export async function signIn(formData: TLoginFormSchema) {
  const user = {
    username: formData.username,
  };

  const session = await encrypt({ user });

  cookies().set('session', session, { httpOnly: true });
}

export async function signOut() {
  cookies().delete('session');
}

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .sign(key);
}

export async function decrypt(input: string) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}
