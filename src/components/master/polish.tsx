import { ColorRow } from '@/types/rowTypes';
import Modal from '@/utils/common-modal/modal';
import CustomTable from '@/utils/CustomTable';
import Loading from '@/utils/Loading';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function PolishComponent() {
  const headers = ["Polish Name", "Polish Code", "Order", "Status"];
  const [isLoading, setIsLoading] = useState(true);

  // const rows: any = [];
  const tableName = "polish"

  const [rows, setRows] = useState<ColorRow[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/users/data-modification?tableName=${tableName}`);
      const apiData = response.data.data;

      if (apiData.length > 0) {
        const mappedData = apiData.map((item: any) => ({
          "Polish Name": item.name,
          "Polish Code": item.code,
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

export default PolishComponent