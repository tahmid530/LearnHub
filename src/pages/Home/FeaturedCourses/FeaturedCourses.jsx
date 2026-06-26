import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import featuredCourses from "../../../data/featuredCourses";
import CourseCard from "./CourseCard";
import FilterTabs from "./FilterTabs";

const FeaturedCourses = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    if (activeCategory === "All") {
      return featuredCourses;
    }

    return featuredCourses.filter(
      (course) => course.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden bg-[#0B1120] py-24">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />

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

            Featured Courses

          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">

            Learn From

            <span className="text-amber-400">
              {" "}
              Industry Experts
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">

            Explore our most popular professional courses designed to help
            you master real-world skills and build your career faster.

          </p>

        </motion.div>

        {/* Filter */}

        <FilterTabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Course Grid */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >

            {filteredCourses.map((course) => (

              <CourseCard
                key={course.id}
                course={course}
              />

            ))}

          </motion.div>

        </AnimatePresence>

        {/* Bottom Button */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 flex justify-center"
        >

          <button className="group flex items-center gap-3 rounded-2xl border border-indigo-500/30 bg-indigo-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-500">

            Explore All Courses

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

export default FeaturedCourses;