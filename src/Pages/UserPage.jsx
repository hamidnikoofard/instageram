import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Share/Loading";
import ProfileHeader from "../Components/Profile/ProfileHeader";

const UserPage = () => {
  const userId = useParams().userid;
  const [userData , setUserData] = useState()
  const [loading , setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    try {
      const response = (
        await axios.get(
          `https://instagram-backend-ugd3.onrender.com/api/user/${userId}`
        )
      ).data;
      console.log(response.user);
      setUserData(response.user)
    } catch (error) {
      console.log(error);
    } finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    getData()
  } , [])

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
    <div className="w-full max-w-5xl px-4 py-6">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        {userData ? (
          <ProfileHeader user={userData} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  </div>
  );
};

export default UserPage;
