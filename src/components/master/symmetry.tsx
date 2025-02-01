import { ColorRow } from '@/types/rowTypes';
import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import Loading from '@/utils/Loading';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function SymmetryComponent() {

  const headers = ["Symmetry Name", "Symmetry Code", "Order", "Status"];
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const tableName = "symmetry";

  // const rows = [
  //   { name: "FR", code: "FR", order: 5, status: "Active" },
  //   { name: "GD", code: "GD", order: 4, status: "Active" },
  //   { name: "VG", code: "VG", order: 3, status: "Active" },
  //   { name: "EX", code: "EX", order: 2, status: "Active" },
  //   { name: "ID", code: "ID", order: 1, status: "Active" },
  // ];

  const [rows, setRows] = useState<ColorRow[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/users/data-modification?tableName=${tableName}`);
      const apiData = response.data.data;

      if (apiData.length > 0) {
        const mappedData = apiData.map((item: any) => ({
          _id: item._id,
          "Symmetry Name": item.name,
          "Symmetry Code": item.code,
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

export default SymmetryComponent