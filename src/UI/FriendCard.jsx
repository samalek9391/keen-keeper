import React from 'react';
import { useNavigate } from 'react-router';

const FriendCard = ({friend}) => {
    
    const navigate = useNavigate();

  const {
    id,
    name,
    picture,
    days_since_contact,
    tags,
    status,
  } = friend;

  const statusStyle = {
    "overdue": "bg-red-400 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-green-400 text-white",
  };


    return (
        <div onClick={()=> navigate(`/friend/${id}`)} className="bg-gray-100 rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition mb-20 w-full mx-auto">
      {/* Profile Image */}
      <img
        src={picture}
        alt={name}
        className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
      />

      {/* Name */}
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

      {/* Days ago */}
      <p className="text-gray-500 text-sm mb-3">
        {days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mb-3 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Status */}
      <span
        className={`text-xs px-3 py-1 rounded-full ${statusStyle[status]}`}
      >
        {status}
      </span>
        </div>
    );
};

export default FriendCard;