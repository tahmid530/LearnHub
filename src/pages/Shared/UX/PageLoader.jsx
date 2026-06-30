import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function PageLoader() {
    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0B1120]">

            <div className="flex flex-col items-center">

                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-xl"
                >

                    <GraduationCap
                        size={40}
                        className="text-white"
                    />

                </motion.div>

                <motion.h2
                    initial={{
                        opacity: 0.5,
                    }}
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.6,
                    }}
                    className="mt-6 text-2xl font-bold text-white"
                >

                    LearnHub

                </motion.h2>

                <motion.p
                    animate={{
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.6,
                        delay: 0.2,
                    }}
                    className="mt-2 text-slate-400"
                >

                    Loading...

                </motion.p>

            </div>

        </div>
    );
}