import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  MessageCircle,
  Share2,
  Star,
  ChevronLeft,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import { Header } from "../components/Header";
import { ListingCard } from "../components/ListingCard";
import { mockListings } from "../data/mockData";

export function ListingDetail() {
  const { id } = useParams();
  const listing = mockListings.find((l) => l.id === id);
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!listing) {
    return <div>Listing not found</div>;
  }

  // Mock additional images
  const images = [listing.image, listing.image, listing.image, listing.image];
  const similarListings = mockListings
    .filter((l) => l.category === listing.category && l.id !== listing.id)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to listings</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={images[selectedImage]}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart
                      className={`w-6 h-6 transition-colors ${
                        isFavorited
                          ? "fill-red-500 text-red-500"
                          : "text-gray-700"
                      }`}
                    />
                  </motion.button>
                  <motion.button
                    className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="w-6 h-6 text-gray-700" />
                  </motion.button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-blue-600 scale-95"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Listing Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {listing.title}
                  </h1>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-5 h-5" />
                      <span>{listing.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-5 h-5" />
                      <span>Posted {formatDate(listing.datePosted)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-5xl font-bold text-gray-900">
                  ${listing.price.toLocaleString()}
                  {listing.category === "apartments" && (
                    <span className="text-2xl text-gray-500">/mo</span>
                  )}
                  {listing.category === "jobs" && (
                    <span className="text-2xl text-gray-500">/yr</span>
                  )}
                </div>
              </div>

              {listing.condition && (
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
                    Condition: {listing.condition}
                  </span>
                </div>
              )}

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Description
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {listing.description}
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Location
                </h2>
                <div className="aspect-[16/9] rounded-2xl bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">
                      Map showing {listing.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Seller Card */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24 mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {listing.seller && (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {listing.seller.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {listing.seller.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">
                          {listing.seller.rating} rating
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Joined{" "}
                        {new Date(listing.seller.joinedDate).toLocaleDateString(
                          "en-US",
                          { month: "long", year: "numeric" },
                        )}
                      </p>
                    </div>
                  </div>

                  <motion.button
                    className="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2 mb-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Message Seller
                  </motion.button>

                  <motion.button
                    className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Make Offer
                  </motion.button>
                </>
              )}
            </motion.div>
          </div>
        </div>

        {/* Similar Listings */}
        {similarListings.length > 0 && (
          <motion.section
            className="mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Similar Listings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarListings.map((similarListing) => (
                <ListingCard key={similarListing.id} listing={similarListing} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
