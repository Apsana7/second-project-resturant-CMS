import React, { useState, } from 'react';
import BlogDeletePopUp from './BlogDeletePopUp';
import BlogEditPopUp from './BlogEditPopUp';


function BlogSectionTable() {
      const [info, setInfo] = useState([]);
          const [deletes, setDeletes] = useState(null);
          const [edit, setEdit] = useState(false)
      
        const header = [
            "Title", "Sub-Title", "Time", "Post", "Description",  "Image", "Action"
        ];
  return (
    <div className='flex items-center justify-center w-9/12 ml-48'>
        {
            edit && (
                 <div>
                <BlogEditPopUp 
                blured= {()=>{
                    setEdit(false)
                }}
                setEdit={setEdit}/>
                
            </div>
            )
        }
        {deletes && (
        <div>
          <BlogDeletePopUp setDeletes={setDeletes} />
        </div>
      )}
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
                <td className='px-4 py-3 border border-gray-300'>12:00 PM</td>
                <td className='px-4 py-3 border border-gray-300'>56789</td>
                <td className='px-4 py-3 border border-gray-300'>Description text</td>
                <td className='px-4 py-3 border border-gray-300'>Image URL</td>
                <td className='px-4 py-3 border border-gray-300 flex gap-2'>
                    <button className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition' onClick={() => setEdit(!edit)}>Edit</button>
                    <button className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition' onClick={() => setDeletes(!deletes)}>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default BlogSectionTable
