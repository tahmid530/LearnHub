import clsx from "clsx";

const GlassCard = ({
    children,
    className = "",
}) => {
    return (
        <div
            className={clsx(
                "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/10",
                className
            )}
        >
            {children}
        </div>
    );
};

export default GlassCard;