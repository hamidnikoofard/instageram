import React from "react";
import profilePic from "../../assets/Profile.png";
import Button from "../Share/Button";
import { Link } from "react-router-dom";

const ProfileHeader = ({ user }) => {
  const { profilePicture, username, followers, followings } = user;

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-start md:gap-10 mt-10 w-full max-w-5xl mx-auto px-4">
      <div className="flex justify-center md:justify-start">
        <img
          src={profilePic || profilePicture}
          alt={`${username}'s profile`}
          className="rounded-full w-24 h-24 md:w-36 md:h-36 border-2 border-gray-300"
        />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0 space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">{username}</h1>
        </div>

        <div className="flex gap-6 text-gray-600">
          <Link to={"/home/followers"}>
            <strong>{followers.length}</strong> Followers
          </Link>

          <Link to={"/home/followings"}>
            <strong>{followings.length}</strong> Following
          </Link>
        </div>

        <div className="text-gray-500">
          <p>This is the user's bio. Add a description here...</p>
        </div>
        <div className="w-full">
          <Link to={"/home/editprofile"}>
            <Button
              title="Edit Profile"
              variant="secondary"
              className="text-sm py-1 px-4"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
