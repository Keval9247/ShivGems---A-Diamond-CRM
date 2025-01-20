import connectMongoDB from "@/dbconfig/db";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import { SignJWT } from "jose";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
        return NextResponse.json({
            success: false,
            message: 'Email and password are required',
        });
    }

    try {
        await connectMongoDB();
        const user = await userModel.findOne({ email });

        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found. Please contact your admin.' });
        }

        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }

        const tokenData = {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
            role: user.role,
        };

        // Sign the JWT using `jose`
        const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
        const token = await new SignJWT(tokenData)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('1d')
            .sign(secret);

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            role: user.role,
        });

        // Set the token in an HTTP-only cookie
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
        });

        return response;
    } catch (err) {
        console.error('Error processing request: ', err);
        return NextResponse.json({
            success: false,
            message: 'Error processing request',
        });
    }
}
