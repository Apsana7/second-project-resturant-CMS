import { Formik, Form, Field } from 'formik';
import JoditEditor from 'jodit-react';
import React, { useState, useRef, useMemo } from 'react';

function MenuSection() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  
  const info = [
    { label: "ItemName", name: "ItemName", type: "text", placeholder: "Enter item name" },
    { label: "Description", name: "Description", type: "text", placeholder: "Enter description of item ingredients" },
    { label: "Price", name: "Price", type: "number", placeholder: "Enter price of an item" }
  ];

  const config = useMemo(() => ({
    readonly: false,
    placeholder: 'Start typing...'
  }), []);

  return (
    <div className='w-11/12 flex justify-center py-10'>
      <div className='mx-auto grid grid-cols-6 gap-6 w-full'>
        
        <h1 className='text-xl font-bold'>Menu Section</h1>

        <div className='col-span-5'>
          <Formik
            initialValues={{ ItemName: "", Price: "", Description: "", Image: null }}
            onSubmit={(values) => console.log(values)}
          >
            {({ values, setFieldValue }) => (
              <Form className='flex flex-col gap-6'>

             
                <div className='flex flex-col items-center '>
                  <label htmlFor='imageUpload' className='cursor-pointer'>
                    {values.Image ? (
                      <img
                        src={URL.createObjectURL(values.Image)}
                        alt='Uploaded'
                        className='h-32 w-32 object-cover border-2 border-gray-300'
                      />
                    ) : (
                      <div className='flex items-center justify-center bg-gray-200 h-32 w-32 border-2 border-gray-300 text-gray-500'>
                        Upload Image
                      </div>
                    )}
                  </label>
                  <input
                    type='file'
                    id='imageUpload'
                    className='hidden'
                    accept='.jpg,.jpeg,.png'
                    onChange={(e) => setFieldValue('Image', e.target.files[0])}
                  />
                </div>

                <div className='flex flex-col gap-6'>
                  {info.map((val, i) => (
                    <div key={i} className='flex flex-col gap-2 '>
                      {val.name !== "Description" ? (
                        <>
                          <div className='text-lg font-medium text-gray-800'>
                            {val.label} <span className="text-red-500">*</span>
                          </div>
                          <Field
                            name={val.name}
                            type={val.type}
                            placeholder={val.placeholder}
                            className='border border-gray-400 p-2 rounded-md '
                          />
                        </>
                      ) : (
                        <>
                          <label className='text-lg font-medium text-gray-700'>
                            Description <span className='text-red-600'>*</span>
                          </label>
                          <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            tabIndex={1}
                            onBlur={(newContent) => setContent(newContent)}
                            className='border border-gray-300 rounded-md'
                          />
                        </>
                      )}
                    </div>
                  ))}
                </div>

                
                <button
                  type="submit"
                  className="bg-blue-500 w-fit h-fit text-white py-2 px-4 rounded-md hover:bg-white hover:text-blue-800 hover:border-2 cursor-pointer"
                >
                  Save Changes
                </button>

              </Form>
            )}
          </Formik>
        </div>

      </div>
    </div>
  )
}

export default MenuSection;
