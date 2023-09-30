import React, { useEffect } from "react";
import { xIcon } from "../assets";
import { Link1 } from "../components";

const Sidebar = ({ isSidebarExpanded, toggleSidebar }) => {
  useEffect(() => {
    if (isSidebarExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isSidebarExpanded]);
  return (
    <>
      {isSidebarExpanded && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}></div>
      )}
      <aside
        className={`max-w-md w-full font-primary max-h-screen fixed top-0 bottom-0 bg-white z-50 transition-left duration-300 md:max-w-full ${
          isSidebarExpanded ? "left-0" : "-left-full"
        }`}>
        <button
          className="absolute p-2 top-6 right-6 hover:opacity-60"
          onClick={toggleSidebar}>
          <img src={xIcon} alt="x icon" />
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
