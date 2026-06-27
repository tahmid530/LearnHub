import { Link } from "react-router";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Logo = ({
  size = "md",
  showTagline = true,
}) => {
  const sizes = {
    sm: {
      wrapper: "h-10 w-10",
      icon: 20,
      title: "text-xl",
      subtitle: "text-[11px]",
    },
    md: {
      wrapper: "h-11 w-11",
      icon: 24,
      title: "text-2xl",
      subtitle: "text-xs",
    },
    lg: {
      wrapper: "h-14 w-14",
      icon: 30,
      title: "text-3xl",
      subtitle: "text-sm",
    },
  };

  const current = sizes[size];

  return (
    <Link
      to="/"
      className="flex items-center gap-3"
    >
      <motion.div
        whileHover={{
          rotate: -8,
          scale: 1.05,
        }}
        transition={{
          duration: 0.25,
        }}
        className={`flex ${current.wrapper} items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-600/20`}
      >
        <GraduationCap
          size={current.icon}
          className="text-white"
        />
      </motion.div>

      <div>

        <h1
          className={`${current.title} font-bold tracking-tight text-white`}
        >
          LearnHub
        </h1>

        {showTagline && (
          <p
            className={`-mt-1 ${current.subtitle} text-slate-400`}
          >
            Learn Without Limits
          </p>
        )}

      </div>

    </Link>
  );
};

export default Logo;