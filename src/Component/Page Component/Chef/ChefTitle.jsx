import React from 'react'
import { Formik, Form, Field } from 'formik'

function ChefTitle() {
  const info = [
    { label: "Title", name: "Title", type: "text", placeholder: "Enter Title" },
    { label: "Sub-Title", name: "SubTitle", type: "text", placeholder: "Enter Sub Title" }

  ]
  return (
    <div className='w-11/12 flex justify-center  py-10'>
      <div className='  mx-auto grid grid-cols-6 gap-6  w-full '>

        <div className=''>
          <h1 className='text-xl font-bold'>Master Chefs</h1>
          <p className='text-gray-700 w-full'>Title,SubTitle,Image,<br />ChefName,ChefPost<br />Social Sites</p>
        </div>

        <div className='col-span-5'>
          <Formik initialvalues={{ Title: "", SubTitle: "" }}
            onSubmit={(values) => console.log(values)}
          >
            <Form className='flex flex-col gap-6'>
              {
                info.map((val, i) => {
                  return (
                    <div key={i} className='flex flex-col gap-2'>
                      <div className='text-lg font-medium text-gray-800'>{val.label} <span className="text-red-500">*</span></div>
                      <Field name={val.name} type={val.type} placeholder={val.placeholder} className='border border-gray-400 p-2 rounded-md' />
                    </div>
                  )
                })
              }
            </Form>
          </Formik>

        </div>


      </div>
    </div>
  )
}

export default ChefTitle

