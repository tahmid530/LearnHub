import * as CountUpModule from "react-countup";

const CountUp = CountUpModule.default.default;
import { motion } from "framer-motion";

import {
    BookOpen,
    Users,
    Trophy,
    GraduationCap,
} from "lucide-react";

import Container from "../../../components/ui/Container";
import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionTitle from "../../../components/ui/SectionTitle";
import GlassCard from "../../../components/ui/GlassCard";

const stats = [
    {
        id: 1,
        icon: BookOpen,
        number: 120,
        suffix: "+",
        title: "Premium Courses",
        description:
            "Industry-focused courses designed to build practical skills.",
    },
    {
        id: 2,
        icon: Users,
        number: 12000,
        suffix: "+",
        title: "Active Students",
        description:
            "Learners growing their careers every single day.",
    },
    {
        id: 3,
        icon: GraduationCap,
        number: 8500,
        suffix: "+",
        title: "Certificates Issued",
        description:
            "Students successfully completed professional courses.",
    },
    {
        id: 4,
        icon: Trophy,
        number: 96,
        suffix: "%",
        title: "Success Rate",
        description:
            "Students who completed their learning journey.",
    },
];

export default function Stats() {
    return (
        <SectionWrapper>

            {/* Background Glow */}

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />

            <Container className="relative">

                <SectionTitle
                    badge="Our Achievements"
                    title="Numbers That Speak"
                    highlight="For Themselves"
                    description="Thousands of learners trust LearnHub to improve their programming skills and prepare for real-world careers."
                />

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
                                    duration: 0.5,
                                    delay: index * 0.15,
                                }}
                            >

                                <GlassCard className="group relative overflow-hidden p-8 hover:-translate-y-2">

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
                                </GlassCard>

                            </motion.div>

                        );

                    })}

                </div>

            </Container>

        </SectionWrapper>
    );
}