import React from "react"
import { Detailss } from "../data/data"
import { useParams } from "react-router-dom"
function EditWhale() {
  const { id } = useParams()
  const details = Detailss.find((details) => details.id === id)

  return (
    <div>
      <div className='flex justify-center   w-[100%] h-[100vh] flex-col px-4'>
        <h2 className='flex items-center font-bold text-white text-[30px] mb-3 font-lexend'>{`Hi,${details.username}`}</h2>
        <div className='flex flex-col  gap-3  text-white'>
       <h5 className="text-sm"> Address:</h5>
          <div className='flex w-[100%]  justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] -mt-2  border-[#838699]'>
        
            {details.address}
          </div>
         <h5 className="text-sm"> Balance: </h5>
          <div className='flex w-[100%] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] -mt-3 sm:mt-0 border-[#838699]'>
            {details.quantity}
          </div>
           <h5 className="text-sm">Percentage:</h5>
          <div className='flex w-[100%]  justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] -mt-3  sm:mt-0 border-[#838699]'>
            {details.percentage}
          </div>
          <h5 className="text-sm">  Value: </h5>
          <div className='flexw-[100%]  justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] -mt-3 sm:mt-0 border-[#838699]'>
            {details.value}
          </div>
        </div>
        <button
          
            className='font-inter w-[107px] h-[44px] bg-white  text-[12px] mt-3 sm:text-[14px] font-bold rounded-[10px] text-[#13141A] flex justify-center items-center'
          >
            Add Whale
          </button>
      </div>
    </div>
  )
}

export default EditWhale
