import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import features from "../../../data/features";
import FeatureCard from "./FeatureCard";

const WhyLearnHub = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-24">

      {/* Background Glow */}

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Why LearnHub
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Everything You Need To
            <span className="text-amber-400"> Learn Smarter</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            LearnHub combines expert instructors, practical projects,
            interactive learning and career-focused guidance to help you
            become a confident developer.
          </p>

        </motion.div>

        {/* Feature Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 flex justify-center"
        >

          <button className="group flex items-center gap-3 rounded-2xl bg-indigo-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-[0_0_35px_rgba(99,102,241,.45)]">

            Discover More

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default WhyLearnHub;