import { motion } from "framer-motion";
import Badge from "./Badge";

const SectionTitle = ({
    badge,
    title,
    highlight,
    description,
    align = "center",
}) => {
    const alignment = {
        center: "mx-auto text-center",
        left: "text-left",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-16 max-w-3xl ${alignment[align]}`}
        >
            {badge && <Badge>{badge}</Badge>}

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                {title}{" "}

                {highlight && (
                    <span className="text-amber-400">
                        {highlight}
                    </span>
                )}
            </h2>

            {description && (
                <p className="mt-6 text-lg leading-8 text-slate-400">
                    {description}
                </p>
            )}
        </motion.div>
    );
};

export default SectionTitle;