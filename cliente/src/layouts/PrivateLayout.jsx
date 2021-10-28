import React from "react";
import Sidebar from "components/Sidebar";
import "../style/Sidebar.css";

const PrivateLayout = ({ children }) => {
  
  return (
    <>
      <div className="espacioSidebar">
        <>
          <Sidebar />
        </>
        <main className="mainSidebar">{children}</main>
      </div>
    </>
  );
};

export default PrivateLayout;
