import React from 'react';
import income from '../Images/income.png'
import expense from '../Images/expense.png'


const home = () => {
    return (
        <div className='container mx-auto'>

            {/* Showing TOTAL Balance, Income $ Expense   */}
            <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 mb-12 m-5 px-8'>
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
            <div className='flex justify-end m-5 px-8'>
                <button class="bg-[#56CCF2]  hover:bg-blue-700 text-white py-2 px-4">
                    Add New
                </button>
            </div>

            {/* Showing Expense or Income  */}
            <div className='p-8'>
                <div className='bg-[#F6F5F5] p-10 rounded-lg'>
                    <div className='bg-white flex flex-wrap sm:justify-items-center items-center justify-items-center justify-between sm:justify-between p-2 rounded-md'>
                        {/* logo  */}
                        <div className=' flex items-center pl-5'>
                            <img className='w-20 h-20 p-1' src={income} alt="" />
                            <p className='font-semibold pl-3'>Salary <br />
                                <span className='font-normal'>22 Dec 2022</span> </p>
                        </div>
                        {/* Amount  */}
                        <div className='font-semibold pr-16'>
                            <p><span>50000</span> ৳</p>
                        </div>
                    </div>
                    <div className='bg-white flex flex-wrap sm:justify-items-center items-center justify-items-center justify-between sm:justify-between p-2 rounded-md mt-7'>
                        {/* logo  */}
                        <div className=' flex items-center pl-5'>
                            <img className='w-20 h-20 p-1' src={expense} alt="" />
                            <p className='font-semibold pl-3'>Shopping <br />
                                <span className='font-normal'>22 Dec 2022</span> </p>
                        </div>
                        {/* Amount  */}
                        <div className='font-semibold pr-16'>
                            <p><span>5000</span> ৳</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;