import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

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

    const field = "cut"

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

export default CutCompoenent