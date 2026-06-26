import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/40 hover:bg-white/10"
    >
      {/* Gradient Glow */}

      <div
        className={`absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${feature.accent} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-30`}
      />

      {/* Icon */}

      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} shadow-lg`}
      >
        <Icon
          size={30}
          className="text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
        />
      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold text-white">
        {feature.title}
      </h3>

      {/* Description */}

      <p className="mt-4 leading-7 text-slate-400">
        {feature.description}
      </p>

      {/* Bottom */}

      <div className="mt-8 flex items-center justify-between">

        <span className="text-sm font-medium text-indigo-300">
          Learn More
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:bg-indigo-600 group-hover:border-indigo-600">
          <ArrowUpRight
            size={18}
            className="text-white transition-transform duration-300 group-hover:rotate-45"
          />
        </div>

      </div>

      {/* Animated Bottom Border */}

      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.35 }}
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.accent}`}
      />
    </motion.div>
  );
};

export default FeatureCard;