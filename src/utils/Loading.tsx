import React from 'react';

interface props {
    isLoading: boolean;
    global?: boolean;
}

const Loading = ({ isLoading, global }: props) => {
    return (
        <div className={'fixed top-0 right-0 left-0 bottom-0 h-full w-full bg-black bg-opacity-10 z-50 flex justify-center items-center ' + (isLoading ? "block" : "hidden")}>
            <div className={' flex justify-center items-center ' + (global ? ` ` : ' w-full h-full')}>
                <img src='/diamond.gif' className='w-44 h-44' />
            </div>
        </div>
    );
};

export default Loading;