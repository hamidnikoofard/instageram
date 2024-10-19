import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUser } from "../utils/manageUser&Id";
import ProfileHeader from "../Components/Profile/ProfileHeader";
import Loading from "../Components/Share/Loading";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [article, setArticle] = useState([]);
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

  const getArticle = async () => {
    try {
      const response = (
        await axios.get(
          `https://instagram-backend-ugd3.onrender.com/api/article/u/${userName}`
        )
      ).data;
      setArticle(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getArticle();
  }, []);

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen p-6">
      <div className="w-full max-w-5xl px-4 py-6">
        <div className="bg-white p-8 rounded-xl shadow-lg mb-10">
          {/* Profile Header */}
          <div>
            {userData ? (
              <ProfileHeader
                user={userData}
                title={"Edit Profile"}
                address={"/home/editprofile"}
                variant={"secondary"}
              />
            ) : (
              <Loading />
            )}
          </div>

          {/* Article Section */}
          {/* <div className="flex flex-col items-center mt-10 border-t border-solid border-gray-300 pt-6">
            {article.length > 0 ? (
              <>
                <h1 className="text-xl font-semibold text-gray-800 mb-6">
                  Articles
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {article.map((art, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                      <h2 className="text-lg font-semibold text-gray-700 mb-2">
                        {art.title}
                      </h2>
                      <p className="text-gray-600">{art.content}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <h2 className="text-lg font-semibold text-gray-500">No posts yet</h2>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
