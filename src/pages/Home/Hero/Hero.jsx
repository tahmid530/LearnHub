import { motion } from "framer-motion";
import {
    PlayCircle,
    Star,
    Users,
    BookOpen,
    Clock3,
} from "lucide-react";

import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import Badge from "../../../components/ui/Badge";
import GlassCard from "../../../components/ui/GlassCard";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#0B1120] text-white">

            {/* Background Glow */}

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[120px]" />

                <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px]" />

                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />

            </div>

            <Container className="relative flex min-h-[92vh] items-center py-20">

                <div className="grid w-full items-center gap-16 lg:grid-cols-2">

                    {/* ================= LEFT ================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <Badge className="gap-2">

                            🚀 Online Learning Platform

                        </Badge>

                        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">

                            Learn Skills

                            <br />

                            That Actually

                            <span className="text-amber-400">
                                {" "}
                                Matter.
                            </span>

                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

                            Learn modern technologies through structured courses,
                            interactive lessons and quizzes. Track your progress
                            and build skills that prepare you for real-world careers.

                        </p>

                        {/* Buttons */}

                        <div className="mt-10 flex flex-wrap gap-5">

                            <Button
                                className="border-0 bg-amber-400 text-slate-900 shadow-none hover:bg-amber-300"
                            >
                                Browse Courses
                            </Button>

                            <Button
                                variant="secondary"
                                icon={false}
                            >
                                <PlayCircle size={20} />

                                Watch Demo
                            </Button>

                        </div>

                        {/* Hero Stats */}

                        <div className="mt-12 flex flex-wrap gap-8">

                            <div className="flex items-center gap-3">

                                <Star className="fill-amber-400 text-amber-400" />

                                <div>

                                    <h4 className="font-semibold">

                                        4.9 Rating

                                    </h4>

                                    <p className="text-sm text-slate-400">

                                        Student Reviews

                                    </p>

                                </div>

                            </div>

                            <div className="flex items-center gap-3">

                                <Users className="text-indigo-400" />

                                <div>

                                    <h4 className="font-semibold">

                                        12K+

                                    </h4>

                                    <p className="text-sm text-slate-400">

                                        Active Students

                                    </p>

                                </div>

                            </div>

                            <div className="flex items-center gap-3">

                                <BookOpen className="text-violet-400" />

                                <div>

                                    <h4 className="font-semibold">

                                        120+

                                    </h4>

                                    <p className="text-sm text-slate-400">

                                        Premium Courses

                                    </p>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                    {/* ================= RIGHT ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative flex justify-center"
                    >

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut",
                            }}
                            className="relative w-full max-w-lg"
                        >

                            <GlassCard className="p-6 shadow-2xl">

                                <span className="absolute -top-4 left-6 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
                                    🔥 Best Seller
                                </span>

                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                                    alt="Course"
                                    className="h-64 w-full rounded-2xl object-cover"
                                />

                                <div className="mt-6 flex items-center justify-between">

                                    <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300">
                                        Beginner
                                    </span>

                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Clock3 size={16} />
                                        8 Weeks
                                    </div>

                                </div>

                                <h3 className="mt-5 text-2xl font-bold">
                                    React Frontend Bootcamp
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Build responsive modern websites using React,
                                    Tailwind CSS and reusable components.
                                </p>

                                {/* Progress */}

                                <div className="mt-8">

                                    <div className="mb-2 flex items-center justify-between text-sm">

                                        <span className="text-slate-400">
                                            Course Progress
                                        </span>

                                        <span className="font-semibold text-amber-400">
                                            60%
                                        </span>

                                    </div>

                                    <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "60%" }}
                                            transition={{ duration: 1.5 }}
                                            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                                        />

                                    </div>

                                </div>

                                {/* Bottom */}

                                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                                    {/* Instructor */}

                                    <div className="flex items-center gap-3">

                                        <img
                                            src="https://i.pravatar.cc/100?img=12"
                                            alt="Instructor"
                                            className="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
                                        />

                                        <div>

                                            <p className="text-sm text-slate-400">
                                                Instructor
                                            </p>

                                            <h4 className="font-semibold">
                                                John Anderson
                                            </h4>

                                        </div>

                                    </div>

                                    {/* Rating */}

                                    <div className="text-right">

                                        <div className="flex items-center justify-end gap-1">

                                            <Star
                                                size={16}
                                                className="fill-amber-400 text-amber-400"
                                            />

                                            <span className="font-semibold">
                                                4.9
                                            </span>

                                        </div>

                                        <p className="text-sm text-slate-400">
                                            2.3k Reviews
                                        </p>

                                    </div>

                                </div>

                            </GlassCard>

                        </motion.div>

                        {/* Floating Students Card */}

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-8 -left-6 hidden lg:block"
                        >

                            <GlassCard className="px-5 py-4 shadow-xl">

                                <p className="text-sm text-slate-400">
                                    Students Enrolled
                                </p>

                                <h3 className="mt-1 text-2xl font-bold text-white">
                                    12,458+
                                </h3>

                                <p className="mt-1 text-sm text-emerald-400">
                                    ▲ +18% this month
                                </p>

                            </GlassCard>

                        </motion.div>

                        {/* Floating Rating Card */}

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                delay: 1,
                                ease: "easeInOut",
                            }}
                            className="absolute -right-6 -top-6 hidden lg:block"
                        >

                            <GlassCard className="px-5 py-4 shadow-xl">

                                <div className="flex items-center gap-2">

                                    <Star
                                        size={18}
                                        className="fill-amber-400 text-amber-400"
                                    />

                                    <span className="font-semibold">
                                        4.9 / 5
                                    </span>

                                </div>

                                <p className="mt-1 text-sm text-slate-400">
                                    Average Rating
                                </p>

                            </GlassCard>

                        </motion.div>

                    </motion.div>

                </div>

            </Container>

        </section>
    );
}