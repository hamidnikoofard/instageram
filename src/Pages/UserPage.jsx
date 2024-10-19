import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Share/Loading";
import ProfileHeader from "../Components/Profile/ProfileHeader";
import { getToken } from "../utils/manageToken";

const UserPage = () => {
  const userId = useParams().userid;
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = (
        await axios.get(
          `https://instagram-backend-ugd3.onrender.com/api/user/${userId}`
        )
      ).data;
      setUserData(response.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const followUser = async () => {
    try {
      const response = await axios.put(
        `https://instagram-backend-ugd3.onrender.com/api/user/${userData.username}/follow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-5xl px-4 py-6">
        <div className="bg-white p-8 rounded-xl shadow-lg mb-10">
          {userData ? (
            <ProfileHeader
              user={userData}
              title={"Follow"}
              onClick={followUser}
            />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
