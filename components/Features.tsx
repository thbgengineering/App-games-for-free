
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <div className="max-w-screen-md mx-auto px-4 mt-8 pb-12">
      <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100">
        <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
            🎮
          </span>
          Why Play This Game?
        </h4>
        <ul className="grid grid-cols-1 gap-4">
          {FEATURES.map((feature) => (
            <li key={feature.id} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm font-medium">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
