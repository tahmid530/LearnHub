import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import GlassCard from "../../../components/ui/GlassCard";

export default function TestimonialCard({ testimonial }) {
    return (
        <motion.div
            whileHover={{
                y: -8,
            }}
            transition={{
                duration: 0.3,
            }}
            className="h-full"
        >
            <GlassCard className="group relative h-full overflow-hidden p-8">

                {/* Glow */}

                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-600/10 blur-3xl transition duration-500 group-hover:bg-indigo-600/20" />

                {/* Quote */}

                <div className="absolute right-6 top-6 opacity-10">

                    <Quote
                        size={70}
                        className="text-white"
                    />

                </div>

                {/* User */}

                <div className="flex items-center gap-4">

                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full border-2 border-indigo-500 object-cover"
                    />

                    <div>

                        <h3 className="font-bold text-white">

                            {testimonial.name}

                        </h3>

                        <p className="text-sm text-slate-400">

                            {testimonial.designation}

                        </p>

                        <p className="text-xs text-indigo-300">

                            {testimonial.company}

                        </p>

                    </div>

                </div>

                {/* Rating */}

                <div className="mt-6 flex items-center gap-1">

                    {[...Array(testimonial.rating)].map((_, index) => (

                        <Star
                            key={index}
                            size={18}
                            className="fill-amber-400 text-amber-400"
                        />

                    ))}

                </div>

                {/* Review */}

                <p className="mt-6 leading-8 text-slate-400">

                    "{testimonial.review}"

                </p>

                {/* Course */}

                <div className="mt-8 border-t border-white/10 pt-5">

                    <span className="text-sm text-slate-500">

                        Course Completed

                    </span>

                    <h4 className="mt-1 font-semibold text-indigo-300">

                        {testimonial.course}

                    </h4>

                </div>

            </GlassCard>
        </motion.div>
    );
}