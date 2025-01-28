import CustomTable from '@/utils/CustomTable';
import React from 'react'

function LengthComponent() {

    const headers = ["Length Name", "Length Code", "Order", "Status"];

    const rows = [
        { "Length Name": "68.8", "Length Code": "68.8", "Order": 1, "Status": "Active" },
        { "Length Name": "67.4", "Length Code": "67.4", "Order": 2, "Status": "Active" },
        { "Length Name": "67.5", "Length Code": "67.5", "Order": 3, "Status": "Active" },
        { "Length Name": "68.2", "Length Code": "68.2", "Order": 4, "Status": "Active" },
        { "Length Name": "68.3", "Length Code": "68.3", "Order": 5, "Status": "Active" },
        { "Length Name": "67.6", "Length Code": "67.6", "Order": 6, "Status": "Active" },
        { "Length Name": "100", "Length Code": "100", "Order": 7, "Status": "Active" },
        { "Length Name": "68.1", "Length Code": "68.1", "Order": 8, "Status": "Active" },
        { "Length Name": "68.7", "Length Code": "68.7", "Order": 9, "Status": "Active" },
        { "Length Name": "69", "Length Code": "69", "Order": 10, "Status": "Active" },
        { "Length Name": "100", "Length Code": "100", "Order": 11, "Status": "Active" },
        { "Length Name": "67.8", "Length Code": "67.8", "Order": 12, "Status": "Active" },
        { "Length Name": "67.7", "Length Code": "67.7", "Order": 13, "Status": "Active" },
        { "Length Name": "68.5", "Length Code": "68.5", "Order": 14, "Status": "Active" },
        { "Length Name": "68.6", "Length Code": "68.6", "Order": 15, "Status": "Active" },
        { "Length Name": "67.9", "Length Code": "67.9", "Order": 16, "Status": "Active" },
        { "Length Name": "100", "Length Code": "100", "Order": 17, "Status": "Active" },
        { "Length Name": "69.1", "Length Code": "69.1", "Order": 18, "Status": "Active" },
        { "Length Name": "68", "Length Code": "68", "Order": 19, "Status": "Active" },
        { "Length Name": "68.4", "Length Code": "68.4", "Order": 20, "Status": "Active" },
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
            <CustomTable headers={headers} rows={rows} actions={actions} field='length' />
        </div>
    );
}

export default LengthComponent