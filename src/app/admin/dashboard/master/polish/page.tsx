"use client";

import CustomTable from '@/utils/CustomTable';
import React from 'react'

function PolishPage() {
    const headers = ["Polish Name", "Polish Code", "Order", "Status"];
    const rows: any = []; // Empty data
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
            <h1 className="text-2xl font-bold mb-4">Diamond Polish</h1>
            <CustomTable headers={headers} rows={rows} actions={actions} />
        </div>
    )
}

export default PolishPage