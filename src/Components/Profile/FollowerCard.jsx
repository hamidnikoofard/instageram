import React from 'react';
import profilePic from "../../assets/Profile.png";
import Button from '../Share/Button';

const FollowerCard = ({ username, profilePicture }) => {
  return (
    <div className="flex items-center p-4 border-b border-gray-200 w-full justify-between gap-4">
      <div className="flex items-center w-full sm:w-auto">
        <img
          src={profilePic || profilePicture}
          alt={username}
          className="w-12 h-12 rounded-full border border-gray-300"
        />
        <p className="md:text-lg text-sm font-semibold ml-4">{username}</p>
      </div>
      <Button title={"Follow"} className='px-5 w-full sm:w-auto'/>
    </div>
  );
};

export default FollowerCard;