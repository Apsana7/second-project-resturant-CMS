import React, { useState } from 'react';
import TestimonyDeletePopUp from './TestimonyDeletePopUp';
import TestimonyEditPopUp from './TestimonyEditPopUp';

function TestimonyTable() {
    const [info, setInfo] = useState([]);
    const [deletes, setDeletes] = useState(null);
    const [edit, setEdit] = useState(false)


    const header = ["Image", "Name", "Description", "Post", "Action"];

    return (
        <div className='flex   ml-16 p-6 w-[1150px] '>

            {deletes && (
                <div>
                    <TestimonyDeletePopUp setDeletes={setDeletes} />
                </div>
            )}

            {edit && (
                <div>
                    <TestimonyEditPopUp
                        blured={() => {
                            setEdit(false)
                        }}
                        />
                </div>
            )}

            <div className='w-10/12  mx-auto overflow-x-auto shadow-lg rounded-lg border border-gray-300 bg-white'>
                <table className='w-full  text-center border-collapse'>

                    <thead className='bg-gray-800 text-white text-sm uppercase tracking-wide'>
                        <tr>
                            {header.map((val, i) => (
                                <th key={i} className='px-4 py-3 border border-gray-400'>
                                    {val}
                                </th>
                            ))}
                        </tr>
                    </thead>


                    <tbody className='text-gray-900 text-sm text-center'>
                        <tr className='border border-gray-300 hover:bg-gray-100 transition'>
                            <td className='px-4 py-3 border border-gray-300'>
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="Food Item"
                                    className="h-12 w-12 object-cover rounded-md"
                                />
                            </td>
                            <td className='px-4 py-3 border border-gray-300'>Sample Item</td>
                            <td className='px-4 py-3 border border-gray-300'>Delicious food item</td>
                            <td className='px-4 py-3 border border-gray-300'>$12.99</td>

                            <td className='px-2 py-3 flex items-center justify-center gap-4'>
                                <button className='px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition' onClick={() => setEdit(!edit)}>
                                    Edit
                                </button>
                                <button className='px-3 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition' onClick={() => setDeletes(!deletes)}  >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TestimonyTable;
