import React, { useState }from 'react';


function ServiceSectionTable() {
        const [edit, setEdit] = useState(false);
        const [deletes, setDeletes]= useState(null)
    
    const header = ["Title", "Sub-Title", "Icon", "EventName", "Description", "Action"];

    return (
        <div className='flex flex-col mx-52 w-9/12  items-center justify-center'>
          
            <div className='flex  w-full items-center justify-center '>
                <table className='w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden'>
                 
                    <thead className='bg-gray-700 text-white text-left'>
                        <tr>
                            {header.map((val, i) => (
                                <th key={i} className='px-4 py-3 border border-gray-500'>
                                    {val}
                                </th>
                            ))}
                        </tr>
                    </thead>

                  
                    <tbody className='bg-white text-gray-900'>
                        <tr className='border border-gray-300 hover:bg-gray-100 transition'>
                            <td className='px-4 py-3 border border-gray-300'>Sample 1</td>
                            <td className='px-4 py-3 border border-gray-300'>Sample 2</td>
                            <td className='px-4 py-3 border border-gray-300'>aga</td>
                            <td className='px-4 py-3 border border-gray-300'>Event 1</td>
                            <td className='px-4 py-3 border border-gray-300'>Description text</td>
                            <td className='px-4 py-3 border border-gray-300 flex gap-2'>
                                <button className='px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition' 
                                    >
                                    Edit
                                </button>
                                <button className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ServiceSectionTable;

