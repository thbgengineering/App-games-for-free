
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div className="max-w-screen-md mx-auto px-4 mt-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search games..."
          className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400/20 focus:border-pink-300 transition-all shadow-sm shadow-gray-100"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
    </div>
  );
};

export default SearchBar;
