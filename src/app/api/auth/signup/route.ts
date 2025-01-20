import connectMongoDB from "@/dbconfig/db";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from 'bcryptjs';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, username, password } = body;
    if (!email || !username || !password) {
        return new Response(JSON.stringify({ success: false, message: 'All fields are required' }), { status: 400 })
    }
    try {
        await connectMongoDB();

        const user = await userModel.findOne({ email });
        if (user) {
            return new Response(JSON.stringify({ success: false, message: 'Email already exists' }), { status: 400 })
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new userModel({ email, username, password: hashedPassword });

        await newUser.save();

        return NextResponse.json({
            success: true,
            message: 'User created successfully',
            user: newUser,
        })

    } catch (error) {
        console.error('Error processing request: ', error);
        return NextResponse.json({
            success: false,
            message: 'Error processing request',
        })
    }
}