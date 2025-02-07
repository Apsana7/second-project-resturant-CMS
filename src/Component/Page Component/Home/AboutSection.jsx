import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Formik, Form, Field } from 'formik';

function AboutSection() {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    
    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typing...'
    }), []);

    const formFields = [
        { label: "Title", name: "title", type: "text", placeholder: "Enter Title" },
        { label: "Sub-Title", name: "subTitle", type: "text", placeholder: "Enter Sub-Title" },
        { label: "Time", name: "time", type: "text", placeholder: "Enter Time" },
        { label: "Contact", name: "contact", type: "text", placeholder: "Enter Contact Number" }
    ];

    return (
        <div className='h-full w-full bg-gray-50 flex justify-center py-12 px-4'>
            <div className='bg-white w-9/12 flex flex-col gap-6 shadow-xl rounded-lg p-8'>
                <div className='mb-4'>
                    <h2 className='text-2xl font-bold text-gray-800'>About Section</h2>
                    <p className='text-gray-600 text-sm'>Images, Title, SubTitle, Description, Contact, Time</p>
                </div>
                
                <Formik
                    initialValues={{ title: '', subTitle: '', time: '', contact: '' }}
                    onSubmit={(values) => console.log(values)}
                >
                    {() => (
                        <Form className='flex flex-col gap-6'>
                            {formFields.map((field, i) => (
                                <div key={i} className='flex flex-col gap-2'>
                                    <label className='text-lg font-medium text-gray-700'>{field.label} <span className='text-red-600'>*</span></label>
                                    <Field
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        className='border border-gray-300  w-full p-3 rounded-md focus:outline-none'
                                    />
                                </div>
                            ))}
                            
                            <div className='flex flex-col gap-2'>
                                <label className='text-lg font-medium text-gray-700'>Description<span className='text-red-600'>*</span></label>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    config={config}
                                    tabIndex={1}
                                    onBlur={newContent => setContent(newContent)}
                                    className='border border-gray-300 rounded-md'
                                />
                            </div>
                            
                            <div className='flex flex-col gap-2'>
                                <label className='text-lg font-medium text-gray-700'>Counter Description<span className='text-red-600'>*</span></label>
                                <Field
                                    as='textarea'
                                    name='counterDescription'
                                    placeholder='Enter Description'
                                    className='border border-gray-300  w-full h-24 p-3 rounded-md resize-none focus:outline-none'
                                />
                            </div>
                            
                            <div className='flex flex-wrap gap-6 justify-center'>
                                {['Image1', 'Image2'].map((imageLabel, index) => (
                                    <Formik
                                        key={index}
                                        initialValues={{ Image: null }}
                                        onSubmit={(values) => console.log(values)}
                                    >
                                        {({ setFieldValue, values }) => (
                                            <div className='text-center flex flex-col items-center'>
                                                <span className='text-lg font-medium text-gray-700'>{imageLabel}</span>
                                                <label htmlFor={`image${index}`} className='cursor-pointer'>
                                                    {values.Image ? (
                                                        <img src={URL.createObjectURL(values.Image)} className='h-32 w-32 rounded-md mt-2 object-cover shadow-md' alt='Preview' />
                                                    ) : (
                                                        <div className='flex items-center justify-center bg-gray-200 h-32 w-32 mt-4 rounded-md border border-gray-300'>
                                                            <span className='text-gray-500'>Upload</span>
                                                        </div>
                                                    )}
                                                </label>
                                                <input
                                                    type='file'
                                                    id={`image${index}`}
                                                    className='hidden'
                                                    accept='.jpg,.jpeg,.png'
                                                    onChange={(e) => setFieldValue('Image', e.target.files[0])}
                                                />
                                            </div>
                                        )}
                                    </Formik>
                                ))}
                            </div>

                        
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default AboutSection;