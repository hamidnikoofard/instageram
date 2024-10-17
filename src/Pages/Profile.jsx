import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUser } from "../utils/manageUser&Id";
import ProfileHeader from "../Components/Profile/ProfileHeader";
import Loading from "../Components/Share/Loading";


const Profile = () => {
  const [userData, setUserData] = useState(null);
  const userName = getUser();

  const getData = async () => {
    try {
      const response = (
        await axios.get(
          `https://instagram-backend-ugd3.onrender.com/api/user/u/${userName}`
        )
      ).data;
      setUserData(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-5xl px-4 py-6">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          {userData ? (
            <ProfileHeader user={userData} title={"Edit Profile"} address={"/home/editprofile"}/>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
