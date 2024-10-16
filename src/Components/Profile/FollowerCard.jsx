import React from 'react';
import profilePic from "../../assets/Profile.png";
import Button from '../Share/Button';

const FollowerCard = ({ username, profilePicture }) => {
  return (
    <div className="flex items-center p-4 border-b border-gray-200 w-full justify-between">
      <img 
        src={profilePic || profilePicture} 
        alt={username} 
        className="w-12 h-12 rounded-full border border-gray-300"
      />
      <div className="ml-4">
        <p className="text-lg font-semibold">{username}</p>
      </div>
      <Button title={"Follow"} className='px-5'/>
    </div>
  );
};

export default FollowerCard;
