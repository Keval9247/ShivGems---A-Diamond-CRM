import { ColorRow } from '@/types/rowTypes';
import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import Loading from '@/utils/Loading';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function RatioComponent() {

    const headers = ["Ratio Name", "Ratio Code", "Order", "Status"];
    const [isLoading, setIsLoading] = useState(true);
    const tableName = "ratio"

    // const rows = [
    //     { name: "1", code: "1", order: 1, status: "Active" },
    //     { name: "225", code: "MQ", order: 18, status: "Active" },
    //     { name: "210", code: "MQ", order: 17, status: "Active" },
    //     { name: "195", code: "MQ", order: 16, status: "Active" },
    //     { name: "180", code: "PNJMQ", order: 15, status: "Active" },
    //     { name: "170", code: "PNJMQ", order: 14, status: "Active" },
    //     { name: "160", code: "OVPNEM/RAO", order: 13, status: "Active" },
    //     { name: "155", code: "OVCUGBEM/RAOPN", order: 12, status: "Active" },
    //     { name: "150", code: "CUGBOVRAOEMPN,", order: 11, status: "Active" },
    //     { name: "140", code: "CUGBRAOEMOV", order: 10, status: "Active" },
    //     { name: "118", code: "CUGBRAOEM", order: 9, status: "Active" },
    //     { name: "104", code: "PSHSCB,CURAD,SGEM", order: 8, status: "Active" },
    //     { name: "100", code: "PSHSBR,CBCURAD,SGEM", order: 7, status: "Active" },
    //     { name: "99", code: "HS", order: 6, status: "Active" },
    //     { name: "93", code: "HS", order: 5, status: "Active" },
    //     { name: "90", code: "HS", order: 4, status: "Active" },
    //     { name: "87", code: "HS", order: 3, status: "Active" },
    //     { name: "85", code: "HS", order: 2, status: "Active" },
    //     { name: "81", code: "HS", order: 1, status: "Active" },
    // ];

    const [rows, setRows] = useState<ColorRow[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/users/data-modification?tableName=${tableName}`);
            const apiData = response.data.data;

            if (apiData.length > 0) {
                const mappedData = apiData.map((item: any) => ({
                    "Ratio Name": item.name,
                    "Ratio Code": item.code,
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

export default RatioComponent