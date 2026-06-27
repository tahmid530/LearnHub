import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import featuredCourses from "../../../data/featuredCourses";
import CourseCard from "./CourseCard";
import FilterTabs from "./FilterTabs";

import Container from "../../../components/ui/Container";
import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionTitle from "../../../components/ui/SectionTitle";
import Button from "../../../components/ui/Button";

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
    <SectionWrapper className="overflow-hidden">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />

      <Container className="relative">

        {/* Heading */}

        <SectionTitle
          badge="Featured Courses"
          title="Learn From"
          highlight="Industry Experts"
          description="Explore our most popular professional courses designed to help you master real-world skills and build your career faster."
        />

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

          <Button className="bg-indigo-600 border-0 hover:bg-indigo-500 shadow-none">

            Explore All Courses

          </Button>

        </motion.div>

      </Container>

    </SectionWrapper>
  );
};

export default FeaturedCourses;