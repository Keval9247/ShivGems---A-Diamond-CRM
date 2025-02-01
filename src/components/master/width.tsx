import { ColorRow } from '@/types/rowTypes';
import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import Loading from '@/utils/Loading';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function WidthComponent() {
    const headers = ["Width Name", "Width Code", "Order", "Status"];
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const tableName = "width"

    // const rows = [
    //     { name: "68.8", code: "68.8", order: 1, status: "Active" },
    //     { name: "67.4", code: "67.4", order: 2, status: "Active" },
    //     { name: "67.5", code: "67.5", order: 3, status: "Active" },
    //     { name: "68.2", code: "68.2", order: 4, status: "Active" },
    //     { name: "68.3", code: "68.3", order: 5, status: "Active" },
    //     { name: "67.6", code: "67.6", order: 6, status: "Active" },
    //     { name: "100", code: "100", order: 7, status: "Active" },
    //     { name: "68.1", code: "68.1", order: 8, status: "Active" },
    //     { name: "68.7", code: "68.7", order: 9, status: "Active" },
    //     { name: "69", code: "69", order: 10, status: "Active" },
    //     { name: "100", code: "100", order: 11, status: "Active" },
    //     { name: "67.8", code: "67.8", order: 12, status: "Active" },
    //     { name: "67.7", code: "67.7", order: 13, status: "Active" },
    //     { name: "68.5", code: "68.5", order: 14, status: "Active" },
    //     { name: "68.6", code: "68.6", order: 15, status: "Active" },
    //     { name: "67.9", code: "67.9", order: 16, status: "Active" },
    //     { name: "100", code: "100", order: 17, status: "Active" },
    //     { name: "69.1", code: "69.1", order: 18, status: "Active" },
    //     { name: "68", code: "68", order: 19, status: "Active" },
    //     { name: "68.4", code: "68.4", order: 20, status: "Active" },
    // ];
    const [rows, setRows] = useState<ColorRow[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/users/data-modification?tableName=${tableName}`);
            const apiData = response.data.data;

            if (apiData.length > 0) {
                const mappedData = apiData.map((item: any) => ({
                    "Width Name": item.name,
                    "Width Code": item.code,
                    "Order": item.order,
                    "Status": item.status,
                }));

                setRows(mappedData);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                    <Modal tableName={tableName} fetchData={fetchData} />
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

export default WidthComponent