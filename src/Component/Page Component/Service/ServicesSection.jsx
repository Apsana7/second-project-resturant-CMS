import React, { useState, useRef, useMemo } from 'react';
import { Formik, Field, Form } from 'formik';
import JoditEditor from 'jodit-react';

function ServicesSection() {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typing...'
    }), []);

    return (
        <div className='w-11/12 flex justify-center py-6'> 
            <div className='mx-auto grid grid-cols-5 gap-4 w-full items-start'> 
                <div className='col-span-1'>
                    <h2 className='text-lg font-bold text-gray-800'>Services Section</h2>
                    <p className='text-gray-600 text-sm'>Title, SubTitle, Icon, EventName, and Description</p>
                </div>

                <div className='col-span-4'>
                    <Formik
                        initialValues={{ title: '', subTitle: '', icon: '', eventName: '', description: '' }}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ setFieldValue }) => (
                            <Form className='flex flex-col  gap-4'>
                                <div className='flex flex-col gap-1  w-full'>
                                    <label className='text-lg font-medium text-gray-700 '>
                                        Title <span className='text-red-600'>*</span>
                                    </label>
                                    <Field
                                        type='text'
                                        name='title'
                                        placeholder='Enter Title'
                                        className='border border-gray-300 w-full p-3  rounded-md focus:outline-none'
                                    />
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='text-lg font-medium text-gray-700'>
                                        Sub-Title <span className='text-red-600'>*</span>
                                    </label>
                                    <Field
                                        type='text'
                                        name='subTitle'
                                        placeholder='Enter Sub-Title'
                                        className='border border-gray-300 w-full p-3 rounded-md focus:outline-none'
                                    />
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='text-lg font-medium text-gray-700'>
                                        Icon <span className='text-red-600'>*</span>
                                    </label>
                                    <Field
                                        type='text'
                                        name='icon'
                                        placeholder='Choose Icon'
                                        className='border border-gray-300 w-full p-3 rounded-md focus:outline-none'
                                    />
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='text-lg font-medium text-gray-700'>
                                        Event Name <span className='text-red-600'>*</span>
                                    </label>
                                    <Field
                                        type='text'
                                        name='eventName'
                                        placeholder='Enter Event Name'
                                        className='border border-gray-300 w-full p-3 rounded-md focus:outline-none'
                                    />
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='text-lg font-medium text-gray-700'>
                                        Description <span className='text-red-600'>*</span>
                                    </label>
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        tabIndex={1}
                                        onBlur={newContent => setFieldValue('description', newContent)}
                                        className='border border-gray-300 rounded-md'
                                    />
                                </div>
                                <button className='w-fit h-fit p-3 bg-green-600 text-white rounded-xl cursor-pointer hover:bg-green-800 '>Save Changes</button>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;

