import React from 'react';
import { FaArrowDownLong } from "react-icons/fa6";

const Scroll = () => {
    return (
        <div>
            <h2 className='text-gray-300 text-md font-semibold flex items-center justify-center my-5'>Scroll down</h2>
            <p className='flex items-center animate-pulse justify-center scale-130 text-gray-400 mb-10'><FaArrowDownLong/></p>
        </div>
    );
};

export default Scroll;