import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { Header } from "../components/Header";
import { Filters } from "../components/Filters";
import { ListingCard } from "../components/ListingCard";
import { mockListings } from "../data/mockData";

export function Listings() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  // Filter listings by category if provided
  const filteredListings = categoryFilter
    ? mockListings.filter((listing) => listing.category === categoryFilter)
    : mockListings;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Results Count */}
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Search Results</h1>
            <p className="text-gray-600 mt-1">
              {filteredListings.length} listings found
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
          </button>

          {/* Sort Dropdown */}
          <div className="hidden sm:block">
            <select className="px-4 py-2 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Most Recent</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <Filters />
          </aside>

          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              className="lg:hidden fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setShowFilters(false)}
            >
              <motion.div
                className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto"
                initial={{ x: 320 }}
                animate={{ x: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <Filters />
              </motion.div>
            </motion.div>
          )}

          {/* Main Content - Listings Grid */}
          <main className="flex-1">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {filteredListings.map((listing) => (
                <motion.div
                  key={listing.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <ListingCard listing={listing} />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <motion.div
              className="flex justify-center gap-2 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <button className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
                Next
              </button>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
