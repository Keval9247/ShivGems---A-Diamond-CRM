"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DashboardHeaderSideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [admin, setAdmin] = useState<null>()
    console.log("🚀🚀 Your selected text is => admin: ", admin.email);

    const fetchAdminDetials = async () => {
        const response = await axios.get('/api/users?role=admin');
        if (response) {
            const obj = response?.data?.users?.reduce((acc: any, item: any) => {
                for (const key in item) {
                    acc[key] = item[key];
                }
                return acc;

            }, {})
            setAdmin(obj);
        }
    }
    useEffect(() => {
        fetchAdminDetials();
    }, [])

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="bg-white w-64 p-6 shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-8">Diamond Admin</h1>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                Users
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                Orders
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-md p-4 mb-2">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
                        <div className="flex items-center space-x-4">
                            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Add Item
                            </button> */}
                            <div>{admin?.username}</div>
                            <div className="relative">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </header>
                {children}
            </div>
        </div>
    );
};

export default DashboardHeaderSideBar;
