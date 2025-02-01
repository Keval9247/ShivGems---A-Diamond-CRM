import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiFileText, FiPlusCircle } from 'react-icons/fi';
import Loading from '../Loading';

interface Props {
    tableName?: string;
    fetchData: () => void;
    headers: string[];
    rows?: Array<{ [key: string]: any }>;
}

const Modal: React.FC<Props> = ({ tableName, fetchData, rows, headers }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExportOpen, setIsExportOpen] = useState(false);
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

    const handleExport = async () => {
        setIsLoading(true);
        try {
            const exportResponse = await axios.post(
                "/api/users/data-modification/export",
                { rows, headers },
                { responseType: 'blob' }
            );

            // Create a download link and trigger the download
            const url = window.URL.createObjectURL(new Blob([exportResponse.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${tableName}-export.csv`);
            document.body.appendChild(link);
            link.click();
            link.remove();

            toast.success('Export successful!');
        } catch (error: any) {
            console.error('Error exporting CSV:', error.response?.data || error.message);
            toast.error('Error exporting CSV!');
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
                onClick={() => setIsExportOpen(true)}
                className="flex items-center border-2 gap-2 border-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-200"
            >
                <FiFileText /> Export
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <div className="flex items-center justify-center mb-2">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <FiPlusCircle className="text-blue-500 text-2xl" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                            Add {tableName}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700 mb-2">{tableName} Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    required
                                    placeholder={`Enter ${tableName} Name`}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Code</label>
                                <input
                                    type="text"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    required
                                    placeholder="Enter Code"
                                />
                            </div>
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
                                <input
                                    type="number"
                                    value={order}
                                    onChange={(e) => setOrder(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    required
                                    placeholder="Enter Order"
                                />
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
                                    disabled={isLoading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={`px-6 py-2 rounded-lg text-white transition-all duration-200 ${isLoading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-500 hover:bg-blue-600"
                                        }`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Saving..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isExportOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 transform transition-all duration-300 ease-in-out scale-100 animate-fade-in">
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <FiFileText className="text-blue-500 text-2xl" />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-2">Confirm Export</h2>
                        <p className="text-sm text-gray-600 text-center mb-6">
                            Are you sure you want to export the data to Excel?
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setIsExportOpen(false)}
                                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setIsExportOpen(false);
                                    handleExport();
                                }}
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                            >
                                Export
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
