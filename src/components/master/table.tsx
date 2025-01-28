import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function TableComponent() {

    const headers = ["Table Name", "Table Code", "Order", "Status"];

    const rows = [
        { "Table Name": "68.8", "Table Code": "68.8", "Order": 1, "Status": "Active" },
        { "Table Name": "67.4", "Table Code": "67.4", "Order": 2, "Status": "Active" },
        { "Table Name": "67.5", "Table Code": "67.5", "Order": 3, "Status": "Active" },
        { "Table Name": "68.2", "Table Code": "68.2", "Order": 4, "Status": "Active" },
        { "Table Name": "68.3", "Table Code": "68.3", "Order": 5, "Status": "Active" },
        { "Table Name": "67.6", "Table Code": "67.6", "Order": 6, "Status": "Active" },
        { "Table Name": "100", "Table Code": "100", "Order": 7, "Status": "Active" },
        { "Table Name": "68.1", "Table Code": "68.1", "Order": 8, "Status": "Active" },
        { "Table Name": "68.7", "Table Code": "68.7", "Order": 9, "Status": "Active" },
        { "Table Name": "69", "Table Code": "69", "Order": 10, "Status": "Active" },
        { "Table Name": "100", "Table Code": "100", "Order": 11, "Status": "Active" },
        { "Table Name": "67.8", "Table Code": "67.8", "Order": 12, "Status": "Active" },
        { "Table Name": "67.7", "Table Code": "67.7", "Order": 13, "Status": "Active" },
        { "Table Name": "68.5", "Table Code": "68.5", "Order": 14, "Status": "Active" },
        { "Table Name": "68.6", "Table Code": "68.6", "Order": 15, "Status": "Active" },
        { "Table Name": "67.9", "Table Code": "67.9", "Order": 16, "Status": "Active" },
        { "Table Name": "100", "Table Code": "100", "Order": 17, "Status": "Active" },
        { "Table Name": "69.1", "Table Code": "69.1", "Order": 18, "Status": "Active" },
        { "Table Name": "68", "Table Code": "68", "Order": 19, "Status": "Active" },
        { "Table Name": "68.4", "Table Code": "68.4", "Order": 20, "Status": "Active" },
    ];

    const field = "table"

    const actions = (row: any) => (
        <div className="flex justify-center items-center space-x-5">
            <button
                onClick={() => console.log("Edit:", row)}
                className="text-blue-600 hover:text-blue-900"
            >
                <BiEdit className='w-5 h-5' />
            </button>
            <button
                onClick={() => console.log("Delete:", row)}
                className="text-red-600 hover:text-red-900"
            >
                <MdDelete className='w-5 h-5' />
            </button>
        </div>
    );

    return (
        <>
            <div className="w-full">
                <div className='flex justify-end mb-3'>
                    <Modal field={field} />
                </div>

                <CustomTable
                    headers={headers}
                    rows={rows}
                    actions={actions}
                />
            </div>
        </>
    );
}

export default TableComponent