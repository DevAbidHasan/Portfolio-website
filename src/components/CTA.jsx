import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
    return (
        <div>
            <div className='border-y  border-dashed border-zinc-200 w-[90%] mx-auto px-10 sm:px-16'>
            <div className="flex flex-col text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-16 sm:py-20 -mt-10 -mb-10 w-full">
                <h2 className='md:text-3xl text-center text-blue-700 lg:text-4xl font-semibold'>Have any Idea? Lets discuss.</h2>
                <h2 className='text-center text-sm text-gray-600'>I make stunning websites from scratch providing clean, maintainable code with UI magic and logics.</h2>
                <a href='mailto:abidhasanplabon80@gmail.com' target='_blank' className='flex items-center justify-center gap-10'>
                    <button className='btn btn-lg text-md btn-primary rounded-full'>Get In Touch <FaArrowRight size={18}/></button>
                </a>
            </div>
        </div>
        </div>
    );
};

export default CTA;