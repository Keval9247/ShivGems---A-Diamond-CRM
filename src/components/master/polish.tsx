import CustomTable from '@/utils/CustomTable';
import React from 'react'

function PolishComponent() {
  const headers = ["Polish Name", "Polish Code", "Order", "Status"];
  const rows: any = []; // Empty data
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
      <CustomTable headers={headers} rows={rows} actions={actions} field='polish' />
    </div>
  )
}

export default PolishComponent