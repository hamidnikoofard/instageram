import React from 'react';
import profilePic from "../../assets/Profile.png";

const ProfileHeader = ({ user }) => {
  const { profilePicture, username, followers, followings } = user;

  return (
    <div className="profile-header flex flex-col md:flex-row items-center justify-center gap-5 p-4">
      <img 
        src={profilePic}
        alt={`${username}'s profile`} 
        className="rounded-full w-24 h-24 border border-solid border-gray-300 shadow-md"
      />
      <div className="user-info text-center md:text-left">
        <h1 className="text-2xl font-bold">{username}</h1>
        <div className="stats flex justify-center md:justify-start space-x-4 mt-2">
          <p><strong>{followers.length}</strong> Followers</p>
          <p><strong>{followings.length}</strong> Following</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
