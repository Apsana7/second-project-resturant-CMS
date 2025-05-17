import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

function ChefDetail() {
    const [infoFields, setInfoFields] = useState({ Image: "", ChefName: "", ChefPost: "" });

    const ChefDetails = [
        { label:"Title", name:"Title", type:"text", placeholder:"Enter Title"},
        { label:"SubTitle", name:"SubTitle", type:"text", placeholder:"Enter sub title"},
        { label: "Chef's Name", name: "ChefName", type: "text", placeholder: "Enter chef's Name" },
        { label: "Chef's Post", name: "ChefPost", type: "text", placeholder: "Enter chef's post" }
    ];

    return (
        <div className='w-11/12 flex justify-center py-6'>
            <div className='mx-auto grid grid-cols-5 gap-4 w-full items-start'> 
                <div className='col-span-1'>
                    <h2 className='text-2xl font-semibold text-gray-900'>Chef's Info</h2>
                    <p className='text-gray-600'>Title, Description</p>
                </div>

             
                <div className='col-span-4'>
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
                            <Form className='space-y-4'> {/* Reduced space between fields */}
                                <div className='text-xl font-semibold text-gray-900'>Chef's Information</div>

                                <div className='flex flex-col items-center'>
                                    <label htmlFor='imageUpload' className='cursor-pointer'>
                                        {values.Image ? (
                                            <img
                                                src={URL.createObjectURL(values.Image)}
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

                                {ChefDetails.map((field, index) => (
                                    <div key={index} className='flex flex-col gap-1'>
                                        <label className='text-lg font-medium text-gray-800'>
                                            {field.label} <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            name={field.name}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className='border border-gray-400 p-3 rounded-md focus:outline-none w-full'
                                        />
                                    </div>
                                ))}

                                <div className='text-xl font-semibold text-gray-900'>Social Media Links</div>
                                <div className='grid grid-cols-4 gap-4'>
                                    {["Icon1", "Icon2", "Icon3", "Icon4"].map((site, index) => (
                                        <div key={index} className='flex flex-col gap-1'>
                                            <Field
                                                name={site}
                                                placeholder='Enter profile link'
                                                className='border border-gray-400 p-3 rounded-md w-full'
                                            />
                                        </div>
                                    ))}
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

export default ChefDetail;

