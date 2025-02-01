import { NextResponse } from "next/server";
import connectMongoDB from "@/dbconfig/db";
import { tableMappings } from "@/types/rowTypes";


export async function POST(req: Request) {
    try {
        await connectMongoDB();

        const body = await req.json();
        const { tableName, data } = body;

        if (!tableName || data.length === 0) {
            return NextResponse.json({ message: "Invalid request data" }, { status: 400 });
        }

        const Model = tableMappings[tableName.toLowerCase()];
        if (!Model) {
            return NextResponse.json({ message: `Table ${tableName} does not exist in mappings` }, { status: 400 });
        }

        //  Insert data into the MongoDB collection
        const response = await Model.insertMany(data);

        return NextResponse.json({ message: "Data saved successfully" }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        await connectMongoDB();

        const { searchParams } = new URL(req.url);
        const tableName = searchParams.get("tableName");

        if (!tableName) {
            return NextResponse.json({ message: "Missing tableName parameter" }, { status: 400 });
        }

        const Model = tableMappings[tableName.toLowerCase()];
        if (!Model) {
            return NextResponse.json({ message: `Table ${tableName} does not exist in mappings` }, { status: 400 });
        }

        const data = await Model.find();
        return NextResponse.json({ message: "Data retrieved successfully", data }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        await connectMongoDB();

        const { searchParams } = new URL(req.url);
        const tableName = searchParams.get("tableName");
        const id = searchParams.get("itemId");


        if (!tableName || !id) {
            return NextResponse.json({ message: "Missing tableName or _id parameter" }, { status: 400 });
        }

        const Model = tableMappings[tableName.toLowerCase()];
        if (!Model) {
            return NextResponse.json({ message: `Table ${tableName} does not exist in mappings` }, { status: 400 });
        }

        const response = await Model.findByIdAndDelete(id);
        if (!response) {
            return NextResponse.json({ message: "Record not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Record deleted.", response }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        await connectMongoDB();
        const { tableName, _id, updateData } = await req.json();

        if (!tableName || !_id || !updateData) {
            return NextResponse.json({ message: "Missing tableName, _id, or updateData" }, { status: 400 });
        }

        const Model = tableMappings[tableName.toLowerCase()];
        if (!Model) {
            return NextResponse.json({ message: `Table ${tableName} does not exist in mappings` }, { status: 400 });
        }

        const updatedRecord = await Model.findByIdAndUpdate(_id, updateData, { new: true });

        if (!updatedRecord) {
            return NextResponse.json({ message: "Record not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Record updated successfully", updatedRecord }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}