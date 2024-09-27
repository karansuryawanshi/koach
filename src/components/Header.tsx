// src/components/Header.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

const Header: React.FC = () => {
    const navigate = useNavigate()
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold" onClick={()=>{navigate("/")}}>User Dashboard</h1>
        <nav>
          <ul className="flex space-x-3">
            <li>
              <IoSearchSharp className="text-2xl"/>
            </li>
            <li>
              <IoNotificationsCircle className="text-2xl"/>
            </li>
            <li>
              <RxAvatar className="text-2xl"/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
