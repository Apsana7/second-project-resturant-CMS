import { Formik, Form, Field } from 'formik';
import JoditEditor from 'jodit-react';
import React, { useState, useRef, useMemo } from 'react';

function BlogEditPopUp({blured}) {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const info = [
        { label: "Title", name: "Title", type: "text", placeholder: "Enter Title" },
        { label: "SubTitle", name: "SubTitle", type: "text", placeholder: "Enter SubTitle" },
        { label: "ItemName", name: "ItemName", type: "text", placeholder: "Enter item name" },
        { label: "Description", name: "Description", type: "text", placeholder: "Enter description of item ingredients" },
        { label: "Price", name: "Price", type: "number", placeholder: "Enter price of an item" },
        { label: "Image", name: "Image", type: "file", placeholder: "Upload Image" }

    ];

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typing...'
    }), []);
    return (
        <div onClick={blured} className="absolute  top-52 w-full flex items-center justify-center  left-0 ">

            <div onClick={(e)=>{e.stopPropagation()}} className='bg-gray-200  w-6/12 p-4'>

                <Formik initialValues={{ Title: "", SubTile: "", ItemName: "", Description: "", Price: "", Image: "" }}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ setFieldValue, values }) => (
                        <Form className='flex flex-col gap-4 w-full'>
                            {info.map((val, i) => {
                                if (val.name === "Description") {
                                    return (
                                        <div key={i} className='flex flex-col gap-1  '>
                                            <label className='text-lg font-medium text-gray-700'>
                                                Description <span className='text-red-600'>*</span>
                                            </label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                config={config}
                                                tabIndex={1}
                                                onBlur={(newContent) => {
                                                    setContent(newContent);
                                                    setFieldValue("Description", newContent);
                                                }}
                                                className='border border-gray-300 rounded-md '
                                            />
                                        </div>
                                    );
                                } else if (val.name === "Image") {
                                    return (
                                        <div className='flex flex-col items-center'>
                                            <label htmlFor='imageUpload' className='cursor-pointer'>
                                                {values.Image ? (
                                                    <img
                                                        src={URL.createObjectURL(values.Image)}
                                                        className='h-32 w-32 object-cover  border-2 border-gray-300'
                                                    />
                                                ) : (
                                                    <div className='flex items-center justify-center bg-gray-400 h-32 w-32 border-2 border-gray-300 text-white'>
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
                                    );
                                } else {
                                    return (
                                        <div key={i}>
                                            <div className='text-lg font-medium text-gray-800'>
                                                {val.label} <span className="text-red-500">*</span>
                                            </div>
                                            <Field
                                                name={val.name}
                                                type={val.type}
                                                placeholder={val.placeholder}
                                                className='border border-black p-2 rounded-md w-full'
                                            />
                                        </div>
                                    );
                                }
                            })}
                            <button className='w-fit h-fit p-3 cursor-pointer text-xl rounded-lg bg-green-600 text-white'>Save Changes</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default BlogEditPopUp
