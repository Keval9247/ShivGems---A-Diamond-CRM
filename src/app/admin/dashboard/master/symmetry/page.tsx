"use client";

import CustomTable from '@/utils/CustomTable';
import React from 'react'

function SymmetryPage() {
    const headers = ["Symmetry Name", "Symmetry Code", "Order", "Status"];

    const rows = [
        { "Symmetry Name": "FR", "Symmetry Code": "FR", "Order": 5, "Status": "Active" },
        { "Symmetry Name": "GD", "Symmetry Code": "GD", "Order": 4, "Status": "Active" },
        { "Symmetry Name": "VG", "Symmetry Code": "VG", "Order": 3, "Status": "Active" },
        { "Symmetry Name": "EX", "Symmetry Code": "EX", "Order": 2, "Status": "Active" },
        { "Symmetry Name": "ID", "Symmetry Code": "ID", "Order": 1, "Status": "Active" },
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
            <h1 className="text-2xl font-bold mb-4">SymmetryPage</h1>
            <CustomTable headers={headers} rows={rows} actions={actions} />
        </div>
    );
}

export default SymmetryPage