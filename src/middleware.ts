'use server';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './app/api/auth/auth';

export async function middleware(request: NextRequest) {
  const session = await getSession();
  if (!session)
    return NextResponse.redirect(new URL('/access-hub', request.url));
}

export const config = {
  matcher: '/((?!access-hub|_next/static|_next/image|favicon.ico).*)',
};
