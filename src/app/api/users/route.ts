import connectMongoDB from "@/dbconfig/db";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectMongoDB();

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get("role");

    try {
        if (!role) {
            return NextResponse.json({
                success: false,
                message: "Role is required.",
            });
        }

        const users = await userModel.find({ role }).select('-password');
        return NextResponse.json({
            success: true,
            message: `${role.charAt(0).toUpperCase() + role.slice(1)}s Retrieved Successfully.`,
            users,
        });
    } catch (error) {
        console.error("Error processing request: ", error);
        return NextResponse.json({
            success: false,
            message: "Error processing request.",
        });
    }
}
