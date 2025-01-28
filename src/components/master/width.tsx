import CustomTable from '@/utils/CustomTable';
import React from 'react'

function WidthComponent() {
    const headers = ["Width Name", "Width Code", "Order", "Status"];

    const rows = [
        { "Width Name": "68.8", "Width Code": "68.8", "Order": 1, "Status": "Active" },
        { "Width Name": "67.4", "Width Code": "67.4", "Order": 2, "Status": "Active" },
        { "Width Name": "67.5", "Width Code": "67.5", "Order": 3, "Status": "Active" },
        { "Width Name": "68.2", "Width Code": "68.2", "Order": 4, "Status": "Active" },
        { "Width Name": "68.3", "Width Code": "68.3", "Order": 5, "Status": "Active" },
        { "Width Name": "67.6", "Width Code": "67.6", "Order": 6, "Status": "Active" },
        { "Width Name": "100", "Width Code": "100", "Order": 7, "Status": "Active" },
        { "Width Name": "68.1", "Width Code": "68.1", "Order": 8, "Status": "Active" },
        { "Width Name": "68.7", "Width Code": "68.7", "Order": 9, "Status": "Active" },
        { "Width Name": "69", "Width Code": "69", "Order": 10, "Status": "Active" },
        { "Width Name": "100", "Width Code": "100", "Order": 11, "Status": "Active" },
        { "Width Name": "67.8", "Width Code": "67.8", "Order": 12, "Status": "Active" },
        { "Width Name": "67.7", "Width Code": "67.7", "Order": 13, "Status": "Active" },
        { "Width Name": "68.5", "Width Code": "68.5", "Order": 14, "Status": "Active" },
        { "Width Name": "68.6", "Width Code": "68.6", "Order": 15, "Status": "Active" },
        { "Width Name": "67.9", "Width Code": "67.9", "Order": 16, "Status": "Active" },
        { "Width Name": "100", "Width Code": "100", "Order": 17, "Status": "Active" },
        { "Width Name": "69.1", "Width Code": "69.1", "Order": 18, "Status": "Active" },
        { "Width Name": "68", "Width Code": "68", "Order": 19, "Status": "Active" },
        { "Width Name": "68.4", "Width Code": "68.4", "Order": 20, "Status": "Active" },
    ];

    const actions = (row: any) => (
        <button
            onClick={() => console.log("Edit:", row)}
            className="text-blue-600 hover:text-blue-900"
        >
            Edit
        </button>
    );

    const field = "width"

    return (
        <div className="w-full">
            <CustomTable headers={headers} rows={rows} actions={actions} field={field} />
        </div>
    );
}

export default WidthComponent