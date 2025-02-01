import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "@/utils/common-modal/modal";
import CustomTable from "@/utils/CustomTable";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { ColorRow } from "@/types/rowTypes";
import Loading from "@/utils/Loading";

const ColorComponent: React.FC = () => {
    const tableName = "color";
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const headers = ["Color Name", "Color Code", "Order", "Status"];

    const [rows, setRows] = useState<ColorRow[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/users/data-modification?tableName=${tableName}`);
            const apiData = response.data.data;

            if (apiData.length > 0) {
                const mappedData = apiData.map((item: any) => ({
                    "Color Name": item.name,
                    "Color Code": item.code,
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

    const actions = (row: ColorRow[]) => (
        <div className="flex justify-center items-center space-x-5">
            <button onClick={() => console.log("Edit:", row)} className="text-blue-600 hover:text-blue-900">
                <BiEdit className="w-5 h-5" />
            </button>
            <button onClick={() => console.log("Delete:", row)} className="text-red-600 hover:text-red-900">
                <MdDelete className="w-5 h-5" />
            </button>
        </div>
    );

    return (
        <div className="w-full">
            <div className="flex justify-end mb-3">
                <Modal tableName={tableName} fetchData={fetchData} />
            </div>

            {isLoading ? (
                <Loading global={true} isLoading={isLoading} />
            ) : (
                <CustomTable headers={headers} rows={rows} actions={actions} />
            )}
        </div>
    );
};

export default ColorComponent;
