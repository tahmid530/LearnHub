import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";

import Logo from "../Logo/Logo";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";

const SCROLL_THRESHOLD = 25;

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "border-b border-white/10 bg-[#0B1120]/80 shadow-lg backdrop-blur-xl"
                    : "bg-transparent"
                }`}
        >
            <Container>
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}

                    <Logo />

                    {/* Desktop Navigation */}

                    <DesktopNav />

                    {/* Desktop Actions */}

                    <div className="hidden items-center gap-4 lg:flex">

                        <Link to="/login">

                            <Button
                                variant="ghost"
                                icon={false}
                            >
                                Login
                            </Button>

                        </Link>

                        <Link to="/register">

                            <Button>

                                Register

                            </Button>

                        </Link>

                    </div>

                    {/* Mobile Menu Button */}

                    <motion.button
                        whileTap={{ scale: 0.92 }}
                        aria-label="Toggle Menu"
                        onClick={toggleMobileMenu}
                        className="rounded-xl border border-white/10 bg-white/5 p-3 text-white backdrop-blur transition hover:bg-white/10 lg:hidden"
                    >

                        {isMobileMenuOpen ? (

                            <X size={22} />

                        ) : (

                            <Menu size={22} />

                        )}

                    </motion.button>

                </div>
            </Container>

            {/* Mobile Drawer */}

            <MobileDrawer
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
            />

        </header>
    );
}