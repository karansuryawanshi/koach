import React from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import ImageViewer from 'react-image-viewer-zoom'
import 'react-image-viewer-zoom/dist/style.css' 

type UserProfileProps = {
  user: {
    name: string;
    email: string;
    phone: string;
    username: string;
  };
};

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="h-full max-h-fit items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md rounded-lg xl:mt-10 p-6 flex flex-col">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">User Profile</h2>
      <div className="flex flex-col items-center md:items-start space-y-4">
        <img
          className="rounded-xl w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover mb-4"
          src="https://plus.unsplash.com/premium_photo-1675129522693-bd62ffe5e015?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <p className="flex items-center text-sm md:text-base">
          <FaUser className="mr-2" />
          <strong className="px-1">Name: </strong> {user.name}
        </p>
        <p className="flex items-center text-sm md:text-base">
          <FaEnvelope className="mr-2" />
          <strong className="px-1">Email: </strong> {user.email}
        </p>
        <p className="flex items-center text-sm md:text-base">
          <FaPhone className="mr-2" />
          <strong className="px-1">Phone: </strong> {user.phone}
        </p>
        <p className="flex items-center text-sm md:text-base">
          <FaUser className="mr-2" />
          <strong className="px-1">Username: </strong> {user.username}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
