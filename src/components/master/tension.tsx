import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function TensionCompoenent() {

    const headers = ["Tension Name", "Tension Code", "Order", "Status"];

    const rows = [
        { "Tension Name": "5", "Tension Code": "5", "Order": 6, "Status": "Active" },
        { "Tension Name": "4", "Tension Code": "4", "Order": 5, "Status": "Active" },
        { "Tension Name": "2", "Tension Code": "2", "Order": 3, "Status": "Active" },
        { "Tension Name": "1", "Tension Code": "1", "Order": 2, "Status": "Active" },
        { "Tension Name": "0", "Tension Code": "0", "Order": 1, "Status": "Active" },
    ];
    const field = "tension"

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

export default TensionCompoenent