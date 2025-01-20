"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface User {
    id: number;
    username: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    isActive: Boolean;
}

const AdminDashboard = () => {
    // Dummy user data
    // const users = [
    //     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active' },
    //     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin', status: 'inactive' },
    //     { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'user', status: 'active' },
    // ];

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                console.log("🚀🚀 Your selected text is => response: ", response);
                setUsers(response.data.users);
            } catch (error) {
                console.error('Error fetching users:', error);
                setError('Failed to load users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="bg-white w-64 p-6 shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-8">Diamond Admin</h1>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <a href="/admin/dashboard" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/users" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                <span>Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/products" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                <span>Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/orders" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                <span>Orders</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar */}
                <header className="bg-white shadow-md p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
                        <div className="flex items-center space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Add User
                            </button>
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

                {/* User Table */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        index
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Role
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}.</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.username}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span
                                                className={`px-2 py-1 text-xs font-semibold rounded-full ${user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                    }`}
                                            >
                                                {user.isActive ? "Active" : "In Active"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                                            <button className="text-red-500 hover:text-red-700">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;