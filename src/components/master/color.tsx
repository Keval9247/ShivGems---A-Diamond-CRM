import connectMongoDB from '@/dbconfig/db';
import ColorModal from '@/models/master/ColorModal';
import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { FaDeleteLeft } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';

function ColorComponent() {
    const headers = ["Color Name", "Color Code", "Order", "Status"];

    const rows = [
        { "Color Name": "N", "Color Code": "N", "Order": 11, "Status": "Active" },
        { "Color Name": "M", "Color Code": "M", "Order": 10, "Status": "Active" },
        { "Color Name": "L", "Color Code": "L", "Order": 9, "Status": "Active" },
        { "Color Name": "K", "Color Code": "K", "Order": 8, "Status": "Active" },
        { "Color Name": "J", "Color Code": "J", "Order": 7, "Status": "Active" },
        { "Color Name": "I", "Color Code": "I", "Order": 6, "Status": "Active" },
        { "Color Name": "H", "Color Code": "H", "Order": 5, "Status": "Active" },
        { "Color Name": "F", "Color Code": "F", "Order": 3, "Status": "Active" },
        { "Color Name": "G", "Color Code": "G", "Order": 4, "Status": "Active" },
        { "Color Name": "E", "Color Code": "E", "Order": 2, "Status": "Active" },
        { "Color Name": "D", "Color Code": "D", "Order": 1, "Status": "Active" },
    ];

    // const rows = [
    //     { name: "N", code: "N", order: 11, status: "Active" },
    //     { name: "M", code: "M", order: 10, status: "Active" },
    //     { name: "L", code: "L", order: 9, status: "Active" },
    //     { name: "K", code: "K", order: 8, status: "Active" },
    //     { name: "J", code: "J", order: 7, status: "Active" },
    //     { name: "I", code: "I", order: 6, status: "Active" },
    //     { name: "H", code: "H", order: 5, status: "Active" },
    //     { name: "F", code: "F", order: 3, status: "Active" },
    //     { name: "G", code: "G", order: 4, status: "Active" },
    //     { name: "E", code: "E", order: 2, status: "Active" },
    //     { name: "D", code: "D", order: 1, status: "Active" },
    // ];
    const field = "color"

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

export default ColorComponent