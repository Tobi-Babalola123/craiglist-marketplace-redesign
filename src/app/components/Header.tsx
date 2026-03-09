import { Search, MapPin, User, Plus } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              craigslist
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <motion.div
              className="relative w-full"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search items, jobs, housing..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </motion.div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Location Selector */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span className="text-sm">San Francisco</span>
            </button>

            {/* Profile */}
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-50 transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </button>

            {/* Post Listing Button */}
            <motion.button
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">Post</span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
