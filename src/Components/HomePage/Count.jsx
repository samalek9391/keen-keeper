import React from 'react';

const Count = () => {

  const data = [
    { id: 1, number: 10, label: "Total Friends" },
    { id: 2, number: 3, label: "On Track" },
    { id: 3, number: 6, label: "Need Attention" },
    { id: 4, number: 12, label: "Interactions This Month" },
  ];


    return (
    <div className="bg-[#F8FAFC] py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-b border-[#E9E9E9] py-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm p-6 text-center"
          >
            <h2 className="text-3xl font-bold text-[#244D3F] mb-2">
              {item.number}
            </h2>
            <p className="text-[#64748B]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Count;