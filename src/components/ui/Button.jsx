import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const variants = {
    primary:
        "bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500 shadow-lg shadow-indigo-500/20",

    secondary:
        "bg-white/5 hover:bg-white/10 text-white border border-white/10",

    outline:
        "bg-transparent border border-indigo-500 text-indigo-300 hover:bg-indigo-600 hover:text-white",

    ghost:
        "bg-transparent text-slate-300 hover:bg-white/10 hover:text-white",
};

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
};

const Button = ({
    children,
    variant = "primary",
    size = "md",
    icon = true,
    className = "",
    ...props
}) => {
    return (
        <button
            {...props}
            className={clsx(
                "group inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1",
                variants[variant],
                sizes[size],
                className
            )}
        >
            {children}

            {icon && (
                <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            )}
        </button>
    );
};

export default Button;