
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import GameBanner from './components/GameBanner';
import GameDetails from './components/GameDetails';
import Features from './components/Features';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-8 flex flex-col antialiased">
      {/* Header */}
      <Header />

      <main className="flex-grow">
        {/* Search Bar */}
        <SearchBar />

        {/* Categories Navigation */}
        <Categories />

        {/* Main Banner */}
        <GameBanner />

        {/* Game Info & Download */}
        <GameDetails />

        {/* Why Play Section */}
        <Features />
      </main>

      {/* Footer */}
      <footer className="max-w-screen-md mx-auto px-4 py-8 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="text-xs text-gray-400 hover:text-pink-500 transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-gray-400 hover:text-pink-500 transition-colors">Terms of Service</a>
          <a href="#" className="text-xs text-gray-400 hover:text-pink-500 transition-colors">Support</a>
        </div>
        <p className="text-[10px] text-gray-300 font-medium">
          &copy; 2025 Games for free. All rights reserved. 
          <br />Designed for creative souls.
        </p>
      </footer>
    </div>
  );
};

export default App;
