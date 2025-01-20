import connectMongoDB from "@/dbconfig/db";
import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

connectMongoDB();

export async function GET() {
    try {
        const users = await userModel.find({ role: 'user' });
        return NextResponse.json({
            success: true,
            message: "Users Retrieved Succesfully.",
            users,
        })
    } catch (error) {
        console.error('Error processing request: ', error);
        return { success: false, message: 'Error processing request' };
    }
}

