import React from "react";
import coin from '../../assets/coin.svg';
import '../../styles/styles.css'
const InfoCards = ({ totalCoins, recentTransitions }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-8 justify-between items-start md:items-stretch">
      <div className="flex flex-col justify-center bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
        <div>
          <h3 className="text-gray-500 text-lg">Total coins</h3>
          <p className="text-4xl font-bold text-gray-800 mt-2 ml-16">
            {totalCoins}
            <img src={coin} className="w-8 h-8 inline-block ml-2 coin-animation" alt="coin" />
          </p>
        </div>
      </div>

      {/* Recent Transactions Card */}
      <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
        <h3 className="text-gray-500 text-lg">Recent Transactions</h3>
        <ul className="mt-4 space-y-2 overflow-y-auto">
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