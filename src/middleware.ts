'use server';

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getSession } from './libs/auth';

export async function middleware(request: NextRequest) {
  const session = await getSession();
  if (request.nextUrl.pathname.startsWith('/api')) {
    return VerifyBearerToken(request.headers);
  }
  if (!session)
    return NextResponse.redirect(new URL('/access-hub', request.url));
}

export const config = {
  matcher: '/((?!access-hub|_next/static|_next/image|favicon.ico).*)',
};

function VerifyBearerToken(headers: Headers) {
  const authorizationHeaders: string | null = headers.get('authorization');
  const secret_key = process.env.AUTH_SECRET_KEY;
  if (!authorizationHeaders?.startsWith('Bearer'))
    return NextResponse.json(
      { message: 'Unauthorized - Bearer token missing or invalid' },
      { status: 401 },
    );
  if (authorizationHeaders?.startsWith('Bearer')) {
    const Bearear_Token = authorizationHeaders.slice(7);
    if (secret_key !== Bearear_Token)
      return NextResponse.json(
        {
          message: 'Unauthorized - Bearer token missing or invalid',
        },
        { status: 401 },
      );
  }
  return NextResponse.next();
}
