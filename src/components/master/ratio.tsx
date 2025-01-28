import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function RatioComponent() {

  const headers = ["Ratio Name", "Ratio Code", "Order", "Status"];

  const rows = [
    { "Ratio Name": "1", "Ratio Code": "1", "Order": 1, "Status": "Active" },
    { "Ratio Name": "225", "Ratio Code": "MQ", "Order": 18, "Status": "Active" },
    { "Ratio Name": "210", "Ratio Code": "MQ", "Order": 17, "Status": "Active" },
    { "Ratio Name": "195", "Ratio Code": "MQ", "Order": 16, "Status": "Active" },
    { "Ratio Name": "180", "Ratio Code": "PNJMQ", "Order": 15, "Status": "Active" },
    { "Ratio Name": "170", "Ratio Code": "PNJMQ", "Order": 14, "Status": "Active" },
    { "Ratio Name": "160", "Ratio Code": "OVPNEM/RAO", "Order": 13, "Status": "Active" },
    { "Ratio Name": "155", "Ratio Code": "OVCUGBEM/RAOPN", "Order": 12, "Status": "Active" },
    { "Ratio Name": "150", "Ratio Code": "CUGBOVRAOEMPN,", "Order": 11, "Status": "Active" },
    { "Ratio Name": "140", "Ratio Code": "CUGBRAOEMOV", "Order": 10, "Status": "Active" },
    { "Ratio Name": "118", "Ratio Code": "CUGBRAOEM", "Order": 9, "Status": "Active" },
    { "Ratio Name": "104", "Ratio Code": "PSHSCB,CURAD,SGEM", "Order": 8, "Status": "Active" },
    { "Ratio Name": "100", "Ratio Code": "PSHSBR,CBCURAD,SGEM", "Order": 7, "Status": "Active" },
    { "Ratio Name": "99", "Ratio Code": "HS", "Order": 6, "Status": "Active" },
    { "Ratio Name": "93", "Ratio Code": "HS", "Order": 5, "Status": "Active" },
    { "Ratio Name": "90", "Ratio Code": "HS", "Order": 4, "Status": "Active" },
    { "Ratio Name": "87", "Ratio Code": "HS", "Order": 3, "Status": "Active" },
    { "Ratio Name": "85", "Ratio Code": "HS", "Order": 2, "Status": "Active" },
    { "Ratio Name": "81", "Ratio Code": "HS", "Order": 1, "Status": "Active" },
  ];

  const field = "ratio"

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

export default RatioComponent