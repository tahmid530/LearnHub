import { motion } from "framer-motion";
import GlassCard from "../../../components/ui/GlassCard";

export default function StepCard({
    step,
    index,
}) {
    const Icon = step.icon;

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.15,
            }}
            className="relative"
        >
            <GlassCard className="group relative h-full overflow-hidden p-8 transition-all duration-300 hover:-translate-y-2">

                {/* Background Glow */}

                <div
                    className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${step.color} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`}
                />

                {/* Step Number */}

                <span className="absolute right-6 top-6 text-5xl font-black text-white/5">

                    {step.step}

                </span>

                {/* Icon */}

                <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}
                >

                    <Icon
                        size={30}
                        className="text-white"
                    />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-white">

                    {step.title}

                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-slate-400">

                    {step.description}

                </p>

                {/* Step Badge */}

                <div className="mt-8 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300">

                    Step {step.step}

                </div>

            </GlassCard>

            {/* Connector Line */}

            {index !== 3 && (
                <div className="absolute left-full top-20 hidden h-[2px] w-12 bg-gradient-to-r from-indigo-500/50 to-transparent xl:block" />
            )}
        </motion.div>
    );
}