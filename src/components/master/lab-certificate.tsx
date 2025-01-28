import CustomTable from '@/utils/CustomTable';
import React from 'react'

function LabcertificateComponent() {
    const headers = ["Lab Cert Name", "Lab Cert Code", "Order", "Status"];

    const rows = [
        { "Lab Cert Name": "GKL", "Lab Cert Code": "3 GKL", "Order": 3, "Status": "Active" },
        { "Lab Cert Name": "GIA", "Lab Cert Code": "2 GIA", "Order": 2, "Status": "Active" },
        { "Lab Cert Name": "IGI", "Lab Cert Code": "1 IGI", "Order": 1, "Status": "Active" },
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
            <CustomTable headers={headers} rows={rows} actions={actions} field='lab-certi.' />

        </div>
    );
}

export default LabcertificateComponent