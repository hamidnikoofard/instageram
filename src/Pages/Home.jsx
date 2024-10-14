import React, { useContext, useEffect } from "react";
import { UserContext } from "../Components/auth/UserProvider";
import axios from "axios";
import { getUser } from "../utils/manageUser&Id";

const Home = () => {
  const userName = getUser();

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://instagram-backend-ugd3.onrender.com/api/user/u/${userName}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <span>{userName}</span>
    </div>
  );
};

export default Home;
