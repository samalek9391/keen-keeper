import React, { useContext, useState } from 'react';
import { TimelineContext } from '../../Context/TimelineContext';
import { FaPhone, FaVideo } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';



const Timeline = () => {

    const { timeline } = useContext(TimelineContext);
     const [filter, setFilter] = useState("all");


     const filteredTimeline = 
     filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);




    const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <FaPhone className="text-gray-600" />;
      case "Text":
        return <BsChatDots className="text-gray-600" />;
      case "Video":
        return <FaVideo className="text-gray-600" />;
      default:
        return null;
    }
  };

    return (
    // <div className="p-4">
    //   <h1 className="text-2xl">Timeline</h1>

    //   {timeline.map((item, i) => (
    //     <div key={i} className="border border-[#E9E9E9] rounded-xl p-2 my-2">
    //         <p>{item.title}</p>
    //         <p>{new Date(item.date).toLocaleDateString()}</p>
    //     </div>
    //   ))}
    // </div>


    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-4">Timeline</h1>

      {/* Filter Dropdown */}
      <select
        className="border rounded-lg px-3 py-2 mb-6 text-gray-600"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Filter timeline</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

      {/* Timeline List */}
      <div className="space-y-3">
        {filteredTimeline.length === 0 ? (
          <p className="text-gray-500">No interactions yet</p>
        ) : (
          filteredTimeline.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              {/* Icon */}
              <div className="bg-gray-100 p-3 rounded-full">
                {getIcon(item.type)}
              </div>

              {/* Content */}
              <div>
                <p className="text-gray-800 font-medium">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    );
};

export default Timeline;