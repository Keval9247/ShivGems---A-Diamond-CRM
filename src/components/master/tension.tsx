import CustomTable from '@/utils/CustomTable';
import React from 'react'

function TensionCompoenent() {

    const headers = ["Tension Name", "Tension Code", "Order", "Status"];

    const rows = [
        { "Tension Name": "5", "Tension Code": "5", "Order": 6, "Status": "Active" },
        { "Tension Name": "4", "Tension Code": "4", "Order": 5, "Status": "Active" },
        { "Tension Name": "2", "Tension Code": "2", "Order": 3, "Status": "Active" },
        { "Tension Name": "1", "Tension Code": "1", "Order": 2, "Status": "Active" },
        { "Tension Name": "0", "Tension Code": "0", "Order": 1, "Status": "Active" },
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
            <CustomTable headers={headers} rows={rows} actions={actions} field='table' />
        </div>
    )
}

export default TensionCompoenent