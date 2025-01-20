import React from 'react';
import DashboardHeaderSideBar from '@/components/dashboard/DashboardHeaderSide';
import '../globals.css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardHeaderSideBar>
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto scrollbar-hidden p-6">
                    <div className="p-6">{children}</div>
                </main>
            </div>
        </DashboardHeaderSideBar>
    );
}
