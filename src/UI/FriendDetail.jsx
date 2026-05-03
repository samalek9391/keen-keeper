import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';


import { toast } from 'react-toastify';
import { TimelineContext } from '../Context/TimelineContext';

const FriendDetail = () => {

    const friends = useLoaderData(); // all friends
    const { id } = useParams();

    const friend = friends.find((f) => f.id == id);

    console.log(id);

    if (!friend) {
    return <h2>Friend not found</h2>;
  }


const {
  name,
  picture,
  email,
  days_since_contact,
  status,
  tags,
  bio,
  goal,
  next_due_date,
} = friend;

const { addEntry } = useContext(TimelineContext);

const handleAction = (type) => {
  addEntry({
    type,
    title: `${type} with ${name}`,
    date: new Date(),
  });

  toast.success(`${type} added!`);
};

    // Status color
  const statusStyle = {
    "overdue": "bg-red-400 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-green-400 text-white",
  };


  //   const handleAction = (type) => {
  //   toast.success(`${type} with ${name} added!`);
  // };

    return (
        <div>
   <div className="p-6 grid md:grid-cols-2 gap-6">
      
      {/* LEFT SIDE */}
      <div className="bg-gray-100 rounded-xl p-6 shadow text-center">
        
        <img
          src={picture}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <h2 className="text-xl font-semibold">{name}</h2>

        <span className={`px-3 py-1 text-sm rounded-full ${statusStyle[status]}`}>
          {status === "almost due" ? "Almost Due" : status}
        </span>

        {/* Tags */}
        <div className="flex justify-center gap-2 mt-3 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="text-gray-600 mt-4">{bio}</p>

        {/* Email */}
        <p className="text-sm text-gray-500 mt-2">{email}</p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <button className="bg-yellow-400 px-3 py-2 rounded">⏰ Snooze</button>
          <button className="bg-blue-400 px-3 py-2 rounded text-white">📦 Archive</button>
          <button className="bg-red-500 px-3 py-2 rounded text-white">🗑️ Delete</button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-4">
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white shadow p-4 rounded text-center">
            <p className="text-gray-500 text-sm">Days</p>
            <h2 className="text-lg font-bold">{days_since_contact}</h2>
          </div>

          <div className="bg-white shadow p-4 rounded text-center">
            <p className="text-gray-500 text-sm">Goal</p>
            <h2 className="text-lg font-bold">{goal}</h2>
          </div>

          <div className="bg-white shadow p-4 rounded text-center">
            <p className="text-gray-500 text-sm">Next Due</p>
            <h2 className="text-sm font-bold">{next_due_date}</h2>
          </div>
        </div>

        {/* Goal Card */}
        <div className="bg-white shadow p-4 rounded">
          <div className="flex justify-between">
            <h3 className="font-semibold">Relationship Goal</h3>
            <button className="text-green-600">Edit</button>
          </div>
          <p className="text-gray-600 mt-2">
            Stay in touch every {goal} days
          </p>
        </div>

        {/* Quick Check-In */}
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-semibold mb-3">Quick Check-In</h3>

          <div className="flex gap-3">
            <button
              onClick={() => handleAction("Call")}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              📞 Call
            </button>

            <button
              onClick={() => handleAction("Text")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              💬 Text
            </button>

            <button
              onClick={() => handleAction("Video")}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              🎥 Video
            </button>
          </div>
        </div>

      </div>
    </div>
        </div>
    );
};

export default FriendDetail;