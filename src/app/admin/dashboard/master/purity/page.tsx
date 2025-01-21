"use client";

import CustomTable from '@/utils/CustomTable';
import React from 'react'

function PurityPage() {

    const headers = ["Putty Name", "Putty Code", "Order", "Status"];

    const rows = [
        { "Putty Name": "SIG", "Putty Code": "SIG", "Order": 9, "Status": "Active" },
        { "Putty Name": "14", "Putty Code": "14", "Order": 13, "Status": "Active" },
        { "Putty Name": "15", "Putty Code": "15", "Order": 14, "Status": "Active" },
        { "Putty Name": "16", "Putty Code": "16", "Order": 15, "Status": "Active" },
        { "Putty Name": "13", "Putty Code": "13", "Order": 12, "Status": "Active" },
        { "Putty Name": "12", "Putty Code": "12", "Order": 11, "Status": "Active" },
        { "Putty Name": "11", "Putty Code": "11", "Order": 10, "Status": "Active" },
        { "Putty Name": "SIZ", "Putty Code": "SIZ", "Order": 8, "Status": "Active" },
        { "Putty Name": "SIT", "Putty Code": "SIT", "Order": 7, "Status": "Active" },
        { "Putty Name": "VSZ", "Putty Code": "VSZ", "Order": 6, "Status": "Active" },
        { "Putty Name": "VST", "Putty Code": "VST", "Order": 5, "Status": "Active" },
        { "Putty Name": "VVSZ", "Putty Code": "VVSZ", "Order": 4, "Status": "Active" },
        { "Putty Name": "VVST", "Putty Code": "VVST", "Order": 2, "Status": "Active" },
        { "Putty Name": "FF", "Putty Code": "FF", "Order": 1, "Status": "Active" },
        { "Putty Name": "FL", "Putty Code": "FL", "Order": 0, "Status": "Active" },
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
            <h1 className="text-2xl font-bold mb-4">Diamond Purity</h1>
            <CustomTable headers={headers} rows={rows} actions={actions} />
        </div>
    );
}

export default PurityPage