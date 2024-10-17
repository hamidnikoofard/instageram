import React from "react";
import profilePic from "../../assets/Profile.png";
import Button from "../Share/Button";
import { Link } from "react-router-dom";

const FollowerCard = ({ username, profilePicture, id }) => {
  return (
    <Link to={id}>
      <div className="flex items-center p-4 border-b border-gray-200 w-full justify-between gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <img
            src={profilePic || profilePicture}
            alt={username}
            className="md:w-12 md:h-12 h-9 w-9 rounded-full border border-gray-300"
          />
          <p className="md:text-lg text-sm font-semibold ml-4">{username}</p>
        </div>
        <Button title={"Follow"} className="px-5 w-full sm:w-auto" />
      </div>
    </Link>
  );
};

export default FollowerCard;
