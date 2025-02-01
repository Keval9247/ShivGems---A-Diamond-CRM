import Modal from "@/utils/common-modal/modal";
import CustomTable from "@/utils/CustomTable";
import Loading from "@/utils/Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function BackComponent() {

    const headers = ["Charni Name", "Charni Code", "From (Ct)", "To (Ct)", "Order", "Status"];
    const [isLoading, setIsLoading] = useState(true);
    const tableName = "back"
    const rows = [
        { name: "0.90-0.97", code: "0.9-0.97", from: "0.9000", to: "0.9799", order: 10, status: "Active" },
        { name: "5 Ct UP", code: "5 Ct UP", from: "5.0000", to: "100.0000", order: 18, status: "Active" },
        { name: "4.00-4.99", code: "4.00-4.99", from: "4.0000", to: "4.9999", order: 17, status: "Active" },
        { name: "3.00-3.99", code: "3.00-3.99", from: "3.0000", to: "3.9999", order: 16, status: "Active" },
        { name: "2.50-2.99", code: "2.50-2.99", from: "2.5000", to: "2.9999", order: 15, status: "Active" },
        { name: "2.00-2.49", code: "2.00-2.49", from: "2.0000", to: "2.4999", order: 14, status: "Active" },
        { name: "1.50-1.99", code: "1.50-1.99", from: "1.5000", to: "1.9999", order: 13, status: "Active" },
        { name: "1.20-1.49", code: "1.20-1.49", from: "1.2000", to: "1.4999", order: 12, status: "Active" },
        { name: "0.98-1.19", code: "0.98-1.19", from: "0.9800", to: "1.1999", order: 11, status: "Active" },
        { name: "0.01-0.07", code: "0.01-0.07", from: "0.0100", to: "0.0799", order: 1, status: "Active" },
        { name: "0.70-0.89", code: "0.70-0.89", from: "0.7000", to: "0.8999", order: 9, status: "Active" },
        { name: "0.60-0.69", code: "0.60-0.69", from: "0.6000", to: "0.6999", order: 8, status: "Active" },
        { name: "0.50-0.59", code: "0.50-0.59", from: "0.5000", to: "0.5999", order: 7, status: "Active" },
        { name: "0.30-0.49", code: "0.30-0.49", from: "0.3000", to: "0.4999", order: 6, status: "Active" },
        { name: "0.23-0.29", code: "0.23-0.29", from: "0.2300", to: "0.2999", order: 5, status: "Active" },
        { name: "0.18-0.22", code: "0.18-0.22", from: "0.1800", to: "0.2299", order: 4, status: "Active" },
        { name: "0.14-0.17", code: "0.14-0.17", from: "0.1400", to: "0.1799", order: 3, status: "Active" },
        { name: "0.08-0.13", code: "0.08-0.13", from: "0.0800", to: "0.1399", order: 2, status: "Active" },
    ];

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/users/data-modification?tableName=${tableName}`);
            console.log("Fetched Data:", response.data);
            setData(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const storeData = async () => {
        try {
            const response = await axios.post("/api/users/data-modification", { tableName, data: rows, }, {
                headers: { "Content-Type": "application/json", }, withCredentials: true,
            });

            console.log(`Data stored in ${tableName}:`, response.data.message);
        } catch (error: any) {
            console.error("Error storing data:", error.response?.data || error.message);
        } finally {
            setIsLoading(false);
        }
    };

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
                    <Modal field={tableName} />
                </div>

                {isLoading ? (
                    <Loading global={true} isLoading={isLoading} />
                ) : (
                    <CustomTable headers={headers} rows={rows} actions={actions} />
                )}
            </div>
        </>
    );
}

export default BackComponent