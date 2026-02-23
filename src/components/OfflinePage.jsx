import React from "react";
import { WifiOff } from "lucide-react";

const OfflinePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
            <WifiOff className="w-20 h-20 text-red-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Oops! Looks like you are offline
            </h1>
            <p className="text-gray-600 mb-6">
                Please check your internet connection and try again.
            </p>
            <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
            >
                Retry
            </button>
        </div>
    );
};

export default OfflinePage;
