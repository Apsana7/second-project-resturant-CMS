import React from 'react'
import { Formik,Form } from 'formik'

function FixedImage() {
  return (
    <div className='w-11/12 flex justify-center py-6'>
    <div className='mx-auto grid grid-cols-5 gap-4 w-full items-start'>
        <div className='col-span-1'>
            <h2 className='text-lg font-bold text-gray-800'>Fixed Image</h2>
           
        </div>

        
      <Formik  initialValues={{Image:""}}
       onSubmit={(values) => console.log(values)}
       >
           {({setFieldValue, values})=>(
             <Form>
                 <div className='flex flex-col items-center'>
              <label htmlFor='uploadImage' className='cursor-pointer'>
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
                  id='uploadImage'
                  className='hidden'
                  accept='.jpg,.jpeg,.png'
                  onChange={(e) => setFieldValue('Image', e.target.files[0])}
              />
          </div>
             </Form>
           )}

      </Formik>
    </div>
    </div>
  )
}

export default FixedImage
