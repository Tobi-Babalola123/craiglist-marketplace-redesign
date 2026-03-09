import { motion } from 'framer-motion';
import { categories } from '../data/mockData';

export function Filters() {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-sm sticky top-24"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Filters</h2>

      {/* Price Range */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Price Range
        </label>
        <div className="space-y-3">
          <div className="flex gap-3">
            <input
              type="number"
              placeholder="Min"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="range"
            min="0"
            max="10000"
            className="w-full accent-blue-600"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Category
        </label>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Condition Filter */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Condition
        </label>
        <div className="space-y-2">
          {['New', 'Like New', 'Excellent', 'Good', 'Fair'].map((condition) => (
            <label key={condition} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{condition}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Location
        </label>
        <input
          type="text"
          placeholder="Enter location"
          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="mt-3">
          <label className="block text-sm text-gray-600 mb-2">Search Radius</label>
          <select className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>5 miles</option>
            <option>10 miles</option>
            <option>25 miles</option>
            <option>50 miles</option>
            <option>100 miles</option>
          </select>
        </div>
      </div>

      {/* Date Posted */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Date Posted
        </label>
        <div className="space-y-2">
          {['Last 24 hours', 'Last 7 days', 'Last 30 days', 'Any time'].map((timeframe) => (
            <label key={timeframe} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="date"
                className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{timeframe}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      <motion.button
        className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Clear Filters
      </motion.button>
    </motion.div>
  );
}
