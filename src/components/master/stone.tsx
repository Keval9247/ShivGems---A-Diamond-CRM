import CustomTable from '@/utils/CustomTable';
import React from 'react'

function StoneCompoenent() {
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
        <div className="w-full">
            <CustomTable headers={headers} rows={rows} actions={actions} field='stone' />
        </div>
    )
}

export default StoneCompoenent