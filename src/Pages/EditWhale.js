import React from "react"
import { Detailss } from "../data/data"
import { useParams } from "react-router-dom"
function EditWhale() {
  const { id } = useParams()
  const details = Detailss.find((details) => details.id === id)

  return (
    <div>
      <div className='flex justify-center   w-[100%] h-[100vh] flex-col px-4'>
        <h2 className='flex items-center font-bold text-white text-[30px] font-lexend'>{`Hi,${details.username}`}</h2>
        <div className='flex flex-col  gap-3  text-white'>
          <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
            {details.address}
          </div>
          <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
            {details.quantity}
          </div>
          <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
            {details.percentage}
          </div>
          
          <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
            {details.value}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditWhale
