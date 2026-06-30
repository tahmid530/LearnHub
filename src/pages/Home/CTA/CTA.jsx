import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import GlassCard from "../../../components/ui/GlassCard";
import SectionWrapper from "../../../components/ui/SectionWrapper";

export default function CTA() {
    return (
        <SectionWrapper className="overflow-hidden">

            {/* Background Glow */}

            <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[180px]" />

            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[180px]" />

            <Container>

                <GlassCard className="relative overflow-hidden px-8 py-16 md:px-14 md:py-20">

                    {/* Decorative Glow */}

                    <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-indigo-500/20 blur-[120px]" />

                    <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[140px]" />

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="relative z-10 mx-auto max-w-4xl text-center"
                    >

                        {/* Badge */}

                        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-300">

                            <Sparkles size={16} />

                            Join 12,000+ Learners

                        </div>

                        {/* Heading */}

                        <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">

                            Ready to Start

                            <span className="block text-amber-400">

                                Your Learning Journey?

                            </span>

                        </h2>

                        {/* Description */}

                        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">

                            Learn modern technologies from experienced instructors,
                            build real-world projects, earn industry-recognized
                            certificates, and advance your career with LearnHub.

                        </p>

                        {/* Buttons */}

                        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

                            <Button>

                                Browse Courses

                            </Button>

                            <Button
                                variant="secondary"
                                icon={false}
                            >

                                Get Started

                            </Button>

                        </div>

                        {/* Stats */}

                        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">

                            <div>

                                <h3 className="text-3xl font-bold text-white">

                                    120+

                                </h3>

                                <p className="mt-2 text-slate-400">

                                    Premium Courses

                                </p>

                            </div>

                            <div>

                                <h3 className="text-3xl font-bold text-white">

                                    12K+

                                </h3>

                                <p className="mt-2 text-slate-400">

                                    Active Students

                                </p>

                            </div>

                            <div>

                                <h3 className="text-3xl font-bold text-white">

                                    96%

                                </h3>

                                <p className="mt-2 text-slate-400">

                                    Success Rate

                                </p>

                            </div>

                        </div>

                    </motion.div>

                </GlassCard>

            </Container>

        </SectionWrapper>
    );
}