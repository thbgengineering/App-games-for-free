
import { Category, Feature } from './types';
import logo from './games.png';


export const CATEGORIES: Category[] = [
  { id: 'girls', name: 'Girls Games' },
  { id: 'boys', name: 'Boys Games' },
  { id: 'sports', name: 'Sports' },
  { id: 'brain', name: 'Brain Games' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'puzzle', name: 'Puzzle' },
  { id: 'simulation', name: 'Simulation' },
];

export const FEATURES: Feature[] = [
  { id: 1, text: 'Easy and fun to play' },
  { id: 2, text: 'Hundreds of makeup tools and styles' },
  { id: 3, text: 'Beautiful characters and animations' },
  { id: 4, text: 'Free-to-play' },
  { id: 5, text: 'Updated weekly with new looks' },
];

export const APP_DETAILS = {
  name: 'Glam Makeup',
  rating: 4.7,
  downloads: '1,350,000+',
  description: 'Step into the world of beauty and creativity with Games for free. Style characters with stunning makeup, trendy hairstyles, and fashionable accessories. Perfect for players who love creativity, fashion, and fun!',
  bannerUrl: logo,
  logoUrl: logo,
};
