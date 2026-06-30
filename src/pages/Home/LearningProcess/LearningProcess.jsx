import { motion } from "framer-motion";

import Container from "../../../components/ui/Container";
import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionTitle from "../../../components/ui/SectionTitle";

import learningSteps from "../../../data/learningSteps";
import StepCard from "./StepCard";

export default function LearningProcess() {
    return (
        <SectionWrapper>

            {/* Background Glow */}

            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-indigo-600/15 blur-[140px]" />

            <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />

            <Container>

                {/* Section Title */}

                <SectionTitle
                    badge="Learning Journey"
                    title={
                        <>
                            Start Learning in
                            <span className="text-amber-400"> Four Simple Steps</span>
                        </>
                    }
                    description="From enrollment to certification, we've designed a simple learning experience that helps you stay focused and achieve your goals."
                />

                {/* Timeline */}

                <div className="relative mt-20">

                    {/* Desktop Line */}

                    <div className="absolute left-0 right-0 top-20 hidden h-[2px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent xl:block" />

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        {learningSteps.map((step, index) => (

                            <StepCard
                                key={step.id}
                                step={step}
                                index={index}
                            />

                        ))}

                    </div>

                </div>

                {/* Bottom Text */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.3,
                    }}
                    className="mx-auto mt-20 max-w-3xl text-center"
                >

                    <h3 className="text-2xl font-bold text-white">

                        Learning Has Never Been This Simple

                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">

                        Whether you're a complete beginner or an experienced developer,
                        LearnHub guides you step by step with structured lessons,
                        practical projects, quizzes, and professional certificates.

                    </p>

                </motion.div>

            </Container>

        </SectionWrapper>
    );
}