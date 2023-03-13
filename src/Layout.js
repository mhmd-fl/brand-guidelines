import React from 'react';
import Sidebar from './pages/components/Sidebar';
import './Layout.css';

function Layout(props) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Layout;