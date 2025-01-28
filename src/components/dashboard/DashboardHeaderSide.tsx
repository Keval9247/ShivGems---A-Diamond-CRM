"use client";

import generateBreadcrumbs from "@/utils/GenerateBreadCrumbs";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BiLogOut, BiUser } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { MdMenu, MdClose } from "react-icons/md";

interface Admin {
    email: string;
    username: string;
}

const DashboardHeaderSideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [admin, setAdmin] = useState<Admin | null>(null);
    const [profileClick, setProfileClick] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

    const fetchAdmin = async () => {
        const res = await axios.get("/api/users?role=admin");
        if (res?.data?.users) {
            const adminData = res.data.users.reduce((acc: any, item: any) => ({ ...acc, ...item }), {});
            setAdmin(adminData);
        }
    };

    useEffect(() => {
        fetchAdmin();
    }, []);

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

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex h-screen bg-gray-100">
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={toggleSidebar} />
            )}

            <div className={`fixed lg:relative w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
                <div className="p-6">
                    <h1 className={`text-2xl font-bold text-gray-800 mb-8 flex items-center ${isSidebarOpen ? 'justify-end hover:cursor-pointer' : 'justify-start'}`}>
                        {isSidebarOpen ? (
                            <MdClose
                                onClick={toggleSidebar}
                                className="text-gray-800 w-6 h-6 cursor-pointer hover:text-gray-600 transition"
                            />
                        ) : (
                            "Diamond Admin"
                        )}
                    </h1>

                    <nav>
                        <ul className="space-y-4">
                            {["Dashboard", "Users", "Products", "Orders"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-md p-4 lg:p-6 mb-2 relative z-30">
                    <div className="flex justify-between items-center">
                        <button
                            className="text-gray-800 lg:hidden p-2 hover:bg-gray-100 rounded"
                            onClick={toggleSidebar}
                        >
                            {isSidebarOpen ? (
                                <MdClose className="w-6 h-6" />
                            ) : (
                                <MdMenu className="w-6 h-6" />
                            )}
                        </button>

                        <h2 className="text-xl font-semibold text-gray-800 ml-2 lg:ml-0">Admin Dashboard</h2>

                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex flex-col items-end">
                                <p className="font-bold text-sm lg:text-base truncate max-w-[160px]">
                                    {admin?.username || "Admin"}
                                </p>
                                <p className="text-gray-600 text-xs lg:text-sm truncate max-w-[160px]">
                                    {admin?.email}
                                </p>
                            </div>

                            <div className="relative">
                                <button
                                    onClick={toggleProfile}
                                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-colors"
                                >
                                    <img
                                        src="/profile.svg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </button>

                                {profileClick && (
                                    <div
                                        ref={profileRef}
                                        className="absolute top-14 right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                                    >
                                        <ul className="p-2 space-y-2">
                                            {["Change Password", "Secret Access"].map((item) => (
                                                <li key={item}>
                                                    <a
                                                        href="/admin"
                                                        className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-sm"
                                                    >
                                                        <BiUser className="w-5 h-5 flex-shrink-0" />
                                                        <span className="truncate">{item}</span>
                                                    </a>
                                                </li>
                                            ))}
                                            <hr className="border-gray-200" />
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center gap-3 p-2 text-red-600 hover:bg-red-100 rounded-md transition-colors text-sm"
                                                >
                                                    <CiLogout className="w-5 h-5 flex-shrink-0" />
                                                    <span>Logout</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto px-4 lg:px-6 pb-6">
                    {generateBreadcrumbs()}
                    {children}
                </main>
            </div>
        </div >
    );
};

export default DashboardHeaderSideBar;