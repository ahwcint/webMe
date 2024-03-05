import { SignJWT, jwtVerify } from 'jose';

const secret_key = process.env.AUTH_SECRET_KEY;
const algorithms_key = process.env.ALGORITHMS_SECRET;
const key = new TextEncoder().encode(secret_key);

export async function encrypt(payload: any) {
  if (!algorithms_key) throw new Error('jwt-algorithms missing');
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: algorithms_key })
    .setIssuedAt()
    .sign(key);
}

export async function decrypt(input: string) {
  if (!algorithms_key) throw new Error('jwt-algorithms missing');
  const { payload } = await jwtVerify(input, key, {
    algorithms: [algorithms_key],
  });
  return payload;
}
