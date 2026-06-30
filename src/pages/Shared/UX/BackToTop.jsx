import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>

            {visible && (

                <motion.button
                    initial={{
                        opacity: 0,
                        scale: 0.7,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.7,
                        y: 30,
                    }}
                    transition={{
                        duration: 0.25,
                    }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[999] flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500"
                >
                    <ArrowUp size={22} />
                </motion.button>

            )}

        </AnimatePresence>
    );
}