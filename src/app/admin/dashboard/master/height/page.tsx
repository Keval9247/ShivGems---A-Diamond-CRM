"use client";

import CustomTable from '@/utils/CustomTable';
import React from 'react'

function HeightPage() {

    const headers = ["Height Name", "Height Code", "Order", "Status"];

    const rows = [
        { "Height Name": "68.8", "Height Code": "68.8", "Order": 1, "Status": "Active" },
        { "Height Name": "67.4", "Height Code": "67.4", "Order": 2, "Status": "Active" },
        { "Height Name": "67.5", "Height Code": "67.5", "Order": 3, "Status": "Active" },
        { "Height Name": "68.2", "Height Code": "68.2", "Order": 4, "Status": "Active" },
        { "Height Name": "68.3", "Height Code": "68.3", "Order": 5, "Status": "Active" },
        { "Height Name": "67.6", "Height Code": "67.6", "Order": 6, "Status": "Active" },
        { "Height Name": "100", "Height Code": "100", "Order": 7, "Status": "Active" },
        { "Height Name": "68.1", "Height Code": "68.1", "Order": 8, "Status": "Active" },
        { "Height Name": "68.7", "Height Code": "68.7", "Order": 9, "Status": "Active" },
        { "Height Name": "69", "Height Code": "69", "Order": 10, "Status": "Active" },
        { "Height Name": "100", "Height Code": "100", "Order": 11, "Status": "Active" },
        { "Height Name": "67.8", "Height Code": "67.8", "Order": 12, "Status": "Active" },
        { "Height Name": "67.7", "Height Code": "67.7", "Order": 13, "Status": "Active" },
        { "Height Name": "68.5", "Height Code": "68.5", "Order": 14, "Status": "Active" },
        { "Height Name": "68.6", "Height Code": "68.6", "Order": 15, "Status": "Active" },
        { "Height Name": "67.9", "Height Code": "67.9", "Order": 16, "Status": "Active" },
        { "Height Name": "100", "Height Code": "100", "Order": 17, "Status": "Active" },
        { "Height Name": "69.1", "Height Code": "69.1", "Order": 18, "Status": "Active" },
        { "Height Name": "68", "Height Code": "68", "Order": 19, "Status": "Active" },
        { "Height Name": "68.4", "Height Code": "68.4", "Order": 20, "Status": "Active" },
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
            <h1 className="text-2xl font-bold mb-4">Height</h1>
            <CustomTable headers={headers} rows={rows} actions={actions} />
        </div>
    );
}

export default HeightPage