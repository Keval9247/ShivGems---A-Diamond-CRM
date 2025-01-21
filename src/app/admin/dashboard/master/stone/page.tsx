"use client"


import CustomTable from '@/utils/CustomTable';
import React from 'react'

function StonePage() {

    const headers = ["Stone Name", "Stone Code", "Order", "Status"];

    const rows = [
        { "Stone Name": "HPHT", "Stone Code": "HPHT", "Order": 3, "Status": "Active" },
        { "Stone Name": "Cvd", "Stone Code": "Cvd", "Order": 2, "Status": "Active" },
        { "Stone Name": "N", "Stone Code": "Natural", "Order": 1, "Status": "Active" },
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
            <h1 className="text-2xl font-bold mb-4">Stone</h1>
            <CustomTable headers={headers} rows={rows} actions={actions} />
        </div>
    )
}

export default StonePage