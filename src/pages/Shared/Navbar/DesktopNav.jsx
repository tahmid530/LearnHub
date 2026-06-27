import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import navigation from "../../../data/navigation";

export default function DesktopNav() {
    return (
        <nav className="hidden lg:block">

            <ul className="flex items-center gap-2">

                {navigation.map((item) => {

                    // Dropdown Menu
                    if (item.children) {
                        return (
                            <li
                                key={item.name}
                                className="group relative"
                            >

                                <button
                                    className="flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                                >

                                    {item.name}

                                    <ChevronDown
                                        size={16}
                                        className="transition duration-300 group-hover:rotate-180"
                                    />

                                </button>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    whileHover={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    className="invisible absolute left-0 top-full mt-3 w-60 rounded-2xl border border-white/10 bg-[#111827]/95 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:opacity-100"
                                >

                                    {item.children.map((child) => (

                                        <NavLink
                                            key={child.path}
                                            to={child.path}
                                            className={({ isActive }) =>
                                                `block rounded-xl px-4 py-3 transition ${isActive
                                                    ? "bg-indigo-600 text-white"
                                                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                                                }`
                                            }
                                        >

                                            {child.name}

                                        </NavLink>

                                    ))}

                                </motion.div>

                            </li>
                        );
                    }

                    // Normal Links
                    return (
                        <li key={item.path}>

                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `relative flex items-center rounded-xl px-5 py-3 font-medium transition ${isActive
                                        ? "text-white"
                                        : "text-slate-300 hover:text-white"
                                    }`
                                }
                            >

                                {({ isActive }) => (
                                    <>

                                        {isActive && (

                                            <motion.span
                                                layoutId="navbar-pill"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 350,
                                                    damping: 30,
                                                }}
                                                className="absolute inset-0 rounded-xl bg-white/10"
                                            />

                                        )}

                                        <span className="relative z-10">

                                            {item.name}

                                        </span>

                                    </>
                                )}

                            </NavLink>

                        </li>
                    );
                })}

            </ul>

        </nav>
    );
}