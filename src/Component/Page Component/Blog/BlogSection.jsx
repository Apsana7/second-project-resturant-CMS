import React from 'react';
import { Formik, Form, Field } from 'formik';
import { placeholder } from 'jodit/esm/plugins/placeholder/placeholder';

function BlogSection() {
    const Info = [
        { label: "MainTitle", name: "MainTitle", type: "text", placeholder: "Enter MainTitle " },
        { label: "SubTitle", name: "SubTitle", type: "text", placeholder: "Enter sub title" },

        { label: "upload", name: "upload", type: "file", placeholder: "Enter sub title" },

        { label: "Time", name: "Time", type: "date", placeholder: "Enter time" },
        { label: "Title", name: "Title", type: "text", placeholder: "Enter Title" }
    ];

    return (
        <div className='h-full w-full  flex justify-center py-10'>
            <div className='bg-white w-11/12 mx-auto flex flex-col gap-6 rounded-lg p-8'>

                <div className='flex flex-col gap-2'>

                    <div className='text-xl font-semibold'>Blog Section</div>
                    <p className='text-gray-700'>Title, Subtitle, Image, Time</p>
                </div>


                <Formik
                    initialValues={{ MainTitle:"",SubTitle:"",  Time: "", Title: "" }}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ setFieldValue, values }) => (
                        <Form className='flex flex-col gap-6'>



                            {Info.map((val, i) => {
           if(val.type!=='file'){
            return <div key={i} className='flex flex-col gap-2'>
            <label className='text-lg font-medium text-gray-700'>{val.label} <span className="text-red-500">*</span></label>
            <Field
                name={val.name}
                type={val.type}
                placeholder={val.placeholder}
                className='border-2 border-gray-300 p-2 rounded-lg ' />
        </div>
           }else{

           return <div className='flex flex-col items-center'>
            <label htmlFor='imageUpload' className='cursor-pointer'>
                {values.Image ? (
                    <img
                        src={URL.createObjectURL(values.Image)}
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
                id='imageUpload'
                className='hidden'
                accept='.jpg,.jpeg,.png'
                onChange={(e) => setFieldValue('Image', e.target.files[0])}
            />
        </div>
           }
})}


                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default BlogSection;
