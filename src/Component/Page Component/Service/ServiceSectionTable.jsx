import React from 'react'

function ServiceSectionTable() {
    
    const header = [
        "Title", "Sub-Title", "Icon", "EventName", "Description","Action"
    ]
  return (
    <div className='flex items-center justify-center p-6'>
    <table className='w-11/12 border border-gray-300 shadow-lg rounded-lg overflow-hidden'>
        <thead className='bg-gray-700 text-white text-left'>
            <tr>
                {header.map((val, i) => (
                    <th key={i} className='px-4 py-3 border border-gray-500'>
                        {val}
                    </th>
                ))}
            </tr>
        </thead>
         {/* <tbody className='border border-black'>
           {info.map((value, index) => (
                 <tr key={index} className='border-b border-black hover:bg-gray-100'>
                     <td className='border-b border-black bg-gray-200 px-2'>{value.Title}</td>
                     <td className='border-b border-black bg-gray-200 px-2'>{value.Sub-Title}</td> 
                     <td className='border-b border-black bg-gray-200 px-2'>{value.Time}</td>
                     <td className='border-b border-black bg-gray-200 px-2'>{value.Contact}</td>
                     <td className='border-b border-black bg-gray-200 px-2'>{value.Description}</td>
                     <td className='border-b border-black bg-gray-200 px-2'>{value.Counter-Description}</td>
                     <td className='border-b border-black bg-gray-200 px-2'>{value.Image}</td>
                     <td className='flex flex-row gap-2 justify-center items-center'>
                         <button type="submit" className='border border-black bg-green-700 text-white py-3 px-3 rounded-lg'>
                             Edit
                         </button>
                         <button type="submit" className='border border-black bg-red-600 text-white rounded-lg py-3 px-3'>
                             Delete
                         </button>
                     </td>
                 </tr>
             ))}
         </tbody> */}
        <tbody className='bg-white text-gray-900'>
            <tr className='border border-gray-300 hover:bg-gray-100 transition'>
                <td className='px-4 py-3 border border-gray-300'>Sample 1</td>
                <td className='px-4 py-3 border border-gray-300'>Sample 2</td>
                <td className='px-4 py-3 border border-gray-300'>aga</td>
                <td className='px-4 py-3 border border-gray-300'>Event 1</td>
                <td className='px-4 py-3 border border-gray-300'>Description text</td>
            
                <td className='px-4 py-3 border border-gray-300 flex gap-2'>
                    <button className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition'>Edit</button>
                    <button className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition'>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default ServiceSectionTable
