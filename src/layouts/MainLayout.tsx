import React from 'react';

import Nav from '../containers/Nav/Navbar/Nav';
const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      {/* aici pui doar partile comune (care se repeta in mai multe componente) */}
      <div
        style={{
          width: '100%',
          margin: '0',
          padding: '0',
        }}
      >
        <Nav />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
