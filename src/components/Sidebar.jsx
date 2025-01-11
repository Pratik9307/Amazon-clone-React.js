import React from 'react';
import "./Sidebar.css"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white shadow-lg z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <button
          className="text-gray-400 hover:text-white transition-colors duration-200"
          onClick={toggleSidebar}
        >
          Close
        </button>
      </div>
     

    </div>
  );
};

export default Sidebar;
