import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function ShapeComponent() {
  const headers = ["Shape Name", "Short Code", "Advisory Shape", "Shape Group", "Order", "Status"];

  const rows = [
    {
      "Shape Name": "TRILLION",
      "Short Code": "TR",
      "Advisory Shape": "TRILLION",
      "Shape Group": "FANCY",
      "Order": 18,
      "Status": "Active",
    },
    {
      "Shape Name": "HEXA",
      "Short Code": "15",
      "Advisory Shape": "HEXA",
      "Shape Group": "FANCY",
      "Order": 35,
      "Status": "Active",
    },
    {
      "Shape Name": "TRILLION",
      "Short Code": "TR",
      "Advisory Shape": "TRILLION",
      "Shape Group": "FANCY",
      "Order": 18,
      "Status": "Active",
    },
    {
      "Shape Name": "HEXA",
      "Short Code": "15",
      "Advisory Shape": "HEXA",
      "Shape Group": "FANCY",
      "Order": 35,
      "Status": "Active",
    },
    {
      "Shape Name": "TRILLION",
      "Short Code": "TR",
      "Advisory Shape": "TRILLION",
      "Shape Group": "FANCY",
      "Order": 18,
      "Status": "Active",
    },
    {
      "Shape Name": "HEXA",
      "Short Code": "15",
      "Advisory Shape": "HEXA",
      "Shape Group": "FANCY",
      "Order": 35,
      "Status": "Active",
    },
    // Add more rows as needed
  ];

  const field = "shape"

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

export default ShapeComponent