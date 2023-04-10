import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Detailss } from "../data/data";
import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons";
function Users() {
  const [users, setUsers] = useState(Detailss.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <tr key={user.id} style={{ borderBottom: "1px solid #3C3E4D" }}>
          <td
            style={{
              width: "33px",
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
            className="sm:text-[12px] lg:pr-[40px] md:pl-[10px] lg:pl-[20px] lg:text-[14px] text-[10px] font-inter font-normal text-white"
          >
            {user.id}
          </td>
          <td
            style={{
              width: "287px",
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
            className="sm:text-[12px] pr-7 md:pr-[-28px] md:pl-[27px] lg:text-[14px] lg:pr-[40px] lg:pl-[40px] text-[10px] font-inter font-normal text-[#21D4AF]"
          >
            <Link to={`details/${user.id}`}>{user.address}</Link>
          </td>
          <td
            style={{
              width: "234px",
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
            className="sm:text-[12px] pr-7 md:pr-[-28px] lg:text-[14px] lg:pr-[40px]  lg:pl-[40px] text-[10px] font-inter font-normal text-white"
          >
            {" "}
            {user.quantity}
          </td>
          <td
            style={{
              width: "125px",
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
            className="sm:text-[12px] pr-7 md:pr-[-28px] lg:text-[14px] lg:pr-[40px] text-[10px] lg:pl-[40px] font-inter font-normal text-white"
          >
            {" "}
            {user.percentage}
          </td>
          <td
            style={{
              width: "109px",
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
            className="sm:text-[12px] pr-7  lg:text-[14px] lg:pr-[120px] md:pl-[40px] md:pr-[60px] lg:pl-[80px] text-[10px] font-inter font-normal text-white"
          >
            {" "}
            {user.value}
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="md:px-32 px-5 overflow-x-scroll sm:overflow-hidden">
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
        {displayUsers}
      </table>
      <IconContext.Provider value={{ color: "black", size: "18px" }}>
        <div className="flex justify-center items-center ">
          <ReactPaginate
            className="p-6 flex gap-5 text-white "
            previousLabel={
              <div className="md:p-[8px] p-[4px] bg-[#D5D7E6] flex justify-center items-center rounded-[4px]">
                <FiChevronLeft />
              </div>
            }
            nextLabel={
              <div className="md:p-[8px] p-[4px] bg-[#D5D7E6] flex justify-center items-center rounded-[4px]">
                <FiChevronRight />
              </div>
            }
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
           
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Users;
