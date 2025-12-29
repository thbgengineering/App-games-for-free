
import React from 'react';
import { APP_DETAILS } from '../constants';

const GameBanner: React.FC = () => {
  return (
    <div className="max-w-screen-md mx-auto px-4 mt-8">
      <div className="relative group overflow-hidden rounded-3xl shadow-xl shadow-gray-200">
        <img
          src={APP_DETAILS.bannerUrl}
          alt={APP_DETAILS.name}
          className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div className="text-white">
            <span className="bg-pink-500 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md mb-2 inline-block">
              Featured Game
            </span>
            <h2 className="text-2xl font-bold">{APP_DETAILS.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBanner;
