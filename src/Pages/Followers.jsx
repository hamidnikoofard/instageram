import React, { useEffect, useState } from "react";
import FollowerCard from "../Components/Profile/FollowerCard";
import { getUser } from "../utils/manageUser&Id";
import axios from "axios";
import Loading from "../Components/Share/Loading";

const Followers = () => {
  const userName = getUser();
  const [followers, setfollowers] = useState([]);
  const [loading , setLoading] = useState(true)
 
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://instagram-backend-ugd3.onrender.com/api/user/followers/${userName}`
      );
      setfollowers(response.data.data.followers);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen flex-col px-4 bg-gray-100">
      <div className="w-full max-w-[420px] p-6 md:p-10 bg-white border shadow-md border-gray-300 flex flex-col items-center mb-3 rounded-md mt-4">
        {loading ? (
          <Loading />
        ) : followers && followers.length > 0 ? (
          followers.map((follower) => (
            <FollowerCard
              key={follower._id}
              username={follower.username}
              profilePicture={follower.profilePicture}
            />
          ))
        ) : (
          <p>No followers found</p>
        )}
      </div>
    </div>
  );
};

export default Followers;
