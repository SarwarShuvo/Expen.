import React from 'react';

const AddRecord = () => {
    return (
        <section className='p-8'>
            <div className='container mx-auto bg-[#F6F5F5] px-8 pt-5'>

                {/* Add Record Form  */}
                <div className='py-2 px-4'>
                    <h2 className='text-3xl font-bold mb-4'>Add Record</h2>
                    <label for="inputType" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                    <select id="inputType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5">
                        <option>Income</option>
                        <option>Expense</option>
                    </select>


                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="description" rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder=""></textarea>


                    <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                    <input type="text" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" />


                    <label for="notes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notes</label>
                    <textarea id="notes" rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>


                </div>

                {/* Save Button  */}
                <div className='flex justify-end m-5 pb-6'>
                    <button class="bg-[#56CCF2]  hover:bg-blue-700 text-white py-2 px-6">
                        Save
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AddRecord;