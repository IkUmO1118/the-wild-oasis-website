/*
import { NextResponse } from 'next/server';

export function middleware(req) {
  console.log(req);

  return NextResponse.redirect(new URL('/about', req.url));
}*/

import { auth } from '@/app/_lib/auth';
// change name to middleware
export const middleware = auth;

// 以下のコードは/accountのrouteに来た時に、middlewareを実行する
export const config = {
  matcher: ['/account'],
};
