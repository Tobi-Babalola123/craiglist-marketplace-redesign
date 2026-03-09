import { Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Listing } from '../data/mockData';

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link to={`/listing/${listing.id}`} className="block group">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Favorite Button */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                setIsFavorited(!isFavorited);
              }}
              className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-700'
                }`}
              />
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1">
                {listing.title}
              </h3>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  ${listing.price.toLocaleString()}
                  {listing.category === 'apartments' && <span className="text-base text-gray-500">/mo</span>}
                  {listing.category === 'jobs' && <span className="text-base text-gray-500">/yr</span>}
                </p>
                <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{listing.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
