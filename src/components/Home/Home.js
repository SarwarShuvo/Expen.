import React from 'react';

const home = () => {
    return (
        <div className='container mx-auto'>

            <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 mb-12 m-5'>
                <div className='bg-[#56CCF2] rounded-[36px] pt-6 p-5 pr-10'>
                    <h4 className='text-2xl font-extrabold text-[#6D6D6D] text-left'>Balance</h4>
                    <p className='text-white text-4xl font-extrabold text-right mt-[37.5px] mb-10'>৳ <span>1582585</span> </p>
                </div>
                <div className='bg-[#A5A6F6] rounded-[36px] pt-6 p-5 pr-10'>
                    <h4 className='text-2xl font-extrabold text-[#6D6D6D] text-left'>Income</h4>
                    <p className='text-white text-4xl font-extrabold text-right mt-[37.5px]'>৳ <span>1582585</span></p>
                </div>
                <div className='bg-[#F178B6] rounded-[36px] p-5 pt-6 pr-10'>
                    <h4 className='text-2xl font-extrabold text-[#6D6D6D] text-left'>Expanse</h4>
                    <p className='text-white text-4xl font-extrabold text-right mt-[37.5px]'>৳ <span>1582585</span> </p>
                </div>
            </div>
            {/* Add new Button  */}
            <div className='flex justify-end m-5'>
                <button class="bg-[#56CCF2]  hover:bg-blue-700 text-white py-2 px-4">
                    Add New
                </button>
            </div>
        </div>
    );
};

export default home;