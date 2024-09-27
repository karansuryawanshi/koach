import React from "react";

type Activity = {
  id: number;
  title: string;
  body: string;
};

type UserActivitiesProps = {
  activities: Activity[];
};

const UserActivities: React.FC<UserActivitiesProps> = ({ activities }) => {
  return (
    <div className="mt-6 h-full">
        <div className="flex">
            <h2 className="relative text-3xl font-bold mb-6 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-pink-500 after:via-purple-500 after:to-indigo-500">User Activities</h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              {activity.title}
            </h3>
            <p className="text-gray-600">{activity.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserActivities;
