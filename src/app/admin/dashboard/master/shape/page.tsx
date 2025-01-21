"use client";
import CustomTable from "@/utils/CustomTable";
import React from "react";

const DiamondShapesPage = () => {
    const headers = ["Shape Name", "Short Code", "Advisory Shape", "Shape Group", "Order", "Status"];

    const rows = [
        {
            "Shape Name": "TRILLION",
            "Short Code": "TR",
            "Advisory Shape": "TRILLION",
            "Shape Group": "FANCY",
            "Order": 18,
            "Status": "Active",
        },
        {
            "Shape Name": "HEXA",
            "Short Code": "15",
            "Advisory Shape": "HEXA",
            "Shape Group": "FANCY",
            "Order": 35,
            "Status": "Active",
        },
        {
            "Shape Name": "TRILLION",
            "Short Code": "TR",
            "Advisory Shape": "TRILLION",
            "Shape Group": "FANCY",
            "Order": 18,
            "Status": "Active",
        },
        {
            "Shape Name": "HEXA",
            "Short Code": "15",
            "Advisory Shape": "HEXA",
            "Shape Group": "FANCY",
            "Order": 35,
            "Status": "Active",
        },
        {
            "Shape Name": "TRILLION",
            "Short Code": "TR",
            "Advisory Shape": "TRILLION",
            "Shape Group": "FANCY",
            "Order": 18,
            "Status": "Active",
        },
        {
            "Shape Name": "HEXA",
            "Short Code": "15",
            "Advisory Shape": "HEXA",
            "Shape Group": "FANCY",
            "Order": 35,
            "Status": "Active",
        },
        // Add more rows as needed
    ];

    const actions = (row: any) => (
        <button
            onClick={() => console.log("Edit:", row)}
            className="text-blue-600 hover:text-blue-900"
        >
            Edit
        </button>
    );

    return (
        <div className="p-4 w-full">
            <h1 className="text-2xl font-bold mb-4">Diamond Shapes</h1>
            <CustomTable headers={headers} rows={rows} actions={actions} />
        </div>
    );
};

export default DiamondShapesPage;