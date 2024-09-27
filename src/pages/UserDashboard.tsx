// src/pages/UserDashboard.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "../components/UserProfile";
import UserActivities from "../components/UserActivities";
// import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";


type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
};

type Activity = {
  id: number;
  title: string;
  body: string;
};

const UserDashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const activitiesResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        setUser(userResponse.data);
        setActivities(activitiesResponse.data);
      } catch (error) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) return <p className="flex justify-center items-center h-screen font-semibold text-2xl">Loading... <FaSpinner className=" mx-4 animate-spin text-blue-500 text-4xl"/></p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
  <div className="flex flex-col md:flex-col lg:flex-row flex-grow">
    {/* Left Column for User Profile */}
    <div className="w-full lg:w-1/3 text-white pt-6 px-6 lg:overflow-hidden overflow-hidden lg:sticky lg:top-0 h-full">
      {user && <UserProfile user={user} />}
    </div>

    {/* Right Column for User Activities */}
    <div className="w-full lg:w-2/3 p-6">
      <UserActivities activities={activities} />
    </div>
  </div>
</div>
  );
};

export default UserDashboard;
