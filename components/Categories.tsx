
import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('girls');

  return (
    <div className="max-w-screen-md mx-auto px-4 mt-6">
      <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white border-transparent shadow-md shadow-pink-200'
                : 'bg-white text-gray-600 border-gray-200 hover:border-pink-200 hover:text-pink-500'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
