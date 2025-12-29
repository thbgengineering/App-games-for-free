
import React from 'react';
import { Star, Download, Users } from 'lucide-react';
import { APP_DETAILS } from '../constants';

const GameDetails: React.FC = () => {
  const handleDownload = () => {
    // Logic for CTA action (CPA link redirect usually)
    window.location.href = '#';
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 mt-8">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-inner flex-shrink-0">
              <img src={APP_DETAILS.logoUrl} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900">{APP_DETAILS.name}</h3>
              <p className="text-pink-500 text-sm font-semibold">Studio Glimmer ✨</p>
            </div>
          </div>

          <div className="flex items-center gap-6 border-t md:border-t-0 pt-4 md:pt-0">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-amber-500">
                <span className="font-bold text-lg">{APP_DETAILS.rating}</span>
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-xs text-gray-400">Ratings</span>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1 text-gray-700 font-bold text-lg">
                <Users className="w-4 h-4 text-pink-500" />
                <span>2.4M+</span>
              </div>
              <span className="text-xs text-gray-400">Players</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="font-bold text-gray-900 mb-2">About the Game</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {APP_DETAILS.description}
          </p>
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          DOWNLOAD NOW
        </button>
        <p className="text-center text-[10px] text-gray-400 mt-3 font-medium uppercase tracking-widest">
          Version 4.12.0 • 124 MB • Free-to-Play
        </p>
      </div>
    </div>
  );
};

export default GameDetails;
