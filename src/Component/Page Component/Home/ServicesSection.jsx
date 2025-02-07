import React, { useState, useRef, useMemo } from 'react';
import { Formik, Field, Form } from 'formik';
import JoditEditor from 'jodit-react';

function ServicesSection() {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [infoFields, setInfoFields] = useState([{ id: Date.now(), icon: '', title: '' }]);

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typing...'
    }), []);

    const formFields = [
        { label: "Title", name: "title", type: "text", placeholder: "Enter Title" },
        { label: "Sub-Title", name: "subTitle", type: "text", placeholder: "Enter Sub-Title" }
    ];

    const handleAddField = () => {
        setInfoFields([...infoFields, { id: Date.now(), icon: '', title: '' }]);
    };

    const handleRemoveField = (id) => {
        setInfoFields(infoFields.filter(field => field.id !== id));
    };

    return (
        <div className='h-full w-full bg-gray-100 flex justify-center py-12 px-4'>
            <div className='bg-white w-9/12 flex flex-col gap-6 shadow-lg rounded-lg p-8'>
                <div className='mb-4'>
                    <h2 className='text-2xl font-bold text-gray-800'>Services Section</h2>
                    <p className='text-gray-600 text-sm'>Title, SubTitle, Description, and Icons</p>
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

                            <div className='font-semibold text-lg text-gray-700'>Information Details</div>
                            {infoFields.map((field, i) => (
                                <div key={field.id} className='flex flex-col gap-4 border p-4 rounded-md bg-gray-50'>
                                    <div className='text-lg font-medium text-gray-700'>Icon<span className='text-red-600'>*</span></div>
                                    <Field
                                        type='text'
                                        name={`infoFields[${i}].icon`}
                                        placeholder='Select Icon'
                                        className='border border-gray-300 p-3 rounded-md  w-full'
                                    />
                                    <label className='text-lg font-medium text-gray-700'>Title<span className='text-red-600'>*</span></label>
                                    <Field
                                        type='text'
                                        name={`infoFields[${i}].title`}
                                        placeholder='Enter event title'
                                        className='border border-gray-300 p-3 rounded-md  w-full'
                                    />
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
                                    <button type='button' onClick={() => handleRemoveField(field.id)} className='bg-red-600 text-white py-2 px-4 rounded-md self-start'>Delete</button>
                                </div>
                                
                            ))}
                            <button type='button' onClick={handleAddField} className='bg-blue-600 text-white py-2 px-4 rounded-md self-start'>Add</button>

                           
                            
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default ServicesSection;
