"use client";

import CustomTable from '@/utils/CustomTable';
import React from 'react'

function FluoroscencePage() {
    const headers = ["Fluorescence Name", "Fluorescence Code", "Order", "Status"];

    const rows = [
        { "Fluorescence Name": "S", "Fluorescence Code": "S", "Order": 4, "Status": "Active" },
        { "Fluorescence Name": "M", "Fluorescence Code": "M", "Order": 3, "Status": "Active" },
        { "Fluorescence Name": "F", "Fluorescence Code": "F", "Order": 2, "Status": "Active" },
        { "Fluorescence Name": "N", "Fluorescence Code": "N", "Order": 1, "Status": "Active" },
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
            <h1 className="text-2xl font-bold mb-4">FluoroscencePage</h1>
            <CustomTable headers={headers} rows={rows} actions={actions} />
        </div>
    )
}

export default FluoroscencePage