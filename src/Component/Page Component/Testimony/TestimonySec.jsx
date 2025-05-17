import React, { useState, useRef, useMemo } from 'react';
import { Formik, Form, Field } from "formik";
import TestimonyTable from './TestimonyTable';
import JoditEditor from 'jodit-react';

function TestimonySec() {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typing...'
    }), []);

    const info = [
        { label: "Title", name: "Title", type: "text", placeholder: "Enter Title" },
        { label: "SubTitle", name: "SubTitle", type: "text", placeholder: "Enter SubTitle" },
        { label: "Name", name: "Name", type: "text", placeholder: "Enter Name" },
        { label: "Description", name: "Description", type: "text", placeholder: "Enter Description" },
        { label: "Post", name: "Post", type: "text", placeholder: "Enter Post" },
        { label: "Image", name: "Image", type: "file", placeholder: "Upload Image" }
    ];

    return (
        <div>
            <div className='w-11/12 flex justify-center py-10'>
                <div className='mx-auto grid grid-cols-6 gap-6 w-full'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl'>Testimony</h1>
                        <p className='text-gray-500'>Title, SubTitle, Name, Description, Post, Image</p>
                    </div>

                    <Formik 
                        initialValues={{ Title: "", SubTitle: "", Name: "", Description: "", Post: "", Image: null }}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ setFieldValue }) => (
                            <Form className='flex flex-col gap-4 col-span-5 w-full'>
                                {info.map((val, i) => {
                                    if (val.name === "Description") {
                                        return (
                                            <div key={i} className='flex flex-col gap-1 w-full'>
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
                                                    className='border border-gray-300 rounded-md'
                                                />
                                            </div>
                                        );
                                    } else if (val.name === "Image") {
                                        return (
                                            <div key={i} className='flex flex-col gap-1 w-full'>
                                                <label className='text-lg font-medium text-gray-700'>
                                                    {val.label} <span className="text-red-500">*</span>
                                                </label>
                                                <div 
                                                    className="relative border-2  border-gray-400 rounded-md w-40 h-40 flex justify-center items-center cursor-pointer"
                                                    onClick={() => document.getElementById('fileInput').click()}
                                                >
                                                    {imagePreview ? (
                                                        <img 
                                                            src={imagePreview} 
                                                            alt="Preview" 
                                                            className="w-full h-full object-cover rounded-md"
                                                        />
                                                    ) : (
                                                        <span className="text-gray-500">Upload Image</span>
                                                    )}
                                                    <input
                                                        id="fileInput"
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={(event) => {
                                                            const file = event.target.files[0];
                                                            setFieldValue("Image", file);
                                                            setImagePreview(URL.createObjectURL(file));
                                                        }}
                                                    />
                                                </div>
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
                                                    className='border border-gray-400 p-2 rounded-md w-full'
                                                />
                                            </div>
                                        );
                                    }
                                })}
                                <button className='w-fit h-fit p-3 bg-green-600 text-white rounded-xl cursor-pointer hover:bg-green-800 '>Save Changes</button>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <TestimonyTable />
        </div>
    );
}

export default TestimonySec;
