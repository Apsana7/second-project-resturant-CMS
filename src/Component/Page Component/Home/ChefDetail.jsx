import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

function ChefDetail() {
    const [infoFields, setInfoFields] = useState({ Image: "", ChefName: "", ChefPost: "" });

    const Heading = [
        { label: "Title", name: "Title", type: "text", placeholder: "Enter Title" },
        { label: "Sub-Title", name: "SubTitle", type: "text", placeholder: "Enter Sub Title" }
    ];

    const ChefDetails = [
        { label: "Chef's Name", name: "ChefName", type: "text", placeholder: "Enter chef's Name" },
        { label: "Chef's Post", name: "ChefPost", type: "text", placeholder: "Enter chef's post" }
    ];

    return (
        <div className='min-h-screen flex justify-center  py-10'>
            <div className='bg-white w-11/12 mx-auto flex flex-col gap-6  rounded-lg p-8'>
                <div className='mb-4'>
                    <h2 className='text-2xl font-semibold text-gray-900'>Chef's Info</h2>
                    <p className='text-gray-600'>Upload image, enter name, post, and social links</p>
                </div>

                <Formik
                    initialValues={{
                        Title: "",
                        SubTitle: "",
                        ChefName: "",
                        ChefPost: "",
                        Image: null,
                        Icon1: "",
                        Icon2: "",
                        Icon3: "",
                        Icon4: ""
                    }}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ values, setFieldValue }) => (
                        <Form className='flex flex-col gap-6'>
                            {Heading.map((field, index) => (
                                <div key={index} className='flex flex-col gap-2'>
                                    <div className='text-lg font-medium text-gray-800'>{field.label} <span className="text-red-500">*</span></div>
                                    <Field name={field.name} type={field.type} placeholder={field.placeholder} className='border border-gray-400 p-2 rounded-md' />
                                </div>
                            ))}

                            <div className='text-xl font-semibold text-gray-900'>Chef's Information</div>
                            <div className='flex flex-col items-center'>
                                <div className='cursor-pointer'>
                                    {values.Image ? (
                                        <img src={URL.createObjectURL(values.Image)} className='h-32 w-32 object-cover rounded-full border-2 border-gray-300'  />
                                    ) : (
                                        <div className='flex items-center justify-center bg-gray-200 h-32 w-32  border-2 border-gray-300 text-gray-500'>
                                            Upload Image
                                        </div>
                                    )}
                                </div>
                                <input
                                    type='file'
                                    id='imageUpload'
                                    className='hidden'
                                    accept='.jpg,.jpeg,.png'
                                    onChange={(e) => setFieldValue('Image', e.target.files[0])}
                                />
                            </div>

                            {ChefDetails.map((field, index) => (
                                <div key={index} className='flex flex-col gap-2'>
                                    <div className='text-lg font-medium text-gray-800'>{field.label} <span className="text-red-500">*</span></div>
                                    <Field name={field.name} type={field.type} placeholder={field.placeholder} className='border border-gray-400 p-2 rounded-md focus:outline-none ' />
                                </div>
                            ))}

                            <div className='text-xl font-semibold text-gray-900'>Social Media Links</div>
                            <div className='grid grid-cols-4 gap-4'>
                                {["Icon1", "Icon2", "Icon3", "Icon4"].map((site, index) => (
                                    <div key={index} className='flex flex-col gap-2'>
                                        <Field name={site} placeholder='Enter profile link' className='border border-gray-400 p-2 rounded-md' />
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-end gap-4'>
                                <button type='submit' className='bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition'>Add</button>
                                <button type='reset' className='bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition'>Delete</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default ChefDetail;
