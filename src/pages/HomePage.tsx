// src/pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";


type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
};

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="flex justify-center items-center h-screen font-semibold text-2xl">Loading users... <FaSpinner className=" mx-4 animate-spin text-blue-500 text-4xl"/></p>;
  if (error) return <p className="text-center">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="flex items-center justify-center">
            <h1 className="relative text-4xl font-bold text-center pb-2 mb-6 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-pink-500 after:via-purple-500 after:to-indigo-500">
                User List
            </h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer"
            onClick={()=>{navigate("/users/"+user.id)}}>
            {/* <h2 className="text-xl font-semibold">{user.id}</h2> */}
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.username}</p>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
