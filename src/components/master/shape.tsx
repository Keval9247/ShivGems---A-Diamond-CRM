import CustomTable from '@/utils/CustomTable';
import React from 'react'

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
      <CustomTable headers={headers} rows={rows} actions={actions} field='shape' />
    </div>
  );
}

export default ShapeComponent