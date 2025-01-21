"use client";

import generateBreadcrumbs from '@/utils/GenerateBreadCrumbs';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { CiLogout } from 'react-icons/ci';
import { FcSwitchCamera } from 'react-icons/fc';
import { MdSwitchAccount } from 'react-icons/md';

interface Admin {
    email: string;
    username: string;
}

const DashboardHeaderSideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [admin, setAdmin] = useState<Admin | null>(null);
    const [profileClick, setProfileClick] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

    const fetchAdmin = async () => {
        const res = await axios.get('/api/users?role=admin');
        if (res?.data?.users) {
            const adminData = res.data.users.reduce((acc: any, item: any) => ({ ...acc, ...item }), {});
            setAdmin(adminData);
        }
    };

    useEffect(() => { fetchAdmin(); }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
                setProfileClick(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleProfile = () => setProfileClick(!profileClick);



    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="bg-white w-64 p-6 shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-8">Diamond Admin</h1>
                <nav>
                    <ul className="space-y-4">
                        {['Dashboard', 'Users', 'Products', 'Orders'].map((item) => (
                            <li key={item}>
                                <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-md p-4 mb-2 pr-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
                        <div className="flex items-center space-x-4">
                            <div className='flex flex-col justify-end items-end'>
                                <p className='font-bold'> {admin?.username ? `${admin?.username?.charAt(0).toUpperCase() + admin?.username?.slice(1)}` : "default : Admin"}</p>
                                <p className='font-light'>{admin?.email}</p>
                            </div>
                            {/* Profile Container */}
                            <div className="relative" ref={profileRef}>
                                <img
                                    src="/profile.svg"
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full cursor-pointer transition-transform transform hover:scale-105"
                                    onClick={toggleProfile}
                                />
                                {profileClick && (
                                    <div className="absolute top-12 right-0 w-48 py-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                                        <ul className="space-y-1 p-2">
                                            {['Change Password', 'Secret Access'].map((item) => (
                                                <li key={item} className='flex items-center gap-2 rounded-lg hover:bg-gray-100 px-1 py-1'>
                                                    <BiUser className='w-6 h-6' />
                                                    <a href="#" className="flex items-center p-2 text-gray-700 rounded-md transition-colors duration-200">
                                                        <span className="text-sm font-medium">{item}</span>
                                                    </a>
                                                </li>
                                            ))}
                                            <hr className="border-gray-200 w-full mt-2" />
                                            <li className='flex items-center gap-2 rounded-lg hover:bg-red-100 px-1 py-1'>
                                                <CiLogout />
                                                <a href="#" className="flex items-center p-2 text-red-600 rounded-md transition-colors duration-200">
                                                    <span className="text-sm font-medium">Logout</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>
                {generateBreadcrumbs()}
                {children}
            </div>
        </div>
    );
};

export default DashboardHeaderSideBar;