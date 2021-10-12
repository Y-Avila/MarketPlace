import React from 'react';
import Sidebar from 'components/Sidebar';


const PrivateLayout = ({ children }) => {
  return (
    <div >
      <div>
          <Sidebar />
        <main >
          {children}
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
