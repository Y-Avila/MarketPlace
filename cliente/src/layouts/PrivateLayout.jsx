import React from "react";
import Sidebar from "components/Sidebar";

const PrivateLayout = ({ children }) => {
  return (
    <>
      <div className="espacioSidebar">
        <div className="sidebarMain">
          <Sidebar />
          <main className="mainSidebar">{children}</main>
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
