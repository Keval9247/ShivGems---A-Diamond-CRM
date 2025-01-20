import { NextRequest, NextResponse } from "next/server";
import { getTokenData } from "./helper/getTokenData";

export async function middleware(request: NextRequest) {
    const tokenData = await getTokenData(request);
    if (!tokenData) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    const { role } = await tokenData;
    const path = request.nextUrl.pathname;

    if (role === 'admin' && !path.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    if (role === 'user' && !path.startsWith('/user')) {
        return NextResponse.redirect(new URL('/user/dashboard', request.url));
    }

    return NextResponse.next();
}


export const config = {
    matcher: [
        "/admin/dashboard/:path*", "/user/dashboard/:path*"
    ],
};