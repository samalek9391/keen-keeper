import React from 'react';
import { Pie, PieChart } from 'recharts';


const data = [
  { name: "Call", value: 4 },
  { name: "Text", value: 2 },
  { name: "Video", value: 3 }
];

const States = () => {
    return (
    <div className="p-4">
      <h1>Friendship Analytics</h1>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={100} />
      </PieChart>
    </div>
    );
};

export default States;