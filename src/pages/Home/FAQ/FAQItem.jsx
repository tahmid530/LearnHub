import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import GlassCard from "../../../components/ui/GlassCard";

export default function FAQItem({
    faq,
    isOpen,
    onToggle,
}) {
    return (
        <GlassCard
            className="overflow-hidden p-0"
        >
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between p-7 text-left transition-colors duration-300 hover:bg-white/5"
            >
                <h3 className="pr-6 text-lg font-semibold text-white">
                    {faq.question}
                </h3>

                <motion.div
                    animate={{
                        rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                        duration: 0.25,
                    }}
                    className="shrink-0"
                >
                    <ChevronDown
                        size={22}
                        className="text-indigo-400"
                    />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="overflow-hidden"
                    >
                        <div className="border-t border-white/10 px-7 pb-7 pt-5">
                            <p className="leading-8 text-slate-400">
                                {faq.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </GlassCard>
    );
}