import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function FluroscenceCompoenent() {
  const headers = ["Fluorescence Name", "Fluorescence Code", "Order", "Status"];

  const rows = [
    { "Fluorescence Name": "S", "Fluorescence Code": "S", "Order": 4, "Status": "Active" },
    { "Fluorescence Name": "M", "Fluorescence Code": "M", "Order": 3, "Status": "Active" },
    { "Fluorescence Name": "F", "Fluorescence Code": "F", "Order": 2, "Status": "Active" },
    { "Fluorescence Name": "N", "Fluorescence Code": "N", "Order": 1, "Status": "Active" },
  ];
  const field = "fluro."

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

export default FluroscenceCompoenent