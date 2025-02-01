import { ColorRow } from '@/types/rowTypes';
import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import Loading from '@/utils/Loading';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function PurityComponent() {

    const headers = ["Purity Name", "Purity Code", "Order", "Status"];
    const [isLoading, setIsLoading] = useState(true);
    const tableName = "purity";

    // const rows = [
    //     { name: "SIG", code: "SIG", order: 9, status: "Active" },
    //     { name: "14", code: "14", order: 13, status: "Active" },
    //     { name: "15", code: "15", order: 14, status: "Active" },
    //     { name: "16", code: "16", order: 15, status: "Active" },
    //     { name: "13", code: "13", order: 12, status: "Active" },
    //     { name: "12", code: "12", order: 11, status: "Active" },
    //     { name: "11", code: "11", order: 10, status: "Active" },
    //     { name: "SIZ", code: "SIZ", order: 8, status: "Active" },
    //     { name: "SIT", code: "SIT", order: 7, status: "Active" },
    //     { name: "VSZ", code: "VSZ", order: 6, status: "Active" },
    //     { name: "VST", code: "VST", order: 5, status: "Active" },
    //     { name: "VVSZ", code: "VVSZ", order: 4, status: "Active" },
    //     { name: "VVST", code: "VVST", order: 2, status: "Active" },
    //     { name: "FF", code: "FF", order: 1, status: "Active" },
    //     { name: "FL", code: "FL", order: 0, status: "Active" },
    // ];

    const [rows, setRows] = useState<ColorRow[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/users/data-modification?tableName=${tableName}`);
            const apiData = response.data.data;

            if (apiData.length > 0) {
                const mappedData = apiData.map((item: any) => ({
                    _id: item._id,
                    "Purity Name": item.name,
                    "Purity Code": item.code,
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

    const deleteRow = async (row: ColorRow[] | any) => {
        const response = await axios.delete(`/api/users/data-modification?tableName=${tableName}&itemId=${row?._id}`);
        toast.success(response?.data?.message);
        fetchData();
    };

    const actions = (row: ColorRow[]) => (
        <div className="flex justify-center items-center space-x-5">
            <button
                onClick={() => console.log(row)}
                className="text-blue-600 hover:text-blue-900"
            >
                <BiEdit className='w-5 h-5' />
            </button>
            <button
                onClick={() => deleteRow(row)}
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
                    <Modal tableName={tableName} fetchData={fetchData} headers={headers} rows={rows} />
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

export default PurityComponent