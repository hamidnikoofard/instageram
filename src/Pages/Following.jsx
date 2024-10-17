import React, { useEffect, useState } from "react";
import { getUser } from "../utils/manageUser&Id";
import axios from "axios";
import FollowerCard from "../Components/Profile/FollowerCard";
import Loading from "../Components/Share/Loading";

const Following = () => {
  const userName = getUser();
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://instagram-backend-ugd3.onrender.com/api/user/followings/${userName}`
      );
      setFollowing(response.data.followings);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen flex-col px-4 bg-gray-100">
      <div className="w-full max-w-5xl p-6 md:p-10 bg-white border shadow-md border-gray-300 flex flex-col items-center mb-3 rounded-md mt-4">
        {loading ? ( 
          <Loading />
        ) : following.length > 0 ? (
          following.map((following) => (
            <FollowerCard
              key={following._id}
              username={following.username}
              profilePicture={following.profilePicture}
            />
          ))
        ) : (
          <p>No followers found</p>
        )}
      </div>
    </div>
  );
};

export default Following;
