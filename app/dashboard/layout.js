"use client"
import React, { useState } from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";
import { UserCourseListContext } from "../_context/UserCourseListContext";

const DashboardLayout = ({ children }) => {
  const [userCourseList, setUserCourseList] = useState([])
  return (
    <UserCourseListContext.Provider value={{ userCourseList, setUserCourseList }}>

    <div>
      <div className="md:w-64 hidden md:block">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <Header />
        <div className="p-10">{children}</div>
      </div>
    </div>
    </UserCourseListContext.Provider>

  );
};

export default DashboardLayout;
