import CustomTable from '@/utils/CustomTable';
import React from 'react'

function CutCompoenent() {
    const headers = ["Cut Name", "Cut Code", "Order", "Status"];

    const rows = [
        { "Cut Name": "K HA", "Cut Code": "K HA", "Order": 9, "Status": "Active" },
        { "Cut Name": "8X", "Cut Code": "8X", "Order": 8, "Status": "Active" },
        { "Cut Name": "HA", "Cut Code": "HA", "Order": 7, "Status": "Active" },
        { "Cut Name": "LG", "Cut Code": "LG", "Order": 6, "Status": "Active" },
        { "Cut Name": "FR", "Cut Code": "FR", "Order": 5, "Status": "Active" },
        { "Cut Name": "GD", "Cut Code": "GD", "Order": 4, "Status": "Active" },
        { "Cut Name": "VG", "Cut Code": "VG", "Order": 3, "Status": "Active" },
        { "Cut Name": "EX", "Cut Code": "EX", "Order": 2, "Status": "Active" },
        { "Cut Name": "ID", "Cut Code": "ID", "Order": 1, "Status": "Active" },
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
        <div className="w-full">
            <CustomTable headers={headers} rows={rows} actions={actions} field='cut' />
        </div>
    );
}

export default CutCompoenent