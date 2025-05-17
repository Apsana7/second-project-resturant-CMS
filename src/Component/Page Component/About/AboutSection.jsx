import React from 'react';
import { Formik, Form, Field ,ErrorMessage} from 'formik';



function AboutSection() {
    
    return (
        <div className='w-11/12 flex justify-center py-6'>
            <div className='mx-auto grid grid-cols-5 gap-4 w-full items-start'>
                <div className='col-span-1'>
                    <h2 className='text-lg font-bold text-gray-800'>About Section</h2>
                    <p className='text-gray-600 text-sm'>Images, Title, SubTitle,<br /> Description, Contact, Time</p>
                </div>


                <div className='col-span-4'>
                    <Formik
                        initialValues={{ title: '', subTitle: '', time: '', contact: '', description: '', Image1: "", Image2:"" }}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ setFieldValue, values }) => (
                            <Form className='space-y-3  flex flex-col gap-4'>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='text-lg font-medium text-gray-700'>
                                        Title <span className='text-red-600'>*</span>
                                    </label>
                                    <Field
                                        type='text'
                                        name='title'
                                        placeholder='Enter Title'
                                        className='border border-gray-300 w-full p-3 rounded-md focus:outline-none'
                                    />
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='text-lg font-medium text-gray-700'>
                                        Sub-Title <span className='text-red-600'>*</span>
                                    </label>
                                    <Field
                                        type='text'
                                        name='subTitle'
                                        placeholder='Enter Sub Title'
                                        className='border border-gray-300 w-full p-3 rounded-md focus:outline-none'
                                    />
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='text-lg font-medium text-gray-700'>
                                        Time <span className='text-red-600'>*</span>
                                    </label>
                                    <Field
                                        type='text'
                                        name='time'
                                        placeholder='Enter Time'
                                        className='border border-gray-300 w-full p-3 rounded-md focus:outline-none'
                                    />
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='text-lg font-medium text-gray-700'>
                                        Contact <span className='text-red-600'>*</span>
                                    </label>
                                    <Field
                                        type='text'
                                        name='contact'
                                        placeholder='Enter Contact Number'
                                        className='border border-gray-300 w-full p-3 rounded-md focus:outline-none'
                                    />
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='text-lg font-medium text-gray-700'>
                                        Description <span className='text-red-600'>*</span>
                                    </label>
                                    <Field
                                        as='textarea'
                                        name='description'
                                        placeholder='Enter Description'
                                        className='border border-gray-300 w-full h-24 p-3 rounded-md resize-none focus:outline-none'
                                    />
                                </div>
                                  

                                  <div className='flex  items-center justify-center gap-6'>
                                    
                                <div className='flex flex-col items-center'>
                                    <label htmlFor='actionImage2' className='cursor-pointer'>
                                        {values.Image1 ? (
                                            <img
                                                src={URL.createObjectURL(values.Image1)}
                                                className='h-32 w-32 object-cover  border-2 border-gray-300'
                                            />
                                        ) : (
                                            <div className='flex items-center justify-center bg-gray-200 h-32 w-32 border-2 border-gray-300 text-gray-500'>
                                                Upload Image
                                            </div>
                                        )}
                                    </label>
                                    <input
                                        type='file'
                                        id='actionImage2'
                                        className='hidden'
                                        accept='.jpg,.jpeg,.png'
                                        onChange={(e) => setFieldValue('Image1', e.target.files[0])}
                                    />
                                </div>
                                <div className='flex flex-col items-center'>
                                    <label htmlFor='actionImage1' className='cursor-pointer'>
                                        {values.Image2 ? (
                                            <img
                                                src={URL.createObjectURL(values.Image2)}
                                                className='h-32 w-32 object-cover  border-2 border-gray-300'
                                            />
                                        ) : (
                                            <div className='flex items-center justify-center bg-gray-200 h-32 w-32 border-2 border-gray-300 text-gray-500'>
                                                Upload Image
                                            </div>
                                        )}
                                    </label>
                                    <input
                                        type='file'
                                        id='actionImage1'
                                        className='hidden'
                                        accept='.jpg,.jpeg,.png'
                                        onChange={(e) => setFieldValue('Image2', e.target.files[0])}
                                    />
                                </div>
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

export default AboutSection;

