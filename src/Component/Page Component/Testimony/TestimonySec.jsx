
import React, { useState } from "react";


function TestimonySec() {
 
  const header = [
    {
        title: 'Title'
    },
    {
        title: 'SubTitle'
    },
  ]
  return (
    <div className="h-full w-full  flex justify-center py-10">
      <div className="bg-white w-11/12 mx-auto flex flex-col gap-6  rounded-lg p-8">
        
       
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-800">Testimony Section</h2>
          <p className="text-gray-600">Provide a title and subtitle for the section</p>
        </div>

      
        <div className="flex flex-col gap-6">
          
        
          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium text-gray-700">
              Title <span className="text-red-500">*</span>
            </div>
            <input
              id="Title"
              type="text"
              placeholder="Enter Title"
              className="border border-gray-300 rounded-md p-2 "
            />
          </div>

       
          <div className="flex flex-col gap-2">
            <div  className="text-lg font-medium text-gray-700">
              Sub Title <span className="text-red-500">*</span>
            </div>
            <input
              id="SubTitle"
              type="text"
              placeholder="Enter Sub Title"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

            <div>
              <button className='w-fit h-fit p-2 bg-green-600 rounded-lg cursor-pointer text-white'>Save Changes</button>
            </div>

          


             
        </div>
      </div>
    </div>
  );
}

export default TestimonySec;
