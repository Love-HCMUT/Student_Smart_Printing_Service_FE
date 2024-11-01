import React from 'react';

const InfoCards = ({ totalPapers, paperSize, recentTransitions }) => {
  return (
    <div className="flex gap-6 p-8">
      <div className="flex flex-col justify-between bg-white shadow-md rounded-lg p-6 w-1/4 max-w-xs"> 
        <div>
          <h3 className="text-gray-500 text-lg">Total papers</h3>
          <p className="text-4xl font-bold text-gray-800 mt-2">{totalPapers}</p> 
        </div>
        <p className="text-gray-500 mt-2">{paperSize}</p> 
      </div>

      {/* Recent Transition Card */}
      <div className="flex flex-col bg-white shadow-md rounded-lg p-6 w-1/4 max-w-xs">
        <h3 className="text-gray-500 text-lg">Recent transition</h3>
        <ul className="mt-4 space-y-2">
          {recentTransitions.map((transition, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className={`text-${transition.color}-500`}>●</span> 
              <p className="ml-2">{transition.text}</p> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCards;
