import React, { useState } from "react";
import { Detailss } from "../data/data";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

function Details() {
  return (
    <div className="md:px-32 px-7 overflow-x-scroll sm:overflow-hidden">
      <table style={{}}>
        <tr className="bg-[#101116] ">
          <td
            style={{
              width: "53px",
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingLeft: "6px",
            }}
            className="text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white"
          >
            Rank
          </td>
          <td
            style={{ width: "307px" }}
            className="text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px] md:pl-[27px]"
          >
            Address
          </td>
          <td
            style={{ width: "254px" }}
            className="text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px]"
          >
            Quantity
          </td>
          <td
            style={{ width: "145px" }}
            className="text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px]"
          >
            Percentage
          </td>
          <td
            style={{ width: "129px" }}
            className="text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px]  md:pl-[40px] md:pr-[60px]"
          >
            Value
          </td>
        </tr>
        <div></div>
      </table>
    </div>
  );
}

export default Details;
