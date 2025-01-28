import CustomTable from '@/utils/CustomTable';
import Loading from '@/utils/Loading';
import React, { useEffect, useState } from 'react'

function CharniComponent() {
    const [isLoading, setIsLoading] = useState(true);
    const headers = ["Charni Name", "Charni Code", "From (Ct)", "To (Ct)", "Order", "Status"];

    const rows = [
        { "Charni Name": "0.90-0.97", "Charni Code": "0.9-0.97", "From (Ct)": "0.9000", "To (Ct)": "0.9799", "Order": 10, "Status": "Active" },
        { "Charni Name": "5 Ct UP", "Charni Code": "5 Ct UP", "From (Ct)": "5.0000", "To (Ct)": "100.0000", "Order": 18, "Status": "Active" },
        { "Charni Name": "4.00-4.99", "Charni Code": "4.00-4.99", "From (Ct)": "4.0000", "To (Ct)": "4.9999", "Order": 17, "Status": "Active" },
        { "Charni Name": "3.00-3.99", "Charni Code": "3.00-3.99", "From (Ct)": "3.0000", "To (Ct)": "3.9999", "Order": 16, "Status": "Active" },
        { "Charni Name": "2.50-2.99", "Charni Code": "2.50-2.99", "From (Ct)": "2.5000", "To (Ct)": "2.9999", "Order": 15, "Status": "Active" },
        { "Charni Name": "2.00-2.49", "Charni Code": "2.00-2.49", "From (Ct)": "2.0000", "To (Ct)": "2.4999", "Order": 14, "Status": "Active" },
        { "Charni Name": "1.50-1.99", "Charni Code": "1.50-1.99", "From (Ct)": "1.5000", "To (Ct)": "1.9999", "Order": 13, "Status": "Active" },
        { "Charni Name": "1.20-1.49", "Charni Code": "1.20-1.49", "From (Ct)": "1.2000", "To (Ct)": "1.4999", "Order": 12, "Status": "Active" },
        { "Charni Name": "0.98-1.19", "Charni Code": "0.98-1.19", "From (Ct)": "0.9800", "To (Ct)": "1.1999", "Order": 11, "Status": "Active" },
        { "Charni Name": "0.01-0.07", "Charni Code": "0.01-0.07", "From (Ct)": "0.0100", "To (Ct)": "0.0799", "Order": 1, "Status": "Active" },
        { "Charni Name": "0.70-0.89", "Charni Code": "0.70-0.89", "From (Ct)": "0.7000", "To (Ct)": "0.8999", "Order": 9, "Status": "Active" },
        { "Charni Name": "0.60-0.69", "Charni Code": "0.60-0.69", "From (Ct)": "0.6000", "To (Ct)": "0.6999", "Order": 8, "Status": "Active" },
        { "Charni Name": "0.50-0.59", "Charni Code": "0.50-0.59", "From (Ct)": "0.5000", "To (Ct)": "0.5999", "Order": 7, "Status": "Active" },
        { "Charni Name": "0.30-0.49", "Charni Code": "0.30-0.49", "From (Ct)": "0.3000", "To (Ct)": "0.4999", "Order": 6, "Status": "Active" },
        { "Charni Name": "0.23-0.29", "Charni Code": "0.23-0.29", "From (Ct)": "0.2300", "To (Ct)": "0.2999", "Order": 5, "Status": "Active" },
        { "Charni Name": "0.18-0.22", "Charni Code": "0.18-0.22", "From (Ct)": "0.1800", "To (Ct)": "0.2299", "Order": 4, "Status": "Active" },
        { "Charni Name": "0.14-0.17", "Charni Code": "0.14-0.17", "From (Ct)": "0.1400", "To (Ct)": "0.1799", "Order": 3, "Status": "Active" },
        { "Charni Name": "0.08-0.13", "Charni Code": "0.08-0.13", "From (Ct)": "0.0800", "To (Ct)": "0.1399", "Order": 2, "Status": "Active" },
    ];

    const actions = (row: any) => (
        <button
            onClick={() => console.log("Edit:", row)}
            className="text-blue-600 hover:text-blue-900"
        >
            Edit
        </button>
    );

    const field = "charni"

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="w-full relative">
            <Loading isLoading={isLoading} />
            <CustomTable headers={headers} rows={rows} actions={actions} field={field} />
        </div>
    );
}

export default CharniComponent