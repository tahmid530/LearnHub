import { motion } from "framer-motion";
import {
  Star,
  Users,
  BookOpen,
  Clock3,
  ArrowRight,
} from "lucide-react";

const badgeColors = {
  Bestseller: "bg-amber-400 text-slate-900",
  Popular: "bg-blue-500 text-white",
  New: "bg-emerald-500 text-white",
  Trending: "bg-pink-500 text-white",
  "Top Rated": "bg-violet-500 text-white",
  "Editor's Choice": "bg-red-500 text-white",
};

const levelColors = {
  Beginner: "bg-emerald-500/20 text-emerald-300",
  Intermediate: "bg-amber-500/20 text-amber-300",
  Advanced: "bg-rose-500/20 text-rose-300",
};

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.18)]"
    >
      {/* Thumbnail */}

      <div className="relative overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

        {/* Badge */}

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
            badgeColors[course.badge]
          }`}
        >
          {course.badge}
        </span>

        {/* Level */}

        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${
            levelColors[course.level]
          }`}
        >
          {course.level}
        </span>
      </div>

      {/* Content */}

      <div className="p-6">
        {/* Category */}

        <p className="text-sm font-medium uppercase tracking-wider text-indigo-400">
          {course.category}
        </p>

        {/* Title */}

        <h3 className="mt-3 line-clamp-2 text-2xl font-bold text-white">
          {course.title}
        </h3>

        {/* Description */}

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-400">
          {course.description}
        </p>

        {/* Rating */}

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star
              size={18}
              className="fill-amber-400 text-amber-400"
            />

            <span className="font-semibold text-white">
              {course.rating}
            </span>

            <span className="text-sm text-slate-400">
              ({course.reviews})
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <Users size={18} />
            <span>{course.students}</span>
          </div>
        </div>

        {/* Info */}

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-400">

          <div className="flex items-center gap-2">
            <BookOpen size={18} />
            {course.lessons} Lessons
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={18} />
            {course.duration}
          </div>

        </div>

        {/* Instructor */}

        <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">

          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
          />

          <div>
            <h4 className="font-semibold text-white">
              {course.instructor.name}
            </h4>

            <p className="text-sm text-slate-400">
              {course.instructor.designation}
            </p>
          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between">

          <div>

            <div className="flex items-center gap-2">

              <span className="text-3xl font-bold text-white">
                ${course.price}
              </span>

              <span className="text-sm text-slate-500 line-through">
                ${course.oldPrice}
              </span>

            </div>

          </div>

          <button className="group/button flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-500">

            Enroll

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/button:translate-x-1"
            />

          </button>

        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;