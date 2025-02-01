import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiFileText } from 'react-icons/fi';
import Loading from '../Loading';

interface Props {
    tableName?: string;
    fetchData: () => void;
}

const Modal: React.FC<Props> = ({ tableName, fetchData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [order, setOrder] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await storeData();
        fetchData();
        setIsOpen(false);
        toast.success(`Data Added.`);
    };

    const storeData = async () => {
        try {
            const newData = { name, code, order, status: "Active" };
            await axios.post("/api/users/data-modification", { tableName, data: [newData] }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
        } catch (error: any) {
            console.error(" Error storing data:", error.response?.data || error.message);
            toast.error("Error adding data!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex flex-row justify-center gap-5'>
            {isLoading && <Loading isLoading={isLoading} />}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add {tableName}
            </button>

            <button
                onClick={() => setIsOpen(false)}
                className="flex items-center border-2 gap-2 border-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-200"
            >
                <FiFileText /> Export
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Add {tableName}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">{tableName} Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                    placeholder={`${tableName} Name`}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Code</label>
                                <input
                                    type="text"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                    placeholder="Code"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Order</label>
                                <input
                                    type="number"
                                    value={order}
                                    onChange={(e) => setOrder(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
                                    disabled={isLoading}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className={`px-4 py-2 rounded text-white ${isLoading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Saving..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
