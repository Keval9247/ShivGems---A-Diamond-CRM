// components/Loading.tsx
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading: React.FC = () => {
    return (
        <div style={{
            position: 'absolute', // Position relative to the parent div
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000, // Ensure it's on top of the content inside the div
        }}>
            <ClipLoader color="#36d7b7" size={50} /> {/* Customize color and size */}
        </div>
    );
};

export default Loading;

// // components/Loading.tsx
// import React from 'react';
// import { ClipLoader } from 'react-spinners';

// const Loading: React.FC = () => {
//     return (
//         <div className="bg-gray-400 inset-0 bg-opacity-60 z-50 h-full w-full flex items-center justify-center">
//             <div className="flex items-center gap-3">
//                 <svg className="animate-spin h-8 w-8 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none"
//                     viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
//                     <path className="opacity-75" fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
//                     </path>
//                 </svg>
//                 <span className="text-xl mr-4 text-white font-semibold">Loading, please wait...</span>
//             </div>
//         </div>
//     );
// };

// export default Loading;