import CustomTable from '@/utils/CustomTable';
import React from 'react'

function PurityComponent() {

  const headers = ["Purity Name", "Purity Code", "Order", "Status"];

  const rows = [
    { "Purity Name": "SIG", "Purity Code": "SIG", "Order": 9, "Status": "Active" },
    { "Purity Name": "14", "Purity Code": "14", "Order": 13, "Status": "Active" },
    { "Purity Name": "15", "Purity Code": "15", "Order": 14, "Status": "Active" },
    { "Purity Name": "16", "Purity Code": "16", "Order": 15, "Status": "Active" },
    { "Purity Name": "13", "Purity Code": "13", "Order": 12, "Status": "Active" },
    { "Purity Name": "12", "Purity Code": "12", "Order": 11, "Status": "Active" },
    { "Purity Name": "11", "Purity Code": "11", "Order": 10, "Status": "Active" },
    { "Purity Name": "SIZ", "Purity Code": "SIZ", "Order": 8, "Status": "Active" },
    { "Purity Name": "SIT", "Purity Code": "SIT", "Order": 7, "Status": "Active" },
    { "Purity Name": "VSZ", "Purity Code": "VSZ", "Order": 6, "Status": "Active" },
    { "Purity Name": "VST", "Purity Code": "VST", "Order": 5, "Status": "Active" },
    { "Purity Name": "VVSZ", "Purity Code": "VVSZ", "Order": 4, "Status": "Active" },
    { "Purity Name": "VVST", "Purity Code": "VVST", "Order": 2, "Status": "Active" },
    { "Purity Name": "FF", "Purity Code": "FF", "Order": 1, "Status": "Active" },
    { "Purity Name": "FL", "Purity Code": "FL", "Order": 0, "Status": "Active" },
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
      <CustomTable headers={headers} rows={rows} actions={actions} field='purity' />
    </div>
  );
}

export default PurityComponent