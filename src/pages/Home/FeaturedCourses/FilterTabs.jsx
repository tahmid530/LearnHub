import { motion } from "framer-motion";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Programming",
  "Design",
  "Full Stack",
];

const FilterTabs = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-14 flex flex-wrap items-center justify-center gap-4">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <motion.button
            key={category}
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -2 }}
            onClick={() => setActiveCategory(category)}
            className={`relative overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300
              ${
                isActive
                  ? "border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-indigo-500/40 hover:bg-white/10 hover:text-white"
              }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 rounded-full bg-indigo-600"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">{category}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default FilterTabs;