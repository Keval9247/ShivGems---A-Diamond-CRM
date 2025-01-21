"use client";

import { usePathname, useRouter } from "next/navigation";
import { FiHome } from "react-icons/fi";

const GenerateBreadcrumbs = () => {
    const router = useRouter();
    const pathname = usePathname();
    const pathnames = pathname.split("/").filter((x) => x);

    const segmentsToExclude = ["dashboard", "admin"];
    const filteredPathnames = pathnames.filter(
        (segment) => !segmentsToExclude.includes(segment.toLowerCase())
    );

    return (
        <nav className="flex px-5 relative pt-4 mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <button
                        onClick={() => router.push("/admin/dashboard")}
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                    >
                        <FiHome className="w-4 h-4 mr-2" />
                        Home
                    </button>
                </li>
                {pathname === '/admin/dashboard' && (<>
                    <svg className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    < li className="inline-flex items-center">
                        <span className="text-sm font-medium text-gray-500">Dashboard</span>
                    </li>
                </>)}
                {filteredPathnames.map((value, index) => {
                    const routeTo = `/${filteredPathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === filteredPathnames.length - 1;
                    const label = value.charAt(0).toUpperCase() + value.slice(1);
                    return (
                        <li key={index} className="flex items-center">
                            <svg
                                className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            {isLast ? (
                                <span className="text-sm font-medium text-gray-500">{label}</span>
                            ) : (
                                <button
                                    onClick={() => router.push("/admin/dashboard")}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600"
                                >
                                    {label}
                                </button>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav >
    );
};

export default GenerateBreadcrumbs;