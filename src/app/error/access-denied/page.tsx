"use client";
import React from 'react'

function Access_Denied() {
    const handleBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back();
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Sorry, you do not have permission to access this page. Please contact your administrator if you believe this is a mistake.
                </p>
                <div className="flex justify-center">
                    <button onClick={handleBack}>
                        <a className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-semibold transition-colors">
                            Go Back
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Access_Denied