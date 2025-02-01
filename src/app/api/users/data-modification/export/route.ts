import { json2csv } from "json-2-csv";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { rows, headers } = body;

        const csv = json2csv(rows, {
            keys: headers,
        });

        const response = new NextResponse(csv, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': 'attachment; filename=export.csv',
            },
        });

        return response;
    } catch (error) {
        console.error('Error exporting CSV:', error);
        return NextResponse.json(
            { message: 'Error exporting CSV' },
            { status: 500 }
        );
    }
}