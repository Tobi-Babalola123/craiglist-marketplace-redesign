import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  Car,
  Building2,
  Briefcase,
  Smartphone,
  Armchair,
  Wrench,
} from "lucide-react";

interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
}

const iconMap: Record<string, any> = {
  Car,
  Building2,
  Briefcase,
  Smartphone,
  Armchair,
  Wrench,
};

export function CategoryCard({ id, name, icon }: CategoryCardProps) {
  const Icon = iconMap[icon];

  return (
    <Link to={`/listings?category=${id}`}>
      <motion.div
        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-100"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
            {Icon && <Icon className="w-8 h-8 text-white" />}
          </div>
          <h3 className="text-base font-semibold text-gray-900">{name}</h3>
        </div>
      </motion.div>
    </Link>
  );
}
