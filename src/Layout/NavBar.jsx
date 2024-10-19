import React from "react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineMovie } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Outlet } from "react-router-dom";
import NavItem from "../Components/Share/NavItem";
import { IoAddCircleOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="pb-16"> 
        <Outlet />
      </div>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-screen-lg mx-auto shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <NavItem to="/home" icon={<AiOutlineHome size={24} />} label="Home" />
            <NavItem to="/home/search" icon={<AiOutlineSearch size={24} />} label="Search" />
            <NavItem to="/home/addpost" icon={<IoAddCircleOutline size={24} />} label="Add Post" />
            <NavItem to="/home/activity" icon={<AiOutlineHeart size={24} />} label="Activity" />
            <NavItem to="/home/profile" icon={<CgProfile size={24} />} label="Profile" />
          </div>
        </div>
      </nav>
    </div>
  );
};



export default NavBar;