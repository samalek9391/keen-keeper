import React, { useContext } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { TimelineContext } from '../../../Context/TimelineContext';




const States = () => {

  const { timeline } = useContext(TimelineContext);

  // 🎯 Count interactions
  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timeline.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });



    const data = [
    { name: "Text", value: counts.Text },
    { name: "Call", value: counts.Call },
    { name: "Video", value: counts.Video },
  ];



    const COLORS = ["#7C3AED", "#1F2937", "#22C55E"];


    return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* Heading */}
      <h1 className="text-2xl text-[#1F2937] font-semibold mb-6">
        Friendship Analytics
      </h1>

      {/* Card */}
      <div className="bg-white rounded-xl shadow p-6 max-w-3xl my-10 mx-auto">
        
        <h3 className="mb-4 text-xl text-[#244D3F]">
          By Interaction Type
        </h3>

        {/* Chart */}
        <div className="w-full h-75">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    );
};

export default States;