import React, { useState, useRef, useMemo } from 'react';
import { Formik, Field, Form } from 'formik';
import JoditEditor from 'jodit-react';
import { placeholder } from 'jodit/esm/plugins/placeholder/placeholder';

function ServicesSection() {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typing...'
    }), []);

    const formFields = [
        { label: "Title", name: "title", type: "text", placeholder: "Enter Title" },
        { label: "Sub-Title", name: "subTitle", type: "text", placeholder: "Enter Sub-Title" },
        { label: "Icon", name:"Icon", type:"text", placeholder:"Choose Icon"},
        { label: "EventName", name:"EventName", type:"text", placeholder:"Enter Event Name"}
    ];

    return (
        <div className='h-full w-full  flex justify-center py-12 px-4'>
            <div className='bg-white w-11/12 flex flex-col gap-6  rounded-lg p-8'>
                <div className='mb-4'>
                    <h2 className='text-2xl font-bold text-gray-800'>Services Section</h2>
                    <p className='text-gray-600 text-sm'>Title, SubTitle, and Description</p>
                </div>

                <Formik
                    initialValues={{ title: '', subTitle: '', description: '' }}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ setFieldValue }) => (
                        <Form className='flex flex-col gap-6'>
                            {formFields.map((field, index) => (
                                <div key={index} className='flex flex-col gap-2'>
                                    <div className='text-lg font-medium text-gray-700'>{field.label} <span className='text-red-600'>*</span></div>
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
                                    onBlur={newContent => setFieldValue('description', newContent)}
                                    className='border border-gray-300 rounded-md'
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default ServicesSection;
