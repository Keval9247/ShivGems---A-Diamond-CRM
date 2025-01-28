import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function SymmetryComponent() {
  const headers = ["Symmetry Name", "Symmetry Code", "Order", "Status"];

  const rows = [
    { "Symmetry Name": "FR", "Symmetry Code": "FR", "Order": 5, "Status": "Active" },
    { "Symmetry Name": "GD", "Symmetry Code": "GD", "Order": 4, "Status": "Active" },
    { "Symmetry Name": "VG", "Symmetry Code": "VG", "Order": 3, "Status": "Active" },
    { "Symmetry Name": "EX", "Symmetry Code": "EX", "Order": 2, "Status": "Active" },
    { "Symmetry Name": "ID", "Symmetry Code": "ID", "Order": 1, "Status": "Active" },
  ];
  const field = "symmetry"

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

export default SymmetryComponent