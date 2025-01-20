import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export const runtime = 'nodejs';

export const getTokenData = async (req: NextRequest) => {
    // Get the token from the cookies
    const token = req.cookies.get("token")?.value;
    if (!token) {
        console.error("Token is missing");
        return null;
    }

    try {
        const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (error) {
        console.error("Error verifying token: ", error);
        return null;
    }
};
