import * as CountUpModule from "react-countup";

const CountUp = CountUpModule.default.default;
import { motion } from "framer-motion";
import {
    BookOpen,
    Users,
    Trophy,
    GraduationCap,
} from "lucide-react";

const stats = [
    {
        id: 1,
        icon: BookOpen,
        number: 120,
        suffix: "+",
        title: "Premium Courses",
        description: "Industry-focused courses designed to build practical skills.",
    },
    {
        id: 2,
        icon: Users,
        number: 12000,
        suffix: "+",
        title: "Active Students",
        description: "Learners growing their careers every single day.",
    },
    {
        id: 3,
        icon: GraduationCap,
        number: 8500,
        suffix: "+",
        title: "Certificates Issued",
        description: "Students successfully completed professional courses.",
    },
    {
        id: 4,
        icon: Trophy,
        number: 96,
        suffix: "%",
        title: "Success Rate",
        description: "Students who completed their learning journey.",
    },
];

export default function Stats() {
    return (
        <section className="relative bg-[#0F172A] py-24">

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                        Our Achievements
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                        Numbers That Speak
                        <span className="text-amber-400"> For Themselves</span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Thousands of learners trust LearnHub to improve their
                        programming skills and prepare for real-world careers.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: .5,
                                    delay: index * .15,
                                }}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/10"
                            >

                                {/* Glow */}

                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                                {/* Icon */}

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">

                                    <Icon size={32} />

                                </div>

                                {/* Number */}

                                <h3 className="mt-8 text-4xl font-bold text-white">

                                    <CountUp
                                        end={item.number}
                                        duration={2.5}
                                        separator=","
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />

                                    {item.suffix}

                                </h3>

                                {/* Title */}

                                <h4 className="mt-3 text-xl font-semibold text-white">
                                    {item.title}
                                </h4>

                                {/* Description */}

                                <p className="mt-3 leading-7 text-slate-400">
                                    {item.description}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}