import { Link, NavLink } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

import navigation from "../../../data/navigation";
import Button from "../../../components/ui/Button";
import Logo from "../Logo/Logo";

export default function MobileDrawer({
    isOpen,
    onClose,
}) {
    return (
        <AnimatePresence>

            {isOpen && (

                <>

                    {/* Overlay */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                    />

                    {/* Drawer */}

                    <motion.aside
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 28,
                        }}
                        className="fixed left-0 top-0 z-50 flex h-screen w-80 flex-col border-r border-white/10 bg-[#0B1120] lg:hidden"
                    >

                        {/* Header */}

                        <div className="border-b border-white/10 p-6">
                            <Logo size="md" />
                        </div>

                        {/* Navigation */}

                        <nav className="flex-1 space-y-2 p-6">

                            {navigation.map((item) => {

                                if (item.children) {

                                    return (

                                        <details
                                            key={item.name}
                                            className="group"
                                        >

                                            <summary className="cursor-pointer list-none rounded-xl px-5 py-4 text-slate-300 transition hover:bg-white/10 hover:text-white">

                                                {item.name}

                                            </summary>

                                            <div className="mt-2 space-y-2 pl-4">

                                                {item.children.map((child) => (

                                                    <NavLink
                                                        key={child.path}
                                                        to={child.path}
                                                        onClick={onClose}
                                                        className={({ isActive }) =>
                                                            `block rounded-xl px-4 py-3 transition ${isActive
                                                                ? "bg-indigo-600 text-white"
                                                                : "text-slate-400 hover:bg-white/10 hover:text-white"
                                                            }`
                                                        }
                                                    >

                                                        {child.name}

                                                    </NavLink>

                                                ))}

                                            </div>

                                        </details>

                                    );
                                }

                                return (

                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={onClose}
                                        className={({ isActive }) =>
                                            `block rounded-xl px-5 py-4 font-medium transition ${isActive
                                                ? "bg-indigo-600 text-white"
                                                : "text-slate-300 hover:bg-white/10 hover:text-white"
                                            }`
                                        }
                                    >

                                        {item.name}

                                    </NavLink>

                                );
                            })}

                        </nav>

                        {/* Footer */}

                        <div className="space-y-4 border-t border-white/10 p-6">

                            <Link
                                to="/login"
                                onClick={onClose}
                            >

                                <Button
                                    variant="ghost"
                                    icon={false}
                                    className="w-full justify-center"
                                >

                                    Login

                                </Button>

                            </Link>

                            <Link
                                to="/register"
                                onClick={onClose}
                            >

                                <Button
                                    className="w-full justify-center"
                                >

                                    Register

                                </Button>

                            </Link>

                        </div>

                    </motion.aside>

                </>

            )}

        </AnimatePresence>
    );
}