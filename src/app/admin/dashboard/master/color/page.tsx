"use client";

import CustomTable from "@/utils/CustomTable";
import React from "react";

const ColorsPage = () => {
    const headers = ["Color Name", "Color Code", "Order", "Status"];

    const rows = [
        { "Color Name": "N", "Color Code": "N", "Order": 11, "Status": "Active" },
        { "Color Name": "M", "Color Code": "M", "Order": 10, "Status": "Active" },
        { "Color Name": "L", "Color Code": "L", "Order": 9, "Status": "Active" },
        { "Color Name": "K", "Color Code": "K", "Order": 8, "Status": "Active" },
        { "Color Name": "J", "Color Code": "J", "Order": 7, "Status": "Active" },
        { "Color Name": "I", "Color Code": "I", "Order": 6, "Status": "Active" },
        { "Color Name": "H", "Color Code": "H", "Order": 5, "Status": "Active" },
        { "Color Name": "F", "Color Code": "F", "Order": 3, "Status": "Active" },
        { "Color Name": "G", "Color Code": "G", "Order": 4, "Status": "Active" },
        { "Color Name": "E", "Color Code": "E", "Order": 2, "Status": "Active" },
        { "Color Name": "D", "Color Code": "D", "Order": 1, "Status": "Active" },
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
            <h1 className="text-2xl font-bold mb-4">Diamond Color</h1>
            <CustomTable headers={headers} rows={rows} actions={actions} />
        </div>
    );
};

export default ColorsPage;