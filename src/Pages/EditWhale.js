import React from "react"
import { Detailss } from "../data/data"
import { useNavigate, useParams } from "react-router-dom"
import { RiArrowLeftFill, RiArrowLeftLine } from "react-icons/ri"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import { IconContext } from "react-icons/lib"
function EditWhale() {
  const { id } = useParams()
  const details = Detailss.find((details) => details.id === id)
  const navigate = useNavigate();
const handleClick=()=>{
  navigate("/")
}

  return (
    <div>
      <Header />
      <div className='px-7 mt-5 '>
        <IconContext.Provider value={{ color: "white", size: "30px" }}>
          <RiArrowLeftLine onClick={handleClick} />
        </IconContext.Provider>
        <div className=' w-[100%] sm:w-[335px]  h-[260px] border border-[#5253E9] rounded-[20px] flex flex-col px-4 lg:py-6 py-7 mt-5'>
          <div className=' '>
            <div>
              <h5 className='text-[#838699] text-[14px]  font-normal '>
                Address
              </h5>
              <h4 className='font-space font-bold text-[16px] text-dimWhite mt-2 border-b border-[#41434F] pb-1 overme'>
                {details.address}
              </h4>
            </div>
            <div className='mt-1'>
              <h5 className='text-[#838699] text-[14px]  font-normal '>
                Username
              </h5>
              <h4 className='font-space font-bold text-[16px] text-dimWhite mt-1 '>
                {details.username}
              </h4>
            </div>
            <div className='mt-2'>
              <h5 className='text-[#838699] text-[14px]  font-normal '>
               Phonenumber
              </h5>
              <h4 className='font-space font-bold text-[16px] text-dimWhite mt-1 '>
                {details.username}
              </h4>
            </div>
            <button className='font-inter text-[14px] mt-2 font-bold text-white w-[77px] h-[33px]  flex justify-center items-center bg-[#5253E9] rounded-[10px]'>
              Edit
            </button>
          </div>
        </div>
        <div className=' w-[100%] h-[108px] border border-[#3C3E4D] rounded-[10px] p-4 mt-4'>
          <h5 className='text-[12px] font-inter font-normal text-[#838699]'>
            Balance
          </h5>
          <h4 className='font-space text-[#F6F6F6] text-[20px] font-bold'>
            {details.quantity} WKC
          </h4>
          <h4 className='font-space text-[#838699] text-[16px] font-normal mt-1'>
            ${details.quantity}
          </h4>
        </div>
        <div className='mt-10 overflow-x-scroll'>
          <table style={{}}>
            <tr className='bg-[#101116] '>
              <td
                style={{
                  width: "53px",
                  paddingTop: "3px",
                  paddingBottom: "3px",
                  paddingLeft: "6px",
                }}
                className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white'
              >
                Rank
              </td>
              <td
                style={{ width: "307px" }}
                className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px] md:pl-[27px] pr-7'
              >
                {" "}
                Address
              </td>
              <td
                style={{ width: "254px" }}
                className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px]'
              >
                {" "}
                Quantity
              </td>
              <td
                style={{ width: "145px" }}
                className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px]'
              >
                {" "}
                Percentage
              </td>
              <td
                style={{ width: "129px" }}
                className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px]  md:pl-[40px] md:pr-[60px]'
              >
                Value
              </td>
            </tr>
            {Detailss.map((detail) => {
              return (
                <tr
                  key={detail.id}
                  style={{ borderBottom: "1px solid #3C3E4D" }}
                >
                  <td
                    style={{
                      width: "33px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                    className='sm:text-[12px] lg:pr-[40px] md:pl-[10px] lg:pl-[20px] lg:text-[14px] text-[10px] font-inter font-normal text-white'
                  >
                    {detail.id}
                  </td>
                  <td
                    style={{
                      width: "287px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                    className='sm:text-[12px] pr-7 md:pr-[-28px] md:pl-[27px] lg:text-[14px] lg:pr-[40px] lg:pl-[40px] text-[10px] font-inter font-normal text-[#21D4AF]'
                  >
                    <Link to={`details/${detail.id}`}>{detail.address}</Link>
                  </td>
                  <td
                    style={{
                      width: "234px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                    className='sm:text-[12px] pr-7 md:pr-[-28px] lg:text-[14px] lg:pr-[40px]  lg:pl-[40px] text-[10px] font-inter font-normal text-white'
                  >
                    {" "}
                    {detail.quantity}
                  </td>
                  <td
                    style={{
                      width: "125px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                    className='sm:text-[12px] pr-7 md:pr-[-28px] lg:text-[14px] lg:pr-[40px] text-[10px] lg:pl-[40px] font-inter font-normal text-white'
                  >
                    {" "}
                    {detail.percentage}
                  </td>
                  <td
                    style={{
                      width: "109px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                    className='sm:text-[12px] pr-7  lg:text-[14px] lg:pr-[120px] md:pl-[40px] md:pr-[60px] lg:pl-[80px] text-[10px] font-inter font-normal text-white'
                  >
                    {" "}
                    {detail.value}
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default EditWhale
